const Animal = require("./Animal");

const LION_SOUND = "roar";

class Lion extends Animal {
    constructor() {
        super(LION_SOUND);
    }
}

module.exports = Lion;
