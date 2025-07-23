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
    <div className="w-[340px] max-w-full rounded-lg bg-white p-6 text-neutral-600 shadow-sm">
      <header className="flex gap-4">
        <figure className="size-12 flex-none overflow-hidden text-xs wrap-break-word">
          <img
            src={imageUrl}
            alt={name}
            title={name}
            className="size-full rounded-full object-cover"
          />
        </figure>
        {/* need min width on flex item to truncate child properly */}
        <div className="min-w-1 grow">
          <h2
            className="truncate text-lg font-semibold text-neutral-900"
            title={name}
          >
            {name}
          </h2>
          <p className="mt-[1px] text-sm">{username}</p>
        </div>
      </header>
      <p className="mt-4">{text}</p>
    </div>
  )
}

export const TestimonialCardPage = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={twMerge(
        'flex min-h-screen w-screen items-start justify-center',
        'bg-linear-163 from-gray-50 to-[#d2d6db] px-[17.5px] pt-[200px]',
      )}
    >
      {children}
    </main>
  )
}
