// src/components/ChallengeDetails.tsx
'use client'

import { useEffect, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'

export function ChallengeDetails({ id }: { id: string }) {
    const [challenge, setChallenge] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const { connected } = useWallet()

    useEffect(() => {
        fetch(`/api/challenge/${id}`)
            .then(res => res.json())
            .then(setChallenge)
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <div className="text-white">Loading...</div>
    if (!challenge) return <div className="text-red-500">Not found</div>

    return (
        <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">Challenge Details</h2>

            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-medium text-white">Creator</h3>
                    <p className="text-gray-300">{challenge.username}#{challenge.tag}</p>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-white">Wager</h3>
                    <p className="text-gray-300">{challenge.wagerAmount} {challenge.token}</p>
                </div>

                <button
                    disabled={!connected}
                    onClick={() => alert('Accepting challenge...')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                >
                    {connected ? 'Accept Challenge' : 'Connect Wallet to Accept'}
                </button>
            </div>
        </div>
    )
}