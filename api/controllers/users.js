const usersRouter = require('express').Router()
const User = require('../models/User')

usersRouter.post('/', async (req, res, next) => {
  try {
    const body = req.body
    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash: body.password
    })
    const savedUser = await user.save()
    res.json(savedUser)
  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter
