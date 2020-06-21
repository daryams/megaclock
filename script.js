'use strict';


const time = document.querySelector('.c-time'),
      degree = document.querySelector('.c-degree'),
      hArrow = document.querySelector('.c-clock__hour'),
      mArrow = document.querySelector('.c-clock__minute'),
      sArrow = document.querySelector('.c-clock__second'),
      segments = document.querySelector('.c-clock__segments');

function addZero(num) {
    let str = String(num);
    if (str.length == 1) {
        return '0' + str;
    } else return num;
}

function getTimeAngle(hour, minute,second) {
    
    if (hour > 12) {
        hour -= 12;
    }

    const hDegree = hour*30+minute/2,
          mDegree = minute*6,
          sDegree = second;

    
    hArrow.style.transform = `rotate(${hDegree}deg)`;
    mArrow.style.transform = `rotate(${mDegree}deg)`;
    sArrow.style.transform = `rotate(${sDegree}deg)`;

    if (hDegree <= mDegree) {

        return mDegree - hDegree;
    } else {
        return hDegree - mDegree;
    }

}

function getTime(params) {
    const now = new Date();

    const hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds();

    time.textContent = addZero(hour)  + ' : ' + addZero(minute) + ' : ' + addZero(second);
    degree.textContent = getTimeAngle(hour, minute, second) + '°';   
}

setInterval(() => {
    getTime();
}, 1000);


function showSegments() {
    
    let segmentDegree = 0;
    for (let i = 0; i < 12; i++) {
        let segment = document.createElement('li');
        segment.classList.add('c-clock__segments-item');
        segment.style.transform = `rotate(${segmentDegree}deg)`;

        segments.append(segment);        
        
        segmentDegree += 30;



    }
}
showSegments();