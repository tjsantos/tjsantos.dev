import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_gfe')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Outlet />
      <footer
        className="fixed right-6 bottom-6 text-center text-xs text-neutral-500"
        data-gfe-screenshot-exclude="true"
      >
        A challenge by{' '}
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
          className="text-sky-700 underline"
        >
          GreatFrontEnd Projects
        </a>
        . Built by{' '}
        <a
          href="https://github.com/tjsantos/tjsantos.dev"
          target="_blank"
          className="text-sky-700 underline"
        >
          TJ Santos
        </a>
        .
      </footer>
    </>
  )
}
