import * as Headless from '@headlessui/react'
import { Link as InertiaLink } from '@inertiajs/react'
import React, { forwardRef } from 'react'

export const Link = forwardRef(function Link(props, ref) {
  return (
    <Headless.DataInteractive>
      <InertiaLink {...props} ref={ref} />
    </Headless.DataInteractive>
  )
})
