const chatbotMessages = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Ajoute un message à la conversation
function addMessage(text, sender) {
  const messageElement = document.createElement('div');
  messageElement.className = `chatbot-message chatbot-message-${sender}`;
  messageElement.innerText = text;
  chatbotMessages.appendChild(messageElement);
  // Scroll vers le bas pour voir le dernier message
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Envoyer une requête à l'API de Wikipédia et afficher les résultats
async function sendRequest(query) {
  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://fr.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${query}&exintro=true&explaintext=true`)}`);
    const data = await response.json();
    const pageData = JSON.parse(data.contents);
    const pageId = Object.keys(pageData.query.pages)[0];
    const extract = pageData.query.pages[pageId].extract;
    if (extract) {
      addMessage(extract, 'bot');
    } else {
      addMessage("Aucune réponse trouvée. Merci de vérifier l'orthographe du mot.", 'bot');
    }
  } catch (error) {
    addMessage("Désolé, je n'ai pas trouvé d'informations à ce sujet.", 'bot');
  }
}

// Gérer l'événement lorsqu'un message est envoyé
function handleSend() {
  const text = userInput.value.trim(); // supprime les espaces vides au début et à la fin
  if (!text) {
    addMessage("Merci de saisir un mot.", 'bot');
    return;
  }
  addMessage(text, 'user');
  sendRequest(text);
  userInput.value = '';
}

// Associer la fonction handleSend à l'événement click du bouton d'envoi
sendButton.addEventListener('click', handleSend);

// Associer la fonction handleSend à l'événement submit du formulaire
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  handleSend();
});

