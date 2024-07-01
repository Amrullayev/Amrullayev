const API = 'https://randomuser.me/api/?results=9';

// Fetch users from API and display them
fetch(API)
    .then(response => response.json())
    .then(data => {
        const users = data.results;
        const userContainer = document.querySelector('.user-container');
        userContainer.innerHTML = ''; // Clear existing users

        users.forEach(user => {
            const { dob, gender, name, picture, location } = user;
            const userCard = document.createElement('li');
            userCard.classList.add('user__item');
            
            userCard.innerHTML = `
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
            `;

            // Add event listener to delete button
            const deleteBtn = userCard.querySelector('.user__delete--btn');
            deleteBtn.addEventListener('click', () => {
                userCard.remove();
            });

            userContainer.appendChild(userCard);
        });
    })
    .catch(err => console.log('error', err));

