let main = document.getElementById('main-menu');

function dishContainers(heading,arr){
    let dishesContainer = document.createElement('div');
    dishesContainer.classList.add('dishesContainer')
    dishesContainer.innerHTML = `<h1>${heading}</h1>`
    for(let i = 0 ; i< arr.length ; i++){
        let divContainer = document.createElement('div')
        divContainer.className = 'dishContainer';
        divContainer.innerHTML = `
                <div>
                    <h3>${arr[i][0]} / ${arr[i][1]} kr.</h3>
                    <p class='pTagMenu'>${arr[i][2]}</p>
                    <h3 class='type'>${arr[i][3]}</h3>
                </div>
            `
        dishesContainer.appendChild(divContainer)
    }
    main.appendChild(dishesContainer)
    
}

dishContainers('Snacks',[['Green Rice Prawns',75.00,'3 pcs of fried prawns tossed in green rice flakes served with TONKIN spicy fish sauce.',''],['Fried Pork Rolls',50.00,'2 pcs of fried pork rolls made from black mushrooms, glass noodles, onions & TONKIN sauce.',''],['Fried vegetable rolls',50.00,'2 pcs of fried rolls made from shiitake mushrooms & greens served with TONKIN sauce.','vegetarian'],['Fried Dumplings',55.00,'3 pcs of fried pork dumplings made from water chestnuts, black mushrooms served with TONKIN spicy fish sauce.',''],['Chicken cabbage salad',68.00,'Made from shredded chicken, cabbage, pickled red onions, rau ram tossed in a TONKIN spicy fish sauce served with prawn crackers.','']]);
dishContainers('Bánh Mì - Vietnamese Sandwiches',[['B0. Bánh Mì Omelet',78.00,'Omelet, pickles, cucumber, coriander, chili & soy sauce. (Bánh Mì Trứng is served from 11:00-14:00)','vegetarian'],['B1. Bánh Mì Bbq Pork', 78.00, 'Marinated pork in 5 spice, BBQ sauce & TONKIN sauce.',''],['B2. Bánh Mì Traditional',78.00,'Patê, Vietnamese sausage, marinated pork in 5 spice, pickles, BBQ sauce & TONKIN spicy fish sauce.',''],['B3. Bành Mì Grilled Beef Sesame',78.00,'Grilled beef in sesame & TONKIN sauce.',''],['B4. Bánh Mì Tofu',78.00,'Tofu, pickles & TONKIN sauce.','vegetarian'],['B5. Bánh Mì Chicken Lemongrass',78.00,'Grilled chicken in lemongrass & TONKIN sauce.','']]);
dishContainers('Greens',[['Tonkin Salad',86.00,'Rocket salad, edamame beans, sugar snaps, cauliflower, leeks, coriander & chili tossed in a ginger-coriander-sesame dressing.<br> <br> <span> Add Beef Sesame  /  30,00 kr. <br> Add Chicken Lemongrass  /  30,00 kr. <br> Add Steamed Tofu  /  30,00 kr. </span>','']]);
dishContainers('Rice Noodle Salads',[['Bún Bò Nam Bộ Rice Noodle Salad With Beef Sesame',115.00,'Served with TONKIN spicy fish sauce.',''],['Bún Gà Nam Bộ Rice Noodle Salad With Chicken Lemongrass', 115.00,'Served with TONKIN spicy fish sauce.',''],['Bún Chay / Rice Noodle Salad With Tofu',115.00,'Served with TONKIN sauce.','vegetarian']]);
dishContainers('Soups',[['Bò Kho / Beef Stew In 5 Spices',96.00,'Slow cooked beef chunks topped with leeks, coriander & chili, served with a crispy warm baguette.',''],['Xíu Mại - Meatballs',80.00,'Pork meatballs cooked in a tomato-chili broth, topped with coriander & chili, served with a crispy warm baguette. <br><br> Noodles instead of crispy baguette  /  10,00 kr.',''],['Phở / Beef Rice Noodle Soup',125.00,"Traditional Vietnamese soup with slices of rare flanksteak, bean sprouts, topped with TONKIN's fresh herb mix, lime & chili. (Not as TAKEAWAY)",'Glutenfree'],['Phở Chay / Vegan Pho Noodle Soup',135.00,"Vegan noodle soup with 5 spice, slices of tofu, bean sprouts, topped with TONKIN's fresh herb mix, lime & chili.",'Vegan']]);
dishContainers('Desserts',[['Banana Coconut Tapioca Porridge',45.00,'Topped with condensed milk & salty crushed peanuts.','Glutenfree   Vegatarian'],['Tonkin Chocolate  Mousse',45.00,'Topped with condensed milk & salty crushed peanuts.','glutenfree']]);



/* 
        <div class="dishesContainer">
            <h1>Snacks</h1>
            <div class="dishContainer">
                <h3>Green Rice Prawns / 75.00 kr.</h3>
                <p>3 pcs of fried prawns tossed in green rice flakes served with TONKIN spicy fish sauce.</p>
                <h3>Vegtarian</h3>
            </div>
        </div>
*/