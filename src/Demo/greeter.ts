import router from '@system.router'
import { add } from './util'

const hello:string = 'Hello'

function greeter(person: string) {
    return `${hello}, ${person}`
}

function goAbout() {
	router.push ({
    uri: '/About'
  })
}

export { greeter, goAbout, add }
