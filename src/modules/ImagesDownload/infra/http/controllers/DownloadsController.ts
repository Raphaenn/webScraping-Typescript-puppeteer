import { Request, Response } from "express";
import { container } from "tsyringe"

import DownloadService from "@modules/ImagesDownload/services/DownloadService";

export default class DownloadsController {
  public arrayData: any[];

  public async create(req: Request, res: Response): Promise<Response> {
    const { url } = req.body;

    try {
      const download = container.resolve(DownloadService);

      const urls = await download.execute({
        url
      });

      return res.json(urls);
      
    } catch (err) {
      return res.json({err: err});
    }

  }
};

// await fs.promises.rename(path.resolve(uploadConfig.tmpFolder, file), path.resolve(uploadConfig.uploadFolder, file))