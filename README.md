# AML | Aplicaciones web y móvil
**Proyecto académico de desarrollo de software — Duoc UC**

Repositorio con evidencias de análisis y desarrollo de un proyecto académico que incluye una aplicación web en Angular y un prototipo móvil en Ionic/Angular.

> **Estado:** proyecto académico / prototipo. No se presenta como una aplicación de producción. Algunas funciones requieren validación, pruebas y mejoras antes de desplegarse.

## Tecnologías verificadas en el repositorio

- **Frontend web:** Angular 20, TypeScript, HTML, CSS, Tailwind CSS.
- **Aplicación móvil:** Ionic 8, Angular 20, TypeScript y Capacitor 7.
- **Navegación:** Angular Router.
- **Estado y persistencia local:** Angular Signals y almacenamiento del navegador (`localStorage`) en componentes del proyecto.
- **Gestión de dependencias:** npm.

## Estructura

El código está dentro de `APT122-Proyecto/Fase 2/Evidencias Proyecto/`:

| Ruta | Contenido |
| --- | --- |
| [Web](APT122-Proyecto/Fase%202/Evidencias%20Proyecto/Web) | Aplicación Angular con vistas y componentes para actividades, acuerdos y dashboard |
| [Movil](APT122-Proyecto/Fase%202/Evidencias%20Proyecto/Movil) | Prototipo Ionic/Angular con pantallas de inicio de sesión, inicio y beneficios |
| [Fases del proyecto](APT122-Proyecto) | Evidencias y documentación académica del proceso |

## Ejecución local

**Requisitos:** Node.js y npm compatibles con las versiones de Angular del proyecto.

### Web
```bash
cd "APT122-Proyecto/Fase 2/Evidencias Proyecto/Web"
npm ci
npm start
```

Visita `http://localhost:4200/` cuando el servidor esté disponible.

### Móvil (desarrollo en navegador)
```bash
cd "APT122-Proyecto/Fase 2/Evidencias Proyecto/Movil"
npm ci
npm start
```

> Los comandos se documentan según los scripts presentes en `package.json`; su ejecución en un entorno limpio todavía debe validarse. El despliegue en dispositivos requiere configuración adicional de Ionic/Capacitor.

## Alcance y limitaciones

- Es un **prototipo académico**. La presencia de pantallas o componentes no garantiza que todos los flujos estén terminados.
- El formulario de ingreso móvil **no autentica contra un servidor**: comprueba campos no vacíos y almacena un nombre localmente. No debe utilizarse como control de acceso en producción.
- La persistencia con `localStorage` es local al navegador; no sustituye una base de datos ni una API.
- Antes de reutilizar el proyecto con datos reales deben revisarse seguridad, validaciones, pruebas y privacidad.

## Próximos pasos

- Verificar una instalación y compilación desde cero.
- Completar pruebas y documentación de funcionalidades verificadas.
- Revisar dependencias, errores y manejo de estados.
- Separar el código reutilizable de documentos académicos y revisar información personal contenida en los archivos publicados.

## Contexto

Proyecto desarrollado en contexto académico y colaborativo. La autoría individual de componentes específicos debe documentarse y acreditarse por separado; este repositorio no implica autoría exclusiva de todo su contenido.
