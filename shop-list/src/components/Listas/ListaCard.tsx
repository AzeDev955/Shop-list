import { useEffect, useState } from "react";

export const ListaCard = () => {
  //const periocidad = ["diario", "semanal", "mensual"]; esta era mi idea, hay una forma mejor
  type Periocidad = "diario" | "semanal" | "mensual" | "compra no recurrente";
  interface lista {
    id: number;
    nombre: string;
    productos: string[]; //Producto[] en siguiente HU
    coste: number;
    periocidad: Periocidad;
  }
  return;
};
