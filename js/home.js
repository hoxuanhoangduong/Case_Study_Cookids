function toAddRecipe() {
    return window.location = 'addRecipe.html';
}

function allRecipe() {
    return window.location = 'allRecipe.html';
}

function search() {
    let keyword = document.getElementById('search').value.toLowerCase();
    window.location = 'singleRecipe.html?search=' +keyword;
}