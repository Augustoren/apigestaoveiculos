import { Router } from "express";
import VehicleController from "../controllers/VehicleController";
import { validateVehicleRequest } from "../middlewares/ValidateVehicleRequest";

const routes = Router()

routes.get("/vehicles", VehicleController.findAllVehicles)
routes.get("/vehicles/:id", VehicleController.findVehicleById)
routes.post("/vehicles", validateVehicleRequest, VehicleController.createVehicle)
routes.put("/vehicles/:id", VehicleController.updateVehicle)
routes.delete("/vehicles/:id", VehicleController.deleteVehicle)

export default routes