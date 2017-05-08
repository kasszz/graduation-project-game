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
voor een scanner, drukt op de ‘2’ knop en wenst je een fijne dag verder. De lift gaat naar boven en op de 2de etage gaan de liftdeuren weer open. **Goedemiddag <y/n>, welkom bij De Voorhoede. Femke komt eraan. Wil je in de tussentijd een spelletje spelen? “. Hier antwoord je “ja” op. Verschillende kleuren lichten schijnen op de grond. Een van de lichten schijnt op. Na het spelen van een spelletje ‘Simon Says’ hoor je de stem weer. “Dat was leuk! <naam van vorige highscore> had 5 punten en jij bent daar overheen gegaan met 7! Het was gezellig Femke is zo bij je. **

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
* Een feature dat de afspraken van Google Calendar afhaalt en deze paraat maakt voor het product.
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
  * Een audiobestand kan maken van de tekst die gegenereerd wordt met de naam van de bezoeker.

**Should have**
* Een mogelijkheid om de tekst van de pratende AI te veranderen.
* Een bericht kan sturen naar de juiste persoon op Slack.

**Could have**
* Een mogelijkheid om meerdere API’s aan de tekst toe te voegen.
* Een database waar de afspraken opgeslagen kunnen worden.
* Een LED matrix met een smiley aan de muur die geanimeerd is, waardoor de bezoekers wel een focuspunt hebben.
* Een event-based systeem waardoor het hele systeem geconfigureerd kan worden door De Voorhoede.
* Een web socket server om de afspraken beter van de server af te halen.


**Won’t have**
* De website van de bewakers zal niet te vinden zijn op een URL, omdat er dan een beveiliging op moet zitten.
* Het systeem zal nog geen backend CMS hebben waardoor het gemakkelijk wordt om dingen aan te passen.


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

#### Google Calendar

De Voorhoede legt hun planning vast in Google Calendar. Om ervoor te zorgen dat de
```nunjucks {{ wordExplainer("PM") }}```
’s geen (grote) extra stappen moeten doen haalt het systeem daar de informatie over de afspraken vandaan. Tevens is het goed om één content bron te hebben, zo wordt er voorkomen dat de data niet klopt.

Het systeem vraag elke tien minuten aan Google Calendar wat de afspraken voor die dag zijn. Deze worden door een serie van functies gehaald waardoor het systeem een up to date lijst heeft van de afspraken.

Om met de Google API te verbinden heeft het systeem een geloofsbrieven nodig. In dit geval heeft Google de
```nunjucks {{ wordExplainer("Oauth2") }}```
methode toegepast. Het systeem vraagt een geloofsbrief aan en de API geeft een link waar het systeem heen moet gaan. Op de website waar heen wordt verwezen staat een code die het systeem moet invoeren. De Google API genereerd een
```nunjucks {{ wordExplainer("Oauth2") }}```
geloofsbrief en daardoor heeft het systeem nu toegang tot de Google Calendar van De Voorhoede.

{% set images = [
  {
    src: 'assets/concept/oauth uitleg.png',
    alt: 'Een schema waar in te zien is hoe Oauth werkt (http://www.smartschool.be/wp/wp-content/uploads/2016/12/OAuth_flow_580x470.png)',
    caption: 'Een schema waar in te zien is hoe Oauth werkt (http://www.smartschool.be/wp/wp-content/uploads/2016/12/OAuth_flow_580x470.png)'
  }
] %}

```nunjucks {{ gallery(images) }}```


Het omzetten naar een zelfgemaakte structuur heeft vier hoofd methodes. Zijn er afspraken gewijzigd, verwijderd, aangemaakt, en sorteer de data. Deze vier methodes zorgen ervoor dat de data in het systeem altijd hetzelfde is als in Google Calendar.

Het opslaan van de data in de form van de zelfgemaakte structuur wordt in een array gedaan. Dit is een tijdelijke oplossing en moet voordat dit product in productie gaat opgelost worden. Het gevaar zit in de server herstarten, als dit gebeurd is de data weg. Hierdoor weet het systeem niet meer welke afspraken al bezocht zijn en welke niet. Het netst zou een database zijn die de afspraken opslaan en bijhoudt.

#### END

#### Bewakers website

Dit is het beginpunt van het systeem. Een bezoeker loopt naar de bewaker toe en zegt wie die persoon is en voor wie die komt. De bewaker kijkt op zijn computer en ziet op de website die persoon’s naam en de informatie klopt. De bewaker drukt op de knop dat de bezoeker aanwezig is. De website stuurt deze informatie door naar de server en het systeem staat aan voor de bezoeker die naar boven komt.

**Techniek**

De techniek van de bewakers website bestaat uit een simpele en incomplete HTML die vanuit de server wordt verstuurd naar de website. Wanneer de Javascript ingelaten is, vraagt de website om de afspraken die op de server zijn opgeslagen. Deze data gaat door een reeks functies om het bruikbaar te maken voor de website en dan wordt de nieuwe HTML ingeladen. Dit kan gedaan worden, omdat de
```nunjucks {{ wordExplainer("browser scope")}}```
de nieuwste Chrome op een desktopcomputer is.

De website vraagt elke minuut of er nieuwe afspraken zijn. Dit gebeurt zo vaak, omdat de tijd tussen het invoeren van een nieuwe afspraak op Google Calendar en het weergeven op de website dan minimaal is.

**Design**

De website is zo simpel mogelijk gehouden. Het bestaat uit één scherm met de afspraken. De vraag was hoe deze afspraken werden getoond. Versie 1 kwam door inspiratie te doen uit andere websites die ook een vorm van een kalender lieten zien. Hiermee zijn verschillende opties getekend en bekritiseerd.

{% set images = [
  {
    src: 'assets/visuele design/bewakers site/versie 1.jpg',
    alt: 'De eerste versie',
    caption: 'De eerste versie'
  },
  {
    src: 'assets/visuele design/bewakers site/versie 1.1.jpg',
    alt: 'Een schets voor de eerste versie',
    caption: 'Een schets voor de eerste versie'
  },
  {
    src: 'assets/visuele design/bewakers site/versie1.2.jpg',
    alt: 'Een schets voor de eerste versie',
    caption: 'Een schets voor de eerste versie'
  }
] %}
```nunjucks {{ gallery(images) }}```

{% set images = [
  {
    src: 'assets/visuele design/bewakers site/calendar 1.png',
    alt: 'Inspiratiebron voor de eerste versie',
    caption: 'Inspiratiebron voor de eerste versie'
  },
  {
    src: 'assets/visuele design/bewakers site/calendar 2.jpg',
    alt: 'Inspiratiebron voor de eerste versie',
    caption: 'Inspiratiebron voor de eerste versie'
  },
  {
    src: 'assets/visuele design/bewakers site/calendar 3.jpg',
    alt: 'Inspiratiebron voor de eerste versie',
    caption: 'Inspiratiebron voor de eerste versie'
  }
] %}

{% set string = gallery(images) %}
```nunjucks {{ accordion("inspiratiebronnen", string) }}```

Nadat de site af was keek ik ernaar en ik was er niet blij mee. Het was te druk en zag er kinderlijk uit. Hierdoor is er een peerreview gedaan met
```nunjucks {{ wordExplainer("Thierry van Trirum") }}```
. Hij had het volgende erover te zeggen:
* De ademruimte tussen elementen is de klein.
* Aan de data kan je niet goed zien over wat voor data het gaat.
* De titelletters staan te dicht bij elkaar.
* De gearriveerd knop klopt niet bij de rest van het design.
* De gearriveerde status is niet duidelijk genoeg.
* Misschien een lijn met de tijd zodat het duidelijker wordt waar op de dag de bewakers nu zijn.
* Waarom is de “call to action” knop verborgen achter een animatie.
* Te veel “primary colours”.
* Staat het bedrijf niet centraal?
* Kijk naar dashboard design i.v.m. het meer rust geven aan je design.

Met deze feedback werd versie 2 ontwikkeld. Om een beter design neer te zetten heb ik gekeken naar andere dashboard. Deze gebruiken als basiskleur een tint grijs. Dit wordt gedaan, omdat het niet afleidt. Zo kan de volledige aandacht van de gebruiker naar de “call to action” functie worden gebracht. De primaire kleur was moeilijk te bepalen. Voor hulp heb ik een design vriend gevraagd mij advies te geven. Hij is een zeer ervaren designer, die zich focust op het maken van dashboard designs. Hij zei dat de meeste dashboards de kleur blauw kiezen, omdat deze het meeste rust en bekendheid uitstraalt.

>I would stick to blue, because it’s the safest colour to use. It’s what people are most comfortable with.
> --Aaron Sananes

Zijn claim wordt onderbouwt door een artikel over kleuren in technisch design. Het heeft te maken met dat blauw een kleine golflengte heeft.

>Blue has the shortest wavelength of any color. At very short |blue| and very long |red| wavelengths, the differences between cone photoreceptor responses are smaller, causing people to be less sensitive to small changes in light. The result of decreased sensitivity is increased stability in perception.
> --Rani Molla (www.gigaom.com/2013/07/10/feeling-blue-why-tech-designers-may-want-to-give-the-color-a-rest/)

Door deze informatiebronnen is er gekozen om de kleur blauw te gebruiken bij het design. De “call to action” knop is nu altijd zichtbaar en de klok is verschoven naar boven de afspraken, zodat het oog van de gebruiker niet zover hoeft te reizen.

{% set images = [
  {
    src: 'assets/visuele design/bewakers site/versie 2.jpg',
    alt: 'De tweede versie',
    caption: 'De tweede versie'
  },
  {
    src: 'assets/visuele design/bewakers site/versie 2 schets.jpg',
    alt: 'Een schets voor de tweede versie',
    caption: 'Een schets voor de tweede versie'
  }
] %}
```nunjucks {{ gallery(images) }}```

{% set images = [
  {
    src: 'assets/visuele design/bewakers site/dashboard 1.jpg',
    alt: 'Inspiratiebron voor de tweede versie',
    caption: 'Inspiratiebron voor de tweede versie'
  },
  {
    src: 'assets/visuele design/bewakers site/dashboard 2.png',
    alt: 'Inspiratiebron voor de tweede versie',
    caption: 'Inspiratiebron voor de tweede versie'
  },
  {
    src: 'assets/visuele design/bewakers site/dashboard 3.png',
    alt: 'Inspiratiebron voor de tweede versie',
    caption: 'Inspiratiebron voor de tweede versie'
  },
  {
    src: 'assets/visuele design/bewakers site/dashboard 4.png',
    alt: 'Inspiratiebron voor de tweede versie',
    caption: 'Inspiratiebron voor de tweede versie'
  }
] %}

{% set string = gallery(images) %}
```nunjucks {{ accordion("inspiratiebronnen", string) }}```

#### END

### END

## END
