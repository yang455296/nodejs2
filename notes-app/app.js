const chalk = require('chalk')
// const { string } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize targs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            ddemandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        notes.listNotes()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read a notes',
    builder: {
        title: {
            describe: 'note title',
            ddemandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
// add, remove, read, list

yargs.parse()
