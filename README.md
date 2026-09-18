## Inicializar el proyecto ##
```
npm init
```
## Descargar una dependencia (vite) ##
```
npm i -D vite
```
## Descargar una dependencia de producción ##
```
npm run dayjs
```
## Probar la app en modo local (desarrollo) ##
```
npm run dev
```
## Construir la app ##
```
npm run build
```
## Arrancar la aplicación ##
```
npm run preview
```

## Desplegar en Netlify ##
La configuración está en `netlify.toml`. Al conectar el repositorio en Netlify, usa:

```text
Build command: npm run build
Publish directory: dist
```

Para probarlo localmente con Netlify CLI:

```bash
npx netlify dev
```

# Introducir netlify al conjunto de archivos#
```
npm i -g netlify-cli
```
# Instalar un linter y un formateador #
```
npm i eslint prettier
```