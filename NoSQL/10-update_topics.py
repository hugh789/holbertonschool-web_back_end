#!/usr/bin/env python3
"""This module contains the update_topics function"""


def update_topics(mongo_collection, name, topics):
  """Changes all topics of a school document based on the name"""
  updated = mongo_collection.update_many({"name": name}, {"$set" :{"topics": topics}})
  return updated
