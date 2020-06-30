function Animal(name, foodAmount) {
    this.name = name;

    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.'
    }


    this.dailyNorm = function (amount) {

        if (!arguments.length) return formatFoodAmount();
        if (amount < 50 || amount > 500) {
            throw new Error('ошибка');
        }
        foodAmount = amount;
    }
    var self = this;
    this.feed = function () {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };

}

function Cat(name, foodAmount) {
    Animal.apply(this, arguments);
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.'
    }


    var animalFeed = this.feed;
    this.feed = function () {
        animalFeed.call(this);
        this.added();
    }

    this.added = function () {
        console.log('Кот доволен ^_^');
    };

    this.stroke = function () {
        console.log('Гладим кота.');
    };
}
var fluffy = new Cat('Fluffy');


console.log(fluffy.name);


console.log(fluffy.dailyNorm(300));
console.log(fluffy.animalFeed());
fluffy.stroke().stroke().stroke().feed();

fluffy = null;
