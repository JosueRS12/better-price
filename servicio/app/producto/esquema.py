import mongoengine as me
import marshmallow_mongoengine as ma

class Producto(me.EmbeddedDocument):
    _id = me.StringField(required=True)
    nombre = me.StringField(required=True)
    precio = me.StringField(required=True)
    categoria = me.StringField(required=True)
    proveedor = me.StringField(required=True)
    img = me.StringField(required=False)

class ProductoSchema(ma.ModelSchema):
    class Meta:
        model = Producto