
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

listOfRecipe.push(new Recipe("Bắp rang bơ",
    'https://media.cooky.vn/recipe/g4/33397/s800x500/cooky-recipe-cover-r33397.jpg',
    ['dầu dừa','bắp hột','bơ'],
    ['Làm nóng dầu dừa trong nồi. Bạn có thể thử bằng cách thả vài hạt bắp vào bếp, bắp nổ bùng ra là dầu đã được. Trút bắp hột vào. Lắc nồi cho hột bắp bám đều dầu ăn. Đậy nắp nồi lại.','Khi bắp đã nổ hết thì tắt bếp, mở nắp nồi, trút bắp ra 1 cái chảo khác. Cho bơ vào đun cho tan rồi cho bắp vào trở lại, xóc đều. Bắp còn nóng nên sẽ làm bơ tan chảy và thấm đều.','Nếu bạn thích bắp có mùi vi khác thì có thể chuẩn bị sẵn các bột gia vị như: bột phô mai, bột trà xanh, bột mù tạt... hoặc đường rắc ngay vào lúc cho bắp trở lại vào nồi, xóc đều, sức nóng của bắp sẽ làm các loại bột gia vị tan chảy và thấm vào bắp.'],
    '15M',
    'Dễ'));
listOfRecipe.push(new Recipe('Thịt bê tươi xào khổ qua',
    "https://media.cooky.vn/recipe/g5/43023/s800x500/cooky-recipe-636780691573118232.jpeg",
    ["thịt bò", "khổ qua", "tiêu", "hạt nêm", "bột ngọt", "dầu ăn", "tỏi", "hành lá", "ngò rí"],
    ['Chuẩn bị đầy đủ nguyên liệu: Thịt bê rửa sạch, để ráo nước rồi thái mỏng, ướp 1 muỗng cà phê tiêu xay, 1 muỗng canh hạt nêm, 1/2 muỗng canh dầu ăn, 1 củ tỏi băm ướp 10 phút. Khổ qua rửa nước muối, bỏ ruột, thái vừa ăn. Gia vị chuẩn bị đầy đủ.','Bắc chảo phi vàng thơm tỏi băm còn lại cho thịt bê đã ướp vào xào lữa lớn nhanh tay cho thịt chín tái.','Sau đó bỏ khổ qua vào đảo đều tay, nêm gia vị vừa ăn, xào khoảng 1 phút thôi để giữ độ giòn của khổ qua nhé các bạn. Cho hành lá và ngò rí vào, tắt bếp là xong.','Cho thịt bê xào khổ qua ra bát và thưởng thức. Khổ qua là thực phẩm có công dụng làm mát cơ thể, xào cùng thịt bê giàu đạm và cực kì dinh dưỡng.',''],
    '25M',
    'Dễ'));
listOfRecipe.push(new Recipe("Thịt ba chỉ xào khoai tây",
    "https://media.cooky.vn/recipe/g5/42992/s800x500/cooky-recipe-cover-r42992.jpg",
    [
        "thịt ba chỉ",
        "khoai tây",
        "ầu ăn",
        "hdành boa rô",
        "muối",
        "nước tương",
        "gừng",
        "hoa hồi",
        "rượu trắng"
    ],
    [
        'Khoai tây gọt vỏ, cắt miếng nhỏ, ngâm vào nước ít phút, vớt ra để ráo nước. Thịt heo rửa sạch, dùng khăn giấy thấm khô nước, thái hình con cờ.',
        'Đun nóng 3ml dầu ăn, cho thịt heo vào chiên cho cháy xém các mặt. Tiếp đến cho vào hòa hồi, rượu nấu ăn, nước tương, gừng, ít nước lọc, đun sôi khoảng 12 phút.',
        'Thêm vào khoai tây, đảo đều, đậy nấp đun khoảng 10 phút. Sau đó thêm hành boa rô thái nhỏ vào, xào thêm 1-2 phút, tắt bếp.',
        'Thịt ba chỉ xào khoai tây với thịt heo chín béo mềm, khoai tây bùi, gia vị thanh đạm vừa với hầu hết khẩu vị của mọi người. Món này nên ăn nóng nhé.'
    ],
    '35M',
    'Dễ'));
listOfRecipe.push(new Recipe("Su hào xào thịt heo",
    "https://media.cooky.vn/recipe/g1/8787/s800x500/cooky-recipe-cover-r8787.jpg",
    [
        "su hào",
        "thịt heo",
        "cà rốt",
        "ớt sừng",
        "ầu hào",
        "hdành lá",
        "tỏi",
        "gừng",
        "muối"
    ],
    [
        'Su hào rửa sạch, dùng dụng cụ cắt rau củ hình lượng sóng để cắt su hào thành những que nhỏ nhé! Tỏi và gừng băm nhỏ. Hành lá thái nhỏ. Cà rốt thái sợi. Ớt thái nhỏ.',
        'Thịt heo thái nhỏ, trộn đều với 1/4 muỗng cà phê muối, 1 muỗng cà phê bột bắp. Đun nóng dầu ăn, cho thịt heo vào đảo đều cho thịt săn lại. Sau đó thêm tỏi, gừng và hành lá vào đảo đều cho thơm.',
        'Tiếp đến cho su hào, cà rốt và ớt vào. Nêm 10g dầu hào, 1/4 muỗng cà phê muối, xào tiếp 4-5 phút thì tắt bếp.',
        ' Su hào xào thịt heo với sự kết hợp của những loại rau củ quen thuộc. Thịt heo nhiều nạc ít mỡ. Có thể xem là món ăn thanh đạm, dinh dưỡng cho bữa cơm gia đình nhé!'
    ],
    '20M',
    'Dễ'));
