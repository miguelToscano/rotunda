const Lion = require("./Lion");
const Tiger = require("./Tiger");
const Duck = require("./Duck");

const main = () => {
    const lion = new Lion();
    const tiger = new Tiger();
    const duck = new Duck();

    lion.speak("I'm a lion");
    tiger.speak("Lions suck");
    duck.speak("I like fish");
};

main();