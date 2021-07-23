// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let flightStatusElement = document.getElementById("flightStatus");
    let shuttleFlightScreen = document.getElementById("shuttleBackground");
    let shuttleHeightElement = document.getElementById("spaceShuttleHeight");
    
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    let rocketImage = document.getElementById("rocket");
    rocketImage.style.position="absolute";
    rocketImage.style.bottom='0px';
    rocketImage.style.left='0px';

    let takeoffButton = document.getElementById("takeoff");
        takeoffButton.addEventListener("click", function(event) {
        let readyForTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (readyForTakeoff) {            
            flightStatusElement.innerHTML = "Shuttle in flight.";            
            shuttleFlightScreen.style.backgroundColor = "blue";            
            shuttleHeightElement.innerHTML = "10,000";
        }
    });
    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function(event){
        let readyForLanding = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (readyForLanding) {
            flightStatusElement.innerHTML = "The shuttle has landed.";
            shuttleFlightScreen.style.backgroundColor = "green";
            shuttleHeightElement.innerHTML = "0";
        }
    });
    let abortMissionButton = document.getElementById("missionAbort");
        abortMissionButton.addEventListener("click", function(){
            let response = window.confirm("Confirm that you want to abort mission.");
            if(response){
                flightStatusElement.innerHTML = "Mission aborted";
                shuttleFlightScreen.style.backgroundColor = "green";
                shuttleHeightElement.innerHTML = "0";
            }
        });
    
    upButton.addEventListener("click", function(event) {
        console.log(rocketImage.style.bottom);
        let rocketBottom = (parseInt(rocketImage.style.bottom) + 10) + "px";
        //console.log(rocketBottom);
        rocketImage.style.bottom = rocketBottom;
        
        //let currentShuttleHeight = Number(shuttleHeightElement.innerHTML);
    });
    
    downButton.addEventListener("click", function(){
        rocketImage.style.bottom = parseInt(rocketImage.style.bottom) - 10+'px';

        // let priorHeight = spaceShuttleHeight;
        // response = spaceShuttleHeight - 10,000;
    })

    leftButton.addEventListener("click", function(){
        let rocketLeft = (parseInt(rocketImage.style.left) - 10) + "px";
        rocketImage.style.left = rocketLeft;
    })
    
    rightButton.addEventListener("click", function(){
        let rocketRight = (parseInt(rocketImage.style.left) + 10) + "px";
        rocketImage.style.left = rocketRight;
    })
    // style.left
    // style.bottom
    // https://www.w3schools.com/jsref/dom_obj_style.asp
    //https://www.w3schools.com/jsref/jsref_parseint.asp
});