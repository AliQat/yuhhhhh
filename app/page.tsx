import HeroSection from '@/components/hero-section'
import TechCarousel from '@/components/tech-carousel'
import RecentProject from '@/components/recent-project'
import VideoGallery from '@/components/video-gallery'
import ImageGallery from '@/components/image-gallery'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TechCarousel />
      <RecentProject />
      <VideoGallery />
      <ImageGallery />
      <Footer />
    </main>
  )
}

