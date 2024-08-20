#!/usr/bin/env python3
"""This module contains the sum_mixed_list function"""
from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """
    Returns the sum of a list of integers and float numbers
    as a float
    """
    return sum(mxd_list)
