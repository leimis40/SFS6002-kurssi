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
      contentHtml: `

<p><strong>Sähkötöiden johtaja</strong> vastaa siitä, että sähkötöissä noudatetaan sähköturvallisuussäädöksiä, standardeja ja sovittuja turvallisia työmenetelmiä. Hän huolehtii siitä, että sähkötöitä tekevät henkilöt ovat tehtäviinsä riittävän ammattitaitoisia ja opastettuja.</p>

<ul>
  <li>vastaa sähkötöiden turvallisesta järjestämisestä</li>
  <li>varmistaa, että työssä noudatetaan sähköturvallisuusmääräyksiä</li>
  <li>huolehtii työntekijöiden osaamisesta, opastuksesta ja tarvittavista ohjeista</li>
  <li>voi nimetä työnaikaisen sähköturvallisuuden valvojan (STV)</li>
</ul>

<p><strong>Käytön johtaja</strong> vastaa sähkölaitteiston käytön turvallisuudesta ja käyttötoimenpiteiden asianmukaisesta toteutuksesta. Hänen tehtävänään on varmistaa, että sähkölaitteistoa käytetään, huolletaan ja valvotaan turvallisesti.</p>

<ul>
  <li>vastaa sähkölaitteiston käytön turvallisuudesta</li>
  <li>huolehtii käyttötoimenpiteiden turvallisesta järjestämisestä</li>
  <li>voi nimetä työnaikaisen sähköturvallisuuden valvojan (STV) käyttötoimenpiteisiin liittyvissä töissä</li>
  <li>valvoo, että laitteiston käyttöön ja kunnossapitoon liittyvät työt tehdään turvallisesti</li>
</ul>

<p><strong>Yhteenveto:</strong> sähkötöiden johtaja vastaa ensisijaisesti sähkötöiden turvallisesta toteuttamisesta, kun taas käytön johtaja vastaa sähkölaitteiston käytön ja käyttötoimenpiteiden turvallisuudesta.</p>
      
      <p><strong>Työnaikainen sähköturvallisuuden valvoja (STV)</strong> on nimettävä sähkötyökohteeseen, kun työhön liittyy sähköiskun tai valokaaren vaara tai kun laitteisto voidaan kytkeä jännitteiseksi.</p>

<p>STV vastaa siitä, että työ suoritetaan turvallisesti ja sovittuja sähköturvallisuusmenettelyjä noudattaen.</p>

<ul>
  <li>Työkohteessa on aina oltava nimetty STV.</li>
  <li>Työntekijöiden tulee tietää, kuka toimii valvojana.</li>
  <li>Valvojan tulee tietää, kenen työtä hän valvoo.</li>
</ul>

<p>Jos valvoja poistuu työkohteesta eikä voi hoitaa tehtäväänsä, on nimettävä uusi STV ja ilmoitettava siitä työryhmälle.</p>

<p>Työnaikaisen sähköturvallisuuden valvojan voi nimetä esimerkiksi sähkötöiden johtaja, käytön johtaja tai työnantaja. Nimeäminen suositellaan tehtäväksi kirjallisesti.</p>

<p>Yksin työskentelevä sähköalan ammattihenkilö vastaa työnaikaisesta sähköturvallisuuden valvonnasta ilman erillistä nimeämistä.</p>

<p><strong>Sähkölaitteiston vastuuhenkilö (SLV)</strong> vastaa sähkölaitteiston turvallisesta käytöstä
organisoimalla toimintaa ja määrittelemällä turvalliset menettelyt. Hän huolehtii myös siitä,
että pääsy sähkölaitteistoihin on rajoitettu ja että turvallisuuteen liittyvät käytännöt
sekä valvonta ovat asianmukaisesti järjestetty.</p>

<p>SLV voidaan nimetä omasta organisaatiosta tai ulkopuolisesta organisaatiosta. Tehtävien
jakaminen muille henkilöille on mahdollista, mutta vastuut ja tehtävät suositellaan
määrittelemään kirjallisesti.</p>

<p><strong>Sähkölaitteiston käyttöä valvova henkilö (KVH)</strong> vastaa hänelle määrätyn
sähkölaitteiston osan käytön valvonnasta. KVH antaa tarvittaessa valtuutuksen
työnaikaisen sähköturvallisuuden valvojalle (STV) työn aloittamista varten.</p>

<p>KVH voi siirtää osan tehtävistään muille henkilöille, mutta vastuunjako tulee
määritellä selkeästi.</p>

<p><strong>Työntekijän vastuulla</strong> on noudattaa työluvan yhteydessä annettuja ohjeita
sekä varmistaa, että hän on ymmärtänyt työtehtävään liittyvät turvallisuusohjeet ja
suojatoimenpiteet ennen työn aloittamista.</p>

<p>Jos työn aikana ilmenee epäselvyyksiä ohjeissa tai työn turvallisuudessa,
työ on keskeytettävä välittömästi ja asiasta on pyydettävä lisäohjeita
työnaikaisen sähköturvallisuuden valvojalta (STV).</p>

<p>Tarvittaessa työnaikaisen sähköturvallisuuden valvoja (STV) ilmoittaa
tilanteesta sähkölaitteiston käyttöä valvovalle henkilölle (KVH),
jotta työn turvallisuus voidaan varmistaa.</p>

<img src="assets/images/taulukkox1.png" 
         style="width:100%; max-width:700px; margin:20px 0; border-radius:8px;">

      `,
    },
    {
      id: "03",
      title: "3. Riskien arviointi ja työn suunnittelu",
      audioSrc: "assets/audio/03.mp3",
      contentHtml: `

      <p><strong>Ennen työn aloittamista</strong> työ on suunniteltava huolellisesti ja siihen on tehtävä
riskien arviointi. Arvioinnissa on huomioitava sähkölaitteiston lisäksi myös työympäristö,
jotta mahdolliset vaaratekijät voidaan tunnistaa ja hallita.</p>

<p><strong>Valokaaririskien arviointi</strong> on osa sähkötöiden riskienhallintaa. Ensisijainen turvallisuusperiaate on 
poistaa vaara tai eristää se, sillä pelkkä henkilönsuojainten käyttö ei yksin riitä ehkäisemään onnettomuuksia.</p>

<p>Jos työ joudutaan tekemään jännitteisenä ja siihen liittyy valokaaren vaara, on työstä tehtävä 
riskienarviointi ja valittava tilanteeseen riittävät suojavarusteet. Tämmöinen riski esiintyy syöskennellessä sähkökeskuksissa
joissa jännite! Valokaarivaara on jännitteisessä keskuksessa vaikka työ ei olisi jännitetyötä!</p>

<ul>
  <li>valokaaririskiä arvioidaan esimerkiksi nimellisjännitteen, oikosulkuvirran ja poiskytkentäajan perusteella</li>
  <li>arvioinnin perusteella määritellään tarvittavat suojaimet ja turvalliset työmenetelmät</li>
  <li>riskien arviointi tehdään aina ennen työn aloittamista</li>
  <li>Uusi SFS 6002 standardi liite S sisältää lisätietoa valokaarelta suojautumisesta</li>
</ul>

<p>Joissakin pienjännitetilanteissa erillistä valokaarienergian laskentaa ei vaadita, mutta riskit on silti
arvioitava ja työn turvallisuus varmistettava ennen työn aloittamista.</p>

<p> yli 1000V asennuksissa pitää tehdä kytkentäsuunnitelma, kun tehdään käytönaikaisia kytkentöjä</p>



<img src="assets/images/riskien_arviointi_ja_tyon_suunnitelma.png" 
         style="width:100%; max-width:700px; margin:20px 0; border-radius:8px;">
      
      `,
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
