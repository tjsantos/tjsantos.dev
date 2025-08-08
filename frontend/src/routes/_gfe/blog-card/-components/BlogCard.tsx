import { RiArrowRightLine } from 'react-icons/ri'
import { twJoin } from 'tailwind-merge'
import type { ReactNode } from 'react'
import './BlogCard.css'

export function BlogCardPage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-lvh bg-linear-163 from-gray-50 to-gray-300 px-[17.5px] py-30">
      <div className="flex justify-center">{children}</div>
    </div>
  )
}

export function BlogCard({
  title,
  description,
  tags,
  url,
  imageUrl,
}: {
  title: string
  description: string
  tags: Array<string>
  url?: string
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
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-v3-green-700 inset-ring-v3-green-200 rounded-full bg-green-50 px-2 py-0.5 text-sm inset-ring"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
        </div>
        <div className="gap flex flex-col gap-6 font-medium">
          <p>{description}</p>
          <a
            href={url}
            aria-disabled={!url}
            className={twJoin(
              url
                ? 'text-v3-indigo-700 focus:shadow-blog-card__button'
                : 'text-v3-neutral-400 pointer-events-none select-none',
              'flex flex-wrap items-center gap-1.5 self-start rounded-sm',
            )}
          >
            <span className="px-0.5">Read more</span>
            <RiArrowRightLine className="size-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
