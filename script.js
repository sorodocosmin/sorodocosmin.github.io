function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hours = now.getHours();

    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = 'Good morning';
    } else if (hours >= 12 && hours < 17) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    console.log(greeting);
    greetingElement.textContent = `${greeting} ! `;
}
function goToGit(){
    window.location.href = 'https://github.com/sorodocosmin';
}
function goToCv(){
    window.location.href = 'CV-Sorodoc-Tudor-Cosmin.pdf';
}

displayGreeting();
