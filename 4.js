function show12HourTime(){
    let curDate = new Date();
    let hours = curDate.getHours();
    let minutes = curDate.getMinutes();
    let seconds = curDate.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    if (hours > 12) {
        hours = hours - 12 ;
    }
    console.log(`It's ${hours}:${minutes}:${seconds} ${ampm}`);
}

show12HourTime();