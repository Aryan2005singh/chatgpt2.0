// Get DOM elements
const closeSidebarButton = document.querySelector('.close-sidebar');
const newChatButton = document.querySelector('.new-chat');
const listOfChats = document.querySelector('.list-of-chats');
const leftPane = document.querySelector('.left-pane');

// Function to toggle the left pane visibility
function toggleLeftPane() {
    leftPane.classList.toggle('hidden');
}

// Function to add a new chat item
function addNewChat() {
    const chatItem = document.createElement('div');
    chatItem.classList.add('single-chat');
    chatItem.innerHTML = `
        <div class="chat-icon"></div>
        <div class="chat-title">New Chat</div>
    `;
    listOfChats.appendChild(chatItem);
}

// Event listeners
closeSidebarButton.addEventListener('click', toggleLeftPane);
newChatButton.addEventListener('click', addNewChat);
// Get DOM elements
const sendIcon = document.querySelector('.send-icon');
const inputBox = document.querySelector('.input-box');
const messagesSection = document.querySelector('.messages-section');

// Function to add a new message
function addMessage(text, isSent) {
    const messageCard = document.createElement('div');
    messageCard.classList.add('message-card');
    if (isSent) {
        messageCard.classList.add('sent');
    }
    messageCard.textContent = text;
    messagesSection.appendChild(messageCard);
    // Scroll to the bottom of the messages section
    messagesSection.scrollTop = messagesSection.scrollHeight;
}

// Event listener for sending a message
sendIcon.addEventListener('click', () => {
    const messageText = inputBox.value.trim();
    if (messageText) {
        addMessage(messageText, true);
        inputBox.value = ''; // Clear the input
        // Simulate a reply from the other user (you can replace this with actual logic)
        setTimeout(() => {
            addMessage('This is a reply from the other user.', false);
        }, 1000);
    }
});

// Initially add a welcome message (you can replace this with your desired initial message)
addMessage('Welcome to the chat!', false);
