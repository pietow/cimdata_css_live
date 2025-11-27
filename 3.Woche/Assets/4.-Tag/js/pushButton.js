let counter = 1;

function changeText() {
    document.querySelector('p').innerHTML = "Geklickt: " + counter;
    counter++
}