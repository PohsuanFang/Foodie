'use strict';


const yelp=require('yelp-fusion');
var fs=require('fs');
const apiKey = 'XnoaIud1Wk-oLzCjgP_OZUJ0VOrCs1iwgDoJUz0zcCtX2KdErFHCUozgOEIIVULzKYFQTxvdzivMqh8-3qhjUvIRd_zUFvdlXlPUlaskqIOHkTNqXktKWA3gSxPYWnYx';
const client = yelp.client(apiKey);

var res=require('resCleaned.js');

var search=function(id)
{

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app

return client.business(id).then(response => {
    console.log(response.jsonBody);
  }).catch(e => {
    console.log(e);
  });};

  search('toscaninis-ice-cream-cambridge-3');
