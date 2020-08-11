import { injectable, inject } from "tsyringe";

import IApiRequest from "../providers/models/IApiRequest";
// import ImageSchema from "../infra/typeorm/schemas/ImageSchema";
import IDownlaodsRepository from "../repositories/IDownlaodsRepository"

interface IRequest {
    url: string;
}

@injectable()
class DownloadService {

    constructor(
        @inject('apiResquest')
        private apiResquest: IApiRequest,

        @inject('downloadRepository')
        private downloadSave: IDownlaodsRepository
    ) {}

    public async execute({ url }: IRequest): Promise<string[]> {

        const imgArray = await this.apiResquest.registerImgData(url);

        await this.downloadSave.create({
            url,
            site: url
        })

        return imgArray;
}
}

export default DownloadService;