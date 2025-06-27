import { Outlet, createFileRoute } from '@tanstack/react-router'
import {
  AttributionCorner,
  AttributionThemeProvider,
} from './-components/AttributionCorner.tsx'

export const Route = createFileRoute('/_gfe')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AttributionThemeProvider initialTheme="light">
      <Outlet />
      <AttributionCorner />
    </AttributionThemeProvider>
  )
}
