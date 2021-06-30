const Pool = require('pg').Pool
const pool = new Pool({
  user: 'docker',
  host: process.env.POSTGRES_HOST,
  database: 'docker',
  password: 'docker',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM "TBL_USUARIO" ORDER BY id_usuario ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM "TBL_USUARIO" WHERE id_usuario = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const updateUser = (request, response) => {
  console.log(request.params.id)
  const id = parseInt(request.params.id)
  console.log(id)
  const { name, email, identification, phone } = request.body

  pool.query(
    'UPDATE "TBL_USUARIO" SET nombre_usuario = $1, mail_usuario = $2, cedula_usuario = $3, teléfono_usuario = $4 WHERE id_usuario = $5',
    [name, email, identification, phone, id ],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const createUser = (request, response) => {
  const { name, email, identification, phone } = request.body

  pool.query('INSERT INTO "TBL_USUARIO" (nombre_usuario, mail_usuario, cedula_usuario, teléfono_usuario) VALUES ($1, $2, $3, $4)', [name, email, identification, phone], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM "TBL_USUARIO" WHERE id_usuario = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}