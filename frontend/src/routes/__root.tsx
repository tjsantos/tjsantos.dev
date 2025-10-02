import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useEffect } from 'react'

const UpdateRootAriaBusy = () => {
  useEffect(() => {
    const rootElement = document.getElementById('app')
    if (rootElement === null) {
      console.error(
        'Error updating root aria-busy: unable to find root element',
      )
    } else {
      rootElement.ariaBusy = 'false'
    }
  }, [])

  return <></>
}

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <UpdateRootAriaBusy />
    </>
  ),
})
