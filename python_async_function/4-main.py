#!/usr/bin/env python3
"""This module contains the task_wait_random function"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Returns a task that was created using the wait_random function"""
    task = asyncio.create_task(wait_random(max_delay))
    return task
