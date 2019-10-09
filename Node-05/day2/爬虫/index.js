const request = require('request');
const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
request('https://588ku.com/?h=bd&sem=1&kw=bd0025842', function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // 响应头
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // 响应体
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // 伪造window
    const { window } = new JSDOM(body);
    const $ = require("jquery")(window);
    // console.log($("img"))
    let imgArr = [];
    let offset = 0;
    $("img").each((index, element) => {
        // console.log($(element).attr('src'))
        let src = $(element).attr('src')
        imgArr.push(src)
        // request(src).pipe(fs.createWriteStream(`./imgs/${index}.jpg`))
    })
    setInterval(() => {
        console.log(`正在下载第${offset + 1}图片，地址为：${imgArr[offset]}`)
        if (imgArr[offset].indexOf('http') >= 0) {
            request(`${imgArr[offset]}`).pipe(fs.createWriteStream(`./imgs/${offset}.jpg`))
        } else {
            request(`http:${imgArr[offset]}`).pipe(fs.createWriteStream(`./imgs/${offset}.jpg`))
        }
        offset++;
    }, 1000);
});