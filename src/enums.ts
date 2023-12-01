// los enum no pueden ir en el archivo 'type.d.ts' por que en la etapa de compilacion
// se convierten a javascript utilizable en cualquier parte del codigo
// los tipos en 'type.d.ts' son declaradas como definiciones solamente
export enum Weather {
  Soleado = "soleado",
  Nublado = "nublado",
  Ventoso = "ventoso",
  Lluvioso = "lluvioso",
  Tormentoso = "tormentoso",
}

export enum Visibility {
  Optimo = "optimo",
  Buena = "buena",
  Poca = "poca",
  Nada = "nada",
}