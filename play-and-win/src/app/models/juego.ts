export enum VentaEstatus{
    Disponible = 'Disponible',
    Vendido = 'Vendido',
    Apartado = 'Apartado',
    Negociacion = 'Negociacion',
}

export interface Venta {
    id: number;
    estado: VentaEstatus;
    titulo: string;
    telefono: number;
    notas: string;
    precio: number;
    fechaVenta: string;
    cliente: string;
    vendedor: string;
}

export interface Catalogo {
    id: number;
    title: string;
    platform: string;
    image: string;
    price: number
}

export const listaJuegosDummy: Catalogo[] = [

    {
        id: 1,
        title: 'The Legend of Zelda: Tears of the Kingdom',
        platform: 'Nintendo Switch',
        image: 'The legend of zelda tears of the kingdom.webp',
        price: 50,
    },
    {
        id: 2,
        title: 'The Legend of Zelda: Breath of the Wild',
        platform: 'Nintendo Switch',
        image: 'The legend of zelda breath of the wild.webp',
        price: 80,
    },
    {
        id: 3,
        title: "The Legend of Zelda: Link's Awakening",
        platform: 'Nintendo Switch',
        image: 'The legend of zelda links awakening.jpg',
        price: 60,
    },
    {
        id: 4,
        title: 'Blasphemous',
        platform: 'Playstation, Nintendo Switch, Xbox',
        image: 'Blasphemous.jpg',
        price: 70,
    },
    {
        id: 5,
        title: 'Starbound',
        platform: 'PC',
        image: 'Starbound.jpg',
        price: 90,
    },
    {
        id: 6,
        title: 'Terraria',
        platform: 'PC, Xbox',
        image: 'Terraria.jpg',
        price: 70,
    },
    {
        id: 7,
        title: 'Have a nice death',
        platform: 'PC, Playstation, Xbox',
        image: 'Have-a-nice-death.jpg',
        price: 50,
    }
];