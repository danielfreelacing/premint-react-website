// const axios = require('axios');
import axios from 'axios';
const pinata_api_key = "2cb0952b2165aa3a6807"
const pinata_secret_api_key = "8b8279f9f502c8b1a792cf37e95e9ec3ce09b96a7c504d01b8662e8ade908dfa"

export const pinFileToIPFS = (file) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    
    let formData = new FormData();
    formData.append('file', file);

    return axios.post(url,
        formData,
        {
            headers: {
                'Content-Type': `multipart/form-data; boundary= ${formData._boundary}`,
                // 'pinata_api_key': process.env.NEXT_PINATA_API_KEY,
                // 'pinata_secret_api_key': process.env.NEXT_PINATA_SECRET_API_KEY
                'pinata_api_key': pinata_api_key,
                'pinata_secret_api_key': pinata_secret_api_key
            }
        }
    ).then(function (response) {
        //handle response here
        return {
            success: true,
            pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
        }
    }).catch(function (error) {
        //handle error here
        console.log(error)
        return {
            success: false,
            message: error.message,
        }
    });
};

export const pinJSONToIPFS = async(JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios 
        .post(url, JSONBody, {
            headers: {
                // pinata_api_key: process.env.NEXT_PINATA_API_KEY,
                // pinata_secret_api_key: process.env.NEXT_PINATA_SECRET_API_KEY,
                pinata_api_key: pinata_api_key,
                pinata_secret_api_key: pinata_secret_api_key,
            }
        })
        .then(function (response) {
           return {
               success: true,
               pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }
    });
};