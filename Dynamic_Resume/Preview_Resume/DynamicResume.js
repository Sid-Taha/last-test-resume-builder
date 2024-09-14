"use strict";
window.addEventListener('load', () => {
    const name = localStorage.getItem('form_name');
    const jobTitle = localStorage.getItem('form_jobTitle');
    const phone = localStorage.getItem('form_phone');
    const email = localStorage.getItem('form_email');
    const linkedin = localStorage.getItem('form_linkedin');
    const degree = localStorage.getItem('form_degree');
    const university = localStorage.getItem('form_university');
    const gradYear = localStorage.getItem('form_gradYear');
    const skill1 = localStorage.getItem('form_skill1');
    const skill2 = localStorage.getItem('form_skill2');
    const skill3 = localStorage.getItem('form_skill3');
    const jobTitleExp = localStorage.getItem('jobTitleExp');
    const company = localStorage.getItem('company');
    const startYear = localStorage.getItem('startYear');
    const endYear = localStorage.getItem('endYear');
    const profilePicture = localStorage.getItem('form_profilePic');
    document.getElementById('form_name').textContent = name;
    document.getElementById('jobTitle').textContent = jobTitle;
    document.getElementById('phone').textContent = phone;
    document.getElementById('email').textContent = email;
    document.getElementById('linkedin').textContent = linkedin;
    document.getElementById('degree').textContent = degree;
    document.getElementById('university').textContent = university;
    document.getElementById('gradYear').textContent = gradYear;
    document.getElementById('skill1').textContent = skill1;
    document.getElementById('skill2').textContent = skill2;
    document.getElementById('skill3').textContent = skill3;
    document.getElementById('jobTitleExp').textContent = jobTitleExp;
    document.getElementById('company').textContent = company;
    document.getElementById('startYear').textContent = startYear;
    document.getElementById('endYear').textContent = endYear;
    if (profilePicture) {
        document.getElementById('profilePicPreview').src = profilePicture;
    }
    const username = name ? name.toLowerCase().replace(/\s+/g, '-') : 'user'; // Generate username from the name
    const baseUrl = 'http://127.0.0.1:5501/Dynamic_Resume/Preview_Resume/DynamicResume.html'; // Your Vercel deployment URL
    const uniqueResumeUrl = `${baseUrl}?/${username}`; // Create unique URL
    // Set the resume link in the DOM
    const resumeLink = document.getElementById('resumeLink');
    resumeLink.setAttribute('href', uniqueResumeUrl);
    resumeLink.textContent = uniqueResumeUrl;
    // Copy link to clipboard functionality
    document.getElementById('copyLinkBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
            alert('Resume link copied to clipboard!');
        });
    });
});
document.getElementById('editBtn').addEventListener('click', () => {
    window.history.back();
});
document.getElementById('printBtn').addEventListener('click', () => {
    window.print(); // Simply trigger the print action
});
