// course/assets/js/config.js
// Muuta nämä omiksi:
const COURSE = {
  name: "Sähkötyöturvallisuuskurssi (SFS 6002) – kurssipohja",
  // Tally linkki todistuslomakkeelle (vaihda kun valmis)
  certificateFormUrl: "https://tally.so/r/PdAaZb",
  // Jos haluat palata pääsivustolle kurssin jälkeen
  returnToSiteUrl: "/",
  // 10 lessonia (muokkaa otsikot + sisällöt + audio-polut)
  lessons: [
    {
      id: "01",
      title: "1. Kurssin tavoite ja rakenne",
      audioSrc: "assets/audio/01.mp3",
      contentHtml: `
  <p><strong>Tervetuloa SFS 6002 -sähkötyöturvallisuuskurssille.</strong></p>

  <p>
    Tämän koulutuksen tavoitteena on ylläpitää ja vahvistaa osallistujan sähkötyöturvallisuuteen liittyvää osaamista
    sekä varmistaa, että työssä noudatetaan turvallisia toimintatapoja, ajantasaista ohjeistusta ja sähkötyöturvallisuusstandardin periaatteita.
  </p>

  <p>
    Koulutus on tarkoitettu henkilöille, joiden työtehtäviin liittyy sähkötöitä, sähkölaitteistojen käyttöä, valvontaa,
    työnjohtoa tai muuta sähkötyöturvallisuuden tuntemusta edellyttävää toimintaa.
  </p>

  <p>
    Sähkötyöturvallisuuskoulutusta tulee ylläpitää säännöllisesti. Ylläpitokoulutus on suositeltavaa järjestää esimerkiksi vuosittain,
    ja koulutusten väli saa kuitenkin olla enintään viisi vuotta. Jos työtehtävissä, työmenetelmissä, yrityksen työjärjestelyissä
    tai sähkötyöturvallisuuteen liittyvissä säädöksissä ja standardeissa tapahtuu olennaisia muutoksia, koulutus on suositeltavaa
    järjestää viipymättä. Uusin SFS 6002 sähkötyöturvallisuusstandardi on vuoden 2025 painos. Tämän koulutuksen laajuus vastaa viiden vuoden koulutusväliä. 
    Kunkin organisaation tulee harkita siirtymistä tiheämpään koulutusväliin. Tuolloin koulutus voi olla lyhyempi.
  </p>

 

  <p><strong>Tällä kurssilla käsitellään muun muassa seuraavia aiheita:</strong></p>
  <ul>
    <li>vastuut ja roolit sähkötyössä</li>
    <li>riskien arviointi ja työn suunnittelu</li>
    <li>sähkön vaarat ja niiltä suojautuminen</li>
    <li>turvalliset työmenetelmät ja menettelyt</li>
    <li>jännitteettömäksi tekeminen ja varmistaminen</li>
    <li>työskentely jännitteen läheisyydessä</li>
    <li>onnettomuustilanteet ja ensiapu</li>
    <li>kertaus ja keskeiset muistilistat</li>
  </ul>

  <p><strong>Kurssin rakenne:</strong></p>
  <ul>
    <li>kurssi etenee vaiheittain sivu kerrallaan</li>
    <li>jokaisella sivulla on oma sisältö ja aiheeseen liittyvä ohjaava kuva</li>
    <li>seuraava sivu avautuu, kun olet kuunnellut audio-osuuden loppuun</li>
    <li>kurssin lopussa siirryt todistuslomakkeelle, jonka perusteella kurssitodistus lähetetään sähköpostiin</li>
  </ul>

  <p>
    Työnantajan sekä työnjohdon kirjallisten sähkötyöturvallisuusohjeiden ja standardin SFS 6002 mukaisten toimintatapojen
    tulee olla jatkuvasti työntekijöiden käytettävissä. Tämän koulutuksen tarkoituksena on tukea näiden periaatteiden käytännön soveltamista jokapäiväisessä työssä.
  </p>
<p>
Kurssin lopuksi on lyhyt tentti jolla varmistetaan kurssin tavoitteiden täyttyminen. Tästä koulutuksesta saa kurssin päätyttyä valitsemaansa sähköpostiin (ilmoitetaan lopuksi) kurssitodistuksen.
Erillistä korttia ei tarvita. Todistuksella voi osoittaa sen, että kurssi on käyty.
</p>
  
<img src="assets/images/kurssin_tavoite_ja_rakenne.png" 
         style="width:100%; max-width:700px; margin:20px 0; border-radius:8px;">
        
      `,
    },
    {
      id: "02",
      title: "2. Vastuut ja roolit sähkötyössä",
      audioSrc: "assets/audio/02.mp3",
      contentHtml: `<p>Lisää tähän oma sisältösi (roolit, vastuut, toimintatavat).</p>`,
    },
    {
      id: "03",
      title: "3. Riskien arviointi ja työn suunnittelu",
      audioSrc: "assets/audio/03.mp3",
      contentHtml: `<p>Lisää tähän oma sisältösi (riskien tunnistaminen, suunnittelu).</p>`,
    },
    {
      id: "04",
      title: "4. Sähkön vaarat ja suojautuminen",
      audioSrc: "assets/audio/04.mp3",
      contentHtml: `<p>Lisää tähän oma sisältösi (vaaratekijät, suojaimet, käytännöt).</p>`,
    },
    {
      id: "05",
      title: "5. Turvalliset työmenetelmät ja menettelyt",
      audioSrc: "assets/audio/05.mp3",
      contentHtml: `<p>Lisää tähän oma sisältösi (turvalliset työmenetelmät).</p>`,
    },
    {
      id: "06",
      title: "6. Jännitteettömäksi tekeminen ja varmistaminen",
      audioSrc: "assets/audio/06.mp3",
      contentHtml: `<p>Lisää tähän oma sisältösi (toimenpiteet, varmistus).</p>`,
    },
    {
      id: "07",
      title: "7. Työskentely jännitteen läheisyydessä",
      audioSrc: "assets/audio/07.mp3",
      contentHtml: `<p>Lisää tähän oma sisältösi (etäisyydet, suojaus, käytännöt).</p>`,
    },
    {
      id: "08",
      title: "8. Onnettomuustilanteet ja ensiapu",
      audioSrc: "assets/audio/08.mp3",
      contentHtml: `<p>Lisää tähän oma sisältösi (toimintaohjeet, hätätilanteet).</p>`,
    },
    {
      id: "09",
      title: "9. Kertaus ja keskeiset muistilistat",
      audioSrc: "assets/audio/09.mp3",
      contentHtml: `<p>Lisää tähän oma sisältösi (kertaus, checklistit).</p>`,
    },
    {
      id: "10",
      title: "10. Kurssin päätös ja todistus",
      audioSrc: "assets/audio/10.mp3",
      contentHtml: `
        <p>Lisää tähän oma yhteenveto ja ohjeistus todistuksen hakemiseen.</p>
        <p>Kun tämä audio on kuunneltu loppuun, avautuu nappi todistuslomakkeeseen.</p>
      `,
    },
  ],
};
