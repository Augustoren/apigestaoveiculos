import express from 'express'
import swaggerUi from 'swagger-ui-express'
import VehicleRoutes from './routes/VehicleRoutes'
import ApplicationRoutes from './routes/ApplicationRoutes'
import swaggerDocument from './swagger.json'

const app = express()

app.use(express.json())

//Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//Resources routes
app.use(VehicleRoutes)
app.use(ApplicationRoutes)

export default app