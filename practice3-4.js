function Animal(name, foodAmount) {
    this.name = name;

    var foodAmount = 50;
    var self = this;
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

    this.feed = function () {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };

}

function Cat(name, foodAmount) {
    Animal.apply(this, arguments);

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
        return this;
    };
}
var fluffy = new Cat('Fluffy');


console.log(fluffy.name);


console.log(fluffy.dailyNorm(300));

fluffy.stroke().stroke().stroke().feed();

fluffy = null;


