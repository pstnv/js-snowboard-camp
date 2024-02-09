const oneSecond = 1000;
const oneMinute = 60 * oneSecond;
const oneHour = 60 * oneMinute;
const oneDay = 24 * oneHour;

// функция возвращает падеж (день, час, минута, секунда)
function declOfNum(number, titles) { 
const cases = [2, 0, 1, 1, 1, 2]; 
return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10 < 5) ? number%10 : 5] ]; 
}


function countdown () {

    const campStartsDate = new Date ("March, 25 2024 00:00");
    const campEndsDate = new Date("March, 31 2024 00:00");
    const today = new Date();
    let diff = campStartsDate - today;

    if (diff <= 0) {
        if (campEndsDate - today <= 0) {
            diff = 0;
            document.querySelector('h2').innerText = 'Увидимся в следующем году!';
            clearInterval(timerID);
        }
        else {
            diff = campEndsDate - today;
            document.querySelector('h2').innerText = 'До закрытия:';
        }
    }

    const daysLeft = Math.floor(diff / oneDay);
    document.querySelector('#days').innerText = daysLeft;
    //склоняем и записываем слово "день"
    const dayinRussia = declOfNum(daysLeft, ['день', 'дня', 'дней']);
    document.querySelector('#daysCase').innerText = dayinRussia;



    const hoursLeft = Math.floor((diff % oneDay) / oneHour);
    document.querySelector('#hours').innerText = hoursLeft;
    //склоняем и записываем слово "час"
    const hourinRussia = declOfNum(hoursLeft, ['час', 'часа', 'часов']);
    document.querySelector('#hoursCase').innerText = hourinRussia;

    const minutesLeft = Math.floor((diff % oneHour) / oneMinute);
    document.querySelector('#minutes').innerText = minutesLeft;
    //склоняем и записываем слово "минута"
    const minuteinRussia = declOfNum(minutesLeft,['минута', 'минуты', 'минут']);
    document.querySelector('#minutesCase').innerText = minuteinRussia;


    const secondsLeft = Math.floor((diff % oneMinute) / oneSecond);
    document.querySelector('#seconds').innerText = secondsLeft;
    //склоняем и записываем слово "секунда"
    const secondinRussia = declOfNum(secondsLeft, ['секунда', 'секунды', 'секунд']);
    document.querySelector('#secondsCase').innerText = secondinRussia;
    // if (diff <= 0) {
    //     document.querySelector('h2').innerText = 'До встречи в следующем году!';
    //     document.querySelector('#days').innerText = '0';
    //     document.querySelector('#hours').innerText = '0';
    //     document.querySelector('#minutes').innerText = '0';
    //     document.querySelector('#seconds').innerText = '0';
    //     clearInterval(timerID);
    //     console.log(timerID)
    // }


}

let timerID = setInterval(countdown, 1000);

const button = document.querySelector('#play');
const video = document.querySelector('#video');
button.addEventListener('click', () => {
    // video['muted'] = false;
    video.volume = 0.4;
    video.muted === true? video.muted = false : video.muted = true;
});

gsap.from(".menu", {
    rotate: 180,
    duration: 2,
    opacity: 0
})