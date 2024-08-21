#!/usr/bin/env python3
"""This module contains the schools_by_topic function"""


def schools_by_topic(mongo_collection, topic):
  """returns a list of school having a specific topic"""
  result = []
  
  doc = mongo_collection.find({"topics": topic})
  for i in doc:
    result.append(i)
  
  return result
