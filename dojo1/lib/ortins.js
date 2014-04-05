var dojo = {
	run: function(romanNumber) {
		var tabela = {
			'':0,
			"I":1,
			"V":5,
			"X":10,
			"L":50,
			"C":100,
			"D":500,
			"M":1000,
		};

		var arrayChar = romanNumber.split('').map(function(x) {return tabela[x]});
		var total = 0;
		arrayChar.reduce(function (anterior,proximo) {
			total += proximo;

			if (anterior < proximo) {
				total -= 2 * anterior;
			}

			return proximo;
		},'');

		return total;
	}
};

module.exports = dojo;