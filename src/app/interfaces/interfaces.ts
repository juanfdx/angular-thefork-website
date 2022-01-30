
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
    insider?    : boolean,
    imgRest     : string,
    imgCity?     : string,
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