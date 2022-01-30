
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
    imagen      : string,
    tipo        : Array<string>,
    nombre      : string,
    nota        : number,
    pay?        : boolean,
    direccion   : string,
    precioMedio : number,
    descuento?   : number,
    yums?       : boolean
}