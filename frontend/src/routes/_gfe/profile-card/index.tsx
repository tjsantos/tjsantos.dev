import { createFileRoute } from '@tanstack/react-router'
import { ProfileCard, ProfileCardPage } from './-components/ProfileCard'
import profileImg from './-components/profile.png'

export const Route = createFileRoute('/_gfe/profile-card/')({
  component: RouteComponent,
})

const Default = {
  name: 'Sarah Dole',
  title: 'Front End Engineer @ Microsoft',
  description:
    'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.',
  profileUrl: '#',
  profileImageUrl: profileImg,
  socialLinks: {
    github: '#',
    linkedin: '#',
    instagram: '#',
    twitter: '#',
  },
}

function RouteComponent() {
  return (
    <ProfileCardPage>
      <ProfileCard {...Default} />
    </ProfileCardPage>
  )
}
