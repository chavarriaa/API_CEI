module.exports = class Eventos{
    constructor(data){
        this.db = 'Eventos';
        this.id = data.id;
        this.fecha = data.fecha;
        this.title = data.title;
        this.descripcion = data.descripcion;
        this.usuario = data.usuario;
        this.fechaCreado = data.fechaCreado;

        this.gueryGet = `SELECT * FROM ${this.db}`;

        this.querySave = 
        `INSERT INTO ${this.db} (fecha, title, usuario, fechaCreado) VALUES 
        (@fecha, @title, @usuario, cast (@fechaCreado as datetime))`;
    
        this.queryGetById = `SELECT id, fecha, title, usuario, fechaCreado FROM ${this.db} WHERE id = @id`;
    
        this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id`;
    
        this.queryUpdate = `UPDATE ${this.db} SET fecha = @fecha,
        title = @title, usuario = @usuario, fecha = @fechaCreado
         WHERE id = @id`

    }
}