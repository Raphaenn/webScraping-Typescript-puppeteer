import ImageSchema from "../infra/typeorm/schemas/ImageSchema";
import IDownloadDTO from "../dtos/IDownloadDTO";
 
export default interface IDownlaodsRepository {
    findBySite(site: string): Promise<ImageSchema[]>;
    create({url, site}: IDownloadDTO): Promise<ImageSchema>;
}