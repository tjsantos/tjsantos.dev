import type { ReactNode } from 'react'
import './BlogCard.css'

export function BlogCardPage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-lvh bg-linear-163 from-gray-50 to-gray-300 px-[17.5px] py-30">
      <div className="flex justify-center">{children}</div>
    </div>
  )
}

// green-50,200,700, neutral-600,900, indigo-700
// TODO: border instead of outline
// TODO: rename shadow-card to shadow-blog-card (BEM style) or use inline style
export function BlogCard({
  title,
  description,
  tags,
  imageUrl,
}: {
  title: string
  description: string
  tags: Array<string>
  imageUrl: string
}) {
  return (
    <div className="shadow-blog-card flex w-85 flex-col rounded-lg bg-white text-neutral-600">
      <figure>
        <img
          src={imageUrl}
          alt="Living room, nicely decorated"
          className="size-full rounded-t-lg object-cover"
        />
      </figure>
      <div className="flex flex-col gap-3 px-4 py-6">
        <div className="flex flex-col gap-2">
          <div>
            {tags.map((tag) => (
              <button
                key={tag}
                className="rounded-full bg-green-50 px-2 py-0.5 text-sm text-[#15803d] outline -outline-offset-1 outline-[#bbf7d0]"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
        </div>
        <div className="gap flex flex-col gap-6 font-medium">
          <p>{description}</p>
          <p>Read more ...</p>
        </div>
      </div>
    </div>
  )
}
