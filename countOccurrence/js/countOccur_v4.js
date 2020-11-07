const studentNamesCollection = [

    'Nora',
    'Edward',
    'Preston',
    'Farren',
    'Winston',
    'Hugo',
    'Heidi',
    'Polaris',
    'Farren',
    'Nora',
    'Ash',
    'Winston'
]

var nameCount = 0;
var i = 0;
var nameInput = "";
var dupeCounter = 0;
var elementPlace = [];

while (i < studentNamesCollection.length) {
    document.write(`Element: ${[i]}: ${studentNamesCollection[i]}<br>`);
    i++;
}

nameInput = prompt('Enter a name to check for duplicates.');

for (i = 0; i < studentNamesCollection.length; i++) {
    if (studentNamesCollection[i] == nameInput) {
        correctName();
        i = 100;
    } else if (i > 10) {
        incorrectName();
        i = 100;
    }
}

function correctName() {
    for (i = 0; i < studentNamesCollection.length; i++) {
        if (studentNamesCollection[i] == nameInput) {
            dupeCounter = (dupeCounter + 1);
            elementPlace.push(i);
            console.log(elementPlace);
        }
    }
    if (dupeCounter > 0) {
        document.write(`<br>${nameInput} appears ${dupeCounter} times. `)
    }
    for (i=0; i < elementPlace.length; i++) {
        if (elementPlace.length == 1) {
            document.write(`${nameInput} is in element: ${elementPlace[i]}`);
        } 
    }
        if (elementPlace.length > 1) {
            document.write(`${nameInput} are in elements: ${elementPlace.join(', ')}`);
        }
}

function incorrectName() {
    document.write(`${nameInput} doesn't appear to be in this list. Check for spelling mistakes and try again.`)
}

