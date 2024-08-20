#!/usr/bin/env python3
"""This module contains the task_wait_n function"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Returns a list of all the delays in ascending order
    """
    delays = []
    # spawn wait_random n times
    for i in range(n):
        # coroutines run as they are created
        delay = asyncio.create_task(wait_random(max_delay))
        delays.append(delay)

    # run coroutines concurrently
    # *delays unpacks the delay list
    delays = await asyncio.gather(*delays)

    # sorting the coroutines in the list
    for i in range(len(delays)):
        for j in range(0, len(delays) - i - 1):
            if delays[j] > delays[j + 1]:
                # Swap if the element found is greater than the next element
                delays[j], delays[j + 1] = delays[j + 1], delays[j]
    return delays
