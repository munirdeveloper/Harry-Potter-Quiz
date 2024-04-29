let gryffCnt = 0;
let slythCnt = 0;
let HuffCnt = 0;
let ravCnt = 0;

const answeredQuestions = {
    Gryffindor: new Set(),
    Slytherin: new Set(),
    Hufflepuff: new Set(),
    Ravenclaw: new Set()
};

export function increGryff(question) {
    if (!answeredQuestions.Gryffindor.has(question)) {
        gryffCnt++;
        answeredQuestions.Gryffindor.add(question);
        console.log("Gryffindor Count: ", gryffCnt);
    }
}

export function increSlyth(question) {
    if (!answeredQuestions.Slytherin.has(question)) {
        slythCnt++;
        answeredQuestions.Slytherin.add(question);
        console.log("Slytherin Count: ", slythCnt);
    }
}

export function increHuff(question) {
    if (!answeredQuestions.Hufflepuff.has(question)) {
        HuffCnt++;
        answeredQuestions.Hufflepuff.add(question);
        console.log("Hufflepuff Count: ", HuffCnt);
    }
}

export function increRav(question) {
    if (!answeredQuestions.Ravenclaw.has(question)) {
        ravCnt++;
        answeredQuestions.Ravenclaw.add(question);
        console.log("Ravenclaw Count: ", ravCnt);
    }
}

export function handleSelection(event) {
    const selectedAnimal = event.target.value;
    const question = event.target.name;

    // Check the selected animal and increment count accordingly
    switch (selectedAnimal) {
        case 'Lion':
            console.log("Selected Lion - Gryffindor");
            increGryff(question); // Increment count for Gryffindor
            break;
        case 'Snake':
            console.log("Selected Snake - Slytherin");
            increSlyth(question); // Increment count for Slytherin
            break;
        case 'Eagle':
            console.log("Selected Eagle - Ravenclaw");
            increRav(question); // Increment count for Ravenclaw
            break;
        case 'Badger':
            console.log("Selected Badger - Hufflepuff");
            increHuff(question); // Increment count for Hufflepuff
            break;
        default:
            console.log("Invalid selection");
    }
}

// QUESTION 2

export function handleSelection2(event) {
    const selectedPower = event.target.value;
    const question = event.target.name;

    switch (selectedPower) {
        case 'Have brute powers (fighting people)':
            console.log("Selected fight - Gryffindor");
            increGryff(question); // Increment count for Gryffindor
            break;
        case 'Have illusion powers (trick people)':
            console.log("Selected trick - Slytherin");
            increSlyth(question); // Increment count for Slytherin
            break;
        case 'Have physical powers (sports and strength)':
            console.log("Selected sport - Ravenclaw");
            increRav(question); // Increment count for Ravenclaw
            break;
        case 'Have healing/herbal powers (helping people)':
            console.log("Selected help - Hufflepuff");
            increHuff(question); // Increment count for Hufflepuff
            break;
        default:
            console.log("Invalid selection");
    }
}

// QUESTION 3

export function handleSelection3(event) {
    const selectedColor = event.target.value;
    const question = event.target.name;

    switch (selectedColor) {
        case 'Red':
            console.log("Selected fight - Gryffindor");
            increGryff(question); // Increment count for Gryffindor
            break;
        case 'Green':
            console.log("Selected trick - Slytherin");
            increSlyth(question); // Increment count for Slytherin
            break;
        case 'Blue':
            console.log("Selected sport - Ravenclaw");
            increRav(question); // Increment count for Ravenclaw
            break;
        case 'Yellow':
            console.log("Selected help - Hufflepuff");
            increHuff(question); // Increment count for Hufflepuff
            break;
        default:
            console.log("Invalid selection");
    }
}

// QUESTION 4

export function handleSelection4(event) {
    const selectedChar = event.target.value;
    const question = event.target.name;

    switch (selectedChar) {
        case 'Hagrid':
            console.log("Selected fight - Gryffindor");
            increGryff(question); // Increment count for Gryffindor
            break;
        case 'Snape':
            console.log("Selected trick - Slytherin");
            increSlyth(question); // Increment count for Slytherin
            break;
        default:
            console.log("Invalid selection");
    }
}

// QUESTION 5

export function handleSelection5(event) {
    const selectedTrait = event.target.value;
    const question = event.target.name;

    switch (selectedTrait) {
        case 'Ambition':
            console.log("Selected fight - Gryffindor");
            increGryff(question); // Increment count for Gryffindor
            break;
        case 'Loyalty':
            console.log("Selected trick - Slytherin");
            increSlyth(question); // Increment count for Slytherin
            break;
        case 'Courage':
            console.log("Selected sport - Ravenclaw");
            increRav(question); // Increment count for Ravenclaw
            break;
        case 'Intelligence':
            console.log("Selected help - Hufflepuff");
            increHuff(question); // Increment count for Hufflepuff
            break;
        default:
            console.log("Invalid selection");
    }
}

// QUESTION 6

export function handleSelection6(event) {
    const selectedPet = event.target.value;
    const question = event.target.name;

    switch (selectedPet) {
        case 'Owl':
            console.log("Selected fight - Gryffindor");
            increGryff(question); // Increment count for Gryffindor
            break;
        case 'Rat':
            console.log("Selected trick - Slytherin");
            increSlyth(question); // Increment count for Slytherin
            break;
        case 'Frog':
            console.log("Selected sport - Ravenclaw");
            increRav(question); // Increment count for Ravenclaw
            break;
        case 'Cat':
            console.log("Selected help - Hufflepuff");
            increHuff(question); // Increment count for Hufflepuff
            break;
        default:
            console.log("Invalid selection");
    }
}

// QUESTION 7

export function handleSelection7(event) {
    const selectedHero = event.target.value;
    const question = event.target.name;

    switch (selectedHero) {
        case 'Dumbledore':
            console.log("Selected fight - Gryffindor");
            increGryff(question); // Increment count for Gryffindor
            break;
        case 'Voldemort':
            console.log("Selected trick - Slytherin");
            increSlyth(question); // Increment count for Slytherin
            break;
        default:
            console.log("Invalid selection");
    }
}

// QUESTION 8

export function handleSelection8(event) {
    const selectedGame = event.target.value;
    const question = event.target.name;

    switch (selectedGame) {
        case 'The Dragon and the Egg':
            console.log("Selected fight - Gryffindor");
            increGryff(question); // Increment count for Gryffindor
            break;
        case 'The Maze':
            console.log("Selected trick - Slytherin");
            increSlyth(question); // Increment count for Slytherin
            break;
        case 'The Black Lake':
            console.log("Selected sport - Ravenclaw");
            increRav(question); // Increment count for Ravenclaw
            break;
        default:
            console.log("Invalid selection");
    }
}

// getting the maximum score now

export function calculateMaxScore() {
    let maxScore;

    if (gryffCnt >= slythCnt && gryffCnt >= ravCnt && gryffCnt >= HuffCnt) {
        maxScore = gryffCnt;
        console.log("The Sorting Hat puts you in Gryffindor!");
    }

    if (slythCnt >= gryffCnt && slythCnt >= ravCnt && slythCnt >= HuffCnt) {
        maxScore = slythCnt;
        console.log("The Sorting Hat puts you in Slytherin!");
    }

    if (ravCnt >= gryffCnt && ravCnt >= slythCnt && ravCnt >= HuffCnt) {
        maxScore = ravCnt;
        console.log("The Sorting Hat puts you in Ravenclaw!");
    }

    if (HuffCnt >= gryffCnt && HuffCnt >= slythCnt && HuffCnt >= ravCnt) {
        maxScore = HuffCnt;
        console.log("The Sorting Hat puts you in Hufflepuff!");
    }

    return maxScore;
}


export function validateForm() {
    var name = document.getElementById('user_name').value;
    var age = document.getElementById('user_age').value;

    if (name === '' || age === '') {
        alert('Please fill in your name and age before submitting the form.');
        return false;
    } else {
        // Proceed with form submission
        return true;
    }
}

// export function handleFormSubmission() {

//     if (validateForm()) {
//         const maxScore = calculateMaxScore();
//         const userName = document.getElementById('user_name').value;
//         const message = document.createElement('p');
//         message.textContent = "The Sorting Hat puts " + userName + " in " + getHouseName(maxScore) + "!";
//         message.classList.add('text-center', 'text-2xl', 'font-semibold', 'mt-8');
//         document.getElementById('user_form').appendChild(message);
//         document.getElementById('user_form').reset(); 

//         // Create and append image element for the house logo
//         const houseLogo = document.createElement('img');
//         houseLogo.classList.add('mx-auto', 'mt-4', 'outline', 'outline-blue-500', 'ring', 'ring-offset-2', 'rounded-lg'); 
//         houseLogo.alt = "House Logo";
//         houseLogo.src = getHouseLogo(maxScore); // Get the path of the respective house logo
//         document.getElementById('user_form').appendChild(houseLogo);

//         document.getElementById('user_form').reset(); // Reset the form
//     }
// }   

export function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    if (validateForm()) {
        const maxScore = calculateMaxScore();
        const userName = document.getElementById('user_name').value;
        const message = document.createElement('p');
        message.textContent = "The Sorting Hat puts " + userName + " in " + getHouseName(maxScore) + "!";
        message.classList.add('text-center', 'text-2xl', 'font-semibold', 'mt-8');
        document.getElementById('user_form').appendChild(message);
        document.getElementById('user_form').reset(); 

        // Create and append image element for the house logo
        const houseLogo = document.createElement('img');
        houseLogo.classList.add('mx-auto', 'mt-4', 'outline', 'outline-blue-500', 'ring', 'ring-offset-2', 'rounded-lg'); 
        houseLogo.alt = "House Logo";
        houseLogo.src = getHouseLogo(maxScore); // Get the path of the respective house logo
        document.getElementById('user_form').appendChild(houseLogo);

        document.getElementById('user_form').reset(); // Reset the form
    }
}

function getHouseName(score) {
    if (score === gryffCnt) {
        return "Gryffindor";
    } else if (score === slythCnt) {
        return "Slytherin";
    } else if (score === ravCnt) {
        return "Ravenclaw";
    } else if (score === HuffCnt) {
        return "Hufflepuff";
    }   
}

function getHouseLogo(score) {
    switch (score) {
        case gryffCnt:
            return "/gryffindor_logo.jpg";
        case slythCnt:
            return "/slytherin_logo.png";
        case ravCnt:
            return "/ravenclaw_logo.png";
        case HuffCnt:
            return "/hufflepuff_logo.jpg";
        default:
            return ""; 
    }
}