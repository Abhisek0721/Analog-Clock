setInterval(
    () => {
        let d = new Date;

        let Gethour = d.getHours();
        let Getminute = d.getMinutes();
        let Getsecond = d.getSeconds();

        // In 360 deg = 60 sec; So, 1sec = 6 deg;
        let sRotation = 6*Getsecond;
        // In 360 deg = 60 min; So, 1 min = 6 deg; and 1min = 60 sec, 60 sec = 6 deg, 1 sec = (1/10) deg
        let mRotation = 6*Getminute + Getsecond/10;
        // 360 deg = 12 hrs; So, 1 hr = 30 deg; and 1 hr = 60 min, 60 min = 30 deg, 1 min = (1/2) deg
        let hRotation = 30*Gethour + Getminute/2;

        hourHand.style.transform = `rotate(${hRotation}deg)`;
        // minuteHand.style.transform = `rotate(${mRotation}deg)`;
        document.getElementById('minuteHand').style.transform = `rotate(${mRotation}deg)`;
        document.querySelector('#secondHand').style.transform = `rotate(${sRotation}deg)`;
    },1000
);