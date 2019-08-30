function getRecipesData() {
    let recipesData = "";
    if (localStorage.getItem("Recipes")) {
        recipesData = localStorage.getItem("Recipes");
        recipesData = JSON.parse(recipesData);
        return recipesData;
    } else {
        localStorage.setItem("Recipes", "");
        return [];
    }
}

function getRecipes() {
    let recipesData = getRecipesData();
    let tempRecipe;
    let recipes = [];
    for (let recipe of recipesData) {
        tempRecipe = new Recipe();
        tempRecipe.setName(recipe.name);
        tempRecipe.setImage(recipe.image);
        tempRecipe.setIngredent(recipe.ingredient);
        tempRecipe.setSteps(recipe.steps);
        tempRecipe.setDuration(recipe.duration);
        tempRecipe.setLevel(recipe.level);
        recipes.push(tempRecipe);
    }
    return recipes
}

function updateDatabase(recipes) {
    localStorage.setItem("Recipes", JSON.stringify(recipes));
}

function generateId() {
    if (localStorage.getItem("generateId")) {
        let id = parseInt(localStorage.getItem("generateId"));
        id++;
        localStorage.setItem("generateId", id.toString());
        return id;
    } else {
        localStorage.setItem("generateId", "1");
        return 1;
    }
}

let listOfRecipe = getRecipes();
let ingredients_arr = [];
let steps_arr = [];

function addIngredent() {
    let ingredient = document.getElementById('ingredient').value;
    ingredients_arr.push(ingredient);
    document.getElementById('ingredientslist').innerHTML = ingredients_arr;
}

function addStep() {
    let step = document.getElementById('step').value;
    steps_arr.push(step);
    document.getElementById('stepslist').innerHTML = steps_arr;
}

function addRecipe() {
    let recipeId = generateId();
    let name = document.getElementById('name').value;
    let img = document.getElementById('img').value;
    let ingredients = ingredients_arr;
    let steps = steps_arr;
    let duration = document.getElementById('duration').value;
    let level = document.getElementById('level').value;
    listOfRecipe.push(new Recipe(name, img, ingredients, steps, duration, level));
    updateDatabase(listOfRecipe);
    printOut();
}

function printOut() {
    let recipeList;

    for (let i = 0; i < listOfRecipe.length; i++) {
        recipeList += '<div id="name"><h3>' + listOfRecipe[i].name + '</h3></div>'
                    + '<div class="item"><div class="col-5" id="img"><img src=' + listOfRecipe[i].image + '></div>'
                    + '<div class="col-7"><div class="content"><ol type= "1"\><li><p> Thời gian : '+ listOfRecipe[i].duration +'</p></li>'
                    + '<li><p> Mức độ: ' + listOfRecipe[i].level+ '</p></li>'
                    + '<li><p> Số nguyên liệu : ' + listOfRecipe[i].ingredient.length + '</p></li>'
                    + '<li><p> Nguyên liệu : <div class="Ingredients">' + listOfRecipe[i].ingredient + '</div></p></li></ol></div>';
    }
    document.getElementById('recipeList').innerHTML = recipeList;
    return recipeList;
}

function resetDatabase() {
    localStorage.setItem("Recipes","");
    localStorage.setItem("generateId1","0");
}

