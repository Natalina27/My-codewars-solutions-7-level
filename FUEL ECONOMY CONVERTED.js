/*
Background
While mpg (miles per gallon) is a common unit of measurement for fuel economy in North America, for Europe the standard unit of measurement is generally liter per 100 km. Conversion between these units is somewhat hard to calculate in your head, so your task here is to implement a simple convertor in both directions.

Functions
mpg2lp100km() converts from miles per gallon to liter per 100 km.
lp100km2mpg() converts in the opposite direction.
Output
The output of both functions should be a number rounded to 2 decimal places.

Examples
mpg2lp100km(42) returns 5.6
lp100km2mpg( 9) returns 26.13
Reference
For this kata, use U.S. gallon, not imperial gallon.

1 gallon = 3.785411784 liters
1 mile = 1.609344 kilometers

 */
//MY SOLUTION:
//1.
function mpg2lp100km(x){
    let coeff=(378.5411784/1.609344);
    return +( coeff/ x ).toFixed(2);
}

let lp100km2mpg = mpg2lp100km;
//2.
function mpg2lp100km(x){
  const gallonToLiter=3.785411784
  const milesToKm=1.609344
  let result=(gallonToLiter*100)/(x*milesToKm);
  
  return +(Math.round(result+'e+2')+'e-2');
}

function lp100km2mpg(x){
  const literToGallon = 0.26417205;
  const KmToMiles=0.62137119;
  result=(100*KmToMiles)/(x*literToGallon);
  
  return +(Math.round(result+'e+2')+'e-2');
}
