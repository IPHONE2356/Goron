function random(num1,num2){
	return Math.random() * (num2 - num1) + num1;
}
output = random(1,10)

output = output.toString()
output = output[0]
console.log(output)
arr = ["Jaimins got dry knees","Jaimins dry at apex","Thomas’ breath kicks","Max is dry at siege"]
var item = arr[Math.floor(Math.random() * arr.length)];
console.log(item)