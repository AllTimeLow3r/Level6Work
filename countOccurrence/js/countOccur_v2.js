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
var i=0;
var nameInput = "";
var dupeCounter = 0;

while (i < studentNamesCollection.length) {
    document.write(`Element: ${[i]}: ${studentNamesCollection[i]}<br>`);
    i++;
}

nameInput = prompt('Enter a name to check for duplicates.');

for (i=0; i < studentNamesCollection.length; i++) {
    if (studentNamesCollection[i] == nameInput) {
        dupeCounter = (dupeCounter + 1);
    }
}

document.write(`<br>${nameInput} appears ${dupeCounter} times.`)




