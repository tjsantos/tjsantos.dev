import { createFileRoute } from '@tanstack/react-router'
import { Default } from './-components/TestimonialCard.stories.tsx'
import {
  TestimonialCard,
  TestimonialCardPage,
} from './-components/TestimonialCard.tsx'

export const Route = createFileRoute('/_gfe/testimonial-card/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <TestimonialCardPage>
      <TestimonialCard {...Default.args} />
    </TestimonialCardPage>
  )
}
