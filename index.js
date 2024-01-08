//variables


let quote = document.querySelector('.quote');  // Corrected variable name
let person = document.querySelector('.person');  // Corrected variable name

const quotes = [
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", person: "Robert Frost" },
    { quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "Don't watch the clock; do what it does. Keep going.", person: "Sam Levenson" },
    { quote: "The best way to predict the future is to create it.", person: "Peter Drucker" },
    { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", person: "Brian Tracy" },
    { quote: "The purpose of our lives is to be happy.", person: "Dalai Lama" },
    { quote: "The only person you are destined to become is the person you decide to be.", person: "Ralph Waldo Emerson" },
    { quote: "Life is what happens to you while you're busy making other plans.", person: "John Lennon" },
    { quote: "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.", person: "Eleanor Roosevelt" },
    { quote: "Life’s greatest happiness is to be convinced we are loved.", person: "Victor hugo" },
    { quote: "We cannot solve problems with the kind of thinking we employed when we came up with them.", person: "Albert Einstein" },
];

document.getElementById('new-quote').addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    quote.textContent = quotes[random].quote;
    person.textContent = quotes[random].person;
});

// function abcd(){
//         let random = Math.floor(Math.random() * quotes.length);
//         console.log(random);
//         quote.textContent = quotes[random].quote;
//         person.textContent = quotes[random].person;
// }