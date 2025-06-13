import { createFileRoute } from '@tanstack/react-router'
import { AttributionCorner } from '../-components/AttributionCorner.tsx'
import profileThumbnail from './profile-thumbnail.png'
import { TestimonialCard } from './-components/TestimonialCard.tsx'

export const Route = createFileRoute('/_gfe/testimonial-card/')({
  component: RouteComponent,
})

function RouteComponent() {
  const card = {
    name: 'Sarah Dole',
    username: '@sarahdole',
    imageUrl: profileThumbnail,
    text: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  }

  return (
    <>
      <main className="font-noto-sans min-h-screen bg-linear-to-br from-gray-50 to-[#d2d6db] px-[17.5px] pt-[200px]">
        <TestimonialCard {...card} />
      </main>
      <AttributionCorner />
    </>
  )
}
