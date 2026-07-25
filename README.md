# Tākona Experience

Aplicación web/PWA para presentar experiencias culturales Rapa Nui, identidades de tākona, galería visual y reservas por WhatsApp.

## Desarrollo

```bash
npm install
npm run dev
```

## Verificación

```bash
npm run lint
npm run build
```

## Publicación Web

La app está preparada para Vercel y se publica como sitio web:

https://takona-experience.vercel.app/

También incluye manifest, iconos y service worker para instalarse como PWA desde el navegador.

## App Android

La base Android está creada con Capacitor en `android/`.

Para generar un APK debug se necesita Java/JDK y Android SDK:

```bash
npm run android:apk
```

El APK queda en:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Para publicar en Play Store falta configurar firma release con keystore.

## App iPhone

iPhone no usa APK. Las opciones son:

- PWA: instalar la página desde Safari.
- App iOS: usar el proyecto `ios/` con macOS, Xcode y una cuenta Apple Developer para generar IPA/TestFlight/App Store.
