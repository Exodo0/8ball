## La Bola Magica

Usa la bola magica para obtener respuestas a tus preguntas

### instalacion:

```
$ npm i 8ballspanish
```

### uso:

```Discord js
const eightball = require('8ballspanish')
const respuesta = eightball();

    const embed = new EmbedBuilder()
      .setTitle("🎱 8ball")
      .setDescription(`**Pregunta:** ${pregunta}\n**Respuesta:** ${respuesta}`)
      interaction.reply({ embeds: [embed] });

```

### requirements:

node `>=4`
