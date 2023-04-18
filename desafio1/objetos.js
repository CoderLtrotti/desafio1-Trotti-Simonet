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
	 * @param {string} Title
	 * @param {string} lugar
	 * @param {number} precio 
	 * 
	 * @param {number} stock 
	 * @param {Date} fecha 
	 */
	addProducts(Title, description ,precio, stock = 200, fecha = new Date()) {
		let filtro = this.products.filter((event) => event.Title === Title);
		if (filtro.length > 0) {
			console.log('El nombre del Producto ya existe');
			return;
		}

		const product = {
			description,
			Title,
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
	getProductosById(idProducts, idProductos) {
		
		const productIndex = this.products.findIndex(
			(product) => product.id === idProducts
		);

		
		if (productIndex === -1) {
			console.log('No existe el Producto');
			return; 
		}

		
		const product = this.products[productIndex];

		
		if (product.participantes.includes(idProductos)) {
			console.log('El producto ya esta agregado');
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
			console.log('No existe el Producto');
			return; o
		}

		const product = this.products[productIndex];
		
		const newProduct = {
			...product,
			lugar: nuevaLocalidad ?? product.description,
			fecha: nuevaFecha ?? product.fecha,
			id: this.#getID(), 
			participantes: [], 
		};

		
		this.products.push(newProduct);
	}
}

const productMananager = new ProductManager ();
productMananager.addProducts('producto prueba', 'Este es un producto prueba', 200, 25);
productMananager.getProductosById(1, 1);
productMananager.getProductosById(1, 685);
productMananager.addProducts('producto prueba', 'Este es un producto prueba', 200, 25);
productMananager.addProducts('producto prueba', 'Este es un producto prueba', 200, 25);
productMananager.getProductosById(2, 927);
productMananager.getProductosById(2, 10);
productMananager.getProductosById(2, 859);

console.log(productMananager.getProducts());

// Diferencia entre Clase y Objeto instancia de clase
console.log(`CLASS: ${productMananager}`);
console.log(`INSTANCIA: ${productMananager}`);