console.log('funguju!');

import { Header } from './Header/header.js';
import { Intro } from './Intro/intro.js';
import { Pose } from './Pose/pose.js';

const headerInf = {
  title: 'Jogíni',
  links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
};

const introInf = {
  heading: 'Vítejte mezi Jogíny',
  text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce.`,
};

const poseInf = {
  src: 'img/yoga-pose.jpg',
};

const appElm = document.querySelector('#app');
appElm.innerHTML = Intro(introInf) + Header(headerInf) + Pose(poseInf);
