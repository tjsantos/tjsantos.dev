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

type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'instagram'
type SocialLink = {
  platform: SocialPlatform
  url: string
}
const SOCIAL_ICONS = {
  github: RiGithubFill,
  linkedin: RiLinkedinBoxFill,
  instagram: RiInstagramFill,
  twitter: RiTwitterXFill,
} as const satisfies Record<SocialPlatform, any>
function SocialLinkList({ socialLinks }: { socialLinks: Array<SocialLink> }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-4">
      {socialLinks.map(({ platform, url }) => {
        const Icon = SOCIAL_ICONS[platform]
        return (
          <li key={platform}>
            <a
              className={twJoin(
                'flex size-9 items-center justify-center rounded-sm',
                url
                  ? 'hover:bg-neutral-50 focus:bg-neutral-50 focus:ring-4 focus:ring-[rgb(68,76,231,0.12)]'
                  : 'pointer-events-none',
              )}
              href={url}
              aria-label={platform}
            >
              <Icon aria-hidden="true" className="size-5 text-indigo-700-v3" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

type ProfileCardProps = {
  name: string
  title: string
  description: string
  profileUrl?: string
  profileImageUrl: string
  socialLinks: Array<SocialLink>
}
export function ProfileCard(props: ProfileCardProps) {
  // Defensively filter out empty url strings
  const socialLinks = props.socialLinks.filter((link) => link.url)

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
      <section className="flex flex-col items-center gap-6 wrap-anywhere">
        <figure className="line-clamp-4 size-16 text-xs">
          <img
            className="size-full rounded-full object-cover"
            src={props.profileImageUrl}
            decoding="async"
            loading="lazy"
            alt={`Profile photo of ${props.name}`}
          />
        </figure>
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
              : 'pointer-events-none bg-neutral-100 text-neutral-400',
          )}
        >
          Contact me
        </a>
        {socialLinks.length > 0 && <SocialLinkList socialLinks={socialLinks} />}
      </section>
    </article>
  )
}
