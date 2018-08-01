
import classNamesSass from  './custom.scss';
import classNames from './test.css';

console.log("hola mundo",classNames,classNamesSass);

let elem = document.createElement("div");
elem.classList.add(classNamesSass.sass);
elem.innerHTML ="Hola Mundo";
document.body.appendChild(elem)

