import connection from "../database/connection";
import { VehicleEntity } from "../models/schemas/VehicleSchema";

export default {

  async findAllVehicles() {
    return connection("vehicles").select("*");
  },

  async findVehicleById(id: string) {
    return connection("vehicles").select("*").where("id", id).first();
  },

  async findVehicleByChassisNumber(chassisNumber: string) {
    return connection("vehicles").select("*").where("chassis_number", chassisNumber).first();
  },

  async createVehicle(vehicle: VehicleEntity) {
    return connection("vehicles").insert(vehicle)
  },

  async updateVehicle(id: string, vehicle: VehicleEntity) {
    return connection("vehicles").update(vehicle).where("id", id).returning("*");
  },

  async deleteVehicle(id: string) {
    return connection("vehicles").delete().where("id", id);
  }
}