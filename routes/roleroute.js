const router = require('express').Router()
const connection = require('../db/connection')

router.post('/', async (req, res) => {
    const { title, salary, department_id } = req.body
    try {
        const result = await connection.promise().query(
            `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?);`,
            [title, salary, department_id]
        )
        res.json(result)
    } catch(err){
        res.status(500).json(err)
    }

})

router.get('/', async (req, res) => {

    try {
        const result = await connection.promise().query(
            `SELECT * FROM roles;`,
        )
        res.json(result)
    } catch(err){
        res.status(500).json(err)
    }

})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await connection.promise().query(
            `SELECT * FROM roles WHERE id = ?;`,
            id,
        )
        res.json(result)
    } catch(err){
        res.status(500).json(err)
    }

})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const { title, salary, department_id } = req.body

    try {
        const result = await connection.promise().query(
            `UPDATE roles
            SET title = ?, salary = ?, department_id = ?
            WHERE id = ?`,
            [title, salary, department_id, id]
        )
        res.json(result)
    } catch(err){
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await connection.promise().query(
            `DELETE FROM roles
            WHERE id = ?`,
            id
        )
        res.json(result)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router