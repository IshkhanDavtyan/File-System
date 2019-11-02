const express = require('express');
const yargs = require('yargs');
const notes = require('./notes');
const app = express();


yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        body: {
            describe: "Notes body",
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Removed a note',
    builder: {
        title: {
            describe: "Remove note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'Reading the note',
    builder:{
        title:{
            describe:"Read note",
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'Lits of all notes',
    handler() {
        notes.listOfNotes()
    }
})
yargs.parse()

