import CryptoDashboard from "@/components/CryptoDasboard";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      
      {/* Header Section */}
      <header className="relative z-10 text-center py-12 px-4">
        <h1 className="text-5xl font-bold mb-3 text-white">CoinSight</h1>
        <p className="text-xl text-gray-300 mb-8">Precision Dashboards for Smarter Crypto Decisions</p>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 pb-24">
        <CryptoDashboard />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-md border-t border-white/10 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4 text-gray-300">&copy; {new Date().getFullYear()} Nikhil Singh. All rights reserved.</p>
          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:nikhil@example.com" 
              aria-label="Email" 
              target="_blank" 
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a 
              href="https://github.com/nikhil" 
              aria-label="GitHub" 
              target="_blank" 
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/nikhil" 
              aria-label="LinkedIn" 
              target="_blank" 
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
