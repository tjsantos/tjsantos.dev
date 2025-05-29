import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(gfe)/testimonial-card')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(gfe)/blog-card"!</div>
}
