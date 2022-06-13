import { Request, Response } from 'express'

export default {

  async index(request: Request, response: Response) {
    return response.json({
      message: 'Seja-bem vindo a API de veículos',
      endpoints: {
        "getAllVehicles": "/vehicles",
        "getVehicleById": "/vehicles/:id",
        "createVehicle": "/vehicles",
        "updateVehicle": "/vehicles/:id",
        "deleteVehicle": "/vehicles/:id"
      },
      documentation: "/api-docs"
    })
  }
}