#!/usr/bin/env python3
"""This module contains the async_comprehension function"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    A coroutine that collects 10 random numbers from the
    async_generator coroutine and returns them.
    """
    result = [i async for i in async_generator()]
    return result
