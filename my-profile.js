let body = document.querySelector('body');
let h1 = document.createElement('h1');
h1.innerText = 'Sozhavaram Srivatsan';
h1.className = 'page-title';
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

aboutSection.appendChild(aboutHeading);
aboutSection.appendChild(about1);
aboutSection.appendChild(about2);
body.appendChild(aboutSection);

let skillsSection = createSection('skills-section');
let skillsHeading = createSubHeading('Skills Known');
let skillsList = document.createElement('ul');
skillsList.className = 'skills-list';

let skills = ['HTML', 'CSS', 'JS', 'NodeJS', 'React'];

skills.forEach((skill) => {
  let item = document.createElement('li');
  item.className = 'skills-item';
  item.textContent = skill;
  skillsList.appendChild(item);
});

skillsSection.appendChild(skillsHeading);
skillsSection.appendChild(skillsList);

body.appendChild(skillsSection);
