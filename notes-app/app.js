const chalk = require('chalk');
const yargs = require("yargs");
const getNotes=require("./notes.js");


//customize yargs version
yargs.version("1.1.2");

//add, remove, read, list
// create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function(){
        console.log("Adding a new note!")
}
})
//create remove command
yargs.command({
    command: "remove",
    describe: "Remove a new note",
    handler: function(){
        console.log("Removed a new note!")
}
})
//create list command
yargs.command({
    command: "list",
    describe: "Listing all notes",
    handler: function(){
        console.log("Listing all notes!")
}
})
//create read command
yargs.command({
    command: "read",
    describe: "reading a note",
    handler: function(){
        console.log("Reading a note!")
}
})
console.log(process.argv);
console.log(yargs.argv);