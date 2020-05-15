/***
 * Paso #1:
 * Comprobar si una reina esta bien colocada
 * La reina de la fila i esta bien colocada si no esta
 * en la columna ni en la misma diagonal que cualquiera de las
 * reinas de las filas anteriores
 * 
 * Parametros:
 * Fila -fila-Fila en que se encuentra la reina cuya posicion queremos validad
 * Reinas -reinas-vector que tiene las posiciones de las reinas.
 * n -nReinas- numero de reinas
 */

/***
    0 1 2 3 4 5 6 7 
  0 * * * R * * * * 
  1 * * * * * * R * 
  2 * * R * * * * *
  3 * * * * * * * R 
  4 * R * * * * * * 
  5 * * * * R * * * 
  6 R * * * * * * * 
  7 * * * * * R * * 
                0 1 2 3 4 5 6 7  filas   
   * reninas = [3,6,2,7,1,4,0,5] columnas
  */

let comprobarPosicion = (fila, reinas) => {
	for (let i = 0; i < fila; ++i) {
		let mismaColumna = reinas[i] === reinas[fila];
		let mismaDiagonal = Math.abs(fila - i) === Math.abs(reinas[fila] - reinas[i]);

		if (mismaColumna || mismaDiagonal) return false;
	}

	return true;
};

/**
 * Paso 2: Colocar la reina
 * Parametros:
 * Fila -fila-Fila en que se encuentra la reina cuya posicion queremos validad
 * Reinas -reinas-vector que tiene las posiciones de las reinas.
 * n -nReinas- numero de reinas
 * 
 */

let colocarReina = (fila, reinas, n) => {
	if (fila < n) {
		//Quedan reinas por colocar

		for (reinas[fila] = 0; reinas[fila] < n; reinas[fila]++) {
			//Comprobando si la posicion de la actual reina es valida

			if (comprobarPosicion(fila, reinas, n)) {
				//Si es asi, intentamos colocar las reinas restantes
				colocarReina(fila + 1, reinas, n);
			}
		}
	} else {
		mostrarTablero(reinas, n);
	}
};

/**
 * 
 * Paso 3: Mostrar tablero:
 * 
 * @param reinas
 * @param nReinas
 *  
 */

let mostrarTablero = (reinas, nReinas) => {
	console.log(reinas);
};

let nReinasNxNBoard = (n) => {
	if (n > 0) {
		// Crear vector dinamicamente
		let solucion = new Array(n);
		solucion.fill(0);

		colocarReina(0, solucion, n);
	}
};

console.log(nReinasNxNBoard(4));

/**
   0 1 2 3
 0 * R * *
 1 * * * R
 2 R * * *
 3 * * R *
[ 1, 3, 0, 2 ]

	0 1 2 3
 0 	* * R *
 1 	R * * *
 2 	* * * R
 3 	* R * *
[ 2, 0, 3, 1 ]
 
 *  */
