const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'My notes...';


const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find(note => note.title === title)

debugger

    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveData(notes)
        console.log(chalk.green.inverse('New note added'))
    }
    else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title !== title);
    if (duplicateNotes.length === notes.length) {

        console.log(chalk.red.inverse('Thera are not note like that'))
    } else {
        saveData(duplicateNotes);
        console.log(chalk.green.inverse('Note is removed'))
    }
}

const listOfNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.green.inverse(note.title) + "---" + chalk.yellow.inverse(note.body))
    });


}
const readNote = (title) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find(note => note.title === title)
    if (!duplicateNotes) {
        console.log(chalk.red.inverse('There are not that note'))
    }
    else {
        console.log(chalk.green.inverse(duplicateNotes.title) +"---"+ chalk.yellow.inverse(duplicateNotes.body))
    }
}
const saveData = notes => {
    fs.writeFileSync('./notes.json', JSON.stringify(notes))
}

const loadNotes = () => {

    try {
        const notesJSON = fs.readFileSync('./notes.json');
        const note = notesJSON.toString()
        return JSON.parse(note)
    }
    catch{
        return []
    }
}



module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listOfNotes: listOfNotes,
    readNote:readNote
}