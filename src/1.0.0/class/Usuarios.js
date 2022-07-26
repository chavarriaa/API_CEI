module.exports = class Usuarios {
    constructor(data){
        this.db = 'Usuarios'
        this.id =data.id;
        this.userName = data.usuario;
        this.FirstName = data.contrasena;
        this.LastName = data.correo;

    this.queryGet = `SELECT * FROM ${this.db}`;
    this.queryGetByID = `SELECT * FROM ${this.db} WHERE id = @id`;
    this.querySave = `INSERT INTO Usuarios (usuario, contrasena, correo) VALUES (@usuario, @contrasena, @correo)`;
    }
}