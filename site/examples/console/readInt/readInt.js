const startButton = document.createElement('button');
startButton.innerHTML = 'Click to run the program!';
document.body.appendChild(startButton);
startButton.addEventListener('click', () => {
    let x = readInt('Give me an x: ');
    let y = readInt('Give me a y: ');
    alert('y/x = ' + y / x);
});
