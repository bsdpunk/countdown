var htee;
function birthCalc() {
    var current_date = new Date();
    var birth_date = new Date("September 16, 2014 00:01");
    var diff = birth_date.getTime() - current_date.getTime();
    var seconds = diff / 1000;
    var thenthis = secondsToString(seconds);
    htee = "Current Date: " + current_date + "\n Your BirthDate:" + birth_date + "\nCurrent Date in unix epoch: " + current_date.getTime() + "\n Your Next Birthdate in unix epoch: " + birth_date.getTime() +"\nThe difference in those times in milliseconds: " + diff + "\n The difference in seconds: " + seconds +"\n\n\n Only: " + thenthis;
    if(diff < 0 ){
        htee = "How did you let this happen?";
    }
    console.log(htee);
}
function secondsToString(seconds) {
    var numyears = Math.floor(seconds / 31536000);
    var numdays = Math.floor((seconds % 31536000) / 86400);
    var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60; 
    return numyears + " years " + numdays + " days " + numhours + " hours " + numminutes + " minutes " + 
        numseconds + " seconds";
}

birthCalc();
