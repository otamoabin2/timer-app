class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton
        if (callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)

    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining)
                //receiving this value here so it can  be called and used in the onStart fxn
        }
        this.tick()
        this.interval = setInterval(this.tick, 50)
    }
    pause = () => {
        clearInterval(this.interval)
    }

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause()
            if (this.onComplete) {
                this.onComplete()
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.05
            if (this.onTick) {
                //track the time remaining when tick() initialized
                this.onTick(this.timeRemaining)
            }
        }
    }
    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    }
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2)
    }
}