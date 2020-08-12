import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
let Request = require('request');

import uploadConfig from "@config/upload";
import IApiRequest from "../models/IApiRequest";

class apiResquest implements IApiRequest {

    private imgUrlarray: any[];

    constructor() {
        this.imgUrlarray = []
    }

    public async registerImgData(url: string): Promise<any> {
        
        try {

            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url);

            const imgList = await page.evaluate(() => {
                const nodeList = document.querySelectorAll('article img')
                const imgArray = Object.values(nodeList);

                const list = imgArray.map(({src}: any) => ({ src }))

                return list
            })

            this.imgUrlarray.push(imgList)

            for(let i = 0; i < 12; i++) {
                let imgPath = path.resolve(uploadConfig.tmpFolder, `image${i}.jpeg`);
                let writer = fs.createWriteStream(imgPath);
                Request(String(this.imgUrlarray[0][i].src)).pipe(writer)
            }
            await browser.close() 
        } catch(err) {
            console.log(err)
        }
        
        return this.imgUrlarray
    }
}

export default apiResquest;