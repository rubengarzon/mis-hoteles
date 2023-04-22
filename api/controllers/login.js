const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username })

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Usuario incorrecto' })
    }

    const passwordMatches = await bcrypt.compare(password, user.password)
    if (!passwordMatches) {
      return res.status(401).json({ error: 'Credenciales inválidas' })
    }

    const token = jwt.sign({ userId: user.id }, 'secretKey')
    res.json({ token, username, id: user.id })
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión' })
  }
}
