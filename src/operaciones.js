export function calcularOperacion(operacion) {
  try {
    const match = operacion.match(/^(-?\d+\.?\d*)([+\-*/])(-?\d+\.?\d*)$/);

    if (!match) {
      return 'Error';
    }

    let a = parseFloat(match[1]);
    let operador = match[2];
    let b = parseFloat(match[3]);

    let resultado;


    if (operador === '+') {
      resultado = a + b;
    } else if(operador === '-') {
      resultado = a - b;
    } else if(operador === '*') {
      resultado = a * b;
    } else if(operador === '/') {
      if (b === 0) {
        return 'Error';
      }
      else {
        resultado = a / b;
      }
    }
    else {
      return 'Error';
    }

    return resultado.toString();

  } catch {
    return 'Error';
  }
}
