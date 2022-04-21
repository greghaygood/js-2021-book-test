
Outliner.init("article");

// IIFE usage:
// Tooltip.init("[data-tooltip][data-theme='light']", { color: 'yellow', backgroundColor: 'blue'});
// Tooltip.init("[data-tooltip][data-theme='dark']", {} );


// Class usage:
new ToolTipClass("[data-tooltip][data-theme='light']", { color: 'yellow', backgroundColor: 'blue'});
new ToolTipClass("[data-tooltip][data-theme='dark']", {} );


class Animal {
    constructor() {
        console.log("an animal")
    }

    speak(sound) {
        console.log("an animal says: " + sound)
    }
}

class Dog extends Animal {
    constructor() {
        super()
        console.log("a dog")
    }

    bark() {
        this.speak("bark bark")
    }
}

class Cat extends Animal {
    constructor() {
        super()
        console.log("a cat")
    }

    meow() {
        console.log("meow meow")
    }
}