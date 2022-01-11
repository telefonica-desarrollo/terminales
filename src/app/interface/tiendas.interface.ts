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
    ID_TIENDA: string;
    SAP: string;
    TIENDA: string;
    REGION: string;
    TERRITORIO: string;
    IDPDV: string;
}
export interface Promocion {
    MARCA: string;
    PRECIO_INICIAL: number;
    PRECIO_FINAL: number;
    CANTIDAD?: number;
    DESCUENTO: number;
}
