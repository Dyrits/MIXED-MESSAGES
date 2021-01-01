const data = {
    characters: ["Alfred", "Bruce", "Harvey"],
    feelings: ["likes", "dislikes", "loves", "is happy", "hates"],
    actions: ["eat", "yell at", "sleep on", "look at", "laugh at"],
    objects: ["spaghetti", "stranger", "needles", "horses", "bed"]
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