// Javascript Random Message Generator

// create messages object to store potential messages
const msgChoices = {
    luckyNum: Math.floor(Math.random() * 100),
    randQuote: ["The older you get, the better you get, unless you're a banana.", "I'm not superstitious, but I am a little stitious.", "If I'm not back in five minutes, just wait longer.", "I’m not good at the advice. Can I interest you in a sarcastic comment?", "A day without sunshine is like, you know, night.", "Anyone who lives within their means suffers from a lack of imagination."],
    newFood: ["chimichurri", "brazillian cheese bread", "passionfruit", "Tikka Masala", "smash burgers"]
}

//generate random number to select values from msgChoices object
function randNum(num) { return Math.floor(Math.random() * num) };

//save random choices to array
const message = [];

//pick random value from each msgChoices property
for (let prop in msgChoices) {
    let selection = randNum(msgChoices[prop].length);

    if (prop === 'randQuote') {
        message.push(`Words of wisdom: "${msgChoices[prop][selection]}"`);
    }
    else if (prop === 'luckyNum') {
        message.push(`Your lucky number is ${msgChoices[prop]}`);
    }
    else if (prop === 'newFood') {
        message.push(`For something new, try: ${msgChoices[prop][selection]}`);
    }
}

console.log(message);