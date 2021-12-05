app.factory("databaseService", ["$http", "$log",function($http, $log, method, url){
    let getFiles = (url) =>{
        $http.get(url).then((response)=>{
            console.log(response);
            return response.data;
        }).then((data)=>{
            return data;
        })
    }
    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    download(jsonData, 'json.txt', 'text/plain');
    // gets data then saves it to the json file that will be used as the database.
    let saveData = (url, userData)=>{
        this.getFiles(url).then((response)=>{
            console.log(response);
            return response.data
        }).then((data)=>{
            let dataArr = JSON.parse(data);
        
        })
    }
    return {
        
    }
}])