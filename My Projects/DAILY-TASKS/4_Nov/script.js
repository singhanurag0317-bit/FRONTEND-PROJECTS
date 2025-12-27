// 1.
const container = document.getElementById("main-container");
console.log('By Id:', container);

// 2.
const skill = document.getElementsByClassName("skills-chip");
console.log('By Class:',skill);

// 3.
const button = document.getElementsByTagName('button');
console.log('By Tag Name:', button)

// 4.
const theme = document.querySelector('.theme-btn');
console.log('By QuerySelector:', theme);

// 5.
const themes = document.querySelectorAll('.theme-btn');
console.log('By QuerySelectorAll:', themes)

// 6.
