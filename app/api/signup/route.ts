import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { sql } from '@/app/lib/db';

export async function POST(request: NextRequest) {
    const { email, password } = await request.json(); //parses the signup form
    
    if (!email | !password) {
        return NextResponse.json(
            { error: 'Email and password are required.' },
            { status: 400 }
        );
    }

    const passwordHash = await bcrypt.hash(password, 10); //10 is salt rounds, higher is slower but more resistent to brute force

    //tagged template client from db
    try {
        await sql`
        INSERT INTO users (email, password_hash)
        VALUES (${email}, ${passwordHash})
        `;
        //response never returns actual password or hash, only true/false
        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error: any) {
        //unique_violation error code from Postgres
        if (error.code === '23505') {
            return NextResponse.json(
                { error: 'An account with that email already exists' },
                { status: 409 }
            );
        }
        console.error('Signup error:', error);
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    } 
}