import asyncio
import random

async def wait_random(max_delay=10) -> float:
  """
  This coroutine waits for a random delay between 0 and max_delay seconds 
  (inclusive) and returns the delay value.

  Args:
      max_delay: The maximum delay in seconds (default: 10).
  """
  delay = random.uniform(0, max_delay)  # Generate random delay between 0 and max_delay
  await asyncio.sleep(delay)  # Wait for the random delay
  return delay
