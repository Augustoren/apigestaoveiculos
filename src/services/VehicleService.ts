import { VehicleEntity, VehicleRequest } from "../models/schemas/VehicleSchema";
import VehicleRepository from "../repositories/VehicleRepository";
import { v4 as uuid } from 'uuid'
import VehicleResponse from "../models/response/VehicleResponse";

export default {

  async findAllVehicles() {
    const vehicles = await VehicleRepository.findAllVehicles();
    return VehicleResponse.vehicleResponse(200, vehicles);
  },

  async findVehicleById(id: string) {
    const vehicle = await VehicleRepository.findVehicleById(id);
    if (!vehicle) {
      return VehicleResponse.vehicleResponse(404, { message: "Vehicle not found" });
    }
    return VehicleResponse.vehicleResponse(200, vehicle);
  },

  async createVehicle(vehicle: VehicleRequest) {

    const vehicleExists = await VehicleRepository.findVehicleByChassisNumber(vehicle.chassis_number);
    if (vehicleExists) {
      return VehicleResponse.vehicleResponse(400, { message: "Vehicle already exists" });
    }

    const id = uuid()
    const vehicleEntity: VehicleEntity = {
      id,
      brand: vehicle.brand,
      model: vehicle.model,
      color: vehicle.color,
      year: vehicle.year,
      license_plate: vehicle.license_plate,
      chassis_number: vehicle.chassis_number,
      type: vehicle.type
    }
    await VehicleRepository.createVehicle(vehicleEntity);
    const newVehicle = await VehicleRepository.findVehicleById(id);
    return VehicleResponse.vehicleResponse(200, newVehicle)
  },

  async updateVehicle(id: string, vehicle: VehicleRequest) {

    const vehicleEntity: VehicleEntity = {
      id,
      brand: vehicle.brand,
      model: vehicle.model,
      color: vehicle.color,
      year: vehicle.year,
      license_plate: vehicle.license_plate,
      chassis_number: vehicle.chassis_number,
      type: vehicle.type
    }

    const updatedVehicle = await VehicleRepository.updateVehicle(id, vehicleEntity);
    return VehicleResponse.vehicleResponse(200, updatedVehicle);
  },

  async deleteVehicle(id: string) {

    const vehicle = await VehicleRepository.findVehicleById(id)
    if (!vehicle) return VehicleResponse.vehicleResponse(404, { message: "Vehicle not found" });
    await VehicleRepository.deleteVehicle(id);
    return VehicleResponse.vehicleResponse(200, { message: "Vehicle deleted" });
  }

}