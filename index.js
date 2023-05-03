const countdownEl = document.getElementById('countdown')
const displayBlockedEl = document.querySelector('.wait-til-8')
const displayShowEl = document.querySelector('.open-on-8')

const countdown = () =>{
  const countDate = new Date('May 8, 2023 00:00:00').getTime()
  const now = new Date().getTime()
  const gap = countDate - now

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  
  const textDay = Math.floor(gap / day)
  const textHour = Math.floor((gap % day) / hour)
  const textMinute = Math.floor((gap % hour) / minute)
  const textSecond = Math.floor((gap % minute) / second)
  

  

  if(gap <= 0 ){
    countdownEl.innerHTML = `<h1 class="big-text">Happy Aniversary</h1>`
    displayBlockedEl.style.display = 'none'
    displayShowEl.style.display = 'block'
  }
  else{
    document.getElementById('days').innerText = textDay
    document.getElementById('hours').innerText = textHour
    document.getElementById('minutes').innerText = textMinute
    document.getElementById('seconds').innerText = textSecond
  }
}

setInterval(countdown, 1000)

