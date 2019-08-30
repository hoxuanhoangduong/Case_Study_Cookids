function Recipe(name, image, ingredient, steps, duration, level) {
    this.name = name;
    this.image = image;
    this.ingredient = ingredient;
    this.steps = steps;
    this.duration = duration;
    this.level = level;

    this.getName = function () {
        return this.name;
    }
    this.setName = function (name) {
        this.name = name;
    }
    this.getImage = function () {
        return this.image;
    }
    this.setImage = function (image) {
        this.image = image;
    }
    this.getIngredent = function () {
        return this.ingredient;
    }
    this.setIngredent = function (ingredent) {
        this.ingredient = ingredent;
    }
    this.getSteps = function () {
        return this.steps;
    }
    this.setSteps = function (steps) {
        this.steps = steps;
    }
    this.getDuration = function () {
        return this.duration;
    }
    this.setDuration = function (duration) {
        this.duration = duration;
    }
    this.getLevel = function () {
        return this.level;
    }
    this.setLevel = function (level) {
        this.level = level;
    }
}