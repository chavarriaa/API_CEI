

module.exports = class Post{
    constructor(data,filter){
        this.db ='Post';
        this.id= data.id || '';
        this.tipo= data.tipo || '';
        this.titulo= data.titulo || '';
        this.cuerpo= data.cuerpo || '';
        this.imagenTitulo= data.imagenTitulo || '';
        this.usuarioCreador= data.usuarioCreador || '';
        this.fechaCreado= data.fechaCreado || '';

        
        this.queryGetFirst10=`
        SELECT TOP 10
            id
            ,tipo
            ,titulo
            ,cuerpo
            ,imagenTitulo
            ,usuarioCreador
            ,fechaCreado
            FROM Post
            ORDER BY fechaCreado;`

        this.queryGetById=` SELECT 
            id
            ,tipo
            ,titulo
            ,cuerpo
            ,imagenTitulo
            ,usuarioCreador
            ,fechaCreado
            FROM Post
            WHER id=@id;`
        
        this.queryInsert=`INSERT INTO ${this.db} (tipo ,titulo,cuerpo,usuarioCreador,fechaCreado) VALUES (@tipo,@titulo,@cuerpo,@usuarioCreador,cast (@fechaCreado as datetime));`
        this.queryUpdate=`UPDATE ${this.db} SET 
            titulo=@titulo,
            cuerpo=@cuerpo,
            imagenTitulo=@imagenTitulo,
            usuarioCreador=@usuarioCreador,
            fechaCreado=@fechaCreado
            WHERE id=@id;`
        this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id`
        
    }
  
  }