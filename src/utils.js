import dayjs from "dayjs";// importamos la librería dayjs para trabajar con fechas

export function formatearFecha(fecha) {
    const fechaFormateada =dayjs(fecha).format('DD/MM/YYYY HH:mm')
    return fechaFormateada
}