# Aplicación web AML — Angular

Aplicación web incluida en el proyecto académico **APT122**. El código contiene vistas para **actividades**, **acuerdos** y **dashboard**, además de componentes de interfaz y servicios de estado.

## Tecnologías

- Angular 20 y TypeScript
- Angular Router (rutas y componentes cargados de forma diferida)
- Tailwind CSS
- Angular Signals
- npm

## Componentes y estructura revisados

- `src/app/app.routes.ts`: rutas `dashboard`, `activity` y `agreements`.
- `src/app/gifs/pages/`: páginas del dashboard, actividades y acuerdos.
- `src/app/gifs/components/`: componentes de interfaz, menús y formularios.
- `src/app/service/activity.service.ts`: estado de actividades con Signals, adición de registros y persistencia en `localStorage`.

## Ejecutar localmente

Requisitos: versiones de Node.js y npm compatibles con Angular 20.

```bash
npm ci
npm start
```

Abrir `http://localhost:4200/`.

Para generar una compilación:

```bash
npm run build
```

**Nota:** estos pasos están basados en los scripts declarados en `package.json`; todavía no se ha verificado una ejecución en un equipo limpio.

## Consideraciones técnicas

- El uso de `localStorage` permite almacenar información localmente, pero no representa persistencia en servidor.
- La aplicación es un **prototipo académico**, no un servicio desplegado en producción.
- Falta documentar con capturas verificadas y probar los flujos completos de usuario.

[Volver a la descripción general del proyecto](../../../../README.md).
