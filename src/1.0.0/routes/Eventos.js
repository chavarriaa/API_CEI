const express = require('express');
const router = express.Router();
const config = require('../lib/config');
const sql = require('mssql');
const EventosModule = require('../class/Eventos');


router.get('/eventos', async(req, res) =>{
    try {
        let data = {...req.body,...req.params};
        let eventos = new EventosModule(data);
        let pool = await sql.connect(config);
        let response = await pool.request().query(eventos.gueryGet);
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
        res.status(200).json(response.recordsets)
    } catch (error) {
        console.error(`Hay clavo tio ${e}`)
        res.status(300).json({error:`Hay clavo tio ${e}`})
    }
})

module.exports = router;