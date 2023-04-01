const secondHand =document.querySelector('.second');
const minuteHand =document.querySelector('.minute');
const hourHand =document.querySelector('.hour');

function setDate(){
    const current_time = new Date();

    const seconds = current_time.getSeconds();
    const secondsDegree = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    const minutes = current_time.getMinutes();
    const minutesDegree = ((minutes/60)*360)+90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    const hours = current_time.getHours();
    const hoursDegree = ((hours/12)*360)+90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate,1000);
setDate();