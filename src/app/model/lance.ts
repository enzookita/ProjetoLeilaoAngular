import { Data } from "@angular/router";

export interface Lance{
    id: Number;
    data: Data;
    valor: Float32Array;
    ativo: boolean;
    idComprador: Int32Array;
    idLeilao: Int32Array;
    idAnimal: Int32Array
}