// src/app/api/challenge/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    return NextResponse.json({
        id: params.id,
        username: 'TestUser',
        tag: '1234',
        wagerAmount: 1,
        token: 'SOL',
        status: 'PENDING'
    })
}