import sys
from flask import Flask, render_template, request, redirect, url_for, make_response, jsonify
from app.producto.modelo import *
from http import HTTPStatus
import copy
from app.producto.esquema import ProductoSchema 
from app.scraper import scraperAlkosto, scraperKtronix, scraperTecno
from flask_cors import CORS
from app.config import DevelpmentConfig

RESPONSE_BODY_DEFAULT = {"message": "", "data": [], "errors": []}
CATEGORIAS = ("portatiles","televisores","smartphones")

def create_app(config=DevelpmentConfig):
    app = Flask(__name__)
    app.config.from_object(config)
    CORS(app)
    app.secret_key = 'm26QLWq2Bd4UIX84'

    @app.route("/", methods = ['GET'])
    def listar():
        response_body = copy.deepcopy(RESPONSE_BODY_DEFAULT)
        status_code = HTTPStatus.OK
        data = consultar()
        producto_esquema = ProductoSchema ()
        for resultado in data:
            producto = producto_esquema.dump(resultado)
            response_body["data"].append(producto)
        return response_body, status_code

    @app.route("/categoria/<cat>", methods = ['GET'])
    def listar_categoria(cat):
        response_body = copy.deepcopy(RESPONSE_BODY_DEFAULT)
        status_code = HTTPStatus.OK
        data = por_categoria(cat)
        producto_esquema = ProductoSchema ()
        for resultado in data:
            producto = producto_esquema.dump(resultado)
            response_body["data"].append(producto)
        return response_body, status_code

    @app.route("/buscar/<id>", methods = ['GET'])
    def buscar(id):
        response_body = copy.deepcopy(RESPONSE_BODY_DEFAULT)
        status_code = HTTPStatus.OK
        producto_esquema = ProductoSchema ()
        if request.method == 'GET':
            producto = consultar_id(id)
            response_body["data"].append(producto_esquema.dump(producto))
        return response_body, status_code

    @app.route("/llenar", methods = ['GET'])
    def llenar():
        try:
            response_body = copy.deepcopy(RESPONSE_BODY_DEFAULT)
            status_code = HTTPStatus.OK

            tecno = scraperTecno.ScraperTecno(CATEGORIAS[0])
            tecno.llenarBD()
            for cat in CATEGORIAS:
                alk = scraperAlkosto.ScraperAlkosto(cat)
                alk.llenarBD()
                ktr = scraperKtronix.ScraperKtronix(cat)
                ktr.llenarBD()
            response_body["message"] = "BD llenada"
            return response_body, status_code
        except Exception as e:
            response_body["erros"] = e
            return response_body, status_code
    
    return app

if __name__ == '__main__':
    app_flask = create_app()
    app_flask.run()

