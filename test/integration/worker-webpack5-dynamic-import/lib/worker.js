import { Expensive } from './sharedCode'
import faker from 'faker'

// Ensure a large libraries is added so that splitChunks would trigger if enabled.
console.log(faker)

Expensive()
self.postMessage(true)

addEventListener('message', async (event) => {
  const { now } = await import('./util')
  postMessage(now())
})
