import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/toaster'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from '@/components/home/HomePage'
import { ProfileLayout } from '@/components/profile/ProfileLayout'
import { DonorForm } from '@/components/forms/DonorForm'
import { CampsPage } from '@/components/camps/CampsPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfileLayout />} />
            <Route path="/donate" element={<DonorForm onClose={() => { }} />} />
            <Route path="/camps" element={<CampsPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  )
}

export default App