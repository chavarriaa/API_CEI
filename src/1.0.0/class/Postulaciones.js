module.export = class Postulaciones {
  constructor(data) {
    this.db = "Postulaciones";
    this.id = data.id;
    this.representante = data.representante;
    this.correo = data.correo;
    this.cuenta = data.cuenta;
    this.celular = data.celular;
    this.genero = data.genero;
    this.tipo = data.tipo;
    this.descripcion = data.descripcion;
    this.sede = data.sede;
    this.equipo_trabajo = data.equipo_trabajo;

    this.gueryGet = `SELECT * FROM ${this.db}`;

    this.querySave = 
    `INSERT INTO ${this.db} (representante, correo, cuenta, celular,
    genero, tipo, descripcion, sede, equipo_trabajo) VALUES 
    (@representante, @correo, @cuenta, @celular, @genero, @tipo, @descripcion, 
    @sede, @equipo_trabajo)`;

    this.queryGetById = 
    `SELECT id, representante, correo, cuenta, celular, 
    genero, tipo, descripcion, sede, equipo_trabajo FROM ${this.db} WHERE id = @id`;

    this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id`;

    this.queryUpdate = `UPDATE ${this.db} SET 
    representante = @representante, correo = @correo,
    cuenta = @cuenta, celular = @celular, genero = @genero
    tipo = @tipo, descripcion = @descripcion, sede = @sede, 
    equipo_trabajo = @equipo_trabajo WHERE id = @id`
  }
};
