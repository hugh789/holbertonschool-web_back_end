#!/usr/bin/env python3
""" This module contains the async_generator function"""
import random
import asyncio
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    This function is a coroutine that loops 10 times,
    each time asynchronously waits 1 second, then yields a random number 0-10.
    """
    for i in range(0, 10):
        num = random.uniform(0, 10)
        await asyncio.sleep(1)
        yield num
