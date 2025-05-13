
# 📱 Carnet Estudiantil 

Aplicación móvil desarrollada con **Expo** y **React Native**, que simula un carnet estudiantil digital con diseño moderno, datos esenciales y un código QR. Incluye una función interactiva para girar el carnet y agregar datos.

---

## ✅ Características

- 📷 Foto del estudiante (imagen local en `assets/`).Función implementada para cambiar foto
- 👤 Nombre completo
- 🆔 Número de matrícula (Función que me genera un numero aleatorio de 6 digitos)
- 🎓 Nombre de la carrera
- 📎 Código QR generado con los datos que se ingresen (Nombre y CC). Se puede escanear
- 🔁 Se presiona el carnet para girar y mostrar el reverso
- 🎨 Diseño con fondo blanco, bordes redondeados y sombra
- 🧾 Línea de separación entre datos y QR
- ✨ Texto de validez e instrucciones en el reverso


## 🚀 Instalación y ejecución

1. Clona este repositorio:

   En tu terminal bash.
   git clone https://github.com/Jkpepo/Carnet.git

   cd Carnet

   code . (Si usas Visual Studio Code)

3. Instala las dependencias:

   npm install

4. Inicia el servidor de desarrollo:
    
    npm start

4.Escanea el código QR con la app Expo Go en tu dispositivo, o selecciona "Run on Android/iOS" desde el navegador (En este caso se recomienda tener instalado android Studio)


## 🛠️ Tecnologías utilizadas
Herramienta de desarrollo: Visual Studio Code

React Native

Expo

Librería react-native-flip-card para animar el giro

Librería react-native-qrcode  para generar codigo QR personalizado

Librería react-native-picker  para generar una lista de opciones (Institución y carrera)

Librería react-native-image-picker  para que me permita seleccionar imagenes desde mi dispositivo

Librería react-native-asyc-storage   para que me permita guardar los datos que ingrese en el dispositivo

Hooks:UseState, UseEffect


## 📌 Notas importantes
El carnet puede girarse tocando el mismo y muestra:

Anverso: datos del estudiante 

Reverso: texto “Válido hasta: DD/MM/AAAA”  ,mensaje de uso + QR

Todos los estilos están hechos con StyleSheet nativo

Las imágenes se importan con require('./assets/…') pero se pueden cambiar desde el boton "Cambiar foto"








