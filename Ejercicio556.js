function add () {
	var element = document.getElementById("op").innerHTML;
	if(element.length > 1){
		var array = element.split("+");
		var res=(parseInt(array[0]) + parseInt(array[1]));	
		var elem2 = document.getElementById("res");
		elem2.innerHTML = "= " + res;
	}
};

function generar() {
	var op1= Math.floor((Math.random() * 100) + 1);
	var op2= Math.floor((Math.random() * 100) + 1);

	var element1= document.getElementById("res");
	element1.innerHTML = "";
	var element = document.getElementById("op");
	element.innerHTML = op1 + "+" + op2;

};