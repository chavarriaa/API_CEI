const express= require('express');
const router= express.Router();
const config= require('../lib/config');
const sql = require('mssql');
const UsuariosModule = require('../class/usuarios')

router.post('/usuarios', async (req, res) => {//agregar
   try {
    let data = {...req.body,...req.params}
    let pool = await sql.connect(config);
    let usuarios = new UsuariosModule(data);
    let result = await pool.request()
        .input('usuario',sql.VarChar,usuarios.usuario) //req.body.UserName
        .input('contrasena',sql.VarChar,usuarios.contrasena) 
        .input('correo',sql.VarChar,usuarios.correo) 
        .query(usuarios.querySave);

    if (result.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
    res.status(200).json({message:"Usuario creado correctamente"});
   } catch (error) {
        console.error(error)
        res.status(300).json({error:`Hay clavo tio ${error}`})
   }
    
})


router.get('/usuarios',async(req,res)=>{// get all
    try {
        let data = {...req.body,...req.params}
        let pool= await sql.connect(config);
        let usuario = new UsuariosModule(data);
        let response = await pool.request().query(usuario.queryGet)
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"}
        res.status(200).json(response.recordset);
    } catch (error) {
        console.error(error);
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }

})

router.get('/usuarios/:id',async(req,res)=>{//get por id
    try {
        let data = {...req.body,...req.params}
        let pool= await sql.connect(config);
        let usuario = new UsuariosModule(data);
        let response = await pool.request()
        .input('id',sql.Int,req.params.id)
        .query(usuario.queryGetByID)
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"}
        res.status(200).json(response.recordset);
    } catch (error) {
        console.error(error);
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }

})

router.put('/usuarios/:id', async(req,res) =>{//modificar por id
    try {
        
        let data = {...req.body,...req.params};
        let usuarios = new UsuariosModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int,usuarios.id)
            .input('usuario',sql.VarChar,usuarios.usuario)
            .input('contrasena',sql.VarChar,usuarios.contrasena)
            .input('correo',sql.VarChar,usuarios.correo)
            .query(usuarios.queryUpdate);

        res.status(200).json(response.recordset,{message:"Modificado exitosamente"})
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

router.delete('/usuarios/:id',async(req,res)=>{ //eliminar
    try {
        let data = {...req.body,...req.params};
        let usuarios = new UsuariosModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int,usuarios.id)
            .query(usuarios.queryDelete);
       
        res.status(200).json(response,{message:"Datos han sido Eliminados"})
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

module.exports = router;