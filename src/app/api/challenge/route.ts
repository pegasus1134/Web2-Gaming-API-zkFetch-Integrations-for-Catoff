// src/app/api/challenge/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const challenge = {
            id: crypto.randomUUID(),
            ...body,
            status: 'PENDING',
            createdAt: new Date().toISOString()
        }

        return NextResponse.json({
            success: true,
            challenge,
            shareLink: `${process.env.NEXT_PUBLIC_URL}/c/${challenge.id}`
        })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create challenge' }, { status: 500 })
    }
}