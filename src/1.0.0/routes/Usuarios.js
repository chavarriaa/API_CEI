const express= require('express');
const router= express.Router();
const config= require('../lib/config');
const sql = require('mssql');
const UsuariosModule = require('../class/usuarios')

router.post('/usuarios', async (req, res) => {
   try {
    let data = {...req.body,...req.params}
    let pool = await sql.connect(config);
    let usuarios = new UsuariosModule(data);

    let result = await pool.request()
        .input('usuario',sql.VarChar,usuarios.usuario) //req.body.UserName
        .input('contrasena',sql.VarChar,usuarios.contrasena) //req.body.UserName
        .input('correo',sql.VarChar,usuarios.correo) //req.body.UserName
        .query(usuarios.querySave);

    if (result.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
    res.status(200).json({message:"Usuario creado correctamente"});
   } catch (error) {
        console.error(error)
        res.status(300).json({error:`Hay clavo tio ${error}`})
   }
    
})


router.get('/usuarios',async(req,res)=>{
    try {
        let pool= await sql.connect(config);
        let usuario = new UsuariosModule({});
        let result = await pool.request().query(usuario.queryGet)
        if (result.rowsAffected <= 0){ throw "No existe datos con esos parámetros"}
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error(error);
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }

})

router.get('/usuarios/:id',async(req,res)=>{
    try {
        let pool= await sql.connect(config);
        let usuario = new UsuariosModule({});
        let result = await pool.request()
        .input('id',sql.Int,req.params.id)
        .query(usuario.queryGetByID)
        if (result.rowsAffected <= 0){ throw "No existe datos con esos parámetros"}
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error(error);
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }

})

router.put('/usuarios/:id', async(req,res) =>{
    try {
        
        let data = {...req.body,...req.params};
        let usuarios = new PostModule(data);

        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int,usuarios.id)
            .input('usuario',sql.VarChar,usuarios.usuario)
            .input('contrasena',sql.VarChar,usuarios.contrasena)
            .input('correo',sql.VarChar,usuarios.correo)
            .query(posts.queryGetById);

        res.status(200).json(response)
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

module.exports = router;