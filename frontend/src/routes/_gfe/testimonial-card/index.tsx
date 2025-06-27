import { createFileRoute } from '@tanstack/react-router'
import { TestimonialCardPage } from './-components/TestimonialCardPage.tsx'

export const Route = createFileRoute('/_gfe/testimonial-card/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TestimonialCardPage />
}
