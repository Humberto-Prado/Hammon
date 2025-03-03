let name1 = document.querySelector('#name1');
let displayName1 = document.querySelector('#displayName1');
let submitNameButton = document.querySelector('#submitNameButton');
let skillcap = document.querySelector('#skillcap');
let red1minusbutton = document.querySelector('#red1-button');
let displayRed1 = document.querySelector('#displayRed1');
let red1plusbutton = document.querySelector('#red1+button');
let plusButtons = document.querySelector('.plusButttons');
let minusButtons = document.querySelector('.minusButtons');
let displayGreen1 = document.querySelector("#displayGreen1");
let displayBlue1 = document.querySelector("#displayBlue1");
let green1plusbutton = document.querySelector('#green1+button');
let blue1plusbutton = document.querySelector('#blue1+button');
let green1minusbutton = document.querySelector('#green1-button');
let blue1minusbutton = document.querySelector('#blue1-button');
let skills = document.querySelector('#submitSkills');
let submitedred1 = document.querySelector('#submitedred1');
let submitedgreen1 = document.querySelector('#submitedgreen1');
let submitedblue1 = document.querySelector('#submitedblue1');
let className = document.querySelector('#className');
let redRange = document.querySelector('#redRange');
let blueRange = document.querySelector('#blueRange');
let greenRange = document.querySelector('#greenRange');
let skillCapRange = document.querySelector('#skillCapRange');

let name2 = document.querySelector('#name2');
let displayName2 = document.querySelector('#displayName2');
let submitNameButton2 = document.querySelector('#submitNameButton2');
let skillcap2 = document.querySelector('#skillcap2');
let red2minusbutton = document.querySelector('#red2-button');
let displayRed2 = document.querySelector('#displayRed2');
let red2plusbutton = document.querySelector('#red2+button');
let plusButtons2 = document.querySelector('.plusButttons2');
let minusButtons2 = document.querySelector('.minusButtons2');
let displayGreen2 = document.querySelector("#displayGreen2");
let displayBlue2 = document.querySelector("#displayBlue2");
let green2plusbutton = document.querySelector('#green2+button');
let blue2plusbutton = document.querySelector('#blue2+button');
let green2minusbutton = document.querySelector('#green2-button');
let blue2minusbutton = document.querySelector('#blue2-button');
let skills2 = document.querySelector('#submitSkills2');
let submitedred2 = document.querySelector('#submitedred2');
let submitedgreen2 = document.querySelector('#submitedgreen2');
let submitedblue2 = document.querySelector('#submitedblue2');
let className2 = document.querySelector('#className2');
let redRange2 = document.querySelector('#redRange2');
let blueRange2 = document.querySelector('#blueRange2');
let greenRange2 = document.querySelector('#greenRange2');
let skillCapRange2 = document.querySelector('#skillCapRange2');

let redASuccess = document.querySelector('#redASuccess');
let redBSuccess = document.querySelector('#redBSuccess');

let redDice = document.querySelector('#redDice')

let charA = document.querySelector('#charA')

const classList = ['Survivor','Hunter','Legend','Fighter','Champion','Hero','Mysterious', 'Magical','Mythical','Ghost','Missing','Visions','Desiring', 'MissingVisionsOfDesiring'];

redRange.value = displayRed1.value;
greenRange.value = displayGreen1.value;
blueRange.value = displayBlue1.value;
skillCapRange.value = skillcap.value;
redRange2.value = displayRed2.value;

function submitName() {
    let name1length = name1.value;
   
    if (name1length.length < 4) {
            displayName1.value = 'min 4 letters';
    } else {
        displayName1.value = name1.value;
        name1.disabled = true;
        submitNameButton.disabled = true;   
    }
}

function minusred () {
    if (displayRed1.value > 0) {
        displayRed1.value = displayRed1.value - 1;
        skillcap.value = Number(skillcap.value) + 1;
        red1minusbutton.disabled = false;
        redRange.value = displayRed1.value;
        skillCapRange.value = skillcap.value;
    }
}

function plusred () {
    if (skillcap.value === "0") {
        red1plusbutton.disabled = true;
    }
    displayRed1.value = Number(displayRed1.value) + 1;
    skillcap.value = skillcap.value - 1;
    redRange.value = displayRed1.value;
    skillCapRange.value = skillcap.value;
}
function minusgreen () {
    if (displayGreen1.value > 0) {
    displayGreen1.value = displayGreen1.value - 1;
    skillcap.value = Number(skillcap.value) + 1;
    green1minusbutton.disabled = false;
    greenRange.value = displayGreen1.value;
    skillCapRange.value = skillcap.value;
    }
}

function plusgreen () {
    if (skillcap.value === "0") {
        green1plusbutton.disabled = true;
    }
    displayGreen1.value = Number(displayGreen1.value) + 1;
    skillcap.value = skillcap.value - 1;
    greenRange.value = displayGreen1.value;
    skillCapRange.value = skillcap.value;
}
function minusblue () {
    if (displayBlue1.value > 0) {
    displayBlue1.value = displayBlue1.value - 1;
    skillcap.value = Number(skillcap.value) + 1;
    blue1minusbutton.disabled = false;
    blueRange.value = displayBlue1.value;
    skillCapRange.value = skillcap.value;
    }
}

function plusblue () {
    if (skillcap.value === "0") {
        blue1plusbutton.disabled = true;
    }
    displayBlue1.value = Number(displayBlue1.value) + 1;
    skillcap.value = skillcap.value - 1;
    blueRange.value = displayBlue1.value;
    skillCapRange.value = skillcap.value;
}

function submitSkills () {
    skills.disabled = true;
    submitedred1.value = displayRed1.value;
    submitedgreen1.value = displayGreen1.value;
    submitedblue1.value = displayBlue1.value;
    checkClassGreen ();
    checkClassRed ();
    checkClassBlue ();

    

    if (displayRed1.value === "0" && displayGreen1.value === "0" && displayBlue1.value === "0") {
        className.value = classList[9];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`  
    } else if (displayRed1.value === "1" && displayGreen1.value === "0" && displayBlue1.value === "0") {
        className.value = classList[12];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } else if (displayRed1.value === "0" && displayGreen1.value === "1" && displayBlue1.value === "0") {
        className.value = classList[11];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } else if (displayRed1.value === "0" && displayGreen1.value === "0" && displayBlue1.value === "1") {
        className.value = classList[10];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } else if (displayRed1.value === "1" && displayGreen1.value === "1" && displayBlue1.value === "0") {
        className.value = classList[12] + classList[11];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } else if (displayRed1.value === "1" && displayGreen1.value === "0" && displayBlue1.value === "1") {
        className.value = classList[10] + classList[12];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } else if (displayRed1.value === "0" && displayGreen1.value === "1" && displayBlue1.value === "1") {
        className.value = classList[10] + classList[11];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } else if (displayRed1.value === "1" && displayGreen1.value === "1" && displayBlue1.value === "1") {
        className.value = classList[13];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } 
   
}

function checkClassGreen () {
    if (displayGreen1.value === "2" || displayGreen1.value === "3") {
        className.value = classList[0];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } else if  (displayGreen1.value === "4" || displayGreen1.value === "5") {
        className.value = classList[1];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } else if (displayGreen1.value === "6") {
        className.value = classList[2];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    }
}

function checkClassRed () {
    if (displayRed1.value === "2" || displayRed1.value === "3") {
        className.value = className.value + classList[3];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } else if (displayRed1.value === "4" || displayRed1.value === "5") {
        className.value = className.value + classList[4];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } else if (displayRed1.value === "6"){
        className.value = classList[5];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    }
}

function checkClassBlue () {
    if (displayBlue1.value === "2" || displayBlue1.value === "3") {
        className.value = classList[6] + className.value;
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } else if (displayBlue1.value === "4" || displayBlue1.value === "5") {
        className.value = classList[7] + className.value;
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    } else if (displayBlue1.value === "6"){
        className.value = classList[8];
        charA.style.backgroundImage=`url(/${className.value}.jpg)`
    }
}

//

function submitName2() {
    let name2length = name2.value;
   
    if (name2length.length < 4) {
            displayname2.value = 'min 4 letters';
    } else {
        displayname2.value = name2.value;
        name2.disabled = true;
        submitNameButton2.disabled = true;   
    }
}

function minusred2 () {
    if (displayRed2.value > 0) {
        displayRed2.value = displayRed2.value - 1;
        skillcap2.value = Number(skillcap2.value) + 1;
        red2minusbutton.disabled = false;
        redRange2.value = displayRed2.value;
        skillCapRange2.value = skillcap2.value;
    }
}

function plusred2 () {
    if (skillcap2.value === "0") {
        red2plusbutton.disabled = true;
    }
    displayRed2.value = Number(displayRed2.value) + 1;
    skillcap2.value = skillcap2.value - 1;
    redRange2.value = displayRed2.value;
    skillCapRange2.value = skillcap2.value;
}
function minusgreen2 () {
    if (displayGreen2.value > 0) {
    displayGreen2.value = displayGreen2.value - 1;
    skillcap2.value = Number(skillcap2.value) + 1;
    green2minusbutton.disabled = false;
    greenRange2.value = displayGreen2.value;
    skillCapRange2.value = skillcap2.value;
    }
}

function plusgreen2 () {
    if (skillcap2.value === "0") {
        green2plusbutton.disabled = true;
    }
    displayGreen2.value = Number(displayGreen2.value) + 1;
    skillcap2.value = skillcap2.value - 1;
    greenRange2.value = displayGreen2.value;
    skillCapRange2.value = skillcap2.value;
}

function minusblue2 () {
    if (displayBlue2.value > 0) {
    displayBlue2.value = displayBlue2.value - 1;
    skillcap2.value = Number(skillcap2.value) + 1;
    blue2minusbutton.disabled = false;
    blueRange2.value = displayBlue2.value;
    skillCapRange2.value = skillcap2.value;
    }
}

function plusblue2 () {
    if (skillcap2.value === "0") {
        blue2plusbutton.disabled = true;
    }
    displayBlue2.value = Number(displayBlue2.value) + 1;
    skillcap2.value = skillcap2.value - 1;
    blueRange2.value = displayBlue2.value;
    skillCapRange2.value = skillcap2.value;
}

function submitSkills2 () {
    skills2.disabled = true;
    submitedred2.value = displayRed2.value;
    submitedgreen2.value = displayGreen2.value;
    submitedblue2.value = displayBlue2.value;
    checkClassGreen2 ();
    checkClassRed2 ();
    checkClassBlue2 ();
    if (displayRed2.value === "0" && displayGreen2.value === "0" && displayBlue2.value === "0") {
        className2.value = classList[9];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if (displayRed2.value === "1" && displayGreen2.value === "0" && displayBlue2.value === "0") {
        className2.value = classList[12];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if (displayRed2.value === "0" && displayGreen2.value === "1" && displayBlue2.value === "0") {
        className2.value = classList[11];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if (displayRed2.value === "0" && displayGreen2.value === "0" && displayBlue2.value === "1") {
        className2.value = classList[10];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if (displayRed2.value === "1" && displayGreen2.value === "1" && displayBlue2.value === "0") {
        className2.value = classList[12] + classList[11];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if (displayRed2.value === "1" && displayGreen2.value === "0" && displayBlue2.value === "1") {
        className2.value = classList[10] + classList[12];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if (displayRed2.value === "0" && displayGreen2.value === "1" && displayBlue2.value === "1") {
        className2.value = classList[10] + classList[11];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if (displayRed2.value === "1" && displayGreen2.value === "1" && displayBlue2.value === "1") {
        className2.value = classList[13];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    }
}

function checkClassGreen2 () {
    if (displayGreen2.value === "2" || displayGreen2.value === "3") {
        className2.value = classList[0];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if  (displayGreen2.value === "4" || displayGreen2.value === "5") {
        className2.value = classList[1];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if (displayGreen2.value === "6") {
        className2.value = classList[2];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    }
}

function checkClassRed2 () {
    if (displayRed2.value === "2" || displayRed2.value === "3") {
        className2.value = className2.value + classList[3];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if (displayRed2.value === "4" || displayRed2.value === "5") {
        className2.value = className2.value + classList[4];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if (displayRed2.value === "6"){
        className2.value = classList[5];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    }
}

function checkClassBlue2 () {
    if (displayBlue2.value === "2" || displayBlue2.value === "3") {
        className2.value = classList[6] + className2.value;
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if (displayBlue2.value === "4" || displayBlue2.value === "5") {
        className2.value = classList[7] + className2.value;
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    } else if (displayBlue2.value === "6"){
        className2.value = classList[8];
        charB.style.backgroundImage=`url(/${className2.value}.jpg)`
    }
}

function battle () {
   
   let charBRedSuper = [0,0,0,0,0,0];
   let charBGreenSuper = [0,0,0,0,0,0];
   let charBBlueSuper = [0,0,0,0,0,0];
   let charARedSuper = [0,0,0,0,0,0];
   let charAGreenSuper = [0,0,0,0,0,0];
   let charABlueSuper = [0,0,0,0,0,0];
   redASuccess.value = 0;
   redBSuccess.value = 0;
   greenASuccess.value = 0;
   greenBSuccess.value = 0;
   blueASuccess.value = 0;
   blueBSuccess.value = 0;


   
   for (let i = 0; i < submitedred2.value; i++) {

        charBRedSuper[i] = (Math.floor(Math.random () * 6) + 1)
      
   }
    
    for (let i = 0; i < submitedgreen2.value; i++) {

        charBGreenSuper[i] = (Math.floor(Math.random () * 6) + 1)
      
   }
    
    for (let i = 0; i < submitedblue2.value; i++) {

        charBBlueSuper[i] = (Math.floor(Math.random () * 6) + 1)
      
   }
    for (let i = 0; i < submitedred1.value; i++) {

        charARedSuper[i] = (Math.floor(Math.random () * 6) + 1)
      
   }
    for (let i = 0; i < submitedgreen1.value; i++) {

        charAGreenSuper[i] = (Math.floor(Math.random () * 6) + 1)
      
   }
    for (let i = 0; i < submitedblue1.value; i++) {

        charABlueSuper[i] = (Math.floor(Math.random () * 6) + 1)
      
   }
   
   redDice1.value = charARedSuper[0];
   redDice2.value = charARedSuper[1];
   redDice3.value = charARedSuper[2];
   redDice4.value = charARedSuper[3];
   redDice5.value = charARedSuper[4];
   redDice6.value = charARedSuper[5];

   redBDice1.value = charBRedSuper[0];
   redBDice2.value = charBRedSuper[1];
   redBDice3.value = charBRedSuper[2];
   redBDice4.value = charBRedSuper[3];
   redBDice5.value = charBRedSuper[4];
   redBDice6.value = charBRedSuper[5];

   greenDice1.value = charAGreenSuper[0];
   greenDice2.value = charAGreenSuper[1];
   greenDice3.value = charAGreenSuper[2];
   greenDice4.value = charAGreenSuper[3];
   greenDice5.value = charAGreenSuper[4];
   greenDice6.value = charAGreenSuper[5];

   greenBDice1.value = charBGreenSuper[0];
   greenBDice2.value = charBGreenSuper[1];
   greenBDice3.value = charBGreenSuper[2];
   greenBDice4.value = charBGreenSuper[3];
   greenBDice5.value = charBGreenSuper[4];
   greenBDice6.value = charBGreenSuper[5];

   blueDice1.value = charABlueSuper[0];
   blueDice2.value = charABlueSuper[1];
   blueDice3.value = charABlueSuper[2];
   blueDice4.value = charABlueSuper[3];
   blueDice5.value = charABlueSuper[4];
   blueDice6.value = charABlueSuper[5];

   blueBDice1.value = charBBlueSuper[0];
   blueBDice2.value = charBBlueSuper[1];
   blueBDice3.value = charBBlueSuper[2];
   blueBDice4.value = charBBlueSuper[3];
   blueBDice5.value = charBBlueSuper[4];
   blueBDice6.value = charBBlueSuper[5];

    let redDif = [];
    
   for (let i = 0; i < 6; i++) {
    const dif = charARedSuper[i] - charBRedSuper[i];
    redDif.push(dif)

    if (dif > 0) {
        redASuccess.value = Number(redASuccess.value) +1;
        } else if (dif < 0) {
            redBSuccess.value = Number(redBSuccess.value) +1;
        }
    
    }

    let greenDif = [];

    for (let i = 0; i < 6; i++) {
        const dif = charAGreenSuper[i] - charBGreenSuper[i];
        redDif.push(dif)
    
        if (dif > 0) {
            greenASuccess.value = Number(greenASuccess.value) +1;
        } else if (dif < 0) {
                greenBSuccess.value = Number(greenBSuccess.value) +1;
        }
        
    }

    let blueDif = [];

    for (let i = 0; i < 6; i++) {
        const dif = charABlueSuper[i] - charBBlueSuper[i];
        redDif.push(dif)
    
        if (dif > 0) {
            blueASuccess.value = Number(blueASuccess.value) +1;
            } else if (dif < 0) {
                blueBSuccess.value = Number(blueBSuccess.value) +1;
        }
               
    }
    
    let ARedSS = redASuccess.value;
    if (ARedSS == 6) {
        redAsuper.value = 3;
    } else if (ARedSS == 5 || ARedSS == 4) {
        redAsuper.value = 2;
    } else if (ARedSS == 3 || ARedSS == 2) {
    redAsuper.value = 1;
    } else {
        redAsuper.value = 0;
    }
    
    let BRedSS = redBSuccess.value;
    if (BRedSS == 6) {
        redBsuper.value = 3;
    } else if (BRedSS == 5 || BRedSS == 4) {
        redBsuper.value = 2;
    } else if (BRedSS == 3 || BRedSS == 2) {
    redBsuper.value = 1;
    } else {
        redBsuper.value = 0;
    }

    let BGreenSS = greenBSuccess.value;
    let AGreenSS = greenASuccess.value;
    if (AGreenSS == 6) {
        greenAsuper.value = 3;
    } else if (AGreenSS == 5 || AGreenSS == 4) {
        greenAsuper.value = 2;
    } else if (AGreenSS == 3 || AGreenSS == 2) {
    greenAsuper.value = 1;
    } else {
        greenAsuper.value = 0;
    }
    
    
    if (BGreenSS == 6) {
        greenBsuper.value = 3;
    } else if (BGreenSS == 5 || BGreenSS == 4) {
        greenBsuper.value = 2;
    } else if (BGreenSS == 3 || BGreenSS == 2) {
    greenBsuper.value = 1;
    } else {
        greenBsuper.value = 0;
    }
    
    let ABlueSS = blueASuccess.value;
    if (ABlueSS == 6) {
        blueAsuper.value = 3;
    } else if (ABlueSS == 5 || ABlueSS == 4) {
        blueAsuper.value = 2;
    } else if (ABlueSS == 3 || ABlueSS == 2) {
    blueAsuper.value = 1;
    } else {
        blueAsuper.value = 0;
    }
    
    let BBlueSS = blueBSuccess.value;
    if (BBlueSS == 6) {
        blueBsuper.value = 3;
    } else if (BBlueSS == 5 || BBlueSS == 4) {
        blueBsuper.value = 2;
    } else if (BBlueSS == 3 || BBlueSS == 2) {
    blueBsuper.value = 1;
    } else {
        blueBsuper.value = 0;
    }

    calcDamageA ();
   
}
   
    
