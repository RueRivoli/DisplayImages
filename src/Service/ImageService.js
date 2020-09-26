import axios from 'axios';

const url = 'https://portal-tb.lynxx.co/api-tests/image';

class ImageService {

    // Retrieve images from the API
    static getImages() {
        return new Promise(function(resolve, reject) {
            try {
                return axios.get(url).then(function (response) {
                    console.log('reponse')
                    console.log(response);
                    resolve(response.data);
                }).catch(function (error) {
                    console.log('Error');
                    console.log(error);
                    reject(error);
                });
            } catch(err) {
                console.log('Error');
                console.log(err);
                reject(err);
            }
        })
    }

}

export default ImageService;