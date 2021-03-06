const url = 'https://portal-tb.lynxx.co/api-test/image/';

class ImageService {

    //Retrieve list of images
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

    //Import image id
    static importSrcImage(id) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url + `${id}`);
            xhr.onload = function(){
                var img = new Image();
                var response = xhr.responseText;
                var binary = ""
                 
                for(let i = 0;i < response.length; i++){
                    binary += String.fromCharCode(response.charCodeAt(i) & 0xff);
                }
                img.src = 'data:image/jpeg;base64,' + btoa(binary);
                resolve(img.src);
            }
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
            xhr.onerror = reject;
            xhr.send();
        });
    }


}

export default ImageService;