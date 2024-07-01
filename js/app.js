const form = document.getElementById('form');
const formButton = document.getElementById('form__button');
const clearButton = document.getElementById('clear__button');
const user = document.getElementById('user');
const inputVal = document.querySelector('.form__input');
const list = document.querySelector('.user');

// Function to fetch user data from the API
async function getUsers() {
    let res = await fetch('https://randomuser.me/api/?results=9', {
        method: "GET"
    });
    let data = await res.json();
    return data.results;
}

// Function to display users
async function addUsers() {
    let users = await getUsers();
    user.innerHTML = ''; // Clear the existing users
    users.forEach((item) => {
        user.innerHTML += createUserHTML(item);
    });

    // Add event listeners for delete buttons
    document.querySelectorAll('.user__delete--btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.user__item').remove();
        });
    });

    // Show the user list and clear button
    list.classList.remove('hidden');
    clearButton.classList.remove('hidden');
}

// Function to create user HTML
function createUserHTML(item) {
    const { dob, gender, name, picture, location } = item;
    return `
    <div class="user__item">
        <button class="user__delete--btn">
            <i class="fas fa-trash"></i>
        </button>
        <img class="user__img" alt="User photo" src="${picture.large}" width="100" height="100" />
        <div class="user__name">
            <span class="material-symbols-outlined">badge</span>
            <span>${name.title} ${name.first} ${name.last}</span>
        </div>
        <div class="user__year">
            <span class="material-symbols-outlined">cake</span>
            <span>-${dob.age} years old.</span>
        </div>
        <div class="user__location">
            <span class="material-symbols-outlined">person_pin_circle</span>
            <span>${location.city}, ${location.country}</span>
        </div>
        <div class="user__gender">
            <span class="material-symbols-outlined">man</span>
            <span>- ${gender}</span>
        </div>
    </div>
    `;
}

// Event listener for form button to add users
formButton.addEventListener('click', (e) => {
    e.preventDefault();
    addUsers();
});

// Event listener for clear button to clear users
clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    user.innerHTML = '';
    list.classList.add('hidden');
    clearButton.classList.add('hidden');
});

// Initial setup to hide the list and clear button
list.classList.add('hidden');
clearButton.classList.add('hidden');

// Initial call to display users
addUsers();
