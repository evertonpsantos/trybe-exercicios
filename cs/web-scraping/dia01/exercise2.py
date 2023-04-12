from pymongo import MongoClient

client = MongoClient()

category = input("Choose a category: ")
with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": {"$in": [category]}}):
        print(book["title"])
