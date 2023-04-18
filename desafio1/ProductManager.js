/*
 * 
 * 
 */

class ProductManager {
	
	#precioBaseGanancia = 0.15;
	#id = 0;

	constructor() {
		this.products  = [];
	}

	getProducts() {
		return this.products;
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
	addProducts(nombre, lugar ,precio, stock = 100, fecha = new Date()) {
		let filtro = this.products.filter((event) => event.nombre === nombre);
		if (filtro.length > 0) {
			console.log('El nombre del evento ya existe');
			return;
		}

		const product = {
			lugar,
			nombre,
			precio: precio + precio * this.#precioBaseGanancia, 
			stock,
			fecha,
			participantes: [], 
		};

		
		product.id = this.#getID();

		
		this.products.push(product);
	}

	
	#getID() {
		
		this.#id++; 
		return this.#id;
	}

	/**
	 * 
	 * @param {number} idProducts
	 * @param {number} idProductos
	 * @returns 
	 */
	/*idProductos*/
	agregarProductos(idProducts, idProductos) {
		
		const productIndex = this.products.findIndex(
			(product) => product.id === idProducts
		);

		
		if (productIndex === -1) {
			console.log('No existe el producto');
			return; 
		}

		
		const product = this.products[productIndex];

		
		if (product.participantes.includes(idProductos)) {
			console.log('El productoo ya esta agregado');
			return; 
		}

		
		product.participantes.push(idProductos);
	}
	/*idProductos*/
	/**
	
	 * @param {number} idProducts 
	 
	  @param {string} nuevaLocalidad
	 * @param {Date} nuevaFecha 
	 * @returns
	 */
	ponerProductsEnGira(idProducts,  nuevaFecha) {
		const productIndex = this.products.findIndex(
			(product) => product.id === idProducts
		);

	
		if (productIndex === -1) {
			console.log('No existe el evento');
			return; o
		}

		const product = this.products[productIndex];
		
		const newProduct = {
			...product,
			lugar: nuevaLocalidad ?? product.lugar,
			fecha: nuevaFecha ?? product.fecha,
			id: this.#getID(), 
			participantes: [], 
		};

		
		this.products.push(newProduct);
	}
}

const productMananager = new ProductManager ();
productMananager.addProducts('Juguetes', 'Jugueteria Kids', 200, 50);
productMananager.agregarProductos(1, 1);
productMananager.agregarProductos(1, 685);
productMananager.addProducts('Juguetes', 'Jugueteria Kids', 200, 50);
productMananager.addProducts('Juguetes', 'Jugueteria Kids', 200, 50);
productMananager.agregarProductos(2, 927);
productMananager.agregarProductos(2, 10);
productMananager.agregarProductos(2, 859);

console.log(productMananager.getProducts());

// Diferencia entre Clase y Objeto instancia de clase
console.log(`CLASS: ${productMananager}`);
console.log(`INSTANCIA: ${productMananager}`);