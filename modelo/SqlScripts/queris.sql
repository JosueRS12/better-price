--- prueba
-- user
INSERT INTO cliente VALUES (1193098162, 'CC', 'Josue', 'Rodriguez', 'm', 'santaLucia', 3504925314);
-- categoria
INSERT INTO categoria VALUES ('televisorid', 'televisores');
-- producto
INSERT INTO producto VALUES ('6151f1e38e07d7938834298e', 'TV LG 65\" Pulgadas 164 cm 65UP7750 4K-UHD LED Plano Smart TV', 'Alkosto', '2799900', 'televisorid', false);
-- agregar producto fav
INSERT INTO cliente_producto VALUES (1193098162, '6151f1e38e07d7938834298e', TRUE);
-- eliminar de favorito 
DELETE FROM cliente_producto WHERE k_identificacioncliente = 1193098162;
-- verificar si es favorito
SELECT i_estadofavorito FROM cliente_producto WHERE k_idproducto = '6151f1e38e07d7938834298e';

SELECT * FROM cliente;
SELECT * FROM categoria;
SELECT * FROM producto;
SELECT * FROM cliente_producto;
