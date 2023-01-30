var a = +prompt("Enter the first number");
var b = +prompt("Enter the second number");
var c = +prompt("Enter the third number");

var discriminant = b * b - 4 * a *c;
if (discriminant>0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2*a);
    x2 = (-b - Math.sqrt(discriminant)) / (2*a);
    console.log(`The roots of quadratic equations are ${x1} and ${x2}`)
}
else if (discriminant == 0){
    x1 = x2 = -b / (2*a);
    console.log(`The roots of quadratic equations are ${x1} and ${x2}`)
}
else{
    console.log("The roots of equations have not real roots");
}
