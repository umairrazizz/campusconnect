let currentStep = 1; // Initialize current step
const totalSteps = 5; // Total number of form steps
const totalQuestions = 2; // Update to the total number of questions you want
let currentQuestion = 1; // Initialize current question

function nextStep() {
    const currentFormStep = document.getElementById(`step${currentStep}`);
    const nextFormStep = document.getElementById(`step${currentStep + 1}`);

    // Validate the current step's input
    if (validateStep(currentFormStep)) {
        currentFormStep.classList.remove('active');
        currentStep++;
        if (currentStep <= totalSteps) {
            nextFormStep.classList.add('active');
        } else {
            document.getElementById('form-container').style.display = 'none';
            startQuestionnaire();
        }
    }
}

function validateStep(step) {
    const inputs = step.querySelectorAll('input, select');
    let valid = true;

    // Clear previous error messages
    step.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

    inputs.forEach(input => {
        if (!input.value) {
            const errorMessage = input.nextElementSibling;
            errorMessage.textContent = 'This field is required.';
            valid = false;
        }
    });
    return valid;
}

function calculateAge() {
    const yearOfBirth = document.getElementById('year-of-birth').value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if (age >= 0) {
        alert(`Your age is ${age} years.`);
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('questionnaire').style.display = 'block';
        showQuestion(1); // Start the questions
    } else {
        alert('Please enter a valid year of birth.');
    }
}

function startQuestionnaire() {
    document.getElementById('questionnaire').style.display = 'block';
    showQuestion(1); // Start with the first question
}

function showQuestion(questionNumber) {
    const currentQuestionDiv = document.getElementById(`question${questionNumber}`);
    currentQuestionDiv.style.display = 'block';
}

function nextQuestion() {
    const currentQuestionDiv = document.getElementById(`question${currentQuestion}`);
    currentQuestionDiv.style.display = 'none';
    
    currentQuestion++;
    if (currentQuestion <= totalQuestions) {
        showQuestion(currentQuestion);
    } else {
        // Hide questionnaire and show thank you message
        document.getElementById('questionnaire').style.display = 'none';
        document.getElementById('thank-you').style.display = 'block';
    }
}

function resetForm() {
    currentStep = 1;
    currentQuestion = 1;
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('thank-you').style.display = 'none';
    document.getElementById('questionnaire').style.display = 'none';
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById('step1').classList.add('active');
}
