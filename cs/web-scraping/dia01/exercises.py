import requests

# from parsel import Selector

# Exercício 1

# response = requests.get("https://httpbin.org/encoding/utf8").text
# print(response)

# Exercício 2

# response = requests.get("https://api.github.com/users")

# for user in response.json():
#     print(user['login'], user['url'])

# Exercício 3

response = requests.get(
    "https://www.scrapethissite.com/pages/advanced/?gotcha=headers", headers={
      'Accept': 'text/html',
      'User-Agent': 'Mozilla'})
assert "bot detected" not in response.text
