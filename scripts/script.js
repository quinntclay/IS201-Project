// Array of Viola Jokes
const jokes = [
    "Why do violists leave their cases on the dashboard? So they can park in handicapped spaces!",
    "How do you keep your violin from getting stolen? Put it in a viola case!",
    "What's the difference between a viola and an onion? Nobody cries when you chop up a viola.",
    "Why are viola jokes so short? So violinists can understand them.",
    "Why don’t violists play hide and seek? Because good luck hiding a viola!",
    "How do you tell when a violist is out of tune? The bow keeps moving!",
    "What's the difference between a viola and a trampoline? You take off your shoes before jumping on a trampoline.",
    "Why did the violist cross the road? To get away from the conductor!",
    "Why did the violist stare at the music? It said 'viola solo' and they didn’t know what to do!",
    "What's the similarity between lightning and a viola solo? You never hear it twice."
];

// Function to Generate a Random Joke
function generateJoke() {
    // Get a random joke
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];

    // Display the joke in the paragraph
    document.getElementById("vj-joke").innerText = joke;
}

// Add event listener to the button
document.getElementById("vj-button").addEventListener("click", generateJoke);