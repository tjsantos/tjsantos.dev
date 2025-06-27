import profileThumbnail from './profile-thumbnail.png'
import { TestimonialCard } from './TestimonialCard.tsx'

export const defaultCard = {
  name: 'Sarah Dole',
  username: '@sarahdole',
  imageUrl: profileThumbnail,
  text: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
}

// TODO: attribution in layout wrapper and context provider to change its font?
export const TestimonialCardPage = () => {
  return (
    <main className="font-noto-sans min-h-screen bg-linear-to-br from-gray-50 to-[#d2d6db] px-[17.5px] pt-[200px]">
      <TestimonialCard {...defaultCard} />
    </main>
  )
}
