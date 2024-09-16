document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("#header");
    header.style.top = "0";
    header.style.transition = "top 0";});


document.querySelector('form').addEventListener('submit', function(event) {
event.preventDefault();


const formData = new FormData(event.target);

fetch(event.target.action, {
    method: 'POST',
    body: formData,
    headers: {
    'Accept': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
    throw new Error('Failed to submit the form');
    }

    return response.json();
})
.then(() => {
    window.location.href = './thanks.html';
})
.catch(error => {
    console.error('Error:', error);

});
});



