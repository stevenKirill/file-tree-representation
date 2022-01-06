const dirTree = require("directory-tree");
const fs = require('fs');
const path = require('path');
const tree = dirTree('../src');


const json = JSON.stringify(tree);
fs.writeFile('../src/data/tree.json', json, 'utf8', (err) => {
    if (err) throw err;
    console.log('successfully made json');
})