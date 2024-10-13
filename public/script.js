let currentStep = 1;
let currentQuestion = 1;
const totalQuestions = 4;

function startForm() {
    document.getElementById('intro-page').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';
}

function nextStep() {
    const currentDiv = document.getElementById(`step${currentStep}`);
    const nextDiv = document.getElementById(`step${currentStep + 1}`);
    const input = currentDiv.querySelector('input, select');

    if (validateInput(input)) {
        currentDiv.classList.remove('active');
        currentStep++;
        nextDiv.classList.add('active');
    }
}

function validateInput(input) {
    if (!input.value) {
        input.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    input.nextElementSibling.textContent = '';
    return true;
}

function startQuestionnaire() {
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('questionnaire').style.display = 'block';
    document.getElementById(`question${currentQuestion}`).classList.add('active');
}

function nextQuestion() {
    document.getElementById(`question${currentQuestion}`).classList.remove('active');
    currentQuestion++;
    
    if (currentQuestion <= totalQuestions) {
        document.getElementById(`question${currentQuestion}`).classList.add('active');
        updateProgress();
    } else {
        document.getElementById('questionnaire').style.display = 'none';
        document.getElementById('thank-you').style.display = 'block';
    }
}

function updateProgress() {
    const progressPercentage = (currentQuestion / totalQuestions) * 100;
    document.getElementById('progress').style.width = progressPercentage + '%';
}

function resetForm() {
    document.getElementById('thank-you').style.display = 'none';
    document.getElementById('intro-page').style.display = 'block';
    currentStep = 1;
    currentQuestion = 1;
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById('step1').classList.add('active');
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
    document.getElementById('progress').style.width = '0%';
}

function answerQuestion() {
    nextQuestion();
}
fetch('https://your-app-name.glitch.me/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    alert('Form submitted successfully!');
})
.catch((error) => {
    console.error('Error:', error);
});