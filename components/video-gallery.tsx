'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

/*
    {name: 'Unity', icon: 'icons/unity.png'},
    {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'},
    {name: 'Photoshop', icon: 'icons/Adobe_Photoshop_CC_icon.svg.png'},
    {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
    {name: 'Harmony', icon: 'icons/toonboomharmony.png'},
    {name: 'Figma', icon: 'icons/Figma.png'},
    {name: 'FireAlpaca', icon: 'icons/firealpaca.png'},
*/

interface Technology {
  name: string;
  icon: string;
}

interface Video {
  id: string;
  title: string;
  year: string;
  technologies: Technology[];
  thumbnail: string;
  url: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Take a Flower',
    year: '2022',
    technologies: [{name: 'Harmony', icon: 'icons/toonboomharmony.png'},
      {name: 'Photoshop', icon: 'icons/Adobe_Photoshop_CC_icon.svg.png'},
      {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'}
    ],
    thumbnail: '',
    url: '/videos/Take a flower finalEMc,12,22.mp4'
  },
  {
    id: '2',
    title: 'Sound Landscape',
    year: '2023',
    technologies: [{name: 'Harmony', icon: 'icons/toonboomharmony.png'},
      {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
      {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'}
    ],
    thumbnail: '',
    url: '/videos/soundlandscapeEMc_11,23.mp4'
  },
  {
    id: '3',
    title: 'Gem Heist',
    year: '2023',
    technologies: [{name: 'Harmony', icon: 'icons/toonboomharmony.png'},
      {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
      {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'}
    ],
    thumbnail: '',
    url: '/videos/GemHiest EMc_12,23.mp4'
  },
  {
    id: '4',
    title: 'Folley Video - Falling Over',
    year: '2023',
    technologies: [{name: 'Harmony', icon: 'icons/toonboomharmony.png'},
      {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
      {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'}
    ],
    thumbnail: '',
    url: '/videos/folley video falling overEMc,12,23.mp4'
  },
  {
    id: '5',
    title: 'Character Stretch Animation',
    year: '2024',
    technologies: [{name: 'Harmony', icon: 'icons/toonboomharmony.png'},
      {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
      {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'}
    ],
    thumbnail: '',
    url: '/videos/stretchEMc_02,24.mp4'
  },
  {
    id: '6',
    title: 'Character Walk Cycle',
    year: '2024',
    technologies: [{name: 'Harmony', icon: 'icons/toonboomharmony.png'},
      {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
      {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'}
    ],
    thumbnail: '',
    url: '/videos/CHwalk_EMC,03,24.mp4'
  },
  {
    id: '7',
    title: 'Character Animation Study 06',
    year: '2024',
    technologies: [{name: 'Harmony', icon: 'icons/toonboomharmony.png'},
      {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
      {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'}
    ],
    thumbnail: '',
    url: '/videos/CHHW06EMc_03,24.mp4'
  },
  {
    id: '8',
    title: 'Animation Study 01',
    year: '2024',
    technologies: [{name: 'Harmony', icon: 'icons/toonboomharmony.png'},
      {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
      {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'}
    ],
    thumbnail: '',
    url: '/videos/ACHHW01EMc_09,24.mp4'
  },
  {
    id: '9',
    title: 'Animation Study 02',
    year: '2024',
    technologies: [{name: 'Harmony', icon: 'icons/toonboomharmony.png'},
      {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
      {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'}
    ],
    thumbnail: '',
    url: '/videos/ACHHW02EMc_10,24.mp4'
  },
  {
    id: '10',
    title: 'Animation Study 03',
    year: '2024',
    technologies: [{name: 'Harmony', icon: 'icons/toonboomharmony.png'},
      {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
      {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'}
    ],
    thumbnail: '',
    url: '/videos/ACHHW03EMc_10,24.mp4'
  },
  {
    id: '11',
    title: 'Animation Study 05',
    year: '2024',
    technologies: [{name: 'Harmony', icon: 'icons/toonboomharmony.png'},
      {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
      {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'}
    ],
    thumbnail: '',
    url: '/videos/ACHHW05EMc_11,24.mp4'
  },
  {
    id: '12',
    title: 'Animation Study 06',
    year: '2024',
    technologies: [{name: 'Harmony', icon: 'icons/toonboomharmony.png'},
      {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
      {name: 'After Effects', icon: 'icons/Adobe_After_Effects_CC_icon.svg.png'}
    ],
    thumbnail: '',
    url: '/videos/ACHHW06EMc_12,24.mp4'
  }
]

const VideoThumbnail = ({ video, onClick }: { video: Video, onClick: () => void }) => {
  const [thumbnail, setThumbnail] = useState<string>('')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const generateThumbnail = async () => {
      if (!videoRef.current) return

      const video = videoRef.current
      video.crossOrigin = "anonymous"
      
      // Load the video metadata
      await new Promise((resolve) => {
        video.addEventListener('loadeddata', resolve, { once: true })
        video.load()
      })

      // Set the video to the first frame
      video.currentTime = 0

      // Wait for the seek to complete
      await new Promise((resolve) => {
        video.addEventListener('seeked', resolve, { once: true })
      })

      // Create canvas and draw the frame
      const canvas = document.createElement('canvas')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        const thumbnailUrl = canvas.toDataURL('image/jpeg')
        setThumbnail(thumbnailUrl)
      }
    }

    generateThumbnail()
  }, [video.url])

  return (
    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <div className="relative">
        <video ref={videoRef} className="hidden" src={video.url} />
        <img
          src={thumbnail || '/api/placeholder/400/225'}
          alt={video.title}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          {video.technologies.map((tech, index) => (
            <img key={index} 
            src={tech.icon} 
            alt={tech.name} 
            className="w-8 h-8 object-contain" 
            />
          ))}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-green-700">{video.title}</h3>
        <p className="text-sm text-gray-500">{video.year}</p>
      </CardContent>
    </Card>
  )
}

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

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  return (
    <section className="py-20 px-4 bg-gray-50">
      <style>{scrollbarStyles}</style>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-10">Video Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoThumbnail
              key={video.id}
              video={video}
              onClick={() => setSelectedVideo(video)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        {selectedVideo && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar">
            <DialogHeader>
              <DialogTitle>{selectedVideo.title}</DialogTitle>
            </DialogHeader>
            <div className="aspect-video">
              <video
                controls
                className="w-full h-full"
                src={selectedVideo.url}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500">{selectedVideo.year}</span>
                <div className="flex gap-2">
                  {selectedVideo.technologies.map((tech, index) => (
                    <img key={index} src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}