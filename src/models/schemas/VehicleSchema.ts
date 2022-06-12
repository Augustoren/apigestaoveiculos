import Joi from 'joi'

const schema = Joi.object({
  brand: Joi.string().required(),
  model: Joi.string().required(),
  color: Joi.string().required(),
  year: Joi.string().required(),
  license_plate: Joi.string().required(),
  chassis_number: Joi.string().required(),
  type: Joi.string().required(),
})

interface VehicleRequest {
  brand: string,
  model: string,
  color: string,
  year: string,
  license_plate: string,
  chassis_number: string,
  type: string,
}

interface VehicleEntity {
  id: string,
  brand: string,
  model: string,
  color: string,
  year: string,
  license_plate: string,
  chassis_number: string,
  type: string,
}


function validateVehicleRequestData(vehicle: VehicleRequest): Joi.ValidationResult<object> {
  return schema.validate(vehicle)
}

export { validateVehicleRequestData, VehicleRequest, VehicleEntity }