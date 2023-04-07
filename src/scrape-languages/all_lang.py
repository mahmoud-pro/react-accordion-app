import requests as r
from bs4 import BeautifulSoup

import pandas as pd

url = "https://cloud.google.com/translate/docs/languages"
headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
}

res = r.get(url, headers=headers)

print(res.content)
soup = BeautifulSoup(res.content, parser="lxml", features="lxml")


def get_languages():
    table = soup.find_all("tbody")

    """ for tr in table:
	    td = tr.find("td").text() """


get_languages()
