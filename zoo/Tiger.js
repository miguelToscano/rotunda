const Animal = require("./Animal");

const TIGER_SOUND = "grrr";

class Tiger extends Animal {
    constructor() {
        super(TIGER_SOUND);
    }
}

module.exports = Tiger;