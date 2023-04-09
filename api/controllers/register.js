const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.register = async (req, res) => {
  const { anuncios, username, name, password } = req.body

  try {
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res
        .status(409)
        .json({ message: 'El usuario está registrado' })
    }

    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)

    const passwordHash = await bcrypt.hash(password, salt)

    const user = new User({ anuncios, username, name, password: passwordHash })
    await user.save()

    const token = jwt.sign({ userId: user.id }, 'secretKey')
    res.status(201).json({ token, username })
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}
