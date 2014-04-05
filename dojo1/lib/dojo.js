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
					if (temp=="I"){
						total+=3;
					}else{
						total+=5;
					}
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
		
	}
};

module.exports = dojo;