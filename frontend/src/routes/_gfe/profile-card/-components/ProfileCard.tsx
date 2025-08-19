import './ProfileCard.css'

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
    <article className="shadow-profile-card flex w-85 flex-col gap-10 rounded-lg bg-white px-4 py-6 text-center text-neutral-600">
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
          href={props.profileUrl}
          role="link"
          aria-disabled={!props.profileUrl}
          className="rounded-sm bg-indigo-700-v3 px-4 py-2.5 font-medium text-white"
        >
          Contact me
        </a>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {['github', 'linkedin', 'instagram', 'twitter']
            .filter((key) => props.socialLinks?.[key])
            .map((key) => {
              const icons = {}
              const url = props.socialLinks?.[key]
              return (
                <li key={key}>
                  <a
                    className="inline-block size-9 bg-amber-200"
                    role="link"
                    aria-disabled={!url}
                    href={url}
                  ></a>
                </li>
              )
            })}
        </ul>
      </section>
    </article>
  )
}
