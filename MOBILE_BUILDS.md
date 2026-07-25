# Opciones Para Ofrecer Tākona Experience

## 1. Página Web

La opción web ya está lista para compartir:

https://takona-experience.vercel.app/

Funciona en computador y celular. Es la opción más rápida para enviar a clientes.

## 2. PWA Instalable

La misma página puede instalarse como aplicación desde el navegador.

En Android:

1. Abrir la web en Chrome.
2. Tocar el menú del navegador.
3. Elegir `Agregar a pantalla principal` o `Instalar app`.

En iPhone:

1. Abrir la web en Safari.
2. Tocar compartir.
3. Elegir `Agregar a pantalla de inicio`.

## 3. APK Android

La base Android ya existe en `android/`, pero esta máquina todavía no puede compilar el APK porque falta Java/JDK.

Cuando esté instalado JDK y Android Studio/SDK:

```bash
npm install
npm run android:apk
```

Salida esperada:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Para un APK/AAB publicable falta una keystore de firma.

## 4. iPhone

iPhone no instala APK. Para iPhone hay dos caminos:

- Usar la PWA desde Safari.
- Generar una app iOS con el proyecto `ios/`, pero requiere macOS, Xcode y cuenta Apple Developer.

## Credenciales Que Faltan

- Keystore Android para versión publicable.
- Cuenta Apple Developer para TestFlight/App Store.
- Cuenta Google Play Console si se quiere publicar en Play Store.
