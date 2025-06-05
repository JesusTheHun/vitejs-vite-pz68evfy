import { composeStories } from '@storybook/react-vite'

import { expect, it } from 'vitest'
import { render } from 'vitest-browser-react'

import * as stories from './HelloWorld.stories'

const { Default } = composeStories(stories)

it('does not crash', async () => {
  const { getByRole } = render(<div><p className={'font-bold'}>Story</p><Default /></div>)

  await expect.element(getByRole('heading')).toBeInTheDocument()
  expect(2).toBe(2)
})
