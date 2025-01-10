import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-[1920px] mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a 
                href="mailto:rainbowstarmew@gmail.com" 
                aria-label="Email"
                className="hover:text-green-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a 
                href="https://github.com/Rainbowstarmew" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="hover:text-green-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a 
                href="https://www.linkedin.com/in/ellen-mcnamara-52376027b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="hover:text-green-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            © 2024 John Doe
          </p>
        </div>
      </div>
    </footer>
  )
}