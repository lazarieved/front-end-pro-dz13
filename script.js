var FIO = prompt('Введите ваше Ф.И.О:');

function UpgradeYourName(str){
    var arr = str.split(' ');
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase() ;
    }
    var str = arr.join(' ');
    return str;
}

alert(UpgradeYourName(FIO));