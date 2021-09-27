from urllib.request import urlopen
import json
import urllib.parse, urllib.error
from bs4 import BeautifulSoup
import re
import sys
from app.producto.modelo import insertar
import ssl

class ScraperKtronix():
    def __init__(self, categoria):
        self.ctx = ssl.create_default_context()
        self.ctx.check_hostname = False
        self.ctx.verify_mode = ssl.CERT_NONE
        self.categoria = categoria
        
        if self.categoria == "portatiles":
            self.url = "https://www.ktronix.com/computadores-tablet/computadores-portatiles/c/BI_104_KTRON"
        elif self.categoria == "televisores":
            self.url = "https://www.ktronix.com/tv-video/televisores/c/BI_120_KTRON"
        elif self.categoria == "smartphones":
            self.url = "https://www.ktronix.com/celulares/telefonos-celulares/c/BI_101_KTRON"


    def llenarBD(self):
        try:
            html = urlopen(self.url, context=self.ctx).read()
            soup = BeautifulSoup(html, "html.parser")

            lista_productos = soup.findAll("li", class_="product__list--item product__list--ktronix js-product-item")

            for producto in lista_productos:
                soup2 = BeautifulSoup(str(producto.contents), "html.parser")
                img = soup2("img")
                img_url = "https://www.alkosto.com/"+img[1].get("src",None)

                nombres = soup2.findAll("a", class_="js-product-click-datalayer")
                nombre = nombres[0].get("title",None)

                precios = soup2.findAll("span", class_="price")
                precio = precios[0].contents[0]

                data = {
                            'nombre': nombre,
                            'precio': precio,
                            'categoria': self.categoria ,
                            'proveedor': "Ktronix",
                            'img' : img_url
                        }
                insertar(data)
        except Exception as e:
            print(e)
