var allIngredients = [];
var allRestrictions = [];
var myPreference;
var recommendList = [];

$(document).ready(function(){
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();
})
$(document).ready(function(){
// Add smooth scrolling to all links in navbar + footer link
    $(".diamond1 a, footer a[href='#myPage']").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

// Prevent default anchor click behavior
            event.preventDefault();

// Store hash
            var hash = this.hash;

// Using jQuery's animate() method to add smooth page scroll
// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

// Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})
$(document).ready(function(){
// Add smooth scrolling to all links in navbar + footer link
    $(".diamond2 a, footer a[href='#myPage']").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

// Prevent default anchor click behavior
            event.preventDefault();

// Store hash
            var hash = this.hash;

// Using jQuery's animate() method to add smooth page scroll
// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

// Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})
$(document).ready(function(){
// Add smooth scrolling to all links in navbar + footer link
    $(".diamond4 a, footer a[href='#myPage']").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

// Prevent default anchor click behavior
            event.preventDefault();

// Store hash
            var hash = this.hash;

// Using jQuery's animate() method to add smooth page scroll
// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

// Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})


$(document).ready(function(){
// Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

// Prevent default anchor click behavior
            event.preventDefault();

// Store hash
            var hash = this.hash;

// Using jQuery's animate() method to add smooth page scroll
// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

// Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

function selectionArray(){
    const checkboxesIng = document.getElementsByName("ingredient");
    for(let i = 0; i < checkboxesIng.length; i++) {
        if (checkboxesIng[i].checked) {
            allIngredients.push(checkboxesIng[i].value);
        }
    }
    const checkboxesDiet = document.getElementsByName("diet");
    for(let i = 0; i < checkboxesDiet.length; i++) {
        if (checkboxesDiet[i].checked) {
            allRestrictions.push(checkboxesDiet[i].value);
        }
    }
    const checkboxesPref = document.getElementsByName("preference");
    for(let i = 0; i < checkboxesPref.length; i++) {
        if (checkboxesPref[i].checked) {
            myPreference.push(checkboxesPref[i].value);
        }
    }

    recommend();
    let w = window.open("recipes.html");
    w.Whatever = recommendList;
}
function uncheckAll() {
    $('input[type="checkbox"]:checked').prop('checked', false);
    $('input[type="radio"]:checked').prop('checked', false);
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function recommend(){
    for (let i = 0; i < reciP.length; i++){
        if (isValid(i)){
            if (isPref(i)) {
                recommendList.unshift(reciP[i]);
            } else {
                recommendList.push(reciP[i]);
            }
        }
    }
}

function isValid(index){
    for (let i = 0; i < reciP[index].ingredients.length; i++){
        let found = false;
        for (let j = 0; j < allIngredients.length; j++) {
            if (reciP[index].ingredients[i] == allIngredients[j]){
                found = true;
                break;
            }
        }
        if (!found){
            return false;
        }
    }

    for (let i = 0; i < allRestrictions.length; i++){
        let found = false;
        for (let j = 0; j < reciP[index].restriction.length; j++) {
            if (allRestrictions[i] == reciP[index].restriction[j]){
                found = true;
                break;
            }
        }
        if (!found){
            return false;
        }
    }

    return true;
}

function isPref(index){
    return reciP[index].preference == myPreference;
}

function linktoURL(index){
    let temp = Whatever[index].link.substring(5);
    window.open(temp);
}

window.onload = function(){
    let r = document.getElementById('KungPao');
    for (let i = 0; i < Whatever.length; i++){
        let restrest = "";
        for (let j = 0; j < Whatever[i].restriction.length - 1; j++){
            restrest += Whatever[i].restriction[j] + ", ";
        }
        restrest += Whatever[i].restriction[Whatever[i].restriction.length - 1];
        r.innerHTML += "<div class=\"col-sm-4\">\n" +
            "<div class=\"thumbnail\">\n" +
            "<p><strong>" + Whatever[i].name +"</strong></p>\n"+
            "<p>" + restrest + "</p>\n" +
            "<p>" + Whatever[i].preference + "</p>\n" +
            "<button class=\"btn\" onclick=\"linktoURL("+ i + ")\">Link to Recipe</button>\n" +
            "</div>\n" +
            "</div>\n";
    }
};

var reciP = [
    {

        "name": "Kung Pao Chicken",
        "link" : "href=https://www.allrecipes.com/recipe/9027/kung-pao-chicken/?internalSource=streams&referringId=17135&referringContentType=Recipe%20Hub&clickId=st_trending_b",
        "preference" : "chinese",
        "ingredients" : ["chicken breast",
            "white wine",
            "soy sauce",
            "sesame oil",
            "cornstarch",
            "chili paste",
            "vinegar",
            "brown sugar",
            "green onions",
            "garlic",
            "chestnuts",
            "peanuts"],
        "restriction" : ["halal", "lactose"]
    } ,

    {
        "name" : "Sweet, Sticky and Spicy Chicken",
        "link" : "href=https://www.allrecipes.com/recipe/143082/sweet-sticky-and-spicy-chicken/?internalSource=streams&referringId=17135&referringContentType=Recipe%20Hub&clickId=st_trending_s",
        "preference" : "chinese",
        "ingredients" : ["brown sugar",
            "honey",
            "soy sauce",
            "ginger",
            "garlic",
            "hot sauce",
            "chicken breast",
            "vegetable oil"],
        "restriction" : ["peanut", "halal", "kosher", "lactose"]
    },

    {
        "name" : "Addictive Sesame Chicken",
        "link" : "href=https://www.allrecipes.com/recipe/61071/addictive-sesame-chicken/?internalSource=streams&referringId=695&referringContentType=Recipe%20Hub&clickId=st_trending_b",
        "preference" : "chinese",
        "ingredients" : ["soy sauce", "sesame oil", "flour", "cornstarch", "baking powder", "baking soda", "canola oil", "chicken breast", "vegetable oil", "chicken broth", "vinegar", "sesame oil", "chili paste", "garlic", "sesame seeds"],
        "restriction" : ["halal", "lactose", "kosher", "peanut"]
    },

    {
        "name" : "Lazy Pork Dumplings",
        "link" : "href=https://www.allrecipes.com/recipe/276226/lazy-pork-dumplings/?internalSource=streams&referringId=695&referringContentType=Recipe%20Hub&clickId=st_recipes_mades",
        "preference" : "chinese",
        "ingredients" : ["flour", "ground pork", "garlic", "ginger", "green onions", "chives", "red pepper flakes", "soy sauce", "sesame oil", "vinegar", "soy sauce", "chicken broth", "vegetable oil"],
        "restriction" : ["lactose", "kosher", "peanut"]
    },

    {
        "name" : "Pan-Fried chinese Pancakes",
        "link" : "href=https://www.allrecipes.com/recipe/214564/pan-fried-chinese-pancakes/?internalSource=staff%20pick&referringId=695&referringContentType=Recipe%20Hub",
        "preference" : "chinese",
        "ingredients" : ["flour", "vegetable oil", "sesame oil", "green onions"],
        "restriction" : ["lactose", "halal", "kosher", "peanut", "vegetarian"]
    },

    {
        "name" : "chinese Roast Pork",
        "link" : "href=https://www.allrecipes.com/recipe/14769/chinese-roast-pork/?internalSource=rotd&referringId=695&referringContentType=Recipe%20Hub",
        "preference" : "chinese",
        "ingredients" : ["pork roast", "soy sauce", "honey", "garlic", "ginger", "cornstarch"],
        "restriction" : ["lactose", "peanut", "kosher"]

    },

    {
        "name" : "chinese Green Bean Stir-Fry",
        "link" : "href=https://www.allrecipes.com/recipe/49350/chinese-green-bean-stir-fry/?internalSource=staff%20pick&referringId=695&referringContentType=Recipe%20Hub&clickId=cardslot%205",
        "preference" : "chinese",
        "ingredients" : ["vegetable oil", "garlic", "ginger", "black bean sauce"],
        "restriction" : ["lactose", "peanut", "vegetarian", "halal", "kosher"]
    },

    {
        "name" : "Crispy Orange Beef",
        "link" : "href=https://www.allrecipes.com/recipe/57966/crispy-orange-beef/?internalSource=hub%20recipe&referringId=695&referringContentType=Recipe%20Hub&clickId=cardslot%2015",
        "preference" : "chinese",
        "ingredients" : ["beef sirloin", "vinegar", "orange juice", "soy sauce", "rice", "cornstarch", "orange zest", "garlic", "broccoli", "oil"],
        "restriction" : ["lactose", "halal", "peanut", "kosher"]
    },

    {
        "name" : "Egg Drop Soup",
        "link" : "href=https://www.allrecipes.com/recipe/115965/egg-drop-soup-better-than-restaurant-quality/?internalSource=hub%20recipe&referringId=695&referringContentType=Recipe%20Hub",
        "preference" : "chinese",
        "ingredients" : ["chicken broth", "soy sauce", "sesame oil", "eggs", "chives"],
        "restriction" : ["lactose", "peanut", "halal", "kosher"]
    },

    {
        "name" : "Wonton Soup",
        "link" : "href=https://www.allrecipes.com/recipe/13199/wonton-soup/?internalSource=recipe%20hub&referringId=695&referringContentType=Recipe%20Hub&clickId=cardslot%2022",
        "preference" : "chinese",
        "ingredients" : ["pork loin", "shrimp", "rice wine", "soy sauce", "green onions", "ginger", "wonton wrappers", "chicken stock"],
        "restriction" : ["lactose", "peanut", "kosher"]
    },

    {
        "name" : "Pork Chops italiano",
        "link" : "href=https://www.allrecipes.com/recipe/219005/pork-chops-italiano/?internalSource=staff%20pick&referringId=16767&referringContentType=Recipe%20Hub",
        "preference" : "italian",
        "ingredients" : ["olive oil", "mushrooms", "pork loin", "garlic", "onions", "tomatoes", "basil", "bell peppers"],
        "restriction" : ["lactose", "peanut", "kosher"]
    },

    {
        "name" : "Tagliatelle with Coriander Pesto",
        "link" : "href=https://www.allrecipes.com/recipe/217292/tagliatelle-with-coriander-pesto/?internalSource=staff%20pick&referringId=16767&referringContentType=Recipe%20Hub",
        "preference" : "italian",
        "ingredients" : ["cilantro", "pine nuts", "feta cheese", "olive oil", "pasta", "olive oil"],
        "restriction" : ["halal", "kosher", "vegetarian", "peanut"]

    },

    {
        "name" : "Original Homemade italian Beef",
        "link" : "href=https://www.allrecipes.com/recipe/91597/original-homemade-italian-beef/?internalSource=staff%20pick&referringId=16767&referringContentType=Recipe%20Hub&clickId=cardslot%206",
        "preference" : "italian",
        "ingredients" : ["beef roast", "pepperoncini peppers", "hamburger buns"],
        "restriction" : ["lactose", "halal", "kosher", "peanut"]
    },

    {
        "name" : "Bow Ties with Sausage, Tomatoes, and Cream",
        "link" : "href=https://www.allrecipes.com/recipe/26257/bow-ties-with-sausage-tomatoes-and-cream/?internalSource=hub%20recipe&referringId=16767&referringContentType=Recipe%20Hub",

        "preference" : "italian",
        "ingredients" : ["pasta", "olive oil", "sausage", "red pepper flakes", "onions", "garlic", "tomatoes", "heavy cream", "parsley"],
        "restriction" : ["kosher", "peanut"]
    },

    {
        "name" : "Eggplant Parmesan",
        "link" : "href=https://www.allrecipes.com/recipe/25321/eggplant-parmesan-ii/?internalSource=hub%20recipe&referringId=16767&referringContentType=Recipe%20Hub&clickId=cardslot%2010",
        "preference" : "italian",
        "ingredients" : ["eggplant", "eggs", "bread", "spaghetti sauce", "cheese", "cheese", "basil"],
        "restriction" : ["vegetarian", "peanut", "halal", "kosher"]

    },

    {
        "name" : "Gourmet Mushroom Risotto",
        "link" : "href=https://www.allrecipes.com/recipe/85389/gourmet-mushroom-risotto/?internalSource=hub%20recipe&referringId=16767&referringContentType=Recipe%20Hub",
        "preference" : "italian",
        "ingredients" : ["chicken broth", "olive oil", "mushrooms", "shallots", "rice", "white wine", "chives", "butter", "cheese"],
        "restriction" : ["peanut", "halal", "kosher"]
    },

    {
        "name" : "Spinach Tomato Tortellini",
        "link" : "href=https://www.allrecipes.com/recipe/76129/spinach-tomato-tortellini/?internalSource=hub%20recipe&referringId=16767&referringContentType=Recipe%20Hub&clickId=cardslot%2021",
        "preference" : "italian",
        "ingredients" : ["pasta", "tomatoes", "spinach", "garlic", "onions", "basil", "garlic", "flour", "milk", "heavy cream", "cheese"],
        "restriction" : ["peanut", "halal", "kosher", "vegetarian"]
    },
    {
        "name" : "Quick Chicken Piccata",
        "link" : "href=https://www.allrecipes.com/recipe/220751/quick-chicken-piccata/?internalSource=recipe%20hub&referringId=16767&referringContentType=Recipe%20Hub&clickId=cardslot%2029",
        "preference" : "italian",
        "ingredients" : ["chicken breast", "flour", "olive oil", "white wine", "lemon", "butter", "parsley"],
        "restriction" : ["peanut", "halal", "kosher"]
    },

    {
        "name" : "Tender italian Baked Chicken",
        "link" : "href=https://www.allrecipes.com/recipe/52005/tender-italian-baked-chicken/?internalSource=recipe%20hub&referringId=16767&referringContentType=Recipe%20Hub&clickId=cardslot%2032",
        "preference" : "italian",
        "ingredients" : ["mayonnaise", "cheese", "garlic", "bread" , "chicken breast"],
        "restriction" : ["peanut", "halal", "kosher"]
    },

    {
        "name" : "Penne with Chicken and Pesto",
        "link" : "href=https://www.allrecipes.com/recipe/26284/penne-with-chicken-and-pesto/?internalSource=recipe%20hub&referringId=16767&referringContentType=Recipe%20Hub&clickId=cardslot%2052",
        "preference" : "italian",
        "ingredients" : ["pasta", "butter", "olive oil", "chicken breast", "garlic", "heavy cream", "pesto", "cheese"],
        "restriction" : ["peanut", "kosher", "halal"]
    },

    {
        "name" : "Guacamole",
        "link" : "href=https://www.allrecipes.com/recipe/14231/guacamole/?internalSource=rotd&referringId=728&referringContentType=Recipe%20Hub",
        "preference" : "mexican",
        "ingredients" : ["avocados", "lime", "onions", "cilantro", "tomatoes", "garlic"],
        "restriction" : ["lactose", "vegetarian", "peanut", "halal", "kosher"]
    },

    {
        "name" : "Slow Cooker Chicken Taco Soup",
        "link" : "https://www.allrecipes.com/recipe/70343/slow-cooker-chicken-taco-soup/?internalSource=hub%20recipe&referringId=728&referringContentType=Recipe%20Hub&clickId=cardslot%207",
        "preference" : "mexican",
        "ingredients" : ["onions", "beans", "corn", "tomato sauce", "beer", "tomatoes", "chicken breast"],
        "restriction" : ["lactose", "peanut", "halal", "kosher"]
    },

    {
        "name" : "Salsa Chicken",
        "link" : "href=https://www.allrecipes.com/recipe/16700/salsa-chicken/?internalSource=hub%20recipe&referringId=728&referringContentType=Recipe%20Hub",
        "preference" : "mexican",
        "ingredients" : ["chicken breast", "salsa", "cheese"],
        "restriction" : ["peanut", "kosher", "halal"]
    },

    {
        "name" : "mexican Rice",
        "link" : "href=https://www.allrecipes.com/recipe/27072/mexican-rice-ii/?internalSource=hub%20recipe&referringId=728&referringContentType=Recipe%20Hub",
        "preference" : "mexican",
        "ingredients" : ["vegetable oil", "rice", "garlic", "cumin", "onions", "tomato sauce", "chicken broth"],
        "restriction" : ["lactose", "peanut", "halal", "kosher"]
    },

    {
        "name" : "Black Bean Burritos",
        "link" : "href=https://www.allrecipes.com/recipe/14041/delicious-black-bean-burritos/?internalSource=recipe%20hub&referringId=728&referringContentType=Recipe%20Hub&clickId=cardslot%2024",
        "preference" : "mexican",
        "ingredients" : ["tortillas", "vegetable oil", "onions", "bell peppers"],
        "restriction" : ["lactose", "vegetarian", "peanut","halal", "kosher"]
    },

    {
        "name" : "Chicken Tortilla Soup",
        "link" : "href=https://www.allrecipes.com/recipe/13351/chicken-tortilla-soup-i/?internalSource=recipe%20hub&referringId=728&referringContentType=Recipe%20Hub&clickId=cardslot%2029",
        "preference" : "mexican",
        "ingredients" : ["onions", "garlic", "olive oil", "chili powder", "oregano", "tomatoes", "chicken broth", "corn", "black beans", "cilantro", "chicken breast", "tortilla chips", "avocados", "cheese", "green onions"],
        "restriction" : ["peanut", "halal", "kosher"]
    },

    {
        "name" : "Spanish Rice",
        "link" : "href=https://www.allrecipes.com/recipe/24329/spanish-rice-ii/?internalSource=recipe%20hub&referringId=728&referringContentType=Recipe%20Hub&clickId=cardslot%2030",
        "preference" : "mexican",
        "ingredients" : ["vegetable oil", "rice", "onions", "bell peppers", "tomatoes"],
        "restriction" : ["lactose", "vegetarian", "halal", "kosher", "peanut"]
    },

    {
        "name" : "Marianted Flank Steak",
        "link" : "href=https://www.allrecipes.com/recipe/18074/marinated-flank-steak/?internalSource=recipe%20hub&referringId=728&referringContentType=Recipe%20Hub&clickId=cardslot%2035",
        "preference" : "mexican",
        "ingredients" : ["vegetable oil", "soy sauce", "vinegar", "lemon", "worcestershire sauce", "mustard", "garlic", "flank steak"],
        "restriction" : ["lactose", "peanut", "halal", "kosher"]
    },
    {
        "name": "Salsa Chicken Burrito Filling",
        "link" : "href=https://www.allrecipes.com/recipe/22970/salsa-chicken-burrito-filling/?internalSource=recipe%20hub&referringId=728&referringContentType=Recipe%20Hub&clickId=cardslot%2069",
        "preference" : "mexican",
        "ingredients" : ["chicken breast", "tomato sauce", "salsa", "cumin", "garlic", "chili powder"],
        "restriction" : ["lactose", "peanut", "kosher", "halal"]
    },

    {
        "name" : "Best Black Beans",
        "link" : "href=https://www.allrecipes.com/recipe/63113/best-black-beans/?internalSource=recipe%20hub&referringId=728&referringContentType=Recipe%20Hub&clickId=cardslot%2076",
        "preference" : "mexican",
        "ingredients" : ["black beans", "onions", "garlic", "cilantro", "cayenne pepper"],
        "restriction" :["lactose", "vegetarian", "peanut", "kosher", "halal"]
    },

    {
        "name" : "Fresh Southern Peach Cobbler",
        "link" : "href=https://www.allrecipes.com/recipe/51535/fresh-southern-peach-cobbler/?internalSource=hub%20recipe&referringId=15876&referringContentType=Recipe%20Hub",
        "preference" : "southern",
        "ingredients" : ["peaches", "sugar", "cinnamon", "nutmeg", "lemon", "cornstarch", "flour", "baking powder", "butter"],
        "restriction" : ["lactose", "vegetarian", "peanut", "halal", "kosher"]
    },

    {
        "name" : "Sweet Potato Pie",
        "link" : "href=https://www.allrecipes.com/recipe/12142/sweet-potato-pie-i/?internalSource=hub%20recipe&referringId=15876&referringContentType=Recipe%20Hub&clickId=cardslot%2010",
        "preference" : "southern",
        "ingredients" : ["sweet potatoes", "butter", "sugar", "milk", "eggs", "nutmeg", "cinnamon", "vanilla", "flour"],
        "restriction" : ["vegetarian", "peanut", "halal", "kosher"]
    },

    {
        "name" : "Garlic Chicken Fried Chicken",
        "link" : "href=https://www.allrecipes.com/recipe/86047/garlic-chicken-fried-chicken/?internalSource=hub%20recipe&referringId=15876&referringContentType=Recipe%20Hub",
        "preference" : "southern",
        "ingredients" : ["garlic", "bread", "flour", "milk", "eggs", "chicken breast", "oil"],
        "restriction" : ["peanut", "halal", "kosher"]
    },

    {
        "name" : "Southern Candied Sweet Potatoes",
        "link" : "href=https://www.allrecipes.com/recipe/9209/southern-candied-sweet-potatoes/?internalSource=hub%20recipe&referringId=15876&referringContentType=Recipe%20Hub",
        "preference" : "southern",
        "ingredients" : ["sweet potatoes", "butter", "sugar", "cinnamon", "nutmeg", "vanilla"],
        "restriction" : ["peanut", "vegetarian", "halal", "kosher"]
    },

    {
        "name" : "Southern Fried Cabbage",
        "link" : "href=https://www.allrecipes.com/recipe/73833/southern-fried-cabbage/?internalSource=hub%20recipe&referringId=15876&referringContentType=Recipe%20Hub",
        "preference" : "southern",
        "ingredients" : ["bacon", "vegetable oil", "cabbage", "onions", "sugar"],
        "restriction" : ["lactose", "kosher", "peanut"]
    },

    {
        "name" : "Easy Red Beans and Rice",
        "link" : "href=https://www.allrecipes.com/recipe/34419/easy-red-beans-and-rice/?internalSource=recipe%20hub&referringId=15876&referringContentType=Recipe%20Hub&clickId=cardslot%2043",
        "preference" : "southern",
        "ingredients" : ["rice", "turkey", "onions", "bell peppers", "kidney beans", "tomatoes", "oregano"],
        "restriction" : ["lactose", "halal", "kosher", "peanut"]
    },

    {
        "name" : "Best Bread Pudding with Vanilla Sauce",
        "link" : "href=https://www.allrecipes.com/recipe/217181/best-bread-pudding-with-vanilla-sauce/?internalSource=recipe%20hub&referringId=15876&referringContentType=Recipe%20Hub&clickId=cardslot%2051",
        "preference" : "southern",
        "ingredients" : ["sugar", "brown sugar", "cinnamon", "butter", "milk", "bread", "raisins", "flour", "eggs", "vanilla"],
        "restriction" : ["vegetarian", "halal", "kosher", "peanut"]
    },

    {
        "name" : "Texas Ranch Potato Salad",
        "link" : "href=https://www.allrecipes.com/recipe/57148/texas-ranch-potato-salad/?internalSource=recipe%20hub&referringId=15876&referringContentType=Recipe%20Hub&clickId=cardslot%2057",
        "preference" : "southern",
        "ingredients" : ["ranch", "mayonnaise", "green onions", "bacon", "potatoes"],
        "restriction" : ["peanut","halal", "kosher"]
    },

    {
        "name" : "Delicious Apple Sauce",
        "link" : "href=https://www.allrecipes.com/recipe/20645/delicious-apple-sauce/?internalSource=recipe%20hub&referringId=15876&referringContentType=Recipe%20Hub&clickId=cardslot%2069",
        "preference" : "southern",
        "ingredients" : ["apples", "cinnamon", "brown sugar"],
        "restriction" : ["lactose", "peanut", "vegetarian", "halal", "kosher"],

    },

    {
    "name": "Thai Sweet Sticky Rice With Mango",
    "link" : "href=https://www.allrecipes.com/recipe/150313/thai-sweet-sticky-rice-with-mango-khao-neeo-mamuang/?internalSource=staff%20pick&referringId=702&referringContentType=Recipe%20Hub",
    "preference" : "thai",
    "ingredients" : [
    "rice",
    "coconut milk",
    "sugar",
    "cornstarch",
    "mango"],
    "restriction" : ["vegetarian", "peanut", "lactose", "kosher", "halal"]
},

{
    "name": "Authenic Pad Thai",
    "link" : "href=https://www.allrecipes.com/recipe/222350/authentic-pad-thai/?internalSource=hub%20recipe&referringId=702&referringContentType=Recipe%20Hub",
    "preference" : "thai",
    "ingredients" : [
        "rice noodles",
        "sugar",
        "vinegar",
        "fish sauce",
        "tamarind paste",
        "garlic",
        "eggs",
        "peanuts",
        "bean sprouts",
        "chives",
        "lime"],

    "restriction" : ["lactose", "kosher", "halal"]
},

{
    "name": "Thai Cashew Chicken",
    "link" : "href=https://www.allrecipes.com/recipe/69620/thai-cashew-chicken/?internalSource=recipe%20hub&referringId=702&referringContentType=Recipe%20Hub&clickId=cardslot%2045",
    "preference" : "thai",
    "ingredients" : [
        "soy sauce",
        "fish sauce",
        "garlic",
        "ginger",
        "chicken breast",
        "rice",
        "sesame oil",
        "brown sugar",
        "onions",
        "peanut butter",
        "cashews"
],
    "restriction" : ["lactose", "halal"]
},

{
    "name": "Thai Coffee",
    "link" : "href=https://www.allrecipes.com/recipe/42796/thai-coffee/?internalSource=recipe%20hub&referringId=702&referringContentType=Recipe%20Hub&clickId=cardslot%20115",
    "preference" : "thai",
    "ingredients" : [
        "coffee",
        "cardamom",
        "condensed milk"
],
    "restriction" : ["vegetarian", "peanut", "kosher", "halal"]
},

{
    "name": "Drunken Noodles with Chicken",
    "link" : "href=https://www.allrecipes.com/recipe/272297/drunken-noodles-with-chicken/?internalSource=recipe%20hub&referringId=702&referringContentType=Recipe%20Hub&clickId=cardslot%20225",
    "preference" : "thai",
    "ingredients" : [
        "rice noodles",
        "vegetable oil",
        "garlic",
        "chicken breast",
        "fish sauce",
        "soy sauce",
        "molasses",
        "bell peppers",
        "tomatoes",
        "basil",
],
    "restriction" : ["lactose", "peanut", "halal"]
},

{
    "name": "Spicy Basil Chicken",
    "link" : "href=https://www.allrecipes.com/recipe/68813/spicy-basil-chicken/?internalSource=hub%20recipe&referringId=702&referringContentType=Recipe%20Hub",
    "preference" : "thai",
    "ingredients" : [
        "chili oil",
        "garlic",
        "chili pepper",
        "chicken breast",
        "sugar",
        "salt",
        "oyster sauce",
        "mushrooms",
        "onions",
        "basil",
],
    "restriction" : ["lactose", "peanut", "halal"]
},

{
    "name": "Tom Ka Gai",
    "link": "href=https://www.allrecipes.com/recipe/13161/tom-ka-gai-coconut-chicken-soup/?internalSource=hub%20recipe&referringId=702&referringContentType=Recipe%20Hub",
    "preference" : "thai",
    "ingredients" : [
        "chicken breast",
        "vegetable oil",
        "coconut milk",
        "ginger",
        "fish sauce",
        "lime",
        "cayenne pepper",
        "turmeric",
        "green onions",
        "cilantro",
],
    "restriction" : ["lactose", "peanut", "halal"]
},

{
    "name": "Pad Krapao",
    "link": "href=https://www.allrecipes.com/recipe/266392/pad-krapao-thai-stir-fry-pork-with-basil/?internalSource=recipe%20hub&referringId=702&referringContentType=Recipe%20Hub&clickId=cardslot%20200",
    "preference" : "thai",
    "ingredients" : [
        "vegetable oil",
        "garlic",
        "chili pepper",
        "pork",
        "soy sauce",
        "fish sauce",
        "onions",
        "bell peppers",
        "basil",
],
    "restriction" : ["lactose", "peanut"]
},

{
    "name": "Spicy Garlic and Pepper Shrimp",
    "link": "href=https://www.allrecipes.com/recipe/12818/spicy-garlic-and-pepper-shrimp/?internalSource=recipe%20hub&referringId=702&referringContentType=Recipe%20Hub&clickId=cardslot%2022",
    "preference" : "thai",
    "ingredients" : [
        "vegetable oil",
        "cabbage",
        "garlic",
        "shrimp",
        "red pepper flakes",
        "onions",
        "cilantro",
        "soy sauce",
        "basil",
],
    "restriction" : ["lactose", "peanut"]
},

{
    "name": "Amazing Simple Thai Tofu",
    "link": "href=https://www.allrecipes.com/recipe/58097/amazing-simple-thai-tofu/?internalSource=recipe%20hub&referringId=702&referringContentType=Recipe%20Hub&clickId=cardslot%2032",
    "preference" : "thai",
    "ingredients" : [
        "green onions",
        "olive oil",
        "sesame oil",
        "soy sauce",
        "ginger",
        "peanut butter",
        "coconut",
],
    "restriction" : ["lactose", "vegetarian", "halal"]
}
];

var ingredientList = ["apples", "avocados", "bacon", "baking powder", "baking soda", "basil", "bean sprouts", "beans", "beef roast", "beef sirloin", "beer",  "bell peppers", "black bean sauce", "black beans", "bread", "broccoli", "brown sugar", "butter", "cabbage", "canola oil", "cardamom", "cashews", "cayenne pepper", "cheese", "chestnuts", "chicken breast", "chicken broth", "chicken stock", "chili oil", "chili paste", "chili pepper", "chili powder", "chives", "cilantro", "cinnamon", "coconut", "coconut milk", "coffee", "condensed milk", "corn", "cornstarch", "cumin", "eggplant", "eggs", "feta cheese", "fish sauce", "flank steak", "flour", "garlic", "ginger", "green onions", "ground pork", "hamburger buns", "heavy cream", "honey", "hot sauce", "kidney beans", "lemon", "lime", "mango", "mayonnaise", "milk", "molasses", "mushrooms", "mustard", "nutmeg", "oil", "olive oil", "onions", "orange juice", "orange zest", "oregano", "oyster sauce", "parsley", "pasta", "peaches", "peanut butter", "peanuts", "pepperoncini peppers", "pesto", "pine nuts", "pork", "pork loin", "pork roast", "potatoes", "raisins", "ranch", "red pepper flakes", "rice", "rice noodles", "rice wine", "salsa", "salt", "sausage", "sesame oil", "sesame seeds", "shallots", "shrimp", "soy sauce", "spaghetti sauce", "spinach", "sugar", "sweet potatoes", "tamarind paste", "tomato sauce", "tomatoes", "tortilla chips", "tortillas", "turmeric", "turkey", "vanilla", "vegetable oil", "vinegar", "white wine", "wonton wrappers", "worcestershire sauce"];