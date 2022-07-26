const express= require('express');
const router= express.Router();
const config= require('../lib/config');
const sql = require('mssql');
const PostulacionesModule = require('../class/Postulaciones')


router.get('/postulaciones',async(req,res)=>{
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostulacionesModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request().query(postulacion.queryGet);
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
        res.status(200).json(response.recordsets)
    } catch (e) {
        console.error(`Hay clavo tio ${e}`)
        res.status(300).json({error:`Hay clavo tio ${e}`})
    }
})

router.get('/postulaciones/:id',async(req,res)=>{
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostulacionesModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int,postulacion.id)
            .query(postulacion.queryGetById);
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
        res.status(200).json(response.recordsets)
    } catch (e) {
        console.error(`Hay clavo tio ${e}`)
        res.status(300).json({error:`Hay clavo tio ${e}`})
    }
})

router.post('/postulaciones',async(req,res)=>{ //agregar
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostulacionesModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()

            .input('representante',sql.VarChar, postulacion.representante)
            .input('correo',sql.VarChar, postulacion.correo)
            .input('cuenta',sql.VarChar,postulacion.cuenta)
            .input('celular',sql.VarChar,postulacion.celular)
            .input('genero',sql.VarChar,postulacion.genero)
            .input('tipo',sql.VarChar,postulacion.tipo)
            .input('descripcion',sql.VarChar,postulacion.descripcion)
            .input('sede',sql.VarChar,postulacion.sede)
            .input('equipo_trabajo',sql.VarChar,postulacion.equipo_trabajo)
            .query(postulacion.querySave);
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
        res.status(200).json(response.recordsets)
    } catch (e) {
        console.error(`Hay clavo tio ${e}`)
        res.status(300).json({error:`Hay clavo tio ${e}`})
    }
})

router.put('/postulaciones/:id',async(req,res)=>{ //modificar
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostulacionesModule(data);

        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int, postulacion.id)
            .input('representante',sql.VarChar, postulacion.representante)
            .input('correo',sql.VarChar, postulacion.correo)
            .input('cuenta',sql.VarChar,postulacion.cuenta)
            .input('celular',sql.VarChar,postulacion.celular)
            .input('genero',sql.VarChar,postulacion.genero)
            .input('tipo',sql.VarChar,postulacion.tipo)
            .input('descripcion',sql.VarChar,postulacion.descripcion)
            .input('sede',sql.VarChar,postulacion.sede)
            .input('equipo_trabajo',sql.VarChar,postulacion.equipo_trabajo)
            .query(postulacion.queryGetById);
            res.status(200).json({message:"Modificado con exito"})
        res.status(200).json(response)
    } catch (e) {
        console.error(`Hay clavo tio ${e}`)
        res.status(300).json({error:`Hay clavo tio ${e}`})
    }
})
router.delete('/postulaciones/:id',async(req,res)=>{ //eliminar
    try {
        let data = {...req.body,...req.params};
        let posts = new PostModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int,postulacion.id)
            .query(posts.queryDelete);
       
        res.status(200).json({message:"Datos han sido Eliminados"})
    } catch (e) {
        console.error(`Hay clavo tio ${e}`)
        res.status(300).json({error:`Hay clavo tio ${e}`})
    }
})

module.exports = router;