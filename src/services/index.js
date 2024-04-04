import { echoMessages } from './echo/echo.js'

export const services = (app) => {
  app.configure(echoMessages)

  // All services will be registered here
}
