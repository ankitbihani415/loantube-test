// This is a skeleton for a custom service class. Remove or add the methods you need here
export class EchoMessagesService {
  constructor(options) {
    this.options = options
  }

  async create(data, params, context) {
    return data;
  }
}

export const getOptions = (app) => {
  return { app }
}
