// src/components/ChallengeForm.tsx
'use client'

import { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'

export function ChallengeForm() {
    const [formData, setFormData] = useState({
        username: '',
        tag: '',
        wagerAmount: '',
        token: 'SOL'
    })
    const { connected } = useWallet()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!connected) {
            alert('Please connect wallet')
            return
        }

        setLoading(true)
        try {
            const res = await fetch('/api/challenge', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const data = await res.json()

            if (!res.ok) throw new Error(data.error)

            alert(`Challenge created! Share: ${data.shareLink}`)
        } catch (error) {
            alert('Failed to create challenge')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">Create Challenge</h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-200">Username</label>
                    <input
                        type="text"
                        value={formData.username}
                        onChange={e => setFormData(p => ({ ...p, username: e.target.value }))}
                        className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-200">Tag</label>
                    <input
                        type="text"
                        value={formData.tag}
                        onChange={e => setFormData(p => ({ ...p, tag: e.target.value }))}
                        className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-200">Amount</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={formData.wagerAmount}
                        onChange={e => setFormData(p => ({ ...p, wagerAmount: e.target.value }))}
                        className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading || !connected}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                >
                    {loading ? 'Creating...' : 'Create Challenge'}
                </button>
            </div>
        </form>
    )
}