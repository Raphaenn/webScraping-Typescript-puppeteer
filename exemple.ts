import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import fs from 'fs';
import axios from 'axios';

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (request: Request, response: Response) => {
  response.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/upload', (request: Request, response: Response) => {
  return response.json({
    success: true
  });
});

app.get('/image', (request: Request, response: Response) => {
  response.cookie('session_id', 'sdasdsadasd', { maxAge: 3600 * 24 });
  let stream = fs.createReadStream(path.join(__dirname, 'storage/avatar.jpg'), { encoding: 'base64' });

  stream.on('open', () => {
    stream.pipe(response);
  });
});

app.post('/download', (request: Request, response: Response) => {
  let url: string = request.body.url || null;
  if (url) {
    download(url);
    return response.json({
      success: true
    });
  }
});

const randHashFileName = (length: number) => {
  const max = 24;
  let hash = '';
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (length < max) {
    for (let i = 0; i < length; i++) {
      hash += alphabet[Math.floor(Math.random() * alphabet.length)];
      hash += digits[Math.floor(Math.random() * digits.length)];
    }
    return hash;
  } else {
    return false;
  }
}

const download = (url: string) => {
  axios({
    method: 'GET',
    url,
    responseType: 'stream',
  }).then((response) => {
    let imageExt = String(response.headers['content-type']).split('/').pop();
    let imageName = randHashFileName(16);
    let imgPath = path.resolve(__dirname, 'storage', `${imageName}.${imageExt}`);
    let writer = fs.createWriteStream(imgPath);
    response.data.pipe(writer);
  }).catch((error) => {
    console.log(error);
  });
};

app.listen(port, () => {
  console.log(`Server was working on port ${port}`);
});


let images = ["https://s2.glbimg.com/0mBCd6r-gIuotL0efb9TLFTAGko=…n/ho/f/original/2020/03/24/fina_estampa_45x30.png", "https://s2.glbimg.com/ZyetKnOFsG4BEjKPkiPoO3zc7xY=…com/en/ho/f/original/2020/04/01/logo-45x30-td.png", "https://s2.glbimg.com/aJ9sDJ1wCKy0e1g_5KxlpQoiXuc=…com/en/ho/f/original/2020/04/01/logo-45x30-nm.png", "https://s2.glbimg.com/t1TlENVIurW3DCwCdrSYsIEqmOA=…mg.com/en/ho/f/original/2020/04/08/45x30_copy.jpg", "https://s2.glbimg.com/oP6466pxyx-osBLls6ZiDok4m_8=…img.com/en/ho/f/original/2020/04/29/eta-45-30.jpg", "https://s2.glbimg.com/Fb3tJRW7c3DjMgdrdXYiQLS0ZNM=…/f/original/2019/11/25/logo_amor_de_mae_45x30.png", "https://s2.glbimg.com/4OTbmN9-4NFFUs2m-CiamE27GjE=…om/en/ho/f/original/2020/01/27/logosalve45x30.jpg", "https://s2.glbimg.com/TMo39nCA5QUuY5MFJ423qO31K9g=…photos/bs/2020/m/i/0bgMCwQNayVxgQehP1rg/aerea.jpg", "https://s2.glbimg.com/iiJCjaEfTwhvGHQ_z30IdJ89-_g=…photos/bs/2020/a/f/kk5uw8Qc6K1QEoyEPdfQ/otoni.jpg", "https://s2.glbimg.com/0NwlxX4DQzBmu4PyWJ5IzU_F6kI=…s/bs/2020/M/L/8pGR0GQBOpCFTB3U30NQ/cronologia.jpg", "https://s2.glbimg.com/i0BASgAZ10wdiwPLM-QeJWeNJsE=…2020/s/z/3xiWmZQACP1xyOl9WsRA/ees-p4lxsaml9wx.jpg", "https://s2.glbimg.com/faouTRA4EsDc3_6NqN2KYx_NHMI=…mT11IT5g/48f94dd6-7ae9-4ca7-8489-15c3651f82c7.jpg", "https://s2.glbimg.com/pEMFLFJmImWEL3rPy43SHSp5n3Y=…tos/bs/2020/w/x/OX0a8ZQBmbxayD7CZNaQ/caetano1.jpg", "https://s2.glbimg.com/g4pMBL5uEG-Q2aQRuywDkutyY7s=…dJGw/antenor-caio-castro-fina-estampa-globo-2.jpg"]