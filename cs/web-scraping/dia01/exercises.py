import requests
from parsel import Selector

# Exercício 1

# response = requests.get("https://httpbin.org/encoding/utf8").text
# print(response)

# Exercício 2

# response = requests.get("https://api.github.com/users")

# for user in response.json():
#     print(user['login'], user['url'])

# Exercício 3

# response = requests.get(
#     "https://www.scrapethissite.com/pages/advanced/?gotcha=headers", headers={
#       'Accept': 'text/html',
#       'User-Agent': 'Mozilla'})
# assert "bot detected" not in response.text

# Exercício 4

response = requests.get(
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)
selector = Selector(response.text)
title = selector.css("h1::text").get()
price = selector.css(".price_color::text").re_first(r"\d+\.\d{2}")
description = (
    selector.css("#product_description ~ p::text").get().removesuffix("...more")
)
image_url = selector.css("img::attr(src)").get()
print(f"{title}, {price}, {description}, {image_url}")
