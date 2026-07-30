import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { sql } from "@/app/lib/db";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        return NextResponse.json({
            error: 'Not logged in.'
        }, { status: 401 });
    }

    const result = await sql`
    SELECT phrase FROM excluded_words WHERE user_id = ${session.user.id}`;
    return NextResponse.json(result.map((row) => row.phrase));
}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        return NextResponse.json({ error: 'Not logged in.' }, { status: 401 });
    }
    const { phrase } = await request.json();

    if (!phrase || phrase.trim() === '') {
        return NextResponse.json({ error: 'Phrase is required.' }, { status: 400 });
    }

    try {
        await sql`
        INSERT INTO excluded_words (user_id, phrase) VALUES (${session.user.id}, ${phrase.trim()})`;
    } catch (error: any) {
        if (error.code === '23505') {
            return NextResponse.json({ error: 'duplicate word' }, { status: 409 });
        }
        console.error('Add excluded word error:', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
    const result = await sql`
    SELECT phrase FROM excluded_words WHERE user_id = ${session.user.id}`;
    return NextResponse.json(result.map((row) => row.phrase));
}

export async function DELETE(request: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        return NextResponse.json({ error: "Not logged in." }, { status: 401 });
    }
    const { phrase } = await request.json();

    await sql`DELETE FROM excluded_words WHERE user_id = ${session.user.id} AND phrase = ${phrase}`;

    const result = await sql`
    SELECT phrase FROM excluded_words WHERE user_id = ${session.user.id}`;
    return NextResponse.json(result.map((row) => row.phrase));
}