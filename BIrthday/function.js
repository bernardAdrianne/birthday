const password = 2321;
const maxNum = 6;

function addToScreen(num) {
    const screen = document.getElementById('screen');

    if (screen.textContent.length < maxNum) {
        screen.textContent += num;
    }

    if (screen.textContent.length >= maxNum) {
        alert('Maximum input reached. Please submit your passcode.');
        screen.textContent = '';
    }
}

function submitPasscode() {
    const screen = document.getElementById('screen');
    const num = parseInt(screen.textContent);

    if (screen.textContent.length === 0) {
        alert('Empty Passcode: Please enter a passcode.'); 
    } else if (num < 1) {
        alert('Invalid Password: Please enter a valid passcode.'); 
    } else if (num === password) {
        alert('Passcode is Correct!: Logging in.');
        window.location.href = 'page2/page2.html';
    } else {
        alert('Incorrect Passcode: ' + screen.textContent); 
    }

    screen.textContent = '';
}
