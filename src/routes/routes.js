const { Router } = require('express')

const SwaggerRoutes = require('../../docs')
const MonopolyRoutes = require('./monopoly-routes')

const route = Router()

const defaultObject = () => ({
  core: 'API Monopoly Game',
  version: 'v1',
  date: new Date(),
})

module.exports = class Routers {
  static initialize() {
    route.all(['/monopoly-game'], (req, res) => {
      res.json(defaultObject)
    })

    SwaggerRoutes.ui(route)
    MonopolyRoutes.routes(route)

    route.use((_, res) => res.status(200).json(defaultObject()))

    return route
  }
}
