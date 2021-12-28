import { Data } from "@angular/router";

export interface Lance{
    id: Number;
    data: Data;
    valor: number;
    ativo: boolean;
    idComprador: Number;
    idLeilao: Number;
    idAnimal: Number;
}