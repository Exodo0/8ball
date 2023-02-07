## La Bola Magica

La Magia de 8 Ball es un juguete que se utiliza para adivinar o buscar consejos..

### instalacion:
```
$ npm i 8BallPackage
```

### uso:

``` Discord js
const eightball = require('8BallPackage')
const respuesta = eightball();

    const embed = new EmbedBuilder()
      .setTitle("🎱 8ball")
      .setDescription(`**Pregunta:** ${pregunta}\n**Respuesta:** ${respuesta}`)
      interaction.reply({ embeds: [embed] });

```
### requirements:

node `>=4`
