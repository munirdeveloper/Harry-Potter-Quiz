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