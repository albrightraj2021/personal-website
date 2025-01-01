
import p1Logo from './assets/img/p1-logo.png';
import studyMaterial from './assets/img/StudyMaterial.png';
import tailwindIcon from './assets/img/icons8-tailwindcss.svg';
import p2Logo from './assets/img/p2-logo.png';
import gsLogo from './assets/img/gs.svg';
import ansibleLogo from './assets/img/Ansible_logo.svg';
export default {
  "projects": [
    {
      "title": "Goal Setter",
      "image": p1Logo,
      "description": "It is a goal setting app. It helps you to set your goals and track your progress.",
      "technologies": ["React", "Redux", "Express", "MongoDB","Tailwind CSS"],
      "githubUrl": "https://github.com/albrightraj2021/goal-setter-frontend",
      "deployedUrl": "https://abr-intern.web.app"
    },
    {
      "title": "Portfolio",
      "image": p2Logo,
      "description": "It is my portfolio website. It showcases my projects and skills.",
      "technologies": ["React", "Tailwind CSS"],
      "deployedUrl": "https://albrightraj2021.web.app/"
    },
    {
      "title": "Study Material",
      "image": studyMaterial,
      "description": "It provides study material for students. The Google Drive folder is embedded in the website. We can upload and download the study material without logging into a Google account.",
      "technologies": ["Google Script(.gs)", "Tailwind CSS"],
      "deployedUrl": "https://cse-2k25.web.app"
    },
    {
        "title": "Ansible Playbook",
        "image": ansibleLogo,
        "description": "Ansible playbook to configure a web server.React web app is deployed on the nginx server.",
        "technologies": ["Ansible"],
        "githubUrl": "https://github.com/albrightraj2021/web-server-config"
    }

  ],
  "techIcons": {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Tailwind CSS": tailwindIcon,
    "Google Script(.gs)": gsLogo,
    "Ansible": ansibleLogo
  }
};