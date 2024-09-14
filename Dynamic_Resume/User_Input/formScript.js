"use strict";
const nameInput = document.getElementById('name');
const jobTitle = document.getElementById('jobTitle');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const linkedin = document.getElementById('linkedin');
const degree = document.getElementById('degree');
const university = document.getElementById('university');
const gradYear = document.getElementById('gradYear');
const skill1 = document.getElementById('skill1');
const skill2 = document.getElementById('skill2');
const skill3 = document.getElementById('skill3');
const jobTitleExp = document.getElementById('jobTitleExp');
const company = document.getElementById('company');
const startYear = document.getElementById('startYear');
const endYear = document.getElementById('endYear');
const profilePic = document.getElementById('profilePic');
const form = document.getElementById('resumeForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('form_name', nameInput.value);
    localStorage.setItem('form_jobTitle', jobTitle.value);
    localStorage.setItem('form_phone', phone.value);
    localStorage.setItem('form_email', email.value);
    localStorage.setItem('form_linkedin', linkedin.value);
    localStorage.setItem('form_degree', degree.value);
    localStorage.setItem('form_university', university.value);
    localStorage.setItem('form_gradYear', gradYear.value);
    localStorage.setItem('form_skill1', skill1.value);
    localStorage.setItem('form_skill2', skill2.value);
    localStorage.setItem('form_skill3', skill3.value);
    localStorage.setItem('jobTitleExp', jobTitleExp.value);
    localStorage.setItem('company', company.value);
    localStorage.setItem('startYear', startYear.value);
    localStorage.setItem('endYear', endYear.value);
    // Convert image to Base64 and store in localStorage
    if (profilePic.files && profilePic.files[0]) {
        const reader = new FileReader();
        reader.onload = function () {
            const base64Image = reader.result;
            localStorage.setItem('form_profilePic', base64Image);
            window.location.href = '../Preview_Resume/DynamicResume.html';
        };
        reader.readAsDataURL(profilePic.files[0]);
    }
    else {
        window.location.href = '../Preview_Resume/DynamicResume.html';
    }
    console.log(localStorage.getItem('form_profilePic'));
});
