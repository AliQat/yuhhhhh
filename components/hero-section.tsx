import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
            Ellen McNamara
          </h1>
          <h2 className="text-2xl md:text-3xl text-green-600 mb-4">
            Animator and Artist | Based in Boston, MA
          </h2>
          <div className="flex items-center gap-2 text-green-600 mb-6">
            <MapPin className="w-5 h-5" />
            <span>Massachusetts College of Art and Design - Animation BFA</span>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:rainbowstarmew@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/Rainbowstarmew" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/ellen-mcnamara-52376027b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

