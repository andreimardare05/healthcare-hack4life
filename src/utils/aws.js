'use strict';

import { Rekognition, S3 } from 'aws-sdk/dist/aws-sdk-react-native';
import options from './config';

global.Buffer = global.Buffer || require('buffer').Buffer;

const s3Client = new S3(options.options);
const rekognition = new Rekognition(options.options);

const compareFaces = async (image) => {
    const params = {
        SimilarityThreshold: 90, 
        SourceImage: {
            S3Object: {
                Bucket: "hack4life-images", 
                Name: "images/b0e06b39-ce35-44cc-a454-f3150133ea21.jpg"
            }
        }, 
        TargetImage: {
            Bytes: Buffer.from(image, 'base64')
        }
    };

    return new Promise((resolve, reject) => {
        rekognition.compareFaces(params, function(err, data) {
            if (err) {
                return reject(err);
            }

            resolve(data);
        });
    });
};

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
    uploadImage,
    compareFaces
};