let HomeTotal = 0;
let GuestTotal = 0;
let homeScore = document.getElementById("home-Score");
let guestScore = document.getElementById("guest-Score");
homeScore.textContent = HomeTotal;
guestScore.textContent = GuestTotal;

function addOne(side){
    if(side == "home"){
        let sum = HomeTotal += 1;
        homeScore.textContent = sum;
    }
    else if(side == "guest"){
        let sum = GuestTotal += 1;
        guestScore.textContent = sum;
    }
    highlighLeader();
}

function addTwo(side){
    if(side == "home"){
        let sum = HomeTotal += 2;
        homeScore.textContent = sum;
    }
    else if(side == "guest"){
        let sum = GuestTotal += 2;
        guestScore.textContent = sum;
    }
    highlighLeader();
}

function addThree(side){
    if(side == "home"){
        let sum = HomeTotal += 3;
        homeScore.textContent = sum;
    }
    else if(side == "guest"){
        let sum = GuestTotal += 3;
        guestScore.textContent = sum;
    }
    highlighLeader();
}

function newGame(){
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    HomeTotal = 0;
    GuestTotal = 0;
    document.getElementById("home-Score").style.background = "#080001";
    document.getElementById("guest-Score").style.background = "#080001";
}

function highlighLeader(){
    if(HomeTotal < GuestTotal){
        document.getElementById("guest-Score").style.background = "#FCD34D";
        document.getElementById("home-Score").style.background = "#080001";
    }else if (HomeTotal > GuestTotal){
        document.getElementById("home-Score").style.background = "#FCD34D";
        document.getElementById("guest-Score").style.background = "#080001";
    }else{
        document.getElementById("home-Score").style.background = "#080001";
        document.getElementById("guest-Score").style.background = "#080001";
    }
    
}