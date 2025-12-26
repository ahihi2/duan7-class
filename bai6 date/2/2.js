function countDown(minutes) {
    alert(` Thời gian làm bài của bạn là ${minutes} phút`);
    let seconds = minutes * 60;
    let countdownInterval = setInterval(function () {
        let minutesLeft = Math.floor(seconds/60);
        let secondsLeft = seconds % 60;
        let prefix = secondsLeft < 10 ? "0" : "";
        console.log(`${minutesLeft}:${prefix}${secondsLeft}`);
        if(seconds <= 0) {
            alert("Hết thời gian làm bài");
            clearInterval(countdownInterval);
        }
        else {
            seconds--;
        }

    },1000)
}
let s1 = prompt("Nhập thời gian làm bài(phút) :");
countDown(s1);