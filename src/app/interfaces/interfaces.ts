
export interface Url {
    url     : string,
    name    : string,
    urlExt? : string
}

export interface Image {
    src : string,
    alt : string
}

export interface Restaurante {
    id          : string,
    insider?    : boolean,
    imgRest     : string,
    imgCity?    : string,
    tipo        : Array<string>,
    nombre      : string,
    nota        : number,
    dobleYums?  : boolean,
    pay?        : boolean,
    direccion   : string,
    ciudad      : string,
    precioMedio : number,
    descuento?  : number,
    yums?       : boolean
}

export interface Ciudad {
    nombre : string,
    imagen : string
}

export interface SliderRestaurante {
    titulo       : string,
    flechas      : boolean,
    restaurantes : Array<Restaurante>
}

export interface SliderCiudad {
    tipo     : string,
    flechas  : boolean,
    titulo   : string,
    ciudades : Array<Ciudad>
}