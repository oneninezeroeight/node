const request = require('request');
const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
request('http://www.umei.cc/p/gaoqing/cn/', function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // 响应头
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // 响应体
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // 伪造window
    const { window } = new JSDOM(body);
    const $ = require("jquery")(window);
    // console.log($("img"))
    $("a").each((index,element)=>{
        console.log($(element).attr('title'))
    })
});