'use strict';

import { Rekognition, S3 } from 'aws-sdk/dist/aws-sdk-react-native';
import options from './config';

global.Buffer = global.Buffer || require('buffer').Buffer;

const s3Client = new S3(options.options);

// const client = new Rekognition(options);
// const params = {
//     Image: {
//       Bytes: Buffer.from(photo.base64, 'base64')
//     },
//     Attributes: ['ALL']
// };

// client.detectFaces(params, (err, res) => {
//     console.log(err, res);
// });

const uploadImage = async (photo, key) => {
    const data = {
        Bucket: 'hack4life-images',
        Key: `images/${key}.jpg`,
        Body: Buffer.from(photo, 'base64')
    };
    
    return new Promise((resolve, reject) => {
        s3Client.putObject(data, (err, res) => {
            if (err) { 
                return reject(err);
            }

            resolve(res);
        });
    });
};

export {
    uploadImage
};