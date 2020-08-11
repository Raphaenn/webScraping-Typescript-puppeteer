import 'reflect-metadata';

import express from "express";
import routes from "./routes";

import uploadConfig from "@config/upload";
import "@shared/infra/typeorm";
import "@shared/container";

const app = express();

app.use(express.json());
app.use("/files", express.static(uploadConfig.uploadFolder))
app.use(routes);

app.listen(8080, () => {
    console.log('******************************');
    console.log(`SERVER STARTED as development`);
    console.log('******************************');
});