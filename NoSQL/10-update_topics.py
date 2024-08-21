#!/usr/bin/env python3
def update_topics(mongo_collection, name, topics):
    """
    Updates the topics of a school document based on its name.

    Args:
        mongo_collection: The MongoDB collection object.
        name: The name of the school to update.
        topics: A list of strings representing the new topics.
    """

    result = mongo_collection.update_one(
        {"name": name},
        {"$set": {"topics": topics}}
    )

    if result.modified_count == 0:
        print("No document found with the name:", name)
    else:
        print("Updated", result.modified_count, "document(s).")
