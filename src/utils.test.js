import { calcularPeso, formatearFecha } from "./utils"
import { describe, it, expect } from "vitest"

describe('formatear fecha', () => {
    it('formatea correctamente una fecha simple', () => {
        const fecha = new Date(2026, 8, 21, 14, 33)
        const resultado = formatearFecha(fecha)
        expect(resultado).toBe('21/09/2026 14:33')
    })
})

describe('calcular peso', () => {
    it('calcular peso a partir de unos minutos dados', () => {
        const minutos = 35;
        const peso = calcularPeso(minutos);
        expect(peso).toBe('alto');
    })
    
})
