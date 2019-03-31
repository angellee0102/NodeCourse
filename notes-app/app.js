const fs = require('fs');

fs.writeFileSync('notes.txt','My name is Angel. ');

fs.appendFileSync('notes.txt', 'Hi I am from Taiwan.')