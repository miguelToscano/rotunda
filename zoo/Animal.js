class Animal {
    constructor(animalSound) {
        this.animalSound = animalSound;
    }

    speak(message) {
        const newMessage = [];
        const splitMessage = message.split(" ");

        for (let i = 0; i < splitMessage.length; i ++) {
            newMessage.push(splitMessage[i]);
            newMessage.push(this.animalSound);
        }

        console.log(newMessage.join(" "));
    }
}

module.exports = Animal;