// CSS
import '@fortawesome/fontawesome-free/css/all.css'
import 'reset-css'
import './src/css/main.scss'

// Custom
import {test} from './src/js/test'

document.querySelector('h1').textContent = test("Comment ça vas l'ami ?");