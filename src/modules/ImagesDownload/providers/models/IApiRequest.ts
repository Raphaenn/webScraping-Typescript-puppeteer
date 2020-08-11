// import ImageSchema from "@modules/ImagesDownload/infra/typeorm/schemas/ImageSchema";

export default interface IApiRequest {
    registerImgData(url: string): Promise<string[]>;
}