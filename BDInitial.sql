USE CEIDEVDB;


CREATE TABLE [Post](
	id int PRIMARY KEY IDENTITY(1,1),
	tipo int,
	titulo varchar(100),
	cuerpo ntext,
	imagenTitulo image,
	usuarioCreador int,
	fechaCreado datetime,
);