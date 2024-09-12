//Funcion cn para controlar las className de manera logica (usamos dos librerias clsx y taiwind-merge).
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs:ClassValue[]) {
    return twMerge(clsx(inputs))
}