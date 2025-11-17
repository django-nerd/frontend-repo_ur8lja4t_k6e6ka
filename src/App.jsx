import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyMining from './components/WhyMining'
import Plans from './components/Plans'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyMining />
        <Plans />
        <Contact />
        <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} ApexHash Mining. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
