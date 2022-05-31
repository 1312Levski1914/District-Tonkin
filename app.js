window.onscroll = function(){myFunction()};
window.onload = function(){myFunction()}

let navbar = document.getElementById('navbar');

let sticky = navbar.offsetTop;

function myFunction(){

    if(window.pageYOffset >= sticky){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
}

function refreshPage(){
    window.scrollTo(top);
}

let locations = document.getElementById('location');

let locationInfo = document.getElementsByClassName('locationInfo');
let locationInfo1 = document.getElementsByClassName('locationInfo1')
let locationInfo2 = document.getElementsByClassName('locationInfo2')
let locationInfo3 = document.getElementsByClassName('locationInfo3')

function showMore(){
    if(locationInfo[0].style.display == 'none'){
        locationInfo[0].style.display = 'block';
    }else{
        locationInfo[0].style.display = 'none';
    }
    
    
}
function showMore1(){
    if(locationInfo1[0].style.display == 'none'){
        locationInfo1[0].style.display = 'block';
    }else{
        locationInfo1[0].style.display = 'none';
    }
}
function showMore2(){
    if(locationInfo2[0].style.display == 'none'){
        locationInfo2[0].style.display = 'block';
    }else{
        locationInfo2[0].style.display = 'none';
    }
}
function showMore3(){
    if(locationInfo3[0].style.display == 'none'){
        locationInfo3[0].style.display = 'block';
    }else{
        locationInfo3[0].style.display = 'none';
    }
}
let container = document.getElementsByClassName('popUpBackground')[0];
let btn = Array.from(document.getElementsByClassName('middle-btn'));
let heading = container.childNodes[1];
function popUp(){
    btn.forEach(x => x.style.display = 'block');
    if(container.style.display != 'block'){
        container.style.display = 'block';
    }else{
        container.style.display = 'none';
    }
}
function lessThen8(){
    heading.innerHTML = 'Drop by and we will <br> find a table for you';
    btn.forEach(x => x.style.display = 'none');
}
let form = document.getElementById('myForm');

function moreThen8(){
    container.innerHTML = `
    <form class = 'myForm'>
            <input type="text" name="firstName" id="formName" placeholder="Name">
            <input type="number" placeholder="Phone number">
            <div>
            <label for="start">Date:</label>
            <input type="date" id="start" name="dinnerStart" value='' min="2022-01-01" max="2024-12-31">
            </div>
            <div>
            <label for="time">Time</label>
            <input type="time" id="appts" name="apptp" min="09:00" max="21:00" required>
            </div>
            <div>
            <label for='countPeople'>Number of people</lebal>
            <input type="number" id="peopleCount" name="peopleCount" min="8" max="50" value="8">
            </div>
            <input type="textarea" placeholder = 'Comments' name="comment" id="comment">
            <button class="middle-btn">Send</button>
        </form>`    
}
