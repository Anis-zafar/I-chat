const socket = io();

const clientTotal = document.getElementById("client-total");

const messageContainer = document.getElementById("message-container");

const nameInput = document.getElementById("name-input");

const messageForm = document.getElementById("message-form");

const messageInput = document.getElementById("message-input");

// const moment = require("moment");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});

function sendMessage() {
  // console.log(messageInput.value);
  const data = {
    name: nameInput.value,
    message: messageInput.value,
    dateTime: new Date(),
  };
  socket.emit("message", data);
  addmessageToUi(true, data);
  messageInput.value = "";
}

socket.on("client-total", (data) => {
  clientTotal.innerText = `Total Client: ${data}`;
});

socket.on("chat-message", (data) => {
  addmessageToUi(false, data);
});

function addmessageToUi(isownmessage, data) {
  const element = `<li class="${
    isownmessage ? "message-right" : "message-left"
  }">
    <p class="message">
      ${data.message}
      <span>${data.name} &#128170  </span>
    </p>
  </li>;`;
  messageContainer.innerHTML += element;
}
