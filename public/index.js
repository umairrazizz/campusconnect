// frontend/index.js

// Function to handle form submissions
const submitForm = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.text();
        alert(result);
    } catch (error) {
        console.error('Error:', error);
    }
};

// Handle dating form submission
document.getElementById('dating-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const interests = document.getElementById('interests').value;
    const idealPartner = document.getElementById('ideal-partner').value;
    submitForm('/api/dating', { interests, idealPartner });
});

// Handle confession form submission
document.getElementById('confession-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const confession = document.getElementById('confession').value;
    submitForm('/api/confessions', { confession });
});

// Handle project partner form submission
document.getElementById('partner-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const projectTitle = document.getElementById('project-title').value;
    const description = document.getElementById('description').value;
    submitForm('/api/project-partner', { projectTitle, description });
});

// Handle share ideas form submission
document.getElementById('idea-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const idea = document.getElementById('idea').value;
    submitForm('/api/ideas', { idea });
});

// Handle feedback form submission
document.getElementById('feedback-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback').value;
    submitForm('/api/feedback', { feedback });
});

// Handle chat functionality
const chatForm = document.getElementById('chat-form');
chatForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = document.getElementById('chat-message').value;
    const user = "User"; // Replace this with actual user info
    const userId = "user-id"; // Replace this with actual user ID

    await submitForm('/api/chat', { user, message, userId });
    document.getElementById('chat-message').value = ''; // Clear input field
});
