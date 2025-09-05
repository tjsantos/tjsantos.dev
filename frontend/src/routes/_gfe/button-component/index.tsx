import { createFileRoute } from '@tanstack/react-router'
import { ButtonShowcase } from './-components/Button'

export const Route = createFileRoute('/_gfe/button-component/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ButtonShowcase />
}
