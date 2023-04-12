import requests
# from parsel import Selector

response = requests.get("https://httpbin.org/encoding/utf8").text
print(response)
