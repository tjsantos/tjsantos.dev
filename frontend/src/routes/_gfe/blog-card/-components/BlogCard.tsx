import { RiArrowRightLine } from 'react-icons/ri'
import { twJoin } from 'tailwind-merge'
import type { ReactNode } from 'react'
import './BlogCard.css'

export function BlogCardPage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-lvh bg-linear-163 from-gray-50 to-[#d2d6db] px-[17.5px] py-30">
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
    <article className="shadow-blog-card flex w-85 flex-col overflow-hidden rounded-lg bg-white text-neutral-600">
      <img
        src={imageUrl}
        alt={title}
        decoding="async"
        loading="lazy"
        className="flex h-72 w-full items-center justify-center object-cover"
      />
      <section className="flex flex-col gap-3 px-4 py-6">
        <header className="flex flex-col gap-2">
          <ul className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-green-50 px-2 py-0.5 text-sm text-green-700-v3 inset-ring inset-ring-green-200-v3"
              >
                {tag}
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
        </header>
        <section className="gap flex flex-col gap-6 font-medium">
          <p>{description}</p>
          <a
            href={url}
            role="link"
            aria-disabled={!url}
            className={twJoin(
              url
                ? 'focus:shadow-blog-card__button text-indigo-700-v3 hover:text-indigo-800-v3'
                : 'pointer-events-none text-neutral-400-v3 select-none',
              'flex flex-wrap items-center gap-1.5 self-start rounded-sm',
            )}
          >
            <span className="px-0.5">Read more</span>
            <RiArrowRightLine className="size-5" />
          </a>
        </section>
      </section>
    </article>
  )
}
