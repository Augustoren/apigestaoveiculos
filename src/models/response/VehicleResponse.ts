import { any } from "joi";
import { VehicleEntity } from "../schemas/VehicleSchema";

export default {

  async vehicleResponse(statusCode: number, data) {
    return { statusCode, data }
  }

}