import { Outlet, createFileRoute } from '@tanstack/react-router'
import {
  AttributionCorner,
  AttributionThemeProvider,
  useAttributionTheme,
} from './-components/AttributionCorner.tsx'

export const Route = createFileRoute('/_gfe')({
  component: RouteComponent,
})

const AttributionContainer = () => {
  const { theme } = useAttributionTheme()
  return <AttributionCorner theme={theme} />
}

function RouteComponent() {
  return (
    <AttributionThemeProvider initialTheme="light">
      <Outlet />
      <AttributionContainer />
    </AttributionThemeProvider>
  )
}
