## Probleemsituatie
In dit hoofdstuk staat het probleem wat opgelost moet worden. Hierbij worden de situatie, stakeholders, customer journey, hoofd- en deelvragen, en programma van eisen beschreven.

### De huidige situatie
Om een beeld te krijgen van de huidige situatie en het probleem dat daar ontstaat heb ik het volgende scenario opgesteld waar jij de bezoeker bent.

Je staat voor de draaideur van een gebouw genaamd de Schinkel. In dit gebouw zitten meerdere bedrijven, waaronder De Voorhoede. Bij hen heb je vandaag een afspraak. Je loopt naar binnen. Aan je linkerhand zie je een persoon achter een balie zitten. Je loopt eropaf en begroet de bewaker. De bewaker vraagt voor wie je komt en wat voor afspraak je met hen hebt. Je beantwoordt de vraag met ‘De Voorhoede en we hebben een afspraak over een website’. De bewaker vraagt of je een formulier kan invullen. Dit doe je natuurlijk netjes, en wanneer je de pen neer legt vraagt de bewaker of je mee wil lopen naar de liften. De bewaker drukt op het lift knopje en de liftdeuren gaan open. Je stapt naar binnen en de bewaker houdt zijn
```nunjucks {{ wordExplainer('RFID-tag') }}```
voor een scanner, drukt op de ‘2’ knop en wenst je een fijne dag verder. De lift gaat naar boven en op de 2de etage gaan de liftdeuren weer open. Je stapt uit de lift en ziet niet waar je heen moet. Er staat ook nergens aangegeven waar De Voorhoede zit.

{% set images = [
  {
    src: 'assets/conceptrichtingen/speelruimte links.jpg',
    alt: 'De ruimte als je uit de lift stapt bij De Voorhoede (de voetbaltafel gaat weg)',
    caption: 'De ruimte als je uit de lift stapt bij De Voorhoede (de voetbaltafel gaat weg)'
  },
  {
    src: 'assets/conceptrichtingen/speelruimte rechts.jpg',
    alt: 'De ruimte als je uit de lift stapt bij De Voorhoede (de voetbaltafel gaat weg)',
    caption: 'De ruimte als je uit de lift stapt bij De Voorhoede (de voetbaltafel gaat weg)'
  }
] %}
```nunjucks {{ gallery(images) }}```

Op het moment dat de liftdeuren beneden dicht gaan belt de bewaker naar UNITiD, ook al komt je voor De Voorhoede. Dat de bewaker naar UNITiD belt gebeurt niet altijd, maar wel vaak. Een werknemer van UNITiD neemt de telefoon op een hoort dat jij naar bovenkomt. Deze werknemer loopt naar De Voorhoede. Jij staat op dit moment al bijna boven. De werknemer loopt naar de
```nunjucks {{ wordExplainer('PM') }}```
van De Voorhoede en vertelt dat jij naar boven komt. De
```nunjucks {{ wordExplainer('PM') }}```
geeft een seintje aan de developer waarvoor jij komt en die loopt naar de lift.

### END

### Customer journey
Om het scenario te ondersteunen is er customer journey gemaakt. Deze is opgebouwd door te kijken naar wat bezoekers voelen en denken tijdens het traject. Dit is gemeten door een enquête af te nemen bij recente bezoekers. Het excel bestand met de data kunt u <a href='assets/bronnen/bezoekers/bezoekers.xlsx' download>hier</a> vinden.

{% set images = [
  {
    src: 'assets/customer journey/customer journey.jpg',
    alt: 'Customer journey over de bezoekers',
    caption: 'Customer journey over de bezoekers'
  }
] %}
```nunjucks {{ gallery(images) }}```

In de customer journey is te zien dat bezoekers zich niet welkom voelen bij De Voorhoede. Het begint bij de bewakers en wordt erger als de bezoekers boven uit de lift stappen. Veel van de ondervraagden weten niet waar ze heen moeten. Ze hebben geen idee dat die etage gedeeld wordt door De Voorhoede En UNITiD. Hierdoor ontstaat verwarring. Deze negatieve gevoelens hebben een slecht effect op hoe de bezoekers De Voorhoede zien.

### END

### Stakeholders
Er zijn vier groepen personen die iets van dit project willen, daarom zijn deze groepen de stakeholders geworden. Door de stakeholders te omschrijven met persona’s wordt het duidelijker wat voor personen achter de stakeholders zitten.

#### De Voorhoede
Ook wel de opdrachtgever. De medewerkers van De Voorhoede zijn personen die leergierig zijn. Ze willen hun werk zo goed mogelijk doen en noemen zichzelf perfectionistisch. Deze personen zijn toekomstgericht en bakenen problemen graag af.

Intern werken de medewerkers van De Voorhoede gestructureerd samen, vaak met meerdere medewerkers op één project. Wel wordt er gekeken naar de individuele prestatie door De Voorhoede. De medewerkers hebben een informele band met elkaar.

{% set images = [
  {
    src: 'assets/personas/persona de voorhoede.jpg',
    alt: 'Persona over De Voorhoede',
    caption: 'Persona over De Voorhoede'
  }
] %}
```nunjucks {{ gallery(images) }}```

```nunjucks {{ accordion('bronnen', '
<a href="assets/personas/bronnen/de voorhoede/jessie.docx" download>Jessie</a>
<a href="assets/personas/bronnen/de voorhoede/thadee.docx" download>Thadee</a>
<a href="assets/personas/bronnen/de voorhoede/vincent.docx" download>Vincent</a>
') }}```

#### END

#### UNITiD
Dit bedrijf is een designbureau en heeft zo’n 60 medewerkers. UNITiD zit op dezelfde verdieping als De Voorhoede. De twee bedrijven doen veel activiteiten samen. Zo werken, eten, en creëren ze evenementen samen.

De bezoekers van UNITiD moeten ook langs de oplossing komen van dit probleem, hierdoor is UNITiD ook een stakeholder. Dit betekent niet dat de oplossing apart rekening hoeft te houden met hun bezoekers, maar UNITiD wil wel zeggenschap op een designniveau over de oplossing.

{% set images = [
  {
    src: 'assets/personas/persona unitid.jpg',
    alt: 'Persona over UNITiD',
    caption: 'Persona over UNITiD'
  }
] %}
```nunjucks {{ gallery(images) }}```

```nunjucks {{ accordion('bronnen', '
<a href="assets/personas/bronnen/unitid/koen.docx" download>Koen</a>
<a href="assets/personas/bronnen/unitid/sebastian.docx" download>Sebastian</a>
') }}```

#### END

#### De bewakers
De Voorhoede zit in een gebouw met andere bedrijven. De begane grond wordt bewaakt door bewakers. Een persoon kan niet naar boven zonder een
```nunjucks {{ wordExplainer('RFID-tag') }}```
, alleen werknemers van de bedrijven en de bewakers hebben deze tags. Hierdoor zijn de bewakers ook een stakeholder. Ze zijn een belangrijkpunt voor de ervaring van de bezoekers.

{% set images = [
  {
    src: 'assets/personas/persona bewakers.jpg',
    alt: 'Persona over de bewakers',
    caption: 'Persona over de bewakers'
  }
] %}
```nunjucks {{ gallery(images) }}```

```nunjucks {{ accordion('bronnen', '
<a href="assets/personas/bronnen/bewakers/paul.docx" download>Paul</a>
<a href="assets/personas/bronnen/bewakers/mohammed.docx" download>Mohammed</a>
') }}```

#### END

#### De bezoekers
Deze stakeholder is breed. Vaak zijn de personen die bij De Voorhoede komen
```nunjucks {{ wordExplainer('project owners') }}```
. Ze hebben de basiskennis van wat een website inhoudt en zijn goed in de omgang met mensen. De frustraties die ze uiten zijn:

* De onzekerheid die bezoekers ervaring als ze bij De Voorhoede naar boven komen.
* Het ontbreken van een vorm van verwelkoming.
* Het ouderwetse en omslachtige traject wat de bewaker bezoekers laat doen.

{% set images = [
  {
    src: 'assets/personas/persona bezoekers.jpg',
    alt: 'Persona over de bezoekers',
    caption: 'Persona over de bezoekers'
  }
] %}
```nunjucks {{ gallery(images) }}```

```nunjucks {{ accordion('bronnen', '<a href="assets/personas/bronnen/bezoekers/bezoekers.xlsx" download>Excel bestand met de enquete inzendingen</a>') }}```

#### END

### END

### Hoofd- en deelvragen
De Voorhoede heeft mij de opdracht gegeven om de ervaring die bezoekers hebben wanneer ze bij De Voorhoede komen te verbeteren. De hoofdvraag luidt als volgt:

> Hoe kunnen bezoekers van De Voorhoede door een interactieve ervaring van balie tot bestemming het gevoel over houden dat zij aan het juiste adres zijn?

Om deze hoofdvraag te beantwoorden moeten eerst de volgende deelvragen worden beantwoord. Deze zijn verdeeld in de vier fases van dit project. De deelvragen luiden als volgt:

**Probleemsituatie schetsen:**
1. Wat zijn de problemen die de bezoekers van De Voorhoede ondervinden tijdens het binnenkomen in de Schinkel en het aankomen boven bij De Voorhoede?
  1. Wie zijn de bezoekers van De Voorhoede? (hoofdstuk 4.3.4)
  2. Hoe ziet het traject eruit vanaf de ingang van de Schinkel tot aan De Voorhoede dat de bezoekers? (hoofdstuk 4.2)
  3. Hoe voelen de bezoekers zich als ze het traject doorlopen? (hoofdstuk 4.2)
  4. Wat zijn de eisen/wensen/verwachtingen van de bezoekers van De Voorhoede? (hoofdstuk 4.5)
2. Wat zijn de verwachtingen en/of eisen van overige stakeholders bij de verbetering van het ontvangst van de bezoekers?
  1. Wie zijn de overige stakeholder van dit project? (hoofdstuk 4.3)
  2. Wat zijn de verwachtingen en/of eisen van de overige stakeholders? (hoofdstuk 4.5)

**Concept ontwikkelen:**
1. Wat zijn de randvoorwaarden waarbinnen het project moet plaatsvinden?
  1. Wat zijn de fysieke randvoorwaarden voor dit project? (hoofdstuk 5.1.2)
  2. Wat zijn de economische/financiele randvoorwaarden voor dit project? (hoofdstuk 5.1.2)
  3. Wat zijn de technische randvoorwaarden voor dit project? (hoofdstuk 5.1.2)
  4. Wat zijn de tijd gerelateerde randvoorwaarden voor dit project? (hoofdstuk 5.1.2)
  5. Wat zijn de privacy randvoorwaarden voor dit project? (hoofdstuk 5.1.2)
2. Wat zijn de mogelijkheden om de bezoekers van De Voorhoede beter te ontvangen, waardoor ze een betere indruk krijgen van De Voorhoede?
  1. Welke indruk wil De Voorhoede uitstralen? (hoofdstuk 5.1.1)
  2. Wat voor oplossingen hebben de medewerkers van De Voorhoede / UNITiD voor het ontvangst? (hoofdstuk 5.1.4)
  3. Wat doen andere bedrijven om de ontvangst van de bezoekers zo prettig mogelijk te maken? (hoofdstuk 5.1.5)
  4. Zijn er inspiratiebronnen te vinden in ‘science fiction’ die gebruikt kunnen worden bij de ontwikkeling van conceptrichtingen? (hoofdstuk 5.1.6)
3. Wat is het gekozen concept voor dit project?
  1. Wat houdt het concept in? (hoofdstuk 6.1)
  2. Wat is de MoSCoW van het concept? (hoofdstuk 6.2)
  3. Hoe gaan de technische aspecten eruitzien van het concept? (hoofdstuk 6.3)

**Uitwerkingsfase:**
1. Wat zijn de conceptrichtingen die getest gaan worden bij de bezoekers om erachter te komen welk conceptrichting uitgevoerd gaan worden? (hoofdstuk 5.2)

**Validatiefase:**
1. Welke van de bedachte conceptenrichtingen sluit het best aan bij de bezoekers en geeft hen het positiefste beeld van De Voorhoede, en wordt daardoor uitgevoerd?
  1. Welke van de bedachte conceptenrichtingen vinden de bezoekers het beste? (hoofdstuk 5.3)
  2. Welke van de bedachte conceptenrichtingen geeft het positiefste beeld van De Voorhoede? (hoofdstuk 5.3)
2. Heeft het gekozen concept een positieve ervaring op de bezoekers van De Voorhoede?
  1. Wordt het concept als leuker gezien dan het eerst was door de bezoekers en door De Voorhoede?
  2. Welke gedachtes hebben de bezoekers over De Voorhoede bij het concept?


### END

### Programma van eisen

Elke stakeholder heeft zijn eigen wensen en eisen, dit is uit de gesprekken gebleken die ik met elk van de stakeholders had.

**De Voorhoede**
* Randvoorwaarden:
  * Het moet laten zien hoe ‘leuk’ De Voorhoede is.
  * Het moet laten zien dat De Voorhoede inhoudelijk is.
  * De boodschap van De Voorhoede en UNITiD moet anders kunnen zijn.
* Functionele wensen:
  * Het moet gepersonaliseerd zijn op de klant die binnen komt.
  * Het moet een vorm van actualiteit i.v.m. De Voorhoede geven.
  * Het moet gekoppeld zijn aan de agenda zodat er geen extra handelingen ontstaan.
  * Het moet te configureren zijn.
* Gebruikerswensen:
  * Het moet zo min mogelijk handelingen nodig hebben.

**UNITiD**
* Randvoorwaarden:
  * De identiteit van UNITiD moet zichtbaar zijn.
  * De boodschap van De Voorhoede en UNITiD moet anders kunnen zijn.
* Functionele wensen:
  * Het moet gekoppeld zijn aan de agenda zodat er geen extra handelingen ontstaan.
  * Het moet te configureren zijn.
* Ontwerpbeperkingen:
  * Het moet design technisch voldoen aan de lat van UNITiD.

**De bewakers**
* Randvoorwaarden:
  * Betere communicatie tussen bedrijf en de bewakers.
  * De afspraken in de lijst moeten minimaal de naam van de bezoeker bevatten en de bedrijfsnaam.
* Gebruikerswensen:
  * De site moet zo simpel mogelijk zijn.

**De bezoekers**
* Gebruikerswensen:
  * Het moet duidelijk zijn.
  * Het moet aangeven wat ik moet doen.
  * Het moet leuk zijn.
  * Het moet meer sfeer hebben.
  * Ik moet beter ontvangen worden.
  * Ik moet zelf de verdieping kunnen bepalen.

### END

## END
