import dayjs from "dayjs";// importamos la librería dayjs para trabajar con fechas

export function formatearFecha(fecha) {
    const fechaFormateada =dayjs(fecha).format('DD/MM/YYYY HH:mm')
    return fechaFormateada
}

export function calcularPeso(valor) {
    let peso;
    if (valor < 10) peso = 'bajo';
    else if (valor < 30) peso = 'medio';
    else peso = 'alto';
    return peso
}