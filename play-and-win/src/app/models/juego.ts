export enum VentaEstatus{
    Disponible = 'Disponible',
    Vendido = 'Vendida',
    Apartado = 'Apartado',
    Negociacion = 'Negociacion',
}

export interface Venta {
    id: number;
    estado: VentaEstatus;
    producto: string;
    telefono: number;
    notas: string;
    precio: number;
    fechaVenta: string;
    cliente: string;
    vendedor: string;
}

export const listaVentasDummy: Venta[] = [
    {
        id: 1,
        estado: VentaEstatus.Disponible,
        producto: "fisico",
        telefono: 6623254422,
        notas: "Nunca usado",
        precio: 150,
        fechaVenta: "26/11/2023",
        cliente: "Miguel",
        vendedor: "Jesus",
    },
];