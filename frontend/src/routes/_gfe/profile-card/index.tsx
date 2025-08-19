import { createFileRoute } from '@tanstack/react-router'
import { ProfileCard, ProfileCardPage } from './-components/ProfileCard'
import { Default } from './-components/ProfileCard.stories.tsx'

export const Route = createFileRoute('/_gfe/profile-card/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ProfileCardPage>
      <ProfileCard {...Default.args} />
    </ProfileCardPage>
  )
}
