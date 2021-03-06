/* ---------------------------------------------------- */
/*  Generated by Enterprise Architect Version 13.5 		*/
/*  Created On : 24-sep.-2021 18:25:29 				*/
/*  DBMS       : PostgreSQL 						*/
/* ---------------------------------------------------- */

/* Drop Tables */

DROP TABLE IF EXISTS Categoria CASCADE
;

DROP TABLE IF EXISTS Cliente CASCADE
;

DROP TABLE IF EXISTS Cliente_Producto CASCADE
;

DROP TABLE IF EXISTS Producto CASCADE
;

/* Create Tables */

CREATE TABLE Categoria
(
	k_idCategoria varchar(26) NOT NULL,
	n_nombreCategoria varchar(80) NOT NULL,
  UNIQUE(k_idCategoria)
)
;

CREATE TABLE Cliente
(
	k_identificacionCliente integer NOT NULL,
	n_tipoIdentificacion varchar(20) NOT NULL,
	n_nombresCliente varchar(40) NOT NULL,
	n_apellidosCliente varchar(40) NOT NULL,
	i_sexo varchar(1) NOT NULL,
	n_direccion varchar(50) NOT NULL,
	o_telefonoCliente numeric NOT NULL,
  UNIQUE(k_identificacionCliente)
)
;

CREATE TABLE Cliente_Producto
(
	k_identificacionCliente integer NOT NULL,
	k_idProducto varchar(26) NOT NULL,
	i_estadoFavorito boolean DEFAULT true NOT NULL
)
;

CREATE TABLE Producto
(
	k_idProducto varchar(26) NOT NULL,
	n_nombreProducto varchar(150) NOT NULL,
	n_nombreProveedor varchar(80) NOT NULL,
	v_precioProducto integer NOT NULL,
	k_idCategoria varchar(26) NOT NULL,
  UNIQUE(k_idProducto)
)
;

/* Create Primary Keys, Indexes, Uniques, Checks */

ALTER TABLE Categoria ADD CONSTRAINT PK_Categoria
	PRIMARY KEY (k_idCategoria)
;

ALTER TABLE Cliente ADD CONSTRAINT PK_Cliente
	PRIMARY KEY (k_identificacionCliente)
;

ALTER TABLE Cliente_Producto ADD CONSTRAINT PK_Cliente_Producto
	PRIMARY KEY (k_identificacionCliente,k_idProducto)
;

CREATE INDEX IXFK_Cliente_Producto_Cliente ON Cliente_Producto (k_identificacionCliente ASC)
;

CREATE INDEX IXFK_Cliente_Producto_Producto ON Cliente_Producto (k_idProducto ASC)
;

ALTER TABLE Producto ADD CONSTRAINT PK_Producto
	PRIMARY KEY (k_idProducto)
;

CREATE INDEX IXFK_Producto_Categoria ON Producto (k_idCategoria ASC)
;

/* Create Foreign Key Constraints */

ALTER TABLE Cliente_Producto ADD CONSTRAINT FK_Cliente_Producto_Cliente
	FOREIGN KEY (k_identificacionCliente) REFERENCES Cliente (k_identificacionCliente) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE Cliente_Producto ADD CONSTRAINT FK_Cliente_Producto_Producto
	FOREIGN KEY (k_idProducto) REFERENCES Producto (k_idProducto) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE Producto ADD CONSTRAINT FK_Producto_Categoria
	FOREIGN KEY (k_idCategoria) REFERENCES Categoria (k_idCategoria) ON DELETE No Action ON UPDATE No Action
;
