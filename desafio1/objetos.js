/*
 * 
 * 
 */

class ProductManager {
	
	#precioBaseGanancia = 0.15;
	#id = 0;

	constructor() {
		this.eventos = [];
	}

	getEventos() {
		return this.eventos;
	}

	/**
	 * 
	 * 
	 * @param {string} nombre 
	 * @param {string} lugar
	 * @param {number} precio 
	 * 
	 * @param {number} stock 
	 * @param {Date} fecha 
	 */
	agregarEvento(nombre, lugar ,precio, stock = 100, fecha = new Date()) {
		let filtro = this.eventos.filter((event) => event.nombre === nombre);
		if (filtro.length > 0) {
			console.log('El nombre del evento ya existe');
			return;
		}

		const evento = {
			lugar,
			nombre,
			precio: precio + precio * this.#precioBaseGanancia, 
			stock,
			fecha,
			participantes: [], 
		};

		
		evento.id = this.#getID();

		
		this.eventos.push(evento);
	}

	
	#getID() {
		
		this.#id++; 
		return this.#id;
	}

	/**
	 * 
	 * @param {number} idEvento 
	 * @param {number} idUsuario 
	 * @returns 
	 */
	agregarUsuario(idEvento, idUsuario) {
		
		const eventoIndex = this.eventos.findIndex(
			(evento) => evento.id === idEvento
		);

		
		if (eventoIndex === -1) {
			console.log('No existe el producto');
			return; 
		}

		
		const evento = this.eventos[eventoIndex];

		
		if (evento.participantes.includes(idUsuario)) {
			console.log('El productoo ya esta agregado');
			return; 
		}

		
		evento.participantes.push(idUsuario);
	}

	/**
	
	 * @param {number} idEvento 
	 
	  @param {string} nuevaLocalidad
	 * @param {Date} nuevaFecha 
	 * @returns
	 */
	ponerEventoEnGira(idEvento,  nuevaFecha) {
		const eventoIndex = this.eventos.findIndex(
			(evento) => evento.id === idEvento
		);

	
		if (eventoIndex === -1) {
			console.log('No existe el evento');
			return; o
		}

		const evento = this.eventos[eventoIndex];
		
		const newEvento = {
			...evento,
			lugar: nuevaLocalidad ?? evento.lugar,
			fecha: nuevaFecha ?? evento.fecha,
			id: this.#getID(), 
			participantes: [], 
		};

		
		this.eventos.push(newEvento);
	}
}

const productMananager = new ProductManager ();
productMananager.agregarEvento('Juguetes', 'Jugueteria Kids', 200, 50);
productMananager.agregarUsuario(1, 1);
productMananager.agregarUsuario(1, 685);
productMananager.agregarEvento('Juguetes', 'Jugueteria Kids', 200, 50);
productMananager.agregarEvento('Juguetes', 'Jugueteria Kids', 200, 50);
productMananager.agregarUsuario(2, 927);
productMananager.agregarUsuario(2, 10);
productMananager.agregarUsuario(2, 859);

console.log(productMananager.getEventos());

// Diferencia entre Clase y Objeto instancia de clase
console.log(`CLASS: ${productMananager}`);
console.log(`INSTANCIA: ${productMananager}`);