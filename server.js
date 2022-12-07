const axios = require('axios');
const https = require('https');
const express = require('express');
const app = express();
require('dotenv').config();

https.globalAgent.options.rejectUnauthorized = false;

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/air', async function(request, response){
    axios({
        method: 'GET',
        url: 'https://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?',
        responseType: 'JSON',
        rejectUnauthorized : false
    }).then(async function (response){
        try{
            const result = await axios.get('http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey='+process.env.SERVICE_KEY,{
                params: {
                    pageNo: '1',
                    numOfRows: '100',
                    _type: 'json',
                    depAirportId: 'NAARKJJ',
                    arrAirportId: 'NAARKPC',
                    depPlandTime: '20201201',
                    airlineId: 'AAR'
                }
            })
            console.log(result.data.response.body.items);
        }catch(error){
            console.log(error);
        }
    })
});
