// import axios from 'axios';

const url = 'https://portal-tb.lynxx.co/api-test/image/';

class ImageService {
      static loadImages() {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url + "list");
            xhr.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                  let response = JSON.parse(this.responseText); 
                  console.log(response);
                  resolve(response);
              }
            }
            xhr.onerror = reject;
            xhr.send();
        });
    }

    static importSrcImage(id) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url + `${id}`);
            xhr.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                  let response = JSON.parse(this.responseText); 
                  console.log(response);
                  resolve(response);
              }
            }
            xhr.onerror = reject;
            xhr.send();
        });
    }


}

export default ImageService;