const counter = document.getElementById("countdown");
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 60)



function countDown(){
    const currentTime = new Date().getTime();
    const diff = targetDate.getTime() - currentTime;

    if(currentTime <= 0){
        counter.innerText = "Event has started!"
        clearInterval(timer)

        return;
    }


    let days = Math.floor(diff / (1000 * 60 * 60 * 24))
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    counter.innerHTML = `${pad(days)}: ${pad(hours)}: ${pad(minutes)}: ${pad(seconds)}`;
    
}


function pad(n) {
    return n < 10 ? "0" + n : n;
 }

countDown();
const timer = setInterval(countDown, 1000);