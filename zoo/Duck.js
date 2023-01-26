const Animal = require("./Animal");

const DUCK_SOUND = "quack";

class Duck extends Animal {
    constructor() {
        super(DUCK_SOUND);
    }
}

module.exports = Duck;