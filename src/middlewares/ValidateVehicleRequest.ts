import { NextFunction, Request, Response } from "express";
import { validateVehicleRequestData } from "../models/schemas/VehicleSchema";

export async function validateVehicleRequest(request: Request, response: Response, next: NextFunction) {
  const vehicleRequest = request.body
  const { error } = validateVehicleRequestData(vehicleRequest)
  if (error) return response.status(400).json({ error: error.details[0].message })
  next()
}
