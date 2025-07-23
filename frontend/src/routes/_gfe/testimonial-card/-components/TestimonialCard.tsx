import { twMerge } from 'tailwind-merge'
import type { ReactNode } from 'react'

type TestimonialCardProps = {
  name: string
  username: string
  imageUrl: string
  text: string
}
export const TestimonialCard = ({
  name,
  username,
  imageUrl,
  text,
}: TestimonialCardProps) => {
  return (
    <div className="flex w-[340px] flex-col gap-4 rounded-lg bg-white p-6 text-neutral-600 shadow-sm">
      <header className="flex items-center gap-4">
        <figure className="line-clamp-3 size-12 flex-none text-xs wrap-break-word">
          <img
            src={imageUrl}
            alt={name}
            className="size-full rounded-full object-cover"
          />
        </figure>
        {/* need min width on flex item to stop overflow, or
            use overflow-wrap: anywhere instead of break-word */}
        <div className="flex flex-col gap-[1px]">
          <h2 className="text-lg font-semibold wrap-anywhere text-neutral-900">
            {name}
          </h2>
          <p className="text-sm">{username}</p>
        </div>
      </header>
      <p>{text}</p>
    </div>
  )
}

export const TestimonialCardPage = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={twMerge(
        'flex min-h-screen items-start justify-center',
        'bg-linear-163 from-gray-50 to-[#d2d6db] px-[17.5px] pt-[200px]',
      )}
    >
      {children}
    </main>
  )
}
