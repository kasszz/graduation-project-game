## Het concept

In dit hoofdstuk wordt nader ingegaan op het gekozen concept. Er wordt beschreven hoe de situatie met het concept zich afspeelt, wat zijn de
```nunjucks {{ wordExplainer('MoSCoW') }}```
, hoe het systeem er uit gaat zien, en er wordt per onderdeel in gegaan op hoe het gemaakt is. Daarna volgt een validatie ronde en wordt er gekeken naar wat er verbeterd kan worden aan het concept. Deze verbeteringen worden doorgevoerd.

### Ideale situatie

Het concept kan het duidelijkst worden uitgelegd aan de hand van de nieuwe situatie die gemaakt wordt. Vooral de verschillen met de huidige situatie zijn van belang, omdat deze verschillen de ervaring moeten verbeteren.

In dit scenarios ben jij de bezoeker.

**Nieuwe situatie:**

Je loopt bij de Schinkel naar binnen. Aan je linkerhand zie je een persoon achter een balie zitten. Je loopt eropaf en begroet de bewaker. De bewaker vraagt voor wie je komt en wat voor afspraak je met hen hebt. Je beantwoordt de vraag met ‘De Voorhoede en we hebben een afspraak over een website’. **De bewaker kijkt op de website en klikt de afspraak met jouw naam aan**, daarna vraagt de bewaker of je mee wil lopen naar de liften. De bewaker drukt op het lift knopje en de liftdeuren gaan open. Je stapt naar binnen en de bewaker houdt zijn
```nunjucks {{ wordExplainer('RFID-tag') }}```
voor een scanner, drukt op de ‘2’ knop en wenst je een fijne dag verder. De lift gaat naar boven en op de 2de etage gaan de liftdeuren weer open. **Je stapt uit de lift en een stem begint tegen je te praten. “Goedemiddag <y/n>, welkom bij De Voorhoede. Ik hoop dat van dit lekkere weer aan het genieten bent. Femke komt eraan.”**

**Op het moment dat je uit de lift stapt krijgt Femke een bericht op Slack dat er iemand net voor haar uit de lift is gestapt. Waardoor ze naar de lift komt.**

{% set string = "Je loopt bij de Schinkel naar binnen. Aan je linkerhand zie je een persoon achter een balie zitten. Je loopt eropaf en begroet de bewaker. De bewaker vraagt voor wie je komt en wat voor afspraak je met hen hebt. Je beantwoordt de vraag met ‘De Voorhoede en we hebben een afspraak over een website’. De bewaker vraagt of je een formulier kan invullen. Dit doe je natuurlijk netjes, en wanneer je de pen neer legt vraagt de bewaker of je mee wil lopen naar de liften. De bewaker drukt op het lift knopje en de liftdeuren gaan open. Je stapt naar binnen en de bewaker houdt zijn RFID-tag voor een scanner, drukt op de ‘2’ knop en wenst je een fijne dag verder. De lift gaat naar boven en op de 2de etage gaan de liftdeuren weer open. Je stapt uit de lift en ziet niet waar je heen moet. Er staat ook nergens aangegeven waar De Voorhoede zit.<br/><br/>

Op het moment dat de liftdeuren beneden dicht gaan belt de bewaker naar UNITiD, ook al komt je voor De Voorhoede. Dat de bewaker naar UNITiD belt gebeurt niet altijd, maar wel vaak. Een werknemer van UNITiD neemt de telefoon op een hoort dat jij naar bovenkomt. Deze werknemer loopt naar De Voorhoede. Jij staat op dit moment al bijna boven. De werknemer loopt naar de PM van De Voorhoede en vertelt dat jij naar boven komt. De PM geeft een seintje aan de developer waarvoor jij komt en die loopt naar de lift." %}

```nunjucks {{ accordion('Oude situatie', string) }}```

### END

### MoSCoW
Een goede planning is onmisbaar om een zo goed mogelijk product neer te zetten aan het eind van het afstuderen. Er is weinig tijd en ‘the sky is the limit’. Om dit tegen te gaan is er een
```nunjucks {{ wordExplainer('MoSCoW') }}```
gemaakt. Dit zorgt ervoor dat er eerst aan de essentiële features wordt gewerkt voordat de extra dingen worden opgepakt.

**Must have**
* Een feature dat de afspraken van Google Calendar afhaalt en deze paraat maakt voor het lokale systeem.
*	Een website waar de bewaker:
  *	De afspraken kunnen zien.
  * De afspraken op actief kan zetten als de bezoeker(s) zich aanmelden.
  *	De afspraken systematisch van de http-server kan halen.
* Een http-server die:
  * De HTML klaarzet met de afspraken voor de bewaker.
  * De afspraken status kan veranderen als de bewaker deze op actief zet.
* Een IoT systeem voor de liften dat:
  * Controleert of de liftdeuren opengaan.
  * Een seintje naar de server stuurt als de liftdeuren opengaan.
* Een MQTT-server die:
  * Luistert naar de seintjes van het IoT systeem voor de liften.
  * Een audiobestand naar een Arduino/Raspberry pi kan sturen.
* Een server die:
  * Tussen de andere servers communiceert.
  * Een audiobestand kan maken van de tekst die gegenereerd wordt met de data van de bezoeker.
  * Een bericht kan sturen naar de juiste persoon op Slack.

**Should have**
* Een mogelijkheid om de tekst van de pratende AI te veranderen.

**Could have**
* Een mogelijkheid om meerdere API’s aan de tekst toe te voegen.
* Een event-based systeem waardoor het hele systeem geconfigureerd kan worden door De Voorhoede en UNITiD.
* Een database waar de afspraken opgeslagen kunnen worden.
* Een web socket server om de afspraken beter van de server af te halen.

**Won’t have**
* De website van de bewakers zal niet te vinden zijn op een URL, omdat er dan een beveiliging op moet zitten.

### END

### Het systeem
Het concept heeft een ingewikkelde structuur. Het zijn veel componenten die met elkaar moeten samenwerken. Om deze structuur duidelijk te maken is er een diagram gemaakt. Het diagram is voor verduidelijking versimpeld. Daarin vind je de rollen van de componenten en hoe ze met elkaar samenwerken. In de volgende hoofdstukken wordt nader ingegaan op hoe deze componenten zijn gecreëerd en hoe ze werken.

{% set images = [
  {
    src: 'assets/concept/systeem uitleg.jpg',
    alt: 'Een versimpelde representatie van het systeem voor het concept',
    caption: 'Een versimpelde representatie van het systeem voor het concept'
  }
] %}

```nunjucks {{ gallery(images) }}```

#### De hoofdcomputer
Voordat er nader in wordt gegaan op de verschillende componenten is het belangrijk om te snappen wat de ‘hoofdcomputer’ inhoudt. Op de hoofcomputer draait één
```nunjucks {{ wordExplainer('NodeJS') }}```
server. Deze server heeft de functie om alle componenten op de hoofdcomputer met elkaar de verbinden. Als deze server opstart dan starten alle andere componenten ook op. Dit zorgt ervoor dat de componenten toegang hebben tot de lijst van afspraken via deze server. Dit is nodig, omdat de componenten normaal gesproken niks van elkaar afweten.

De componenten zijn allemaal toegankelijk via
```nunjucks {{ wordExplainer('NodeJS') }}```
, geschreven in Javascript. Dit geeft het de mogelijkheid om snel te prototypen, omdat mijn vaardigheden in Javascript goed zijn. Hierdoor is het ook duidelijk hoe het systeem er uitgaat zien. Als dit niet het geval was geweest, was dit project niet zo opgepakt.

#### END

### END

## END
