import pymongo as pm 
from bson import ObjectId

HOST = "127.0.0.1"
PORT= "27017"
DATABASE = "Cluster0"
COLLECTION = 'productos'

URI_CONECTION = "mongodb+srv://scraper:scraper@cluster0.4s0lk.mongodb.net/Cluster0?retryWrites=true&w=majority"

def consultar():
    data = {}
    try:
        producto = pm.MongoClient(URI_CONECTION)
        coleccion = producto[DATABASE][COLLECTION]
        condicion = {}
        data = coleccion.find(condicion)
    except Exception as error:
        print(error)
    finally:
        return data

def consultar_id(id):
    data = {}
    try:
        producto = pm.MongoClient(URI_CONECTION)
        coleccion = producto[DATABASE][COLLECTION]
        condicion = {'_id': ObjectId(id)}
        data = coleccion.find_one(condicion)
    except Exception as error:
        print(error)
    finally:
        return data

def insertar(data):
    try:
        producto = pm.MongoClient(URI_CONECTION)
        coleccion = producto[DATABASE][COLLECTION]
        coleccion.insert_one(data)
    except Exception as error:
        print(error)

def actualizar(id,data):
    try:
        producto = pm.MongoClient(URI_CONECTION)
        coleccion = producto[DATABASE][COLLECTION]
        condicion = {'_id': ObjectId(id)}
        valores = { '$set': data}
        coleccion.update_one(condicion, valores)
    except Exception as error:
        print(error)

def eliminar_id(id):
    try:
        producto = pm.MongoClient(URI_CONECTION)
        coleccion = producto[DATABASE][COLLECTION]
        condicion = {'_id': ObjectId(id)}
        data = coleccion.delete_one(condicion)
    except Exception as error:
        print(error)

def por_categoria(cat):
    data = {}
    try:
        producto = pm.MongoClient(URI_CONECTION)
        coleccion = producto[DATABASE][COLLECTION]
        condicion = {'categoria': cat}
        data = coleccion.find(condicion)
    except Exception as error:
        print(error)
    finally:
        return data