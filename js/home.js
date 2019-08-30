function toAddRecipe() {
    return window.location = 'addRecipe.html';
}

function allRecipe() {
    return window.location = 'allRecipe.html';
}

function search() {
    let keyword = document.getElementById('search').value;
    let recipeResult;
    for (let i = 0; i < listOfRecipe; i++) {
        for (let j = 0; j < listOfRecipe[i].ingredient.length; j++) {
            if (keyword == listOfRecipe[i].ingredient[j]) {
                recipeResult += '<div id="name"><h3>' + listOfRecipe[i].name + '</h3></div>'
                    + '<div class="item"><div class="col-5" id="img"><img src=' + listOfRecipe[i].image + '></div>'
                    + '<div class="col-7"><div class="content"><ol type= "1"\><li><p> Thời gian : '+ listOfRecipe[i].duration +'</p></li>'
                    + '<li><p> Mức độ: ' + listOfRecipe[i].level+ '</p></li>'
                    + '<li><p> Số nguyên liệu : ' + listOfRecipe[i].ingredient.length + '</p></li>'
                    + '<li><p> Nguyên liệu : <div class="Ingredients">' + listOfRecipe[i].ingredient + '</div></p></li></ol></div>';
            }
        }
    }
    document.getElementById('result').innerHTML = recipeResult;
}