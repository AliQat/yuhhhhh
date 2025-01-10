'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f0f7f0;
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #84cc84;
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #68b968;
  }
`

interface Technology {
  name: string;
  icon: string;
}

interface Image {
  id: string
  src: string
  title: string
  technologies: Technology[]
  aspectRatio?: number // Make aspectRatio optional since we'll calculate it
}

const images: Image[] = [
  {
    id: '1',
    src: '/images/PersonalEMc_07,23.png',
    title: 'Personal Artwork - July 2023',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '2',
    src: '/images/PersonalEMc,12,23.gif',
    title: 'Personal Animation',
    technologies: [
      {name: 'Photoshop', icon: 'icons/Adobe_Photoshop_CC_icon.svg.png'},
      {name: 'Harmony', icon: 'icons/toonboomharmony.png'}
    ]
  },
  {
    id: '3',
    src: '/images/periwinkledragoon_06,24.png',
    title: 'Periwinkle Dragoon',
    technologies:  [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '4',
    src: '/images/image_06_24.png',
    title: 'June 2024 Artwork',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '5',
    src: '/images/Hauntedburninglibrary_07,24.png',
    title: 'Haunted Burning Library',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '6',
    src: '/images/ethelyn1_07,24.png',
    title: 'Ethelyn Study 1',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '7',
    src: '/images/ethelyn2_07,24.png',
    title: 'Ethelyn Study 2',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '8',
    src: '/images/whattocallu_07,24.png',
    title: 'What to Call You',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '9',
    src: '/images/ethelynportraitangy1_08,24.png',
    title: 'Ethelyn Portrait Study',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '10',
    src: '/images/IMG_0125EMc,11,23.PNG',
    title: 'Character Study 1',
    technologies: [
      { name: 'Photoshop', icon: 'icons/Adobe_Photoshop_CC_icon.svg.png' }
    ]
  },
  {
    id: '11',
    src: '/images/IMG_0126EMc_11,23.PNG',
    title: 'Character Study 2',
    technologies: [
      { name: 'Photoshop', icon: 'icons/Adobe_Photoshop_CC_icon.svg.png' }
    ]
  },
  {
    id: '12',
    src: '/images/IMG_0127EMc_1123.PNG',
    title: 'Character Study 3',
    technologies: [
      { name: 'Photoshop', icon: 'icons/Adobe_Photoshop_CC_icon.svg.png' }
    ]
  },
  {
    id: '13',
    src: '/images/IMG_0129EMc_11,23.PNG',
    title: 'Character Study 4',
    technologies: [
      { name: 'Photoshop', icon: 'icons/Adobe_Photoshop_CC_icon.svg.png' }
    ]
  },
  {
    id: '14',
    src: '/images/IMG_0142EMc_11,23.PNG',
    title: 'Character Study 5',
    technologies: [
      { name: 'Photoshop', icon: 'icons/Adobe_Photoshop_CC_icon.svg.png' }
    ]
  },
  {
    id: '15',
    src: '/images/lunch_trade_10,24.png',
    title: 'Lunch Trade',
    technologies: [
      { name: 'Photoshop', icon: 'icons/Adobe_Photoshop_CC_icon.svg.png' }
    ]
  },
  {
    id: '16',
    src: '/images/Necromantic_10,24.png',
    title: 'Necromantic',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '17',
    src: '/images/graveyard_10,24.png',
    title: 'Graveyard',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '18',
    src: '/images/brothers1_11,24.png',
    title: 'Brothers Study 1',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '19',
    src: '/images/brothers2_11,24.png',
    title: 'Brothers Study 2',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '20',
    src: '/images/brothers3_11,24.png',
    title: 'Brothers Study 3',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
    
  },
  {
    id: '21',
    src: '/images/farmwork1_11,24.png',
    title: 'Farm Work 1',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
    
  },
  {
    id: '22',
    src: '/images/farmwork2_11,24.png',
    title: 'Farm Work 2',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
  },
  {
    id: '23',
    src: '/images/farmwork3_11,24.png',
    title: 'Farm Work 3',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
    
  },
  {
    id: '24',
    src: '/images/farmwork4_11,24.png',
    title: 'Farm Work 4',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
    
  },
  {
    id: '25',
    src: '/images/effyandemmy_12,24.png',
    title: 'Effy and Emmy',
    technologies: [
      { name: 'FireAlpaca', icon: 'icons/firealpaca.png' }
    ]
    
  }
]

function ImageCard({ image, onClick }: { image: Image; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for the mouse movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    damping: 50,
    stiffness: 400,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    damping: 50,
    stiffness: 400,
  })
  // Increased scale value
  const scale = useSpring(isHovered ? 1.3 : 1, {
    damping: 20,
    stiffness: 300,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const normalizedX = (e.clientX - centerX) / rect.width
    const normalizedY = (e.clientY - centerY) / rect.height

    mouseX.set(normalizedX)
    mouseY.set(normalizedY)
  }

  return (
    <motion.div
      ref={cardRef}
      className="break-inside-avoid mb-4 relative z-0 hover:z-10"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="relative cursor-pointer group overflow-visible"
        onClick={onClick}
        style={{
          scale,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.img
          src={image.src}
          alt={image.title}
          className="w-full rounded-lg"
          style={{
            aspectRatio: image.aspectRatio,
            objectFit: 'cover',
          }}
        />
        <motion.div 
          className="absolute top-2 right-2 flex gap-1"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(20px)",
          }}
        >
          {image.technologies.map((tech, index) => (
            <img
              key={index}
              src={tech.icon}
              alt={tech.name}
              title={tech.name}
              className="w-8 h-8 object-contain"
            />
          ))}
        </motion.div>
        <motion.div 
          className="absolute inset-0 bg-black rounded-lg transition-opacity"
          style={{
            opacity: useTransform(scale, [1, 1.3], [0, 0.1]),
          }}
        />
      </motion.div>
    </motion.div>
  )
}


export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)

  return (
    <section className="py-20 px-4 overflow-visible">
      <style>{scrollbarStyles}</style>
      <div className="max-w-6xl mx-auto overflow-visible">
        <h2 className="text-3xl font-bold text-green-800 mb-10">Gallery</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 overflow-visible">
          {images.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        {selectedImage && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar">
            <DialogHeader>
              <DialogTitle>{selectedImage.title}</DialogTitle>
            </DialogHeader>
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <a
                href={selectedImage.src}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg"
              >
                Open full resolution
              </a>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              {selectedImage.technologies.map((tech, index) => (
                <img
                  key={index}
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                  className="w-8 h-8 object-contain"
                />
              ))}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}

