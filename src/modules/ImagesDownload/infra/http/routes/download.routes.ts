import { Router } from "express";

import DownloadsController from "../controllers/DownloadsController";

const downloadController = new DownloadsController();

const downloadRoute = Router();

downloadRoute.post("/", downloadController.create);

export default downloadRoute;