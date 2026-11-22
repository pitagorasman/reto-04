# Del kit al impacto — Reto 04 · CoAfina 2026

Panel móvil de datos abiertos y flujo restringido de jurado para la iniciativa educativa de **Creative Commons Venezuela** (Hackathon CoAfina 2026).

## Resumen de Datos Conciliados
- **Centro de Operaciones (Armado 100%):** Facultad de Ciencias — Universidad Central de Venezuela (UCV), Paseo Los Ilustres, Caracas.
- **Kits Armados:** 600
- **Kits Entregados:** 600 (Saldo en inventario: 0)
- **Dibujos Recibidos:** 60 (10 kits ampliados por asignar mediante jurado humano)

### Distribución por Sede
| Sede / Refugio | Región | Kits Entregados |
|---|---|---:|
| Colegio Fe y Alegría Abraham Reyes (23 de Enero) | Caracas | 184 |
| Refugio Polideportivo José María Vargas (Maiquetía) | La Guaira | 171 |
| Refugio Colegio UEN República de Panamá | La Guaira | 129 |
| Refugio Iglesia Universal | La Guaira | 25 |
| Refugio Club Campo de Golf (Caraballeda) | La Guaira | 91 |
| **Total** | **Caracas y La Guaira** | **600** |

## Arquitectura y Límite de Privacidad
1. **Entorno Público (`index.html` + `data/entregas_publico.json` / `.csv`):** Publica únicamente totales conciliados, ubicaciones de centros de entrega, ilustraciones estilizadas (protección de identidad) e informe exportable.
2. **Entorno Restringido (Flujo de Jurado):** Utiliza ejemplos sintéticos con códigos anónimos (`DIB-S01` a `DIB-S12`), rúbrica de 3 criterios y bitácora trazable para seleccionar los 10 kits ampliados. Los registros personales y permisos originales permanecen fuera del repositorio público.

## Despliegue en GitHub Pages
1. Sube esta carpeta completa a un repositorio público en GitHub.
2. Ve a **Settings → Pages → Build and deployment → Branch: `main` / `/ (root)`**.
3. Abre la URL generada por GitHub Pages desde cualquier móvil o computadora.

## Licencias
- **Código fuente:** Licencia MIT (`LICENSE`).
- **Datos abiertos (`data/entregas_publico.*`):** Creative Commons Atribución 4.0 Internacional (**CC BY 4.0**).
