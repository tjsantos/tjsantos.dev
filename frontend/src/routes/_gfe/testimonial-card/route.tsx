import { createFileRoute } from '@tanstack/react-router'
import profileThumbnail from './profile-thumbnail.png'

export const Route = createFileRoute('/_gfe/testimonial-card')({
  component: RouteComponent,
})

function RouteComponent() {
  const card = {
    name: 'Sarah Dole',
    username: '@sarahdole',
    imageUrl: profileThumbnail,
    description:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  }

  return (
    <main className="font-noto-sans min-h-screen bg-linear-to-br from-gray-50 to-[#d2d6db] px-[17.5px] pt-[200px]">
      <div className="mx-auto w-[340px] max-w-full rounded-lg bg-white p-6 text-neutral-600 shadow-sm">
        <header className="flex gap-4">
          <img
            src={card.imageUrl}
            alt={card.name}
            className="size-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">
              {card.name}
            </h2>
            <p className="mt-[1px] text-sm">{card.username}</p>
          </div>
        </header>
        <p className="mt-4">{card.description}</p>
      </div>
    </main>
  )
}
