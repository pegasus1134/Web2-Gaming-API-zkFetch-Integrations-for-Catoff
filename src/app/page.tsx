// src/app/page.tsx
import { ChallengeForm } from '@/components/ChallengeForm'
import { Header } from '@/components/Header'

export default function Home() {
  return (
      <main className="min-h-screen bg-gray-900">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <ChallengeForm />
        </div>
      </main>
  )
}
