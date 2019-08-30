
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


let listOfRecipe = getRecipes();
let ingredients_arr = [];
let steps_arr = [];

function addIngredent() {
    let ingredient = document.getElementById('ingredient').value;
    ingredients_arr.push(ingredient.toLowerCase());
    document.getElementById('ingredientslist').innerHTML = ingredients_arr;
}

function addStep() {
    let step = document.getElementById('step').value;
    steps_arr.push(step);
    document.getElementById('stepslist').innerHTML = steps_arr;
}

listOfRecipe.push(new Recipe('Bắp rang bơ','https://media.cooky.vn/recipe/g4/33397/s800x500/cooky-recipe-cover-r33397.jpg',['dầu dừa','bắp hột','bơ'],['Làm nóng dầu dừa trong nồi. Bạn có thể thử bằng cách thả vài hạt bắp vào bếp, bắp nổ bùng ra là dầu đã được. Trút bắp hột vào. Lắc nồi cho hột bắp bám đều dầu ăn. Đậy nắp nồi lại.','Khi bắp đã nổ hết thì tắt bếp, mở nắp nồi, trút bắp ra 1 cái chảo khác. Cho bơ vào đun cho tan rồi cho bắp vào trở lại, xóc đều. Bắp còn nóng nên sẽ làm bơ tan chảy và thấm đều.','Nếu bạn thích bắp có mùi vi khác thì có thể chuẩn bị sẵn các bột gia vị như: bột phô mai, bột trà xanh, bột mù tạt... hoặc đường rắc ngay vào lúc cho bắp trở lại vào nồi, xóc đều, sức nóng của bắp sẽ làm các loại bột gia vị tan chảy và thấm vào bắp.'],'15M','Dễ'))

function addRecipe() {
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

