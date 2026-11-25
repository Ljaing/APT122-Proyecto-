# Aplicación móvil AML — Ionic y Angular

Prototipo móvil del proyecto académico **APT122**, desarrollado con Ionic, Angular y TypeScript.

## Tecnologías verificadas
- Ionic 8 y Angular 20
- TypeScript y Angular Router
- Capacitor 7
- Angular Signals
- npm

## Pantallas presentes en el código
- **Login:** formulario de entrada que valida que los campos no estén vacíos.
- **Inicio:** ruta `/home`.
- **Beneficios:** ruta `/beneficios`.

La configuración de rutas se encuentra en `src/app/app.routes.ts`.

## Ejecutar en navegador (desarrollo)
Se necesitan Node.js y npm compatibles con Angular 20.

```bash
npm ci
npm start
```

Abrir `http://localhost:4200/` si el servidor inicia correctamente.

**Importante:** los pasos corresponden a los scripts del `package.json` y todavía necesitan validación en un entorno limpio. Compilar para Android o iOS requiere además la configuración de plataforma y herramientas correspondientes.

## Estado y seguridad
Este repositorio muestra un **prototipo académico**, no un producto listo para producción.

La pantalla de login **no verifica credenciales en un backend**: valida campos no vacíos, guarda el nombre en `localStorage` y navega a la pantalla de inicio. No debe presentarse como autenticación real ni utilizarse con datos personales sensibles.

## Mejoras pendientes
- Diseñar autenticación y control de sesiones reales si el proyecto se convierte en producto.
- Validar flujos, compilación y pruebas.
- Completar capturas de las pantallas funcionales y documentar decisiones técnicas.

[Volver al README principal](../../../../README.md).
