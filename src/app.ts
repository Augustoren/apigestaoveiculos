import express from 'express'
import VehicleRoutes from './routes/VehicleRoutes'

const app = express()

app.use(express.json())
app.use(VehicleRoutes)

export default app