/* const fs = require('fs');
let data = fs.readFileSync('./data/humanos.json');

let humanos = JSON.parse(data);
console.log(humanos);
console.log(typeof humanos);
 */

const fs = require('fs');
let data = {
	datos: [
		{
			nombre: 'juan andres',
			edad: '20',
			celular: '3004869',
		},
		{
			nombre: 'pedrito',
			edad: '15',
			celular: '3004869',
		},
		{
			nombre: 'valentina',
			edad: '20',
			celular: '3004869',
		},
	],
};
let jsondata = JSON.stringify(data);
console.log(jsondata);
console.log(typeof jsondata);

fs.writeFile('./data/datos.json', jsondata, (error) => {
	if (error) {
		console.log(`Error: ${error}`);
	} else {
		console.log('archivo generado correctamente');
	}
});