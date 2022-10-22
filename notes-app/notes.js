const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')


const addNote = (title, body) => {
    // const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added!'))
    } else {
        console.log(chalk.red.inverse('no note added!'))
    }

    /*
    const duplicateNotes = notes.filter((note) => note.title === title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added!'))
    } else {
        console.log(chalk.red.inverse('no note added!'))
    }
    */
}

const removeNote = (title) => {
    // const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    // })
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('no note find!'))
    }
}

const listNotes = (title) => {
    console.log(chalk.inverse('all your notes'))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('no note find!'))
    }
}

const saveNotes = (notes) => {
    // const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    // const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}