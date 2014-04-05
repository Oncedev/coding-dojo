var dojo = {
	run: function(romanNumber) {
		var total = 0;
		var temp;
		for(var roman in romanNumber){

			//console.log(roman); 
			switch(romanNumber[roman]){
				case 'I':
					total +=1;		
					break;
				case 'V':
					total+= this.calcularValor("I", temp, 5);
					break;
				case 'X':
					if (temp=="I"){
						total+=8;
					}else{
						total+=10;
					}
					break;

				case 'L':
					if (temp=="X"){
						total+=30;
					}else{
						total+=50;
					}
					break;

				case 'C':
					if (temp=="X"){
						total+=80;
					}else{
						total+=100;
					}
					break;

				case 'D':
					if (temp=="C"){
						total+=300;
					}else{
						total+=500;
					}
					break;

				case 'M':
					if (temp=="C"){
						total+=800;
					}else{
						total+=1000;
					}
					break;

			}
			temp = romanNumber[roman];
		}

		return total;
		
	},

	calcularValor: function (excessao, temp, valordf){
		var tabela = {
			"I": 1
		};

		if(temp == excessao) {
			return valordf - 2* tabela[excessao];
		}

		return valordf;
	}
};

module.exports = dojo;