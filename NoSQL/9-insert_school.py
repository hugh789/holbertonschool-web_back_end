#!/usr/bin/env python3
"""This module contains the insert_school function"""

def insert_school(mongo_collection, **kwargs):
  """ inserts a new document in a collection based on kwargs"""
  id = mongo_collection.insert_one(kwargs).inserted_id
  return id
