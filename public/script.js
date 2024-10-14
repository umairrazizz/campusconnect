let currentStep = 0;
let answers = {};

function startForm() {
    document.getElementById('intro-page').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';
}

function nextStep() {
    const steps = document.querySelectorAll('.form-step');
    const currentStepElement = steps[currentStep];
    const input = currentStepElement.querySelector('input, select');

    if (!input.value) {
        // Show error message if input is empty
        currentStepElement.querySelector('.error-message').innerText = 'Please fill out this field.';
        return;
    } else {
        currentStepElement.querySelector('.error-message').innerText = '';  // Clear error
    }

    currentStepElement.classList.remove('active');
    currentStep++;
    if (currentStep < steps.length) {
        steps[currentStep].classList.add('active');
    } else {
        startQuestionnaire();
    }
}

function startQuestionnaire() {
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('questionnaire').style.display = 'block';
    progressBar(0); // Initialize the progress bar
}

function answerQuestion(questionId, answer) {
    // Store the user's answer
    answers[questionId] = answer;

    const currentQuestion = document.getElementById(questionId);
    const nextQuestion = currentQuestion.nextElementSibling;

    if (nextQuestion && nextQuestion.classList.contains('question')) {
        currentQuestion.classList.remove('active');
        nextQuestion.classList.add('active');
        progressBar(Object.keys(answers).length / 4); // Update progress bar based on question number
    } else {
        showThankYou();
    }
}

function showThankYou() {
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block';
    fetchMatches();  // Fetch matches after the questions are done
}

function progressBar(value) {
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${value * 100}%`;
}

function fetchMatches() {
    // Example of match results (replace with real backend call)
    const matches = [
        { name: 'Alice', compatibility: 90 },
        { name: 'Bob', compatibility: 85 },
        { name: 'Charlie', compatibility: 80 },
    ];

    const matchesContainer = document.getElementById('matches-container');
    matchesContainer.innerHTML = '';  // Clear any previous matches

    matches.forEach(match => {
        const matchElement = document.createElement('div');
        matchElement.classList.add('match');
        matchElement.innerHTML = `<p>${match.name} - Compatibility: ${match.compatibility}%</p>`;
        matchesContainer.appendChild(matchElement);
    });

    document.getElementById('thank-you').style.display = 'none';
    document.getElementById('matches').style.display = 'block';  // Show the matches
}

function resetForm() {
    currentStep = 0;
    answers = {};

    // Reset all form steps and questions
    document.querySelectorAll('.form-step, .question').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('input, select').forEach(el => el.value = '');
    document.getElementById('step1').classList.add('active');
    document.getElementById('question1').classList.add('active');
    
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('matches').style.display = 'none';
    document.getElementById('thank-you').style.display = 'none';
    document.getElementById('intro-page').style.display = 'block';
}
function fetchMatches() {
    // Example stored data (replace with actual backend data)
    const matches = [
        { name: 'Alice', age: 22, semester: 6, department: 'CSE', compatibility: 90 },
        { name: 'Bob', age: 21, semester: 5, department: 'EEE', compatibility: 85 },
        { name: 'Charlie', age: 23, semester: 7, department: 'ME', compatibility: 80 },
    ];

    const matchesContainer = document.getElementById('matches-container');
    matchesContainer.innerHTML = '';  // Clear previous matches

    matches.forEach(match => {
        const matchElement = document.createElement('div');
        matchElement.classList.add('match-card');

        // Create the match card HTML
        matchElement.innerHTML = `
            <h4>${match.name}</h4>
            <p>Age: ${match.age}</p>
            <p>Semester: ${match.semester}</p>
            <p>Department: ${match.department}</p>
            <p>Compatibility: ${match.compatibility}%</p>
            <button onclick="startChat('${match.name}')">Interested</button>
            <button>Not Interested</button>
        `;

        matchesContainer.appendChild(matchElement);
    });

    document.getElementById('thank-you').style.display = 'none';
    document.getElementById('matches').style.display = 'block';  // Show the matches
}

function startChat(matchName) {
    // Hide the matches section and show the chat window
    document.getElementById('matches').style.display = 'none';
    document.getElementById('chat-window').style.display = 'block';
    document.getElementById('chat-name').innerText = matchName;

    // Initialize chat
    document.getElementById('chat-messages').innerHTML = `<p>Start chatting with ${matchName}...</p>`;
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value;

    if (message.trim()) {
        const chatMessages = document.getElementById('chat-messages');
        const newMessage = document.createElement('p');
        newMessage.innerText = `You: ${message}`;
        chatMessages.appendChild(newMessage);
        chatInput.value = '';  // Clear the input field
    }
}
