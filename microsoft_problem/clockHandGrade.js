/**
 * Given a time in the format of hour and minute, calculate the angle of the hour and minute hand on a clock.

def calcAngle(h, m):
  # Fill this in.

print calcAngle(3, 30)
# 75
print calcAngle(12, 30)
# 165
 */

/**
  * Solution: 
  * h no puee ser menor que 0 o mayor que 12
  * m no puede ser menor que 0 o mayor que 60
  * 
  * h es igual 12, h cambia a 0
  * m es igual a 60, m cambia a 0
  * 
    // 1 h equivale a 0.5 grados recorridos (360/(60 minutos*12 horas))
    // 1 minuto equivale a 6 grados recorridos (360/(60 minutos))
  * 
  * gradosHoras = 0.5 * (horas*60 + minutos)
  * gradosMinutos =  6 * minutos
  * 
  * angulo = absoluto( gradosHoras - gradosMinutos)
  * 
  * anguloMenor = max(360 - angulo, angulo)
  * 
  * return anguloMenor
  */

let clockGrade = (h, m) => {
	// h no puee ser menor que 0 o mayor que 12
	// m no puede ser menor que 0 o mayor que 60

	if (h > 12 || h < 0 || m > 60 || m < 0) return 'Error en el input';

	// h es igual 12, h cambia a 0
	// m es igual a 60, m cambia a 0
	if (h === 12) h = 0;
	if (m === 60) m = 0;

	// 1 h equivale a 0.5 grados recorridos (360/(60 minutos*12 horas))
	// 1 minuto equivale a 6 grados recorridos (360/(60 minutos))

	const RELACION_HORAS = 360 / (12 * 60);
	const RELACION_MINUTOS = 360 / 60;

	// gradosHoras = 0.5 * (horas*60 + minutos)
	// gradosMinutos =  6 * minutos

	let gradosHoras = RELACION_HORAS * (h * 60 + m);
	let gradosMinutos = RELACION_MINUTOS * m;

	// Elijo el valor absoluto puedo tener 3 minutos y 9 horas,
	// 3 hora y 9 minutos, seria la misma diferencia

	let angulo = Math.abs(gradosHoras - gradosMinutos);

	// Eligo la menol diferencia entre los angulos,
	angulo = Math.min(angulo, 360 - angulo);

	// Retorno el resulatado en angulo.
	return angulo;
};

console.log(clockGrade(3, 30));
console.log(clockGrade(12, 30));

