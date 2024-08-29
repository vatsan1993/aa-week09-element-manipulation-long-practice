let body = document.querySelector('body');
let h1 = document.createElement('h1');
h1.innerText = 'Sozhavaram Srivatsan';
h1.className = 'name';
body.appendChild(h1);

let createSection = (className) => {
  let section = document.createElement('section');
  section.className = className;
  return section;
};

let createSubHeading = (content) => {
  let subHeading = document.createElement('h2');
  subHeading.className = 'sub-heading';
  subHeading.innerText = content;
  return subHeading;
};

let contentSection = createSection('content-section');

let aboutSection = createSection('about-section');

let aboutHeading = createSubHeading('About Me');

let about1 = document.createElement('p');
about1.className = 'about';
about1.textContent =
  "Hello, I'm [Your Name], a passionate and dedicated Full Stack Developer with a strong background in designing and implementing dynamic, user-friendly web applications. With extensive experience in both front-end and back-end technologies, I thrive on transforming complex problems into efficient, scalable solutions. My expertise spans across various programming languages and frameworks, enabling me to adapt quickly to new projects and continuously deliver high-quality results.";

let about2 = document.createElement('p');
about2.className = 'about';
about2.textContent =
  "Over the years, I have collaborated with cross-functional teams to develop innovative products that enhance user experiences and drive business growth. I am committed to staying updated with the latest industry trends and best practices, which allows me to incorporate modern and effective techniques into my work. Beyond coding, I value clear communication and teamwork, believing that the best solutions emerge from collaborative efforts and diverse perspectives. I'm excited to contribute my skills and enthusiasm to create impactful digital experiences.";

body.appendChild(aboutHeading);
aboutSection.appendChild(about1);
aboutSection.appendChild(about2);

let profileImg = document.createElement('img');
profileImg.src = './propic.jpg';
profileImg.className = 'propic';

contentSection.appendChild(aboutSection);
contentSection.appendChild(profileImg);

body.appendChild(contentSection);

let skillsSection = createSection('skills-section');
let skillsHeading = createSubHeading('Skills Known');
let skillsList = document.createElement('ul');
skillsList.className = 'my-details';

let skills = ['HTML', 'CSS', 'JS', 'NodeJS', 'React'];

skills.forEach((skill) => {
  let item = document.createElement('li');
  item.className = 'detail';
  item.textContent = skill;
  skillsList.appendChild(item);
});

skillsSection.appendChild(skillsHeading);
skillsSection.appendChild(skillsList);

body.appendChild(skillsSection);

let timer = document.createElement('p');
setInterval(() => {
  let date = new Date(Date.now());
  timer.textContent = `I live in City, State, and it's currently ${date.toLocaleTimeString()} here`;
}, 1000);

body.appendChild(timer);

timer.classList.add('timer');

about2.outerHTML =
  "<div>Over the years, I have collaborated with cross-functional teams to develop innovative products that enhance user experiences and drive business growth. I am committed to staying updated with the latest industry trends and best practices, which allows me to incorporate modern and effective techniques into my work. Beyond coding, I value clear communication and teamwork, believing that the best solutions emerge from collaborative efforts and diverse perspectives. I'm excited to contribute my skills and enthusiasm to create impactful digital experiences.</div>";

let countDownTimer = document.createElement('p');
countDownTimer.classList.add('count-down');
body.appendChild(countDownTimer);

let targetTime = new Date();
// targetTime.setHours(targetTime.getHours() + 1);
targetTime.setMinutes(targetTime.getMinutes() + 1);
console.log(targetTime);

let interval = setInterval(() => {
  let now = new Date();

  console.log(now);

  let diffInMs = targetTime.getTime() - now.getTime();
  let hours = Math.floor(diffInMs / (1000 * 60 * 60));
  let minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

  // Format the time as a string "hh:mm:ss"
  let timeString = `${String(hours).padStart(2, '0')}:${String(
    minutes
  ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  countDownTimer.innerText = timeString;

  if (diffInMs < 0) {
    clearInterval(interval);
    countDownTimer.textContent = 'Expired';
  }
}, 1000);
