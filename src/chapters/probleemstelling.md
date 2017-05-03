## Probleemstelling
In dit hoofdstuk staat het probleem wat opgelost moet worden. Hierbij worden de stakeholders, situatie, customer journey, hoofd- en deelvragen, en programma van eisen beschreven.

### Stakeholders
Er zijn vier groepen personen die iets van dit project willen, daarom zijn deze groepen de stakeholders geworden. Door de stakeholders te omschrijven met persona’s wordt het duidelijker wat voor personen achter de stakeholders zitten.

#### De Voorhoede
Ook wel de opdrachtgever. De medewerkers van De Voorhoede zijn personen die leergierig zijn. Ze willen hun werk zo goed mogelijk doen en noemen zichzelf perfectionistisch. Deze personen zijn toekomstgericht en bakenen problemen graag af.

Bij De Voorhoede werken ze veel samen, en op een informeel niveau. Ze zijn gestructureerd en kijken ze het meest naar eigenprestatie.

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

* De onzekerheid toen die bezoekers ervaring als ze bij De Voorhoede naar boven komen.
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

```nunjucks {{ accordion('bronnen', '<a href="assets/personas/bronnen/bezoekers/bezoekers.xlsx" download>Exel bestand met de inzendingen</a>') }}```

#### END

### END

### De huidige situatie
In dit scenario ben jij de bezoeker.

Je loopt bij de Schinkel naar binnen. Aan je linkerhand zie je een persoon achter een balie zitten. Je loopt eropaf en begroet de bewaker. De bewaker vraagt voor wie je komt en wat voor afspraak je met hen hebt. Je beantwoordt de vraag met ‘De Voorhoede en we hebben een afspraak over een website’. De bewaker vraagt of je een formulier kan invullen. Dit doe je natuurlijk netjes, en wanneer je de pen neer legt vraagt de bewaker of je mee wil lopen naar de liften. De bewaker drukt op het lift knopje en de liftdeuren gaan open. Je stapt naar binnen en de bewaker houdt zijn
```nunjucks {{ wordExplainer('RFID-tag') }}```
voor een scanner, drukt op de ‘2’ knop en wenst je een fijne dag verder. De lift gaat naar boven en op de 2de etage gaan de liftdeuren weer open. Je stapt uit de lift en ziet niet waar je heen moet. Er staat ook nergens aangegeven waar De Voorhoede zit.

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

### END

### Hoofd- en deelvragen
De Voorhoede heeft mij de opdracht gegeven om een oplossing te vinden voor dit probleem. De hoofdvraag luidt als volgt:

> Hoe kunnen bezoekers van De Voorhoede door een interactieve ervaring van balie tot bestemming het gevoel over houden dat zij aan het juiste adres zijn?

Om deze vraag te beantwoorden zijn er deelvragen bedacht. De deelvragen dienen ter verduidelijking van de hoofdvraag. Als alle deelvragen beantwoord zijn kan de hoofdvraag ook worden beantwoord. De deelvragen zijn onderverdeeld in vier fases. De fases dienen ook ter verduidelijking. De deelvragen luiden als volgt:

**Probleemsituatie schetsen:**
1. Wat zijn de problemen die de bezoekers van De Voorhoede ondervinden tijdens het binnenkomen in de Schinkel en het aankomen boven bij De Voorhoede?
  1. Wie zijn de bezoekers van De Voorhoede? (persona)
  2. Hoe ziet het traject eruit dat de bezoekers doorlopen om naar De Voorhoede te komen? (Customer Journey)
  3. Hoe voelen / denken de bezoekers zich als ze het traject doorlopen? (enquête)
  4. Wat zijn de eisen/wensen/verwachtingen van de bezoekers van De Voorhoede? (programma van Eisen)
2. Wat zijn de verwachtingen en/of eisen van overige stakeholders bij de verbetering van de ontvangst van de bezoekers?
  1. Wie zijn de overige stakeholder van dit project? (persona’s)
  2. Wat zijn de verwachtingen en/of eisen van de overige stakeholders? (programma van eisen)

**Concept ontwikkelen:**
1. Wat zijn de randvoorwaarden waarbinnen het project moet plaatsvinden?
  1. Wat zijn de fysieke randvoorwaarde voor dit project? (interview)
  2. Wat zijn de economische/financiele randvoorwaarde voor dit project? (interview)
  3. Wat zijn de technische randvoorwaarde voor dit project? (deskresearch)
  4. Wat zijn de tijd gerelateerde randvoorwaarde voor dit project? (interview)
  5. Wat zijn de privacy randvoorwaarde voor dit project? (enquête)
2. Wat zijn de mogelijkheden om de bezoekers van De Voorhoede beter te ontvangen, waardoor ze een betere indruk krijgen van De Voorhoede?
  1. Welke indruk wil De Voorhoede uitstralen? (interview / programma van eisen)
  2. Wat voor oplossingen hebben de medewerkers van De Voorhoede / UNITiD voor het ontvangst? (inspiration wall)
  3. Wat doen andere bedrijven om de ontvangst van de bezoekers zo prettig mogelijk te maken? (concurrentie analyse)
  4. Zijn er inspiratiebronnen te vinden in ‘science fiction’ die gebruikt kunnen worden bij de ontwikkeling van conceptrichtingen? (deskresearch)
3. Wat is het gekozen concept voor dit project?
  1. Wat houdt het concept in?  (deskresearch)
  2. Wat is de MoSCoW van het concept?  (deskresearch)
  3. Hoe gaat het systeem eruitzien voor het concept?  (deskresearch)


**Uitwerkingsfase:**
1. Wat zijn de conceptrichtingen die getest gaan worden bij de bezoekers om erachter te komen welk conceptrichting uitgevoerd gaat worden?
2. Hoe werken de componenten van het systeem voor het concept?
  1. Hoe werkt het systeem om de afspraken van Google calendar af te halen?  (deskresearch)
  2. Hoe werkt het systeem voor de site van de bewakers?  (deskresearch)
  3. Hoe werkt het systeem voor het begroeten van bezoekers?  (deskresearch)


**Validatiefase:**
1. Welke van de bedachte conceptenrichtingen sluit het best aan bij de bezoekers en geeft hen het positiefste beeld van De Voorhoede, en wordt daardoor uitgevoerd?
  1. Welke van de bedachte conceptenrichtingen vinden de bezoekers het beste? (interview)
  2. Welke van de bedachte conceptenrichtingen geeft het positiefste beeld van De Voorhoede? (interview)
2. Heeft het gekozen concept een positieve ervaring op de bezoekers van De Voorhoede?
  1. Wordt het concept als leuker gezien dan het eerst was door de bezoekers en door De Voorhoede? (interview)
  2. Welke gedachtes hebben de bezoekers over De Voorhoede bij het concept? (interview)


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
