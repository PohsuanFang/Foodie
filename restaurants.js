var resList=[];
var resDataLoad=function(){
    restaurants.businesses.forEach(function(item)
    {
        var resInfo={};
        resInfo.name=item["name"];
        resInfo.lat=item["coordinates"]["latitude"];
        resInfo.lng=item["coordinates"]["longitude"];
        resInfo.id=item["id"];
         resList.push(resInfo);

    });
};
var hourcheck=function(){
    const yelp = require('yelp-fusion');
       
        const apiKey = 'XnoaIud1Wk-oLzCjgP_OZUJ0VOrCs1iwgDoJUz0zcCtX2KdErFHCUozgOEIIVULzKYFQTxvdzivMqh8-3qhjUvIRd_zUFvdlXlPUlaskqIOHkTNqXktKWA3gSxPYWnYx';
        client.business(resInfo.id).then(response => {
            console.log(response.jsonBody.hours[0].open[0].start);
          }).catch(e => {
            console.log(e);
          });}
       


