import { pinJSONToIPFS, pinFileToIPFS } from './pinata'

export const pinFile = async (file) => {
    if (file == null)
      return;

    let pinataResponse  = await pinFileToIPFS(file)
    if (pinataResponse.success) {
      let url = pinataResponse.pinataUrl
      return url
    } else {
        return null
    }
}

export const pinJSON = async (metadata) => {
    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
      return {
        success: false,
        status: "Something went wrong while uploading your tokenURI.",
      };
    } else {
        const tokenURI = pinataResponse.pinataUrl;
        return {
            success: true,
            status: tokenURI
        };
    }
}

export default async function getTokenURI(title, description, coverimage, mainfile, collection) {
    let imageUploaded = await pinFile(coverimage);
    console.log(imageUploaded)

    if (mainfile) {
        let fileUploaded = await pinFile(mainfile);
        if (fileUploaded?.status && imageUploaded?.status) {
            const assetUrl = fileUploaded.value
    
            // make metadata
            const metadata = new Object({
              name: title,
              image: imageUploaded.value,
              description: description,
              assetUrl: assetUrl,
              productType: collection
            });
    
            let tokenURI = await pinJSON(metadata);
    
            return {
                success: true,
                meta: tokenURI.status,
                image: imageUploaded.value,
                file: assetUrl 
            };
        } else {
            return {
                success: false,
                status: "Something went wrong while uploading your tokenURI."
            };
        }
    } else {
        if (imageUploaded?.status) {
            // make metadata
            const metadata = new Object({
              name: title,
              image: imageUploaded.value,
              description: description,
              productType: collection
            });
    
            let tokenURI = await pinJSON(metadata);
    
            return {
                success: true,
                meta: tokenURI.status,
                image: imageUploaded.value,
                file: '' 
            };
        } else {
            return {
                success: false,
                status: "Something went wrong while uploading your tokenURI."
            };
        }
    }
}