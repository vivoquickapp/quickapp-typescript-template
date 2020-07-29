import router from '@system.router'
import { add } from './util'



function greeter(person: string) {
    
}

function goAbout() {
	router.push ({
    uri: '/About'
  })
}

export { greeter, goAbout, add }
