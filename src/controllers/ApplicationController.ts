import { Request, Response } from 'express'

export default {

  async index(request: Request, response: Response) {
    return response.json({
      "getAllVehicles": "/vehicles",
      "getVehicleById": "/vehicles/:id",
      "createVehicle": "/vehicles",
      "updateVehicle": "/vehicles/:id",
      "deleteVehicle": "/vehicles/:id"
    })
  }

}