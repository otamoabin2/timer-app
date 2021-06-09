const durationInput = document.getElementById("duration")
const startButton = document.getElementById("start")
const pauseButton = document.getElementById("pause")
const circle = document.querySelector('circle')

// calculate the perimeter of the svg circle 
const perimeter = circle.getAttribute('r') * 2 * Math.PI

// set perimeter as the dasharray 

circle.setAttribute('stroke-dasharray', perimeter)
let duration

// start an instant of the Timer class 
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        // get time remaining from when the start button event starts.
        duration = totalDuration
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter)
            //  formulae for transition

    },
    onComplete() {
        console.log('Timer is complete')
    }
})