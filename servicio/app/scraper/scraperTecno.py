from urllib.request import urlopen
import json
import urllib.parse, urllib.error
from bs4 import BeautifulSoup
import re
import sys
from app.producto.modelo import insertar
import ssl

class ScraperTecno():
    def __init__(self, categoria):
        self.ctx = ssl.create_default_context()
        self.ctx.check_hostname = False
        self.ctx.verify_mode = ssl.CERT_NONE
        
        self.categoria = categoria
        
        self.url = "https://tecnoplaza.com.co/sitio/categoria-producto/"+self.categoria+"/"

    def llenarBD(self):
        try:
            html = urlopen(self.url, context=self.ctx).read()

            soup = BeautifulSoup(html, "html.parser")

            # Retrieve all of the anchor tags
            scripts = soup('script')
            index=0
            info = []
            for script in scripts:
                # Look at the parts of a tag
                info = re.findall('tvc_pgc=(.+});', str(script))
                if len(info) != 0:
                    break


            productos = json.loads(info[0])
            for key in productos.keys():
                url_detalle =  key
                html = urlopen(url_detalle, context=self.ctx).read()
                soup = BeautifulSoup(html, "html.parser")
                metas = soup.findAll("meta")
                for meta in metas:
                    if meta.get("property",None) == "og:image":
                        img =meta.get("content",None)
                data = {
                    'nombre': productos[key]['tvc_n'],
                    'precio': productos[key]['tvc_p'],
                    'categoria': self.categoria,
                    'proveedor': "Tecnoplaza",
                    'img' : img
                }
                insertar(data)
        except Exception as e:
            print(e)