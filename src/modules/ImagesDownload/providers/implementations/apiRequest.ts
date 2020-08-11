import axios, { AxiosInstance } from "axios";
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
let Url = require('url')
let Request = require('request');

import uploadConfig from "@config/upload";

import IApiRequest from "../models/IApiRequest";

interface Element {
    querySelectorAll(name: string): string;
}

class apiResquest implements IApiRequest {

    private getUrl: AxiosInstance;
    private imgUrlarray: any[];

    constructor() {
        this.getUrl = axios;
        this.imgUrlarray = new Array()
    }

    public async registerImgData(url: string): Promise<any> {
        
        try {

            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url);

            const imgList = await page.evaluate(() => {
                const nodeList = document.querySelectorAll('img')
                const imgArray = Object.values(nodeList);

                const list = imgArray.map(({src}: any) => ({ src }))

                return list
            })

            fs.writeFile("insta.txt", JSON.stringify(imgList, null, 2), err => {
                if(err) throw new Error("something wrong");

                console.log( "Well done")
            })

            this.imgUrlarray.push(imgList)

            await browser.close()
        } catch(err) {
            console.log(err)
        }
        // try {
        //     await this.getUrl.get(url).then(responseUrl => {
        //         const $ = cheerio.load(responseUrl.data);
        //             $("img").each((i, images) => {
        //                 this.imgUrlarray.push(Url.resolve(url, $(images).attr("src")))
        //                 console.log(this.imgUrlarray)
        //             });
        //         }).catch((error) => {
        //         console.log(error);
        //     });
            
        //     for(let i = 0; i < this.imgUrlarray.length; i++) {
        //         let imgPath = path.resolve(uploadConfig.tmpFolder, `Image${i}.jpg`);
        //         let writer = fs.createWriteStream(imgPath);
        //         Request(this.imgUrlarray[i]).pipe(writer)
        //     }
        // } catch (err) {
        //     console.log("error")
        // }

        return this.imgUrlarray
    }
}

export default apiResquest;