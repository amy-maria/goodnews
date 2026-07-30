import { NextResponse } from 'next/server';
import localData from '@/app/lib/data/data.json';

export async function GET() {
    if (process.env.USE_LOCAL_DATA === 'true') {
        return NextResponse.json(localData);
    }

    const apiKey = process.env.apiKey;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Failed to fetch live articles:', error);
        return NextResponse.json(
            { error: 'Failed to fetch articles.' },
            { status: 500 }
        );
    }
}