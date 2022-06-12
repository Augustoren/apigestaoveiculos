import { Request, Response } from "express";
import VehicleService from "../services/VehicleService";

export default {

  async findAllVehicles(req: Request, res: Response) {
    const data = await VehicleService.findAllVehicles();
    return res.status(data.statusCode).json(data.data);
  },

  async findVehicleById(req: Request, res: Response) {
    const id = req.params.id;
    const data = await VehicleService.findVehicleById(id);
    return res.status(data.statusCode).json(data.data);
  },

  async createVehicle(req: Request, res: Response) {
    const vehicle = req.body;
    const data = await VehicleService.createVehicle(vehicle);
    return res.status(data.statusCode).json(data.data);
  },

  async updateVehicle(req: Request, res: Response) {
    const id = req.params.id;
    const vehicle = req.body;
    const data = await VehicleService.updateVehicle(id, vehicle);
    return res.status(data.statusCode).json(data.data);
  },

  async deleteVehicle(req: Request, res: Response) {
    const id = req.params.id;
    const data = await VehicleService.deleteVehicle(id);
    return res.status(data.statusCode).json(data.data);
  }

}