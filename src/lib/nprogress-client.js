import Router from 'next/router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.15 })

let timer
const delay = 100 // ms, to avoid flashing bar on super-fast transitions

function start() {
   clearTimeout(timer)
   timer = setTimeout(() => NProgress.start(), delay)
}
function done() {
   clearTimeout(timer)
   NProgress.done()
}

Router.events.on('routeChangeStart', start)
Router.events.on('routeChangeComplete', done)
Router.events.on('routeChangeError', done)
