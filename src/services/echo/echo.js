// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { EchoMessagesService, getOptions } from './echo.class.js'

export const echoMessagesPath = 'echo'
export const echoMessagesMethods = ['create']

export * from './echo.class.js'

// A configure function that registers the service and its hooks via `app.configure`
export const echoMessages = (app) => {
  // Register our service on the Feathers application
  app.use(echoMessagesPath, new EchoMessagesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: echoMessagesMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(echoMessagesPath).hooks({
    around: {
      all: [
      ]
    },
    before: {
      all: [],
      get: [],
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
