let characterName = ["Jack ", "Jill ", "Jason ", "Kendall ", "Kylie ", "Kimber "];

let action = ["ran down the hill ", "slept in the field ", "talked with the store owner ", "played in the rain "];

let dayOfTheWeek = ["on Monday.", "on Tuesday.", "on Wednesday.", "on Thursday.", "on Friday.", "on Saturday.", "on Sunday.",];

const sillyMessage = (message) => {
    let randomNum = Math.floor(Math.random() * message.length);
    return message[randomNum];
};

const messageStitch = () => {
    return `${sillyMessage(characterName)} ${sillyMessage(action)} ${sillyMessage(dayOfTheWeek)}`;
}

console.log(messageStitch());