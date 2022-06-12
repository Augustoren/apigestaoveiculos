import { Router } from "express";
import ApplicationController from '../controllers/ApplicationController';

const routes = Router()

routes.get('/', ApplicationController.index)

export default routes