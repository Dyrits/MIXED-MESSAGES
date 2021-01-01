const data = {
    characters: ["Doggy the dog", "Catty the cat", "Dylan the human"],
    feelings: ["likes", "dislikes", "loves", "is happy to", "is worried", "is afraid"],
    actions: ["eat", "bark at", "sleep on", "look at", "laugh at"],
    objects: ["spaghetti", "stranger", "needles", "horses", "bed", "red pepper"]
};

const getElementFrom = array => array[Math.floor(Math.random() * array.length)];

mixedMessages = [];

const fillMessages = data => {
    const {feelings, actions, objects} = data;
    data.characters.forEach(character => {
        mixedMessages.push(`${character} ${getElementFrom(feelings)} to ${getElementFrom(actions)} ${getElementFrom(objects)}.`)
    })
}

const display = messages => { console.log(messages.join("\n")); }

fillMessages(data);
display(mixedMessages);