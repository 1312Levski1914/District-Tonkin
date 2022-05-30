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
    window.location.reload();
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