module.exports = class Usuarios {
  constructor(data) {
    this.db = "Usuarios";
    this.id = data.id || "";
    this.usuario = data.usuario || "";
    this.contrasena = data.contrasena || "";
    this.correo = data.correo || "";

    this.queryGet = `SELECT * FROM ${this.db}`;
    this.queryGetByID = `SELECT * FROM ${this.db} WHERE id = @id`;
    this.querySave = `INSERT INTO Usuarios (usuario, contrasena, correo) VALUES (@usuario, @contrasena, @correo)`;
    this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id`;
    this.queryUpdate = `UPDATE ${this.db} SET usuario = @usuario,
    contrasena = @contrasena, correo = @correo WHERE id = @id`;
  }
};
