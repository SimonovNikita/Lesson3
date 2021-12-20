let items = [];
let price = [2, 5, 6, 10];

let result = price.reduce (function countCartPrice (sum ,item){
	return sum += item;
});

console.log(result);

for (i=-1; i<9; i++,console.log(i)){

}
var arr = [];
for (x=0;x<20;x++){
    arr.push('x');
    console.log(arr);
}