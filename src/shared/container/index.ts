import { container } from "tsyringe";

import IDownlaodsRepository from "@modules/ImagesDownload/repositories/IDownlaodsRepository";
import DownlaodsRepository from "@modules/ImagesDownload/infra/typeorm/repositories/DownlaodsRepository";

import IApiRequest from "@modules/ImagesDownload/providers/models/IApiRequest";
import apiRequest from "@modules/ImagesDownload/providers/implementations/apiRequest";

container.registerSingleton<IDownlaodsRepository>("downloadRepository", DownlaodsRepository);

container.registerSingleton<IApiRequest>("apiResquest", apiRequest);