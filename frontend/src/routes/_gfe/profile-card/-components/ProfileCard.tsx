import './ProfileCard.css'
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from 'react-icons/ri'
import { twJoin } from 'tailwind-merge'
import type { CSSProperties } from 'react'

export function ProfileCardPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-linear-163 from-gray-50 to-[#d2d6db] px-[17.5px] py-50">
      <main className="flex flex-wrap justify-center">{children}</main>
    </div>
  )
}

// TODO: social links, hover, focus, disabled
type ProfileCardProps = {
  name: string
  title: string
  description: string
  profileUrl?: string
  profileImageUrl: string
  socialLinks?: {
    [key: string]: string | undefined
    github?: string
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}
export function ProfileCard(props: ProfileCardProps) {
  return (
    <article
      className="flex w-85 flex-col gap-10 rounded-lg bg-white px-4 py-6 text-center text-neutral-600 shadow-(--shadow-profile-card)"
      style={
        {
          '--shadow-profile-card':
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
        } as CSSProperties
      }
    >
      <section className="flex flex-col items-center gap-6">
        <img
          className="aspect-square w-16 rounded-full object-cover"
          src={props.profileImageUrl}
          decoding="async"
          loading="lazy"
          alt={props.name}
        />
        <header className="flex flex-col gap-1">
          <h2 className="text-xl font-medium text-neutral-900">{props.name}</h2>
          <h3 className="text-sm">{props.title}</h3>
        </header>
        <p>{props.description}</p>
      </section>
      <section className="flex flex-col gap-6">
        <a
          href={props.profileUrl || undefined}
          role="link"
          aria-disabled={!props.profileUrl}
          className={twJoin(
            'rounded-sm px-4 py-2.5 font-medium',
            props.profileUrl
              ? 'bg-indigo-700-v3 text-white shadow-(--shadow-profile-card) hover:bg-indigo-800-v3 focus:ring-4 focus:ring-[rgb(68,76,231,0.12)]'
              : 'pointer-events-none bg-neutral-100 text-neutral-400 select-none',
          )}
        >
          Contact me
        </a>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {[
            { platform: 'github', Icon: RiGithubFill },
            { platform: 'linkedin', Icon: RiLinkedinBoxFill },
            { platform: 'instagram', Icon: RiInstagramFill },
            { platform: 'twitter', Icon: RiTwitterXFill },
          ]
            .filter(({ platform }) => props.socialLinks?.[platform])
            .map(({ platform, Icon }) => {
              const url = props.socialLinks?.[platform]
              return (
                <li key={platform}>
                  <a
                    className="flex size-9 items-center justify-center"
                    role="link"
                    aria-disabled={!url}
                    href={url}
                  >
                    <Icon className="size-5 text-indigo-700-v3" />
                  </a>
                </li>
              )
            })}
        </ul>
      </section>
    </article>
  )
}
