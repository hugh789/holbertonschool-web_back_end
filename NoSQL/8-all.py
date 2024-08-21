#!/usr/bin/env python3
"""this module contains the list_all function"""

def list_all(mongo_collection):
  """List all documents in the mongo collection"""
  result = []
  
  doc = mongo_collection.find({})
  for i in doc:
    result.append(i)
  
  return result
