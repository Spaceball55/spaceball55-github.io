const form = document.querySelector('#form');
const mass = document.querySelector('#mass');
const iPlanet = document.getElementsByName('iPlanet');
const yesPlanet = document.querySelector('#yesPlanet'); //boolean
const noPlanet = document.querySelector('#noPlanet'); //boolean
const planet = document.querySelector('#planet')
const gravity = document.querySelector('#force');
const dist = document.querySelector('#distance');
let iBroken = false;
const ans = document.querySelector('.ans');
const joinCompression = .500;
var answer = "";
const negative_value = document.querySelector('#negative-input');

const planetButton = document.getElementById('planetButton');
const gravityButton = document.getElementById('gravityButton');

let iBreak = document.querySelector('.iBreak');

var planets = {
    'mercury': 3.7, 
    'venus': 8.87,
    'earth': 9.8,
    'moon': 1.62,
    'mars': 3.71,
    'jupiter': 24.79,
    'saturn': 10.44,
    'neptune': 11.15,
    'uranus': 8.87,
    'pluto': 0.62
};

form.addEventListener('submit', onSubmit);

form.addEventListener('click', onClick);

function onSubmit(e){
    e.preventDefault();
    let planetInput = planet.value.toLowerCase().trim(); //turns input into all lowercase (to match dictionary) and strips string
    //console.log(planetInput);
//console.log(iPlanet.value)

    if(mass.value === ''
    ||dist.value === '') {
        //alert('Uh oh'); //add event where a popup shows up asking user to answer all fields!
        document.querySelector('#error').style.display = 'block';
    }
    else{

        for(i = 0, length = iPlanet.length; i < length; i++){
            if(iPlanet[i].checked){
                answer = iPlanet[i].value;
                break;
            }
        }

        if(planet.value !== ''){
            f = (parseFloat(mass.value) * planets[planetInput] * parseFloat(dist.value)) / (joinCompression/100); //note: force here is force of gravity
            f_ans = f + " Newtons";
            ans.innerHTML = f_ans; 
            //console.log(planet.value);
            if(f > 100000){
                ans.style.display = 'block';
                iBreak.style.display = 'block';
                document.querySelector('#error').style.display = 'none';
                iBreak.innerHTML = 'Knee is broken! Ouch!';
                console.log('broke');
                console.log(f);
        
            }
            else if(typeof f != 'number' || Number.isNaN(f) == true){
                //alert('Uh oh mark 2.5');
                document.querySelector('#error').style.display = 'block';
                ans.style.display = 'none';
                iBreak.style.display = 'none';
            }
            else if(f < 0){
                document.querySelector('#error').style.display = 'none';
                negative_value.style.display = 'block';
                ans.style.display = 'none';
                iBreak.style.display = 'none';
            }
            else{
                ans.style.display = 'block';
                iBreak.style.display = 'block';
                document.querySelector('#error').style.display = 'none';
                iBreak.innerHTML = 'Knee is not broken! Whew!';
                console.log('no break');
                console.log(f);
            }
        }
        else if(gravity.value !==0){
            f = (parseFloat(mass.value) * parseFloat(gravity.value) * parseFloat(dist.value)) / (joinCompression/100); //note: force here is force of gravity
            f_ans = f + " Newtons";
            ans.innerHTML = f_ans; 
            //console.log(Planet.value);
            if(f > 100000){
                ans.style.display = 'block';
                iBreak.style.display = 'block';
                document.querySelector('#error').style.display = 'none';
                iBreak.innerHTML = 'Knee is broken! Ouch!';
                console.log('broke');
            }
            else if(typeof f != 'number' || Number.isNaN(f) == true){
                //alert('Uh oh mark 2.5');
                document.querySelector('#error').style.display = 'block';
                ans.style.display = 'none';
                iBreak.style.display = 'none';
            }
            else if(f < 0){
                document.querySelector('#error').style.display = 'none';
                negative_value.style.display = 'block';
                ans.style.display = 'none';
                iBreak.style.display = 'none';
            }
            else{
                ans.style.display = 'block';
                iBreak.style.display = 'block';
                document.querySelector('#error').style.display = 'none';
                iBreak.innerHTML = 'Knee is not broken! Whew!'
                console.log('no break');
            }
        }
        else{
            //alert('Uh oh spaghettio')
            document.querySelector('#error').style.display = 'block';
        }
    }
}

function onClick(){
    if(planetButton.checked){
        document.getElementById('planetInput').style.display = 'block';
        document.getElementById('gravityInput').style.display = 'none';
        gravity.value = '';
        //console.log('Clicked yes!')
    }
    else if(gravityButton.checked){
        document.getElementById('planetInput').style.display = 'none';
        document.getElementById('gravityInput').style.display = 'block';
        planet.value = '';
        //console.log('Clicked no!')
    }
}
//console.log(planets['earth']);
