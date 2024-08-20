#!/usr/bin/env python3
"""This module contains an asynchronous coroutine wait_random"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    Takes in an integer argument(max_delay)
    with a default value of 10 seconds and waits for a
    random delay between 0 and max_delay then eventually returns it
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
