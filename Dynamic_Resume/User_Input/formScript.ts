const nameInput = document.getElementById('name') as HTMLInputElement;
const jobTitle = document.getElementById('jobTitle') as HTMLInputElement;
const phone = document.getElementById('phone') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const linkedin = document.getElementById('linkedin') as HTMLInputElement;
const degree = document.getElementById('degree') as HTMLInputElement;
const university = document.getElementById('university') as HTMLInputElement;
const gradYear = document.getElementById('gradYear') as HTMLInputElement;
const skill1 = document.getElementById('skill1') as HTMLInputElement;
const skill2 = document.getElementById('skill2') as HTMLInputElement;
const skill3 = document.getElementById('skill3') as HTMLInputElement;
const jobTitleExp = document.getElementById('jobTitleExp') as HTMLInputElement;
const company = document.getElementById('company') as HTMLInputElement;
const startYear = document.getElementById('startYear') as HTMLInputElement;
const endYear = document.getElementById('endYear') as HTMLInputElement;
const profilePic = document.getElementById('profilePic') as HTMLInputElement;




const form = document.getElementById('resumeForm') as HTMLFormElement;
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
        const base64Image = reader.result as string;
        localStorage.setItem('form_profilePic', base64Image);
        window.location.href = '../Preview_Resume/DynamicResume.html';
      };
      reader.readAsDataURL(profilePic.files[0]);
    } else {
      window.location.href = '../Preview_Resume/DynamicResume.html';
    }
    
    
    console.log(localStorage.getItem('form_profilePic'));
});