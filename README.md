# Discord Multimedia Forwarding Bot

Este proyecto es un bot de Discord diseñado para reenviar mensajes que contienen contenido multimedia (fotos y GIFs) de un canal a otro. El bot permite configurar canales de origen y destino, así como palabras clave para filtrar los mensajes que se reenvían.

## Características

- Configuración de canales de origen y destino mediante comandos slash.
- Filtrado de mensajes basado en palabras clave configurables.
- Reacciones automáticas con emojis en los mensajes reenviados.
- Soporte para múltiples archivos multimedia.
- Formato de mensaje personalizable (embed) con información del usuario.
- Soporte para idiomas español e inglés.

## Estructura del Proyecto

```
discord-bot
├── src
│   ├── bot.ts
│   ├── commands
│   │   ├── configureChannels.ts
│   │   ├── configureKeywords.ts
│   │   ├── configureReactions.ts
│   │   └── index.ts
│   ├── events
│   │   ├── messageCreate.ts
│   │   └── ready.ts
│   ├── utils
│   │   ├── embedFormatter.ts
│   │   └── messageHandler.ts
│   └── types
│       └── index.ts
├── locales
│   ├── en.json
│   └── es.json
├── package.json
├── tsconfig.json
└── README.md
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```
   cd discord-bot
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

1. Inicia el bot:
   ```
   npm start
   ```
2. Configura los canales y palabras clave utilizando los comandos slash en Discord.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el bot, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.
