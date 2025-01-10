'use client'

import { Canvas } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { Group } from 'three'

const technologies = [
  { 
    name: 'Unity',
    image: '/icons/unity.png',
    bgColor: 'bg-black',
    textColor: 'text-white'
  },
  { 
    name: 'After Effects',
    image: 'icons/Adobe_After_Effects_CC_icon.svg.png',
    bgColor: 'bg-[#00005b]',
    textColor: 'text-white'
  },
  { 
    name: 'Harmony',
    image: 'icons/toonboomharmony.png',
    bgColor: 'bg-[#e6f7f1]',
    textColor: 'text-black'
  },
  { 
    name: 'Photoshop',
    image: 'icons/Adobe_Photoshop_CC_icon.svg.png',
    bgColor: 'bg-[#001e36]',
    textColor: 'text-white'
  },
  { 
    name: 'Figma',
    image: '/icons/Figma.png',
    bgColor: 'bg-black',
    textColor: 'text-white'
  },
  { 
    name: 'FireAlpaca',
    image: 'icons/firealpaca.png',
    bgColor: 'bg-black',
    textColor: 'text-white'
  },
  { 
    name: 'Premiere Pro',
    image: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png',
    bgColor: 'bg-[#00005b]',
    textColor: 'text-white'
  }
]

export default function TechCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Calculate visible indices
  const visibleIndices = [-2, -1, 0, 1, 2].map(offset => {
    let index = currentIndex + offset
    // Wrap around
    while (index < 0) index += technologies.length
    while (index >= technologies.length) index -= technologies.length
    return index
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % technologies.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[400px] w-full bg-gradient-to-b from-green-50 to-transparent relative overflow-hidden">
      <h2 className="text-3xl text-green-600 mb-4 text-center py-5">
        Technologies I Use
      </h2>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-5xl">
          {visibleIndices.map((index, i) => {
            const offset = i - 2 // -2, -1, 0, 1, 2
            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2"
                initial={false}
                animate={{
                  x: `calc(${offset * 200}px - 50%)`,
                  y: '-50%',
                  scale: 1 - Math.abs(offset) * 0.2,
                  opacity: 1 - Math.abs(offset) * 0.3,
                  zIndex: 2 - Math.abs(offset)
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut'
                }}
              >
                <div 
                  className={`flex flex-col items-center ${technologies[index].bgColor} p-6 rounded-xl shadow-xl backdrop-blur-sm`}
                  style={{
                    transform: `perspective(1000px) rotateY(${offset * -5}deg)`
                  }}
                >
                  <div className="w-32 h-32 mb-2 relative rounded-lg">
                    <img
                      src={technologies[index].image}
                      alt={technologies[index].name}
                      className="w-full h-full object-contain transform-gpu"
                      style={{
                        imageRendering: 'crisp-edges',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    />
                  </div>
                  <span className={`text-sm font-medium ${technologies[index].textColor}`}>
                    {technologies[index].name}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
        {technologies.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-green-600' : 'bg-green-200'
            }`}
            animate={{
              scale: index === currentIndex ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  )
}