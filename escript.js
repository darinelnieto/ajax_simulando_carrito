class producto{
	constructor(nombre, precio, fecha){
		this.nombre = nombre;
		this.precio = precio;
		this.fecha = fecha;
	}
}


class acciones{
	addProduct(produc){
		const productoAgregado = document.getElementById('productos');

		const objeto = document.createElement('div');

		objeto.innerHTML = `
		<div class="card text-center mb-5">
			<div class="card-body">
				<strong>nombre</strong>: ${produc.nombre}
				<strong>precio</strong>: ${produc.precio} 
				<strong>lote</strong>: ${produc.fecha}<br>
				<a href="#" class="btn btn-danger" name="eliminar">borrar</a>
			</div>
		</div>`;

		productoAgregado.appendChild(objeto);
		this.resetformu();
	}

	resetformu(){
		document.getElementById('formulario').reset();
	}

	deletProduct(elemento){
		if(elemento.name === 'eliminar'){
			elemento.parentElement.parentElement.parentElement.remove();
		}
	}
}


// eventos del dom
document.getElementById('formulario').addEventListener('submit', function(e){
	const nombre = document.getElementById('nombre').value;
	const precio = document.getElementById('precio').value;
	const fecha = document.getElementById('fecha').value;

	const produc = new producto(nombre, precio, fecha);
	const accion = new acciones();

	e.preventDefault();

	accion.addProduct(produc);


	}, true);

document.getElementById('productos').addEventListener('click', function(e){
	const accion = new acciones();
	accion.deletProduct(e.target);
});







