function UpgradeYourName(){

var name = prompt('Введите ваше Ф.И.О:');
var firstName = '';
var nextName = '';

for (var i = 0; i < name.length; i++ ){
        if (i === 0){
            nextName = name[i].toUpperCase();
        } else if (name[i - 1] === ' ') {
            nextName = name[i].toUpperCase();
        } else {
            nextName = name[i].toLowerCase();
        }
        firstName += nextName;
    }
alert (firstName);
}

UpgradeYourName();