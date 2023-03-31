const request = require('request');
const input = process.argv.slice(2);
const fs = require('fs');

request(input[0], (error, response, body)=> {
if (error) {
  console.log("your link is wrong")
}
console.log("response message:", response);
//console.log(body);

const content = body;

fs.writeFile('./index.html', content, err => {
  if (err) {
    console.error(err);
  }
});
})