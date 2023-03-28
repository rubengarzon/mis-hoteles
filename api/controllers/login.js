const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.login = async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })

  if (!user) {
    return res
      .status(401)
      .json({ message: 'Usuario o contraseña incorrectos' })
  }

  if (user.password !== password) {
    return res
      .status(401)
      .json({ message: 'Usuario o contraseña incorrectos' })
  }

  const token = jwt.sign({ userId: user.id }, 'secretKey')
  res.json({ token })
}
