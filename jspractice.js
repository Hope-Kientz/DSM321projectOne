// function helloWorld() {
//     console.log("Hello World");

// }

// function chooseANumber() {
//     var numList = [4, 6, 5, 8, 3, 2, 4, 7];
//     Math.random(numList);

// }

function chooseAWord() {
    // let dictionary = new Map([
    //     [1, "they"],
    //     [2, "hey"],
    //     [3, "bananas"],
    //     [4, "yogurt"]
    // ]);
    // let keys = [];
    // let i = 0
    // for (keys in dictionary) {
    // }
    var words = ["hello", "bananas", "they", "yogurt", "javascript sucks"];
    var i = [1, 2, 3, 4, 5];
    var randomI = Math.random(i);
    console.log("Today is the day that" + words[randomI] + "take over the world.");

}