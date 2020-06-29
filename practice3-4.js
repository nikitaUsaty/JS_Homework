function Animal(name, foodAmount) {
    this.name = name;

    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.'
    }

    this.dailyNorm = function (amount) {

        if (!arguments.length) return foodAmount;
        if (amount < 50 || amount > 500) {
            throw new Error('ошибка');
        }
        foodAmount = amount;
    }

    this.feed = function () {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };

    var self = this;

    this.animalFeed = function () {
        return self.feed();
    };
}

function Cat(name, foodAmount) {
    Animal.apply(this, arguments);
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.'
    }

    var chain = this;
    chain.feed = function () {
        console.log('Насыпать в миску' + ' ' + this.dailyNorm() + ' ' + 'корма')
        console.log('Кот доволен ^_^')
        return chain;
    }
    chain.stroke = function () {
        console.log('Гладим кота.');
        return chain;
    };
}
var fluffy = new Cat('Fluffy');


console.log(fluffy.name);


console.log(fluffy.dailyNorm(300));
console.log(fluffy.animalFeed());
fluffy.stroke().stroke().stroke().feed();

fluffy = null;
