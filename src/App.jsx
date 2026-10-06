import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </>
  )
}