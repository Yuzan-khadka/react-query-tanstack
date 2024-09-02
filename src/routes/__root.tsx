import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
    <div className="mx-auto max-w-3xl">
      <Outlet />
    </div>
    </React.Fragment>
  ),
})
