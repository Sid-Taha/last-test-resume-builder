"use strict";
let ObjectiveBtn = document.getElementById('ObjectiveBtn');
let EducationBtn = document.getElementById('EducationBtn');
let SkillsBtn = document.getElementById('SkillsBtn');
let WorkExpBtn = document.getElementById('WorkExpBtn');
let ObjectiveSec = document.getElementById('objectiveSec');
let EducationSec = document.getElementById('eduSec');
let SkillsSec = document.getElementById('skillSec');
let WorkExpSec = document.getElementById('workExpSec');
ObjectiveBtn?.addEventListener('click', () => {
    if (ObjectiveSec.style.display == 'block') {
        ObjectiveSec.style.display = 'none';
    }
    else {
        ObjectiveSec.style.display = 'block';
    }
});
EducationBtn?.addEventListener('click', () => {
    if (EducationSec.style.display == 'block') {
        EducationSec.style.display = 'none';
    }
    else {
        EducationSec.style.display = 'block';
    }
});
SkillsBtn?.addEventListener('click', () => {
    if (SkillsSec.style.display == 'block') {
        SkillsSec.style.display = 'none';
    }
    else {
        SkillsSec.style.display = 'block';
    }
});
WorkExpBtn?.addEventListener('click', () => {
    if (WorkExpSec.style.display == 'block') {
        WorkExpSec.style.display = 'none';
    }
    else {
        WorkExpSec.style.display = 'block';
    }
});
