// import './style.css'
import heroImg from './assets/hero.png'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.js'
import { v4 as uuidv4 } from 'uuid';


// document.querySelector('#app').innerHTML = ` `

setupCounter(document.querySelector('#counter'))
