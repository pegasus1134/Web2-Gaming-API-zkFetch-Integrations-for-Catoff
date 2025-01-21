// src/components/Header.tsx
'use client'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Link from 'next/link'

export function Header() {
    return (
        <header className="bg-gray-800 border-b border-gray-700">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-white">
                        COD Challenges
                    </Link>
                    <WalletMultiButton />
                </div>
            </div>
        </header>
    )
}
