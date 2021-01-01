const data = require("./data");

const getElementFrom = array => array[Math.floor(Math.random() * array.length)];

mixedMessages = [];

const fillMessages = data => {
    const {characters, feelings, actions, objects} = data;
    data.characters.forEach(character => {
        mixedMessages.push(`${character} ${getElementFrom(feelings)} to ${getElementFrom(actions)} ${getElementFrom(objects)}.`)
    })
}

const display = messages => { console.log(messages.join("\n")); }

fillMessages(data);
display(mixedMessages);