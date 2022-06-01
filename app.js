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
let paragraphArr = [`<p class="paragrafForLocation">
You can find us in the narrow Street right across from Frederik's Church, also popularly known as The Marble Church, in the <br> Heart of Copenhagen. <br> 
Our Store Kongensgade Location has been Open Since 2015.
A Cosy place to Dine in or Grab an Authentic Vietnamese meal to go. 
</p>`,`<p class="paragrafForLocation">
We opened our Restaurant in the Heart of Vesterbro in 2020.
Close to the Main Station you will find Us in the Trendy and Urban area of Vesterbro.
The area was originally named after the paved brick road which,
from the west led to the town's City Hall.
Bring your friends, family or partner. Dine in or Grab an Authentic Vietnamese Meal to go.
</p>`,`<p class="paragrafForLocation">
We opened our most central location in the centre of the old city of Copenhagen summer of 2021. “Strøget” in the centre of town is one of the longest pedestrian shopping streets in Europe, here in the midst of the busy streets and shopping opportunities you will find us at Nytorv square next to the Caritas Fountain which the oldest fountain in Copenhagen, built in 1608 by Christian IV. Right in front of the Copenhagen Court House.
Bring your friends, family or partner. Dine in or Grab an Authentic Vietnamese Meal to go.
</p>`,`<p class="paragrafForLocation">
Broens Gadekøkken is a melting pot of street food kitchens and bars that serve tasty food and beverages from all over the world. Here you can enjoy world class street food from renowned restaurants and chefs from Copenhagen where quality, good ingredients and great taste are the key elements. 
These are all the qualities that you can find within District Tonkin.
So in Spring 2022 we brought the taste of the Vietnamese Street kitchen to Broens Gadekøkken.
Bring your friends, family or partner. Dine there or Grab an Authentic Vietnamese Meal to go.
</p>`]
let googleMapArr= ['<iframe class="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.2267242390635!2d12.585925715493893!3d55.68504588053531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525318c797fc87%3A0x5189f60066410922!2sStore%20Kongensgade%2071%2C%201264%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1653945180970!5m2!1sen!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>','<iframe class="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.93768419363!2d12.551498915493251!3d55.67268378053207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652530acdb10e87%3A0x21c72ebf508ee39f!2sVesterbrogade%2056%2C%201620%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1653946560317!5m2!1sen!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>','<iframe class="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.6417554721247!2d12.571016815493484!3d55.677829580533356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525311bca960b7%3A0x19c46c700c9d6379!2sNytorv%203%2C%201450%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1653947173075!5m2!1sen!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>','<iframe class="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d140.60193901289563!2d12.596449500669195!3d55.67801617679489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe375d8e889b12acb!2sNoodles%20%26%20Dumplings!5e0!3m2!1sen!2sdk!4v1653947282175!5m2!1sen!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'];
let imgArr = ['<img class="locationImg" src="./img/photo-facebook-bags.jpeg" alt="missing bags">','<img class="locationImg" src="./img/photo-facebook-bags.jpeg" alt="missing picture">','<img class="locationImg" src="./img/district-tonkin-nickie.jpeg" alt="picture missing">','<img class="locationImg" src="./img/photo-facebook-food.jpeg" alt="picture missing">']
let firstLocation = document.getElementsByClassName('locationInfo')[0];
let secondLocation = document.getElementsByClassName('locationInfo1')[0];
let thirthLocation = document.getElementsByClassName('locationInfo2')[0];
let forthLocation = document.getElementsByClassName('locationInfo3')[0];
function showLocation1(){
    firstLocation.innerHTML = paragraphArr[0] + imgArr[0]+ googleMapArr[0];
    if(firstLocation.style.display == 'none'){
        firstLocation.style.display = 'block';
    }else{
        firstLocation.style.display = 'none';
    }
}
function showLocation2(){
    secondLocation.innerHTML = paragraphArr[1] + imgArr[1] + googleMapArr[1];
    if(secondLocation.style.display == 'none'){
        secondLocation.style.display = 'block';
    }else{
        secondLocation.style.display = 'none';
    }
}
function showLocation3(){
    thirthLocation.innerHTML = paragraphArr[2] + imgArr[2] + googleMapArr[2];
    if(thirthLocation.style.display == 'none'){
        thirthLocation.style.display = 'block';
    }else{
        thirthLocation.style.display = 'none';
    }
}
function showLocation4(){
    forthLocation.innerHTML = paragraphArr[3] + imgArr[3] + googleMapArr[3];
    if(forthLocation.style.display == 'none'){
        forthLocation.style.display = 'block';
    }else{
        forthLocation.style.display = 'none';
    }
}