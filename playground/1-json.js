const fs = require('fs')



const data = fs.readFileSync('1-json.json');
const parseData = JSON.parse(data);

parseData.name = 'Ishkhan';
parseData.age = 24;

fs.writeFileSync('1-json.json',JSON.stringify(parseData))