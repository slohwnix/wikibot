# Chatbot Wikipedia
### Description
Le chatbot Wikipedia est une application web qui permet aux utilisateurs de poser des questions à propos de n'importe quel sujet et d'obtenir des informations à partir de l'API de Wikipédia. Le chatbot est conçu pour être facile à utiliser et à comprendre pour les utilisateurs de tous niveaux.

### Installation
Clonez le repo Github ou téléchargez les fichiers
Ouvrez le fichier index.html dans votre navigateur web
Utilisation
Entrez un mot dans le champ de texte 
Appuyez sur le bouton "envoyer" o pour envoyer votre question au chatbot
Le chatbot renverra une réponse contenant des informations de l'API de Wikipédia sur le sujet de votre question.

### Documentation du code
Le code JavaScript de l'application est bien documenté pour faciliter la compréhension et la modification. Voici une liste des principales fonctions et variables utilisées :

    
    const chatbotMessages
    
    
une variable qui contient l'élément HTML qui contiendra les messages du chatbot

     const userInput 
   une variable qui contient l'élément HTML qui contient le texte entré par l'utilisateur

     const sendButton 
   une variable qui contient le bouton qui permet d'envoyer le message de l'utilisateur

    function addMessage(text, sender)
  une fonction qui ajoute un message à la conversation du chatbot

    async function sendRequest(query)
une fonction qui envoie une requête à l'API de Wikipédia et affiche les résultats dans la conversation du chatbot

    function handleSend()
 une fonction qui gère l'événement lorsqu'un message est envoyé
### Contribuer
Les contributions sont les bienvenues! Si vous souhaitez contribuer à l'amélioration de cette application, veuillez forker ce repo et soumettre une pull request.
