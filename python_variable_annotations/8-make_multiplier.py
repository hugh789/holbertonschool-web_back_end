#!/usr/bin/env python3
"""This module contains the to_kv function"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple with k(str) as the first element and
    v(float or int) squared as the second element.
    """
    return (k, v**2)
