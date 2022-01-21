export interface Tienda {
    SAP:         string;
    ACTIVO:      number;
    TIENDA:      string;
    REGION:      string;
    TERRITORIO:  string;
    SUBDIRECTOR: string;
    COORDINADOR: string;
    STATUS:      string;
    IDPDV:       number; 
}
export interface Promociones {
    MARCA: string;
    MODELO: string;
    PRECIO_INICIAL: number;
    PRECIO_FINAL: number;
    CANTIDAD?: number;
    DESCUENTO: number;
}

//Interfaces
export interface tienda {
    TERRITORIO: string;
    REGION: string;
    SUBDIRECTOR_REGIONAL: string
    SUBDIRECTOR_TERRITOTIAL: string
    LIDER_INTERNO: string
    LIDER_SOCIO_COMERCIAL: string,
    STAFF: string,
    IDPDV: string,
    TIENDA: string,
    SOCIO_COMERCIAL: string,
    SAP: string,
    STATUS: string,
}

export interface Promocion {
    MARCA: string;
    PRECIO_INICIAL: number;
    PRECIO_FINAL: number;
    CANTIDAD?: number;
    DESCUENTO: number;
}
