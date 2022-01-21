
//Interfaces
export interface Tienda {
    ID_TIENDA?: number,
    TERRITORIO: string | null | undefined,
    REGION: string | null | undefined,
    SUBDIRECTOR_REGIONAL: string   | null | undefined,
    SUBDIRECTOR_TERRITORIAL: string    | null | undefined,
    LIDER_INTERNO: string  | null | undefined,
    LIDER_SOCIO_COMERCIAL: string  | null | undefined,
    STAFF: string  | null | undefined,
    IDPDV: string  | null | undefined,
    TIENDA: string | null | undefined,
    SOCIO_COMERCIAL: string    | null | undefined,
    SAP: string  | null | undefined,
    STATUS: number,
}

export interface Promocion {
    MARCA: string;
    PRECIO_INICIAL: number;
    PRECIO_FINAL: number;
    CANTIDAD?: number;
    DESCUENTO: number;
}
