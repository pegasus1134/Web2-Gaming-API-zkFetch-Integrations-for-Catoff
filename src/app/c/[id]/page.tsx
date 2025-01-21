// src/app/c/[id]/page.tsx
import { ChallengeDetails } from '@/components/ChallengeDetails'
import { Header } from '@/components/Header'

export default function ChallengePage({ params }: { params: { id: string } }) {
    return (
        <main className="min-h-screen bg-gray-900">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <ChallengeDetails id={params.id} />
            </div>
        </main>
    )
}
