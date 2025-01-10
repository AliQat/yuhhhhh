'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Code2 } from 'lucide-react'
const tech = [
  {name: 'Harmony', icon: 'icons/toonboomharmony.png'},
  {name: 'Premiere Pro', icon: 'icons/Adobe_Premiere_Pro_CC_icon.svg.png'},
]
// TODO: change to "Student Film"
export default function RecentProject() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-10">Most Recent Project</h2> 
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <video
              controls
              className="w-full h-full object-cover"
              poster=""
            >
              <source src="/videos/ubu finaldraftEMc_10,23.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Animation based on audio</h3>
              <p className="text-gray-600 mb-6">
                This is a short animation I made for a class project. It is based on an audio clip I selected from a list of audios. 
                The animation is simple but in that simplicity it allowed me to focus on animating the conversation between the two characters in a dynamic manner.
                Harmony was used for creating each frame of the animation and premiere pro was used for editing.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>October 2023</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Technologies Used:</h4>
                <div className="flex gap-2">
                  {tech.map((tech, index) => (
                    <img key={index} src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

