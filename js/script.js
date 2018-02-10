//Pounds Converter
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(event){

    document.getElementById('output').style.visibility = 'visible';

    let lbs = event.target.value;

    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kilogramsOutput').innerHTML = lbs/2.2046;
    document.getElementById('ouncesOutput').innerHTML = lbs*16;

});;

//Kilograms Converter
document.getElementById('outputKg').style.visibility = 'hidden';
document.getElementById('kilogramsInput').addEventListener('input', function(event){

    document.getElementById('outputKg').style.visibility = 'visible';

    let kg = event.target.value;

    document.getElementById('gramskgOutput').innerHTML = kg*1000;
    document.getElementById('poundskgOutput').innerHTML = kg/0.45359237;
    document.getElementById('ounceskgOutput').innerHTML = kg/0.0283495231;
});;

//Grams Converter
document.getElementById('outputG').style.visibility = 'hidden';
document.getElementById('gramsInput').addEventListener('input', function(event){

    document.getElementById('outputG').style.visibility = 'visible';

    let g = event.target.value;

    document.getElementById('poundsgOutput').innerHTML = g/453.59237;
    document.getElementById('kilogramsgOutput').innerHTML = g/1000;
    document.getElementById('ouncesgOutput').innerHTML = g/28.3495231;
});;

//Grams Converter
document.getElementById('outputO').style.visibility = 'hidden';
document.getElementById('ouncesInput').addEventListener('input', function(event){

    document.getElementById('outputO').style.visibility = 'visible';

    let o = event.target.value;

    document.getElementById('gramsoOutput').innerHTML = o*28.3495231;
    document.getElementById('poundsoOutput').innerHTML = o*0.0625;
    document.getElementById('kilogramsoOutput').innerHTML = o*0.0283495231;

});;
