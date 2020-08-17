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
        return this
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

fluffy.feed().feed().stroke().stroke().stroke().feed();

fluffy = null;






function CoffeeMachine(power) {
    var waterAmount = 0;
  
    var WATER_HEAT_CAPACITY = 4200;
  
    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
  
    this.run = function() {
      setTimeout(function() {
        alert( 'Кофе готов!' );
      }, getTimeToBoil());
    };
  
    this.setWaterAmount = function(amount) {
      waterAmount = amount;
    };
  
  }
  
  var coffeeMachine = new CoffeeMachine(10000);
  coffeeMachine.setWaterAmount(50);
  coffeeMachine.run();



function CoffeeMachine(power) {
    this._waterAmount = 0;
    this._power= power;
    this._WATER_HEAT_CAPACITY = 4200;
  
}
    CoffeeMachine.prototype._getTimeToBoil = function() {
        return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
    };

    CoffeeMachine.prototype.run = function() {
        setTimeout(function() {
          alert( 'Кофе готов!' );
        }, this._getTimeToBoil());
      };

      CoffeeMachine.prototype.setWaterAmount =  function(amount) {
        this._waterAmount = amount;
      }; 

    var coffeeMachine = new CoffeeMachine(10000);
    coffeeMachine.setWaterAmount(50);
    coffeeMachine.run();