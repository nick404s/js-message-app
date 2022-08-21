// destructure from window's location the hash property
const {hash } = window.location;

// decrypt the message
const messageDisplay = atob(hash.replace('#', ''));
// check if there is a message
if (messageDisplay) {
    // toggle forms
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-display').classList.remove('hide');
    // set the decrypted message inside h2
    document.querySelector('h2').innerHTML = messageDisplay;
}

// event listener for the forms
document.querySelector('form').addEventListener('submit', evt => {
    evt.preventDefault();

    // toggle forms
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    // encrypt input message
    const messageInput = document.querySelector('#message-input');
    const encryptedValue = btoa(messageInput.value);

    // display the link with encrypted string in the link input
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encryptedValue}`;
    // make the link selected for a user to copy
    linkInput.select();
});