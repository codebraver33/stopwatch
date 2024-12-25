window.onload = function(){
    let seconds = 0;
    let tens = 0;
    let OutputSeconds = document.getElementById("seconds");
    let OutputTens = document.getElementById("tens");
    let buttonStart = document.getElementById("btn-start");
    let buttonStop = document.getElementById("btn-stop");
    let buttonReset = document.getElementById("btn-reset");
    let Interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10); // Changed interval time
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval); // Corrected from clearTimeout to clearInterval
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        OutputSeconds.innerHTML = "00";
        OutputTens.innerHTML = "00";
    });

    function startTimer(){
        tens++;
        if(tens <= 9){
            OutputTens.innerHTML = "0" + tens; // Error: Adds extra "0"
        }
        if(tens > 9){
            OutputTens.innerHTML = tens;
        }
        if(tens > 99){
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds; // Error: seconds not reset
            tens = 0;
            OutputTens.innerHTML = "00";
        }
        if(seconds > 9){ // Fixed the seconds limit
            OutputSeconds.innerHTML = seconds;
        }
    }
}
