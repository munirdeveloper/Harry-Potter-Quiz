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
    const selectedAnimal = event.target.value;
    const question = event.target.name;

    // Check the selected animal and increment count accordingly
    switch (selectedAnimal) {
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
