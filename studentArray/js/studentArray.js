
const studentNamesCollection = [

    'Aidan',
    'Cody',
    'Daniel',
    'Jerry',
    'Liam',
    'David',
    'Emanuel',
    'Ethan',
    'Haiden',
    'Harry',
    'Jasiu',
    'Jean',
    'Kaidyn',
    'Leah',
    'Michael',
    'Rowan',
    'Ryder',
    'Stefan',
    'Vaida',
    'Andrew',
    'Thomas'
]

studentNamesCollection.sort();

console.log(studentNamesCollection);

chooseName = parseInt(prompt(`Choose a number from 0 - ${studentNamesCollection.length}`));

if (chooseName > 0 && chooseName < 21) {
    document.write(`That number is associated with ${studentNamesCollection[chooseName]}<br>`);
} else {
    alert('Pick a number between 0-21!');
    location.reload();
}
// Search for name.

var nameSearch = prompt('What person are you looking for?');
var i = 0;
var elementPlacement = 10;

while (i < studentNamesCollection.length) {
    if (studentNamesCollection[i] != nameSearch) {
        i++
    }
    else if (studentNamesCollection[i] == nameSearch) {
        console.log(elementPlacement, i)
        var elementPlacement = i;
        console.log(elementPlacement, i)
        document.write(`You have found ${nameSearch}, ${studentNamesCollection[i]} is on element ${elementPlacement}`)
        i = 100;
    }33696
}

/* for loop
var nameSearch = prompt('What person are you looking for?');
var elementPlacement = 0;

for(i=0; i<studentNamesCollection.length; i++) {
    if(studentNamesCollection[i] == nameSearch) {
        elementPlacement = i;
        elementPlacement = (elementPlacement - elementPlacement);
        document.write(`You have found ${nameSearch}, ${studentNamesCollection[i]} is on element ${elementPlacement}`)
    }
}
*/

