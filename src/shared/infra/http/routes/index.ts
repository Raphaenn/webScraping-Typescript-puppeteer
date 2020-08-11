import { Router } from "express";

import downloadRoute from "@modules/ImagesDownload/infra/http/routes/download.routes";

const routes = Router();

routes.use('/downloadimages', downloadRoute);

export default routes;