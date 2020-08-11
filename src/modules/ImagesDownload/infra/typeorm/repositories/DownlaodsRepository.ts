import { MongoRepository, getMongoRepository } from "typeorm";

import IDownlaodsRepository from "@modules/ImagesDownload/repositories/IDownlaodsRepository";
import ImageSchema from "../schemas/ImageSchema";
import IDownloadDTO from "@modules/ImagesDownload/dtos/IDownloadDTO";

 class DownlaodsRepository implements IDownlaodsRepository {
    private ormRepository: MongoRepository<ImageSchema>

    constructor() {
        this.ormRepository = getMongoRepository(ImageSchema, 'mongo');
    }

    public async findBySite(site: string): Promise<ImageSchema[]> {
        const allimages = await this.ormRepository.find({
            where: { site }
        })

        return allimages
    }

    public async create({url, site}: IDownloadDTO): Promise<ImageSchema> {
        const imgData = this.ormRepository.create({
            url,
            site
        })

        await this.ormRepository.save(imgData)

        return imgData;
    }

}

export default DownlaodsRepository;