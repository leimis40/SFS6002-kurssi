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

 


 <div style="margin:20px 0; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:16px; line-height:1.5; background:#fff; border:1px solid #d9e2f0; border-radius:10px; overflow:hidden;">
    
    <thead>
      <tr style="background:#1d4ed8; color:#fff;">
        <th style="padding:12px; width:70px;">#</th>
        <th style="padding:12px; text-align:left;">Kurssin sisältö</th>
      </tr>
    </thead>

    <tbody>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">1</td>
        <td style="padding:12px;">vastuut ja roolit sähkötyössä</td>
      </tr>

      <tr>
        <td style="padding:12px; font-weight:bold;">2</td>
        <td style="padding:12px;">riskien arviointi ja työn suunnittelu</td>
      </tr>

      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">3</td>
        <td style="padding:12px;">sähkön vaarat ja niiltä suojautuminen</td>
      </tr>

      <tr>
        <td style="padding:12px; font-weight:bold;">4</td>
        <td style="padding:12px;">turvalliset työmenetelmät ja menettelyt</td>
      </tr>

       <tr>
        <td style="padding:12px; font-weight:bold;">5</td>
        <td style="padding:12px;">perussuojaus menetelmät</td>
      </tr>

       <tr>
        <td style="padding:12px; font-weight:bold;">6</td>
        <td style="padding:12px;">vikasuojaus</td>
      </tr>

      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">7</td>
        <td style="padding:12px;">jännitteettömäksi tekeminen ja varmistaminen</td>
      </tr>

      <tr>
        <td style="padding:12px; font-weight:bold;">8</td>
        <td style="padding:12px;">työskentely jännitteen läheisyydessä</td>
      </tr>

      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">9</td>
        <td style="padding:12px;">onnettomuustilanteet ja ensiapu</td>
      </tr>

      <tr>
        <td style="padding:12px; font-weight:bold;">10</td>
        <td style="padding:12px;">kertaus ja keskeiset muistilistat</td>
      </tr>
      
    </tbody>
  </table>
</div>


  
 <div style="margin:20px 0; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:16px; line-height:1.5; background:#fff; border:1px solid #d9e2f0; border-radius:10px; overflow:hidden;">
    
    <thead>
      <tr style="background:#1d4ed8; color:#fff;">
        <th style="padding:12px; width:70px;">#</th>
        <th style="padding:12px; text-align:left;">Kurssin eteneminen</th>
      </tr>
    </thead>

    <tbody>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">1</td>
        <td style="padding:12px;">kurssi etenee vaiheittain sivu kerrallaan</td>
      </tr>

      <tr>
        <td style="padding:12px; font-weight:bold;">2</td>
        <td style="padding:12px;">jokaisella sivulla on oma sisältö ja aiheeseen liittyvä ohjaava kuva</td>
      </tr>

      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">3</td>
        <td style="padding:12px;">seuraava sivu avautuu, kun olet kuunnellut audio-osuuden loppuun</td>
      </tr>

      <tr>
        <td style="padding:12px; font-weight:bold;">4</td>
        <td style="padding:12px;">kurssin lopussa siirryt todistuslomakkeelle, jonka perusteella kurssitodistus lähetetään sähköpostiin</td>
      </tr>

    </tbody>
  </table>
</div>

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

<div style="margin:24px 0;">
  <h3 style="margin:0 0 12px 0; font-size:20px; line-height:1.3;">
    Taulukko X.1 Työnaikaisen sähköturvallisuuden valvojan (STV) tehtävät
  </h3>

  <div style="overflow-x:auto; -webkit-overflow-scrolling:touch; border:1px solid #d9d9d9; border-radius:10px;">
    <table style="border-collapse:collapse; min-width:1200px; width:100%; background:#fff; font-size:15px; line-height:1.45;">
      <thead>
        <tr style="background:#f3f6fa;">
          <th style="border:1px solid #d9d9d9; padding:12px; text-align:left; min-width:180px;">Käyttöön liittyvät toimenpiteet (5)</th>
          <th style="border:1px solid #d9d9d9; padding:12px; text-align:left; min-width:180px;">Työskentely jännitteettömänä (6.2)</th>
          <th style="border:1px solid #d9d9d9; padding:12px; text-align:left; min-width:180px;">Jännitetyö (6.3)</th>
          <th style="border:1px solid #d9d9d9; padding:12px; text-align:left; min-width:180px;">Työskentely lähialueella (6.4) ja lähialueen ulkopuolella (6.5)</th>
          <th style="border:1px solid #d9d9d9; padding:12px; text-align:left; min-width:180px;">Kunnossapitokäytännöt (7)</th>
          <th style="border:1px solid #d9d9d9; padding:12px; text-align:left; min-width:180px;">Muut tehtävät (liite B)</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style="border:1px solid #d9d9d9; padding:12px; vertical-align:top; background:#fafafa;">
            <p style="margin:0 0 8px 0;"><strong>Arvioidaan:</strong></p>
            <ul style="margin:0 0 10px 18px; padding:0;">
              <li>laitteiston kosketussuojaus ja sovitaan turvalliset työskentelyetäisyydet</li>
              <li>mittalaitteiden soveltuvuus kohteeseen ja tarkastetaan niiden kunto</li>
              <li>testausten turvallisuus jännitteisessä ja/tai jännitteettömässä kohteessa</li>
              <li>tarkastusten turvallisuus jännitteettömässä ja jännitteisessä kohteessa</li>
            </ul>

            <p style="margin:0 0 8px 0;"><strong>Lisäksi:</strong></p>
            <ul style="margin:0 0 10px 18px; padding:0;">
              <li>arvioidaan henkilönsuojaimien ja muiden suojavälineiden tarpeellisuus</li>
            </ul>

            <p style="margin:0 0 8px 0;"><strong>Yhteydenpito ja ilmoitukset:</strong></p>
            <ul style="margin:0 0 0 18px; padding:0;">
              <li>sähkölaitteiston vastuuhenkilö (SLV) ja/tai käyttöä valvova henkilö (KVH)</li>
            </ul>
          </td>

          <td style="border:1px solid #d9d9d9; padding:12px; vertical-align:top;">
            <ul style="margin:0 0 10px 18px; padding:0;">
              <li>tunnistetaan kohde ja sen rakenne</li>
              <li>arvioidaan riskit ja tehdään tarvittavat turvallisuustoimet</li>
              <li>erotetaan kohde kaikista syötöistä</li>
              <li>lukitaan erotuskohta ja asetetaan kieltokilvet</li>
              <li>todetaan jännitteettömyys kaikista navoista kaksinapaisella jännitteenkoettimella</li>
              <li>tehdään tarvittaessa työmaadoittaminen</li>
              <li>suojaudutaan lähellä olevilta jännitteisiltä osilta henkilönsuojaimilla, eristävillä matoilla ym.</li>
            </ul>

            <p style="margin:0 0 8px 0;"><strong>Työn aloituslupa:</strong></p>
            <ul style="margin:0 0 0 18px; padding:0;">
              <li>käyttöä valvova henkilö (KVH)</li>
              <li>myös työnaikaisen sähköturvallisuuden valvoja (STV) tavanomaisissa tehtävissä</li>
            </ul>
          </td>

          <td style="border:1px solid #d9d9d9; padding:12px; vertical-align:top; background:#fafafa;">
            <ul style="margin:0 0 10px 18px; padding:0;">
              <li>arvioidaan työ, ympäristö ja tarvittavat turvallisuustoimet (mm. henkilönsuojaimet)</li>
              <li>käytetään työmenetelmäkohtaisia ohjeita</li>
              <li>opastetaan työ jännitetyöpätevyydettömälle omaavalle henkilölle</li>
              <li>valtuutetaan avustavat henkilöt</li>
            </ul>

            <p style="margin:0 0 8px 0;"><strong>Työskentelylupa:</strong></p>
            <ul style="margin:0 0 10px 18px; padding:0;">
              <li>työnantajalta tai hänen sijaiseltaan (sähköalan ammattihenkilöltä) ja/tai</li>
              <li>sähkötöiden tai käytön johtajalta</li>
            </ul>

            <p style="margin:0 0 8px 0;"><strong>Työn aloituslupa:</strong></p>
            <ul style="margin:0 0 10px 18px; padding:0;">
              <li>työnaikaisen sähköturvallisuuden valvoja (STV)</li>
            </ul>

            <p style="margin:0 0 8px 0;"><strong>Yhteydenpito ja ilmoitukset:</strong></p>
            <ul style="margin:0 0 0 18px; padding:0;">
              <li>käyttöä valvova henkilö (KVH)</li>
            </ul>
          </td>

          <td style="border:1px solid #d9d9d9; padding:12px; vertical-align:top;">
            <ul style="margin:0 0 10px 18px; padding:0;">
              <li>arvioidaan työ, sen ympäristö ja tarvittavat turvallisuustoimet (mm. henkilönsuojaimet)</li>
            </ul>

            <p style="margin:0 0 8px 0;"><strong>Työn aloituslupa:</strong></p>
            <ul style="margin:0 0 0 18px; padding:0;">
              <li>työnaikaisen sähköturvallisuuden valvoja (STV)</li>
            </ul>
          </td>

          <td style="border:1px solid #d9d9d9; padding:12px; vertical-align:top; background:#fafafa;">
            <p style="margin:0 0 8px 0;"><strong>Korjaustyöt:</strong></p>
            <ul style="margin:0 0 10px 18px; padding:0;">
              <li>tunnistetaan kohde ja sen rakenne</li>
              <li>arvioidaan riskit ja tehdään tarvittavat turvallisuustoimet</li>
            </ul>

            <p style="margin:0 0 10px 0;">Huomaa: Vian hakeminen yleensä jännitteisenä, korjaus jännitteettömänä.</p>

            <p style="margin:0 0 8px 0;"><strong>Vaihtotyöt:</strong></p>
            <ul style="margin:0 0 10px 18px; padding:0;">
              <li>sulakkeiden vaihto eri tilanteissa (virrallinen, jännitteinen, jännitteetön)</li>
              <li>lamppujen vaihdon turvallisuus</li>
            </ul>

            <p style="margin:0 0 8px 0;"><strong>Työskentelylupa ja ilmoitukset:</strong></p>
            <ul style="margin:0 0 10px 18px; padding:0;">
              <li>käyttöä valvovalta henkilöltä (KVH)</li>
            </ul>

            <p style="margin:0 0 8px 0;"><strong>Työn aloituslupa:</strong></p>
            <ul style="margin:0 0 0 18px; padding:0;">
              <li>työnaikaisen sähköturvallisuuden valvoja (STV)</li>
            </ul>
          </td>

          <td style="border:1px solid #d9d9d9; padding:12px; vertical-align:top;">
            <ul style="margin:0 0 0 18px; padding:0;">
              <li>ilmastollisten olosuhteiden arviointi</li>
              <li>sähkötapaturmien ja/tai vaaratilanteiden raportointi</li>
              <li>hätätoimenpiteiden järjestely tarvittaessa</li>
              <li>oikeus keskeyttää vaaralliseksi katsottu työ</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p style="margin:10px 0 0 0; font-size:14px; color:#666;">
    Puhelimella taulukkoa voi vierittää sivusuunnassa.
  </p>
</div>



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
riskienarviointi ja valittava tilanteeseen riittävät suojavarusteet. Tämmöinen riski esiintyy työskennellessä sähkökeskuksissa
joissa jännite! Valokaarivaara on jännitteisessä keskuksessa vaikka työ ei olisi jännitetyötä!</p>

<div style="margin:20px 0; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:16px; line-height:1.5; background:#fff; border:1px solid #d9e2f0; border-radius:10px; overflow:hidden;">

    <thead>
      <tr style="background:#1d4ed8; color:#fff;">
        <th style="padding:12px; width:70px;">#</th>
        <th style="padding:12px; text-align:left;">Valokaaririskin arviointi</th>
      </tr>
    </thead>

    <tbody>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">1</td>
        <td style="padding:12px;">
          valokaaririskiä arvioidaan esimerkiksi nimellisjännitteen, oikosulkuvirran ja poiskytkentäajan perusteella
        </td>
      </tr>

      <tr>
        <td style="padding:12px; font-weight:bold;">2</td>
        <td style="padding:12px;">
          arvioinnin perusteella määritellään tarvittavat suojaimet ja turvalliset työmenetelmät
        </td>
      </tr>

      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">3</td>
        <td style="padding:12px;">
          riskien arviointi tehdään aina ennen työn aloittamista
        </td>
      </tr>

      <tr>
        <td style="padding:12px; font-weight:bold;">4</td>
        <td style="padding:12px;">
          uusi SFS 6002 -standardi (liite S) sisältää lisätietoa valokaarelta suojautumisesta
        </td>
      </tr>

    </tbody>
  </table>
</div>

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
      contentHtml: `
      <p><strong>Sähkö voi aiheuttaa vakavia vammoja tai kuoleman.</strong> 
Sähkön vaarat liittyvät erityisesti sähköiskuun, palovammoihin sekä 
valokaaren aiheuttamiin lämpö- ja painevaikutuksiin.</p>

<p>Sähkövirran kulkiessa ihmiskehon läpi sen vaikutus riippuu erityisesti 
virran suuruudesta, kulkureitistä kehossa sekä vaikutusajasta. 
Erityisen vaarallinen tilanne syntyy, jos virta kulkee sydämen tai 
hengityselinten kautta.</p>

<p><strong>Ihmisen ihon impedanssi</strong> vaikuttaa siihen, kuinka suuri virta 
pääsee kulkemaan kehon läpi. Kuiva ja ehjä iho voi rajoittaa virtaa, 
mutta kostea tai vaurioitunut iho pienentää vastusta merkittävästi, 
jolloin kehon läpi kulkeva virta voi kasvaa vaarallisen suureksi.</p>

<ul>
  <li>jo muutaman milliampeerin virta voi tuntua ihmiskehossa</li>
  <li>noin 10–15 mA virta voi aiheuttaa lihasten kouristumisen</li>
  <li>yli 30 mA virta voi olla hengenvaarallinen</li>
</ul>

<p><strong>Vikavirtasuoja</strong> on tärkeä suoja sähköiskuja vastaan. 
Se katkaisee sähkönsyötön nopeasti, jos laitteistossa havaitaan 
vuotovirta maahan. Yleisesti käytetty 30 mA vikavirtasuoja toimii 
riittävän nopeasti rajoittaakseen ihmiskehon läpi kulkevan virran 
vaikutusaikaa ja pienentääkseen vakavan sähköiskun riskiä.</p>

<p>Sähkötöissä turvallisuuden kannalta tärkeintä on kuitenkin 
välttää jännitteisiin osiin koskettamista ja noudattaa aina 
turvallisia työmenetelmiä.</p>

<img src="assets/images/sahkon_vaarat_ja_suojautuminen.png" 
         style="width:100%; max-width:700px; margin:20px 0; border-radius:8px;">
      
      
      `,
    },
    {

id: "05",
      title: "5. Perussuojausmenetelmät",
      audioSrc: "assets/audio/05.mp3",
      contentHtml: `

      <p><strong>Perussuojausmenetelmien tarkoitus</strong> on estää jännitteisten osien koskettaminen normaalissa käyttötilanteessa. 
Perussuojaus ei yksin riitä sähköiskulta suojautumiseen, vaan sen lisäksi tarvitaan myös vikasuojauksen toteuttaminen.</p>

<p><strong>Jännitteisten osien peruseristys</strong> tarkoittaa sitä, että jännitteiset osat peitetään kokonaan eristyksellä, 
joka voidaan poistaa vain rikkomalla. Eristyksen tehtävänä on estää tahaton kosketus jännitteisiin osiin.</p>

<p><strong>Suojukset ja kotelointi</strong> ovat toinen tärkeä perussuojausmenetelmä. 
Jännitteiset osat on sijoitettava kotelon tai suojuksen taakse siten, että suojaus on vähintään 
kotelointiluokan <strong>IP2X tai IPXXB</strong> mukainen. Helposti kosketeltavilla yläpinnoilla vaaditaan yleensä 
vähintään <strong>IP4X tai IPXXD</strong> suojaus. Vaatimus ei koske laitestandardien mukaisia laitteita, 
joille on annettu erilaiset vaatimukset</p>

<ul>
  <li>suojusten ja koteloiden tulee olla lujasti kiinnitettyjä ja riittävän kestäviä</li>
  <li>suojuksia tai koteloita saa avata yleensä vain avaimella tai työkalulla</li>
  <li>jos suojan poistaminen on tarpeen, jännitteiset osat on tehtävä turvallisiksi ennen pääsyä niiden luo</li>
</ul>

<p>Jos kotelon sisällä voi esiintyä vaarallisia sähkövarauksia, kuten kondensaattoreissa, asiasta on 
varoittava selkeästi esimerkiksi varoituskilvellä.</p>

<p><strong>Muista:</strong> perussuojauksen tavoitteena on estää koskettaminen, mutta turvallinen sähkölaitteisto edellyttää 
aina myös muuta suojausta, kuten vikasuojauksen toteuttamista.</p>

<p><strong>Tarkennuksena:</strong> Alla olevan kuvan MK-tyyppisen johdon eriste on peruseriste. Sellaisenaan se ei saa olla maallikon kosketeltavissa paitsi
jos kyse on esimerkiksi pienoisjännitteestä. Verkkojännitteillä oltava aina myös joku vikasuojaus. Esimerkiksi MMJ-kaapeli joka kaksoiseristetty 
(useita verkkojännitteen kestäviä eristekerroksia päällekkäin).</p>

<img src="assets/images/mk.png" 
         style="width:100%; max-width:700px; margin:20px 0; border-radius:8px;">

          `,
    },
    {


      id: "06",
      title: "6. Vikasuojaus",
      audioSrc: "assets/audio/06.mp3",
      contentHtml: `

      <div style="margin:20px 0; padding:16px; background:#f8fbff; border:1px solid #d9e2f0; border-radius:10px;">
  <p style="margin:0; font-size:18px; font-weight:bold;">Vikasuojaus osana sähköiskulta suojautumista</p>
  <p style="margin:10px 0 0 0;">
    Sähköiskulta suojautuminen edellyttää yleensä sekä <strong>perussuojausta</strong> että <strong>vikasuojausta</strong>.
    Perussuojaus estää jännitteisten osien koskettamisen normaalitilanteessa, ja vikasuojaus suojaa tilanteessa,
    jossa laitteistoon tulee vika.
  </p>
</div>

<p><strong>Tärkeimmät vikasuojaukseen liittyvät suojausmenetelmät ovat:</strong></p>

<div style="margin:20px 0; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:16px; line-height:1.5; background:#fff; border:1px solid #d9e2f0; border-radius:10px; overflow:hidden;">
    <thead>
      <tr style="background:#1d4ed8; color:#fff;">
        <th style="padding:12px; width:80px;">#</th>
        <th style="padding:12px; text-align:left;">Suojausmenetelmä</th>
        <th style="padding:12px; text-align:left;">Keskeinen sisältö</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">1</td>
        <td style="padding:12px;"><strong>Syötön automaattinen poiskytkentä</strong></td>
        <td style="padding:12px;">
          Yleisin suojausmenetelmä. Perussuojaus toteutetaan eristyksellä tai koteloinnilla, ja vikasuojaus
          toteutetaan suojamaadoituksella, potentiaalintasauksella ja automaattisella poiskytkennällä.
          Vikavirtasuojaa käytetään usein lisäsuojauksena.
        </td>
      </tr>

      <tr>
        <td style="padding:12px; font-weight:bold;">2</td>
        <td style="padding:12px;"><strong>Kaksoiseristys tai vahvistettu eristys</strong></td>
        <td style="padding:12px;">
          Suojaus perustuu siihen, että laitteessa on joko kaksinkertainen eristys tai vahvistettu eristys.
          Tällöin vaarallinen jännite ei pääse laitteen kosketeltaviin osiin yksittäisessä vikatilanteessa.
        </td>
      </tr>

      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">3</td>
        <td style="padding:12px;"><strong>Sähköinen erotus</strong></td>
        <td style="padding:12px;">
          Virtapiiri erotetaan muista piireistä ja maasta siten, että vikavirran kulkureitti estyy.
          Menetelmää käytetään yleensä yhden laitteen syöttämiseen erotetusta, maadoittamattomasta lähteestä.
        </td>
      </tr>

      <tr>
        <td style="padding:12px; font-weight:bold;">4</td>
        <td style="padding:12px;"><strong>Pienoisjännite (SELV ja PELV)</strong></td>
        <td style="padding:12px;">
          Suojaus perustuu turvallisen alhaiseen jännitteeseen. SELV-järjestelmä on erotettu maasta,
          kun taas PELV-järjestelmä voidaan maadoittaa. Pienoisjännite pienentää sähköiskun vaaraa
          merkittävästi.
        </td>
      </tr>

      <tr style="background:#fffbea;">
        <td style="padding:12px; font-weight:bold;">5</td>
        <td style="padding:12px;"><strong>Lisäsuojaus</strong></td>
        <td style="padding:12px;">
          Lisäsuojauksena käytetään esimerkiksi enintään 30 mA vikavirtasuojaa tai suojaavaa
          lisäpotentiaalintasausta. Lisäsuojaus ei korvaa varsinaista suojausmenetelmää, vaan täydentää sitä.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>Syötön automaattinen poiskytkentä</strong> on käytännössä yleisin suojausmenetelmä. Siinä
jännitteelle alttiit osat suojamaadoitetaan, ja vian sattuessa suojalaite katkaisee syötön riittävän nopeasti.
Toteutuksessa käytetään esimerkiksi ylivirtasuojia tai vikavirtasuojia järjestelmästä riippuen.</p>

<p><strong>TN-, TT- ja IT-järjestelmät</strong> eroavat toisistaan maadoituksen ja vikasuojauksen toteutustavan osalta.
Näissä järjestelmissä suojaus perustuu siihen, että vikatilanne havaitaan ja vaarallinen kosketusjännite
poistuu riittävän nopeasti.</p>

<div style="margin:20px 0; padding:16px; background:#fff4f4; border:1px solid #f3b3b3; border-radius:10px;">
  <p style="margin:0; font-weight:bold; color:#b91c1c;">Muista</p>
  <p style="margin:10px 0 0 0;">
    Vikavirtasuoja on tärkeä lisäsuoja, mutta sitä ei saa käyttää ainoana suojausmenetelmänä.
    Turvallinen sähköasennus edellyttää aina valitun suojausmenetelmän mukaista perussuojausta ja vikasuojausta yhdessä.
  </p>
</div>

          `,
    },
    {

      
      id: "07",
      title: "7. Turvalliset työmenetelmät ja menettelyt",
      audioSrc: "assets/audio/07.mp3",
      contentHtml: `

      <p><strong>Turvalliset työmenetelmät</strong> ovat sähkötöiden keskeinen osa riskien hallintaa. 
Työ on aina suunniteltava etukäteen ja siinä on noudatettava sovittuja turvallisia menettelytapoja.</p>

<p>Ennen työn aloittamista on varmistettava, että työntekijät tuntevat työn riskit, 
työmenetelmän sekä tarvittavat suojaustoimenpiteet. Työnaikaisen sähköturvallisuuden 
valvojan (STV) tehtävänä on varmistaa, että ohjeet on ymmärretty ja että työtä 
tehdään turvallisesti koko työn ajan.</p>

<ul>
  <li>työ suunnitellaan ja riskit arvioidaan ennen työn aloittamista</li>
  <li>työhön valitaan turvallinen työmenetelmä</li>
  <li>työalue rajataan ja tarvittavat varoitusmerkinnät asetetaan</li>
  <li>käytetään asianmukaisia työvälineitä ja henkilönsuojaimia</li>
</ul>

<p>Sähkötöissä käytettävät työmenetelmät voidaan jakaa kolmeen pääryhmään:</p>

<ul>
  <li>työskentely jännitteettömänä</li>
  <li>jännitetyö (vaatii oman koulutuksen)</li>
  <li>työskentely jännitetyöalueen ulkopuolella mutta kuitenkin lähialueella (lähityö)</li>
</ul>

<div style="margin:24px 0;">
  <h3 style="margin:0 0 12px 0; font-size:20px; line-height:1.3;">
    Taulukko Y.1 Suomessa noudatettavat jännitetyöalueen ulkorajan mitat
  </h3>

  <div style="overflow-x:auto; -webkit-overflow-scrolling:touch; border:1px solid #d9d9d9; border-radius:10px;">
    <table style="border-collapse:collapse; min-width:720px; width:100%; background:#fff; font-size:15px;">
      
      <thead>
        <tr style="background:#f3f6fa;">
          <th style="border:1px solid #d9d9d9; padding:12px; text-align:left;">
            Nimellisjännite U<sub>N</sub><br><span style="font-weight:normal;">kV</span>
          </th>
          
          <th style="border:1px solid #d9d9d9; padding:12px;">
            Jännitetyöalueen ulkorajan mitta D<sub>L1</sub><br>
            <span style="font-weight:normal;">m</span>
          </th>
          
          <th style="border:1px solid #d9d9d9; padding:12px;">
            Jännitetyöalueen ulkorajan mitta ilmajohtolilla¹ D<sub>L2</sub><br>
            <span style="font-weight:normal;">m</span>
          </th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td style="border:1px solid #d9d9d9; padding:10px;">≤ 1</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">Ei kosketusta</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">0,5</td>
        </tr>

        <tr>
          <td style="border:1px solid #d9d9d9; padding:10px;">3</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">0,22</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">1,5 (1,0)</td>
        </tr>

        <tr>
          <td style="border:1px solid #d9d9d9; padding:10px;">6</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">0,25</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">1,5 (1,0)</td>
        </tr>

        <tr>
          <td style="border:1px solid #d9d9d9; padding:10px;">10</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">0,35</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">1,5 (1,0)</td>
        </tr>

        <tr>
          <td style="border:1px solid #d9d9d9; padding:10px;">20</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">0,40</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">1,5 (1,0)</td>
        </tr>

        <tr>
          <td style="border:1px solid #d9d9d9; padding:10px;">30</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">0,56</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">1,5 (1,0)</td>
        </tr>

        <tr>
          <td style="border:1px solid #d9d9d9; padding:10px;">45</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">0,63</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">1,5 (1,0)</td>
        </tr>

        <tr>
          <td style="border:1px solid #d9d9d9; padding:10px;">110</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">1,0</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">1,5 (1,2)</td>
        </tr>

        <tr>
          <td style="border:1px solid #d9d9d9; padding:10px;">220</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">1,6</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">2,0</td>
        </tr>

        <tr>
          <td style="border:1px solid #d9d9d9; padding:10px;">400</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">2,5</td>
          <td style="border:1px solid #d9d9d9; padding:10px;">3,5</td>
        </tr>

      </tbody>

    </table>
  </div>

  <p style="margin-top:10px; font-size:14px; color:#666;">
    ¹ Ilmajohdoilla sulussa oleva arvo tarkoittaa etäisyyttä suoraan jännitteisen osan alapuolella.
  </p>
</div>

<div style="margin:24px 0;">
  <h3 style="margin:0 0 12px 0; font-size:20px; line-height:1.3;">
    Taulukko Z.1 Lähialueen ulkomitan D<sub>V</sub> arvot eri jännitteillä muilla kuin ilmajohtojilla
  </h3>

  <div style="overflow-x:auto; -webkit-overflow-scrolling:touch; border:1px solid #d9d9d9; border-radius:10px;">
    <table style="border-collapse:collapse; min-width:780px; width:100%; background:#fff; font-size:15px; line-height:1.4;">
      <thead>
        <tr style="background:#f3f6fa;">
          <th style="border:1px solid #d9d9d9; padding:12px; text-align:left; min-width:210px;">
            Nimellisjännite U<sub>N</sub><br><span style="font-weight:normal;">kV</span>
          </th>
          <th style="border:1px solid #d9d9d9; padding:12px;">≤ 1</th>
          <th style="border:1px solid #d9d9d9; padding:12px;">3</th>
          <th style="border:1px solid #d9d9d9; padding:12px;">6</th>
          <th style="border:1px solid #d9d9d9; padding:12px;">10</th>
          <th style="border:1px solid #d9d9d9; padding:12px;">20</th>
          <th style="border:1px solid #d9d9d9; padding:12px;">30</th>
          <th style="border:1px solid #d9d9d9; padding:12px;">45</th>
          <th style="border:1px solid #d9d9d9; padding:12px;">110</th>
          <th style="border:1px solid #d9d9d9; padding:12px;">220</th>
          <th style="border:1px solid #d9d9d9; padding:12px;">400</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border:1px solid #d9d9d9; padding:12px; text-align:left; background:#fafafa;">
            <strong>Lähialueen ulkomitta D<sub>V</sub></strong><br><span style="font-weight:normal;">m</span>
          </td>
          <td style="border:1px solid #d9d9d9; padding:12px; text-align:center;">0,5</td>
          <td style="border:1px solid #d9d9d9; padding:12px; text-align:center;">1,2</td>
          <td style="border:1px solid #d9d9d9; padding:12px; text-align:center;">1,2</td>
          <td style="border:1px solid #d9d9d9; padding:12px; text-align:center;">1,4</td>
          <td style="border:1px solid #d9d9d9; padding:12px; text-align:center;">1,4</td>
          <td style="border:1px solid #d9d9d9; padding:12px; text-align:center;">1,6</td>
          <td style="border:1px solid #d9d9d9; padding:12px; text-align:center;">1,6</td>
          <td style="border:1px solid #d9d9d9; padding:12px; text-align:center;">2,0</td>
          <td style="border:1px solid #d9d9d9; padding:12px; text-align:center;">3,6</td>
          <td style="border:1px solid #d9d9d9; padding:12px; text-align:center;">4,5</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p style="margin:10px 0 0 0; font-size:14px; color:#666;">
    Puhelimella taulukkoa voi vierittää sivusuunnassa.
  </p>
</div>

<p>Turvallisin työmenetelmä on aina <strong>työskentely jännitteettömänä</strong>. 
Muut työmenetelmät edellyttävät erityisiä suojaustoimenpiteitä, 
koulutusta sekä tarkkaa riskien arviointia.</p>

<p>Turvallinen työskentely perustuu siihen, että sovittuja työmenetelmiä 
noudatetaan ja että mahdollisiin vaaratilanteisiin reagoidaan välittömästi.</p>

      
      `,
    },
    {
      id: "08",
      title: "8. Jännitteettömäksi tekeminen ja varmistaminen",
      audioSrc: "assets/audio/08.mp3",
      contentHtml: `

      <p><strong>Työskentely jännitteettömänä</strong> on sähkötöiden turvallisin työmenetelmä. 
Ennen työn aloittamista on varmistettava oikea työkohde, selvitettävä laitteiston rakenne, 
arvioitava vaaratekijät ja tehtävä tarvittavat sähköturvallisuustoimenpiteet.</p>

<p>Jännitteettömäksi tekeminen perustuu viiteen turvallisuussääntöön, jotka tehdään yleensä tässä järjestyksessä:</p>

<div style="margin:20px 0; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:16px; line-height:1.5; background:#fff; border:1px solid #d9e2f0; border-radius:10px; overflow:hidden;">
    <thead>
      <tr style="background:#1d4ed8; color:#fff;">
        <th style="padding:12px; text-align:left; width:60px;">#</th>
        <th style="padding:12px; text-align:left;">Viisi turvallisuussääntöä</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; border-top:1px solid #d9e2f0; font-weight:bold;">1</td>
        <td style="padding:12px; border-top:1px solid #d9e2f0;">Täydellinen erottaminen</td>
      </tr>
      <tr>
        <td style="padding:12px; border-top:1px solid #d9e2f0; font-weight:bold;">2</td>
        <td style="padding:12px; border-top:1px solid #d9e2f0;">Jännitteen kytkemisen estäminen</td>
      </tr>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; border-top:1px solid #d9e2f0; font-weight:bold;">3</td>
        <td style="padding:12px; border-top:1px solid #d9e2f0;">Jännitteettömyyden toteaminen</td>
      </tr>
      <tr>
        <td style="padding:12px; border-top:1px solid #d9e2f0; font-weight:bold;">4</td>
        <td style="padding:12px; border-top:1px solid #d9e2f0;">Työmaadoittaminen</td>
      </tr>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; border-top:1px solid #d9e2f0; font-weight:bold;">5</td>
        <td style="padding:12px; border-top:1px solid #d9e2f0;">Suojaus lähellä olevilta jännitteisiltä osilta</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Työn aloittamiseen tarvitaan käyttöä valvovan henkilön (KVH) valtuutus, ja työntekijöille 
aloitusluvan antaa työnaikaisen sähköturvallisuuden valvoja (STV) vasta sen jälkeen, 
kun turvallisuustoimenpiteet on tehty.</p>

<p>Jännitteettömyys on aina todettava tarkoitukseen soveltuvalla jännitteenkoettimella. 
Tarvittaessa laitteisto myös työmaadoitetaan, jotta se ei voi tulla vaarallisesti jännitteiseksi 
uudelleen esimerkiksi virhetoiminnan, takasyötön tai muun syyn vuoksi.</p>

<p>Kun työ on valmis, työkalut, suojausvälineet, maadoitukset, lukitukset ja varoituskilvet 
poistetaan hallitusti. Vasta tämän jälkeen laitteisto voidaan kytkeä takaisin jännitteiseksi.</p>
      
      
      `,
    },
    {
      id: "09",
      title: "9. Työskentely jännitteen läheisyydessä",
      audioSrc: "assets/audio/09.mp3",
      contentHtml: `

      <p><strong>Työskentely jännitteen läheisyydessä</strong> edellyttää aina ennakkosuunnittelua, 
      työalueen määrittelyä ja tarvittaessa alueen rajaamista esimerkiksi suojaamalla jännitteiset osat eristematolla. Jos koko laitteistoa ei ole tehty jännitteettömäksi, 
      on jännitteiset ja jännitteettömät osat merkittävä selkeästi jotta ei tule virhetulkintoja.</p>

<p>Työssä on noudatettava riittäviä vähimmäisetäisyyksiä jännitteisiin osiin. Tarvittaessa käytetään suojalevyjä, 
    työskentelysuojia tai muita keinoja, joilla estetään tahaton kosketus ja ulottuminen jännitetyöalueelle.</p>

<div style="margin:20px 0; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:16px; line-height:1.5; background:#fff; border:1px solid #d9e2f0; border-radius:10px; overflow:hidden;">
    
    <thead>
      <tr style="background:#1d4ed8; color:#fff;">
        <th style="padding:12px; width:60px; text-align:left;">#</th>
        <th style="padding:12px; text-align:left;">Turvallisen työskentelyn periaatteet</th>
      </tr>
    </thead>

    <tbody>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; border-top:1px solid #d9e2f0; font-weight:bold;">1</td>
        <td style="padding:12px; border-top:1px solid #d9e2f0;">
          Työalue ja turvalliset etäisyydet määritellään ennen työn aloittamista.
        </td>
      </tr>

      <tr>
        <td style="padding:12px; border-top:1px solid #d9e2f0; font-weight:bold;">2</td>
        <td style="padding:12px; border-top:1px solid #d9e2f0;">
          Jännitteiset osat suojataan tai merkitään selvästi.
        </td>
      </tr>

      <tr style="background:#f8fbff;">
        <td style="padding:12px; border-top:1px solid #d9e2f0; font-weight:bold;">3</td>
        <td style="padding:12px; border-top:1px solid #d9e2f0;">
          Pitkien työvälineiden, koneiden ja nostimien käyttö vaatii erityistä varovaisuutta.
        </td>
      </tr>

      <tr style="background:#fff4e5;">
        <td style="padding:12px; border-top:1px solid #d9e2f0; font-weight:bold;">!</td>
        <td style="padding:12px; border-top:1px solid #d9e2f0;">
          <strong>Huom:</strong> aina kun mahdollista on erittäin suositeltavaa tehdä työskentelykohde kokonaan jännitteettömäksi.
        </td>
      </tr>

    </tbody>
  </table>
</div>

<p>Ilmajohtojen läheisyydessä on varmistettava, ettei mikään koneen, kuorman tai työvälineen osa ulotu liian lähelle jännitteisiä johtimia. Myös sähkötiloissa tehtävissä rakennus-, siivous- ja huoltotöissä on varmistettava riittävä opastus, valvonta ja turvalliset työmenetelmät.</p>
      
    <div style="max-width:900px; margin:24px auto; background:#fff; border:2px solid #333; padding:16px; box-sizing:border-box;">
  <svg viewBox="0 0 900 560" style="width:100%; height:auto; display:block;" xmlns="http://www.w3.org/2000/svg">
    
    <!-- Outer circle -->
    <circle cx="280" cy="220" r="185" fill="none" stroke="#222" stroke-width="3"/>

    <!-- Near area -->
    <circle cx="280" cy="220" r="95" fill="#bfc3c7" stroke="#222" stroke-width="3"/>

    <!-- Live part -->
    <circle cx="280" cy="220" r="22" fill="#222"/>

    <!-- DL arrow -->
    <line x1="280" y1="220" x2="280" y2="125" stroke="#222" stroke-width="3"/>
    <polygon points="280,118 275,128 285,128" fill="#222"/>
    <polygon points="280,227 275,217 285,217" fill="#222"/>
    <text x="300" y="165" font-size="34" font-family="Georgia, serif" font-style="italic" fill="#222">
      D<tspan dy="8" font-size="22">L</tspan>
    </text>

    <!-- DV arrow: from center to exact outer-circle boundary -->
    <line x1="280" y1="220" x2="410.8" y2="89.2" stroke="#222" stroke-width="3"/>
    <polygon points="410.8,89.2 399.8,92.5 407.5,100.2" fill="#222"/>
    <polygon points="280,220 290,216 284,226" fill="#222"/>
    <text x="355" y="120" font-size="34" font-family="Georgia, serif" font-style="italic" fill="#222">
      D<tspan dy="8" font-size="22">V</tspan>
    </text>

    <!-- Label pointers -->
    <!-- Paljas jännitteinen osa -> center black dot -->
    <line x1="280" y1="220" x2="575" y2="88" stroke="#222" stroke-width="3"/>
    <circle cx="280" cy="220" r="4" fill="#222"/>
    <text x="590" y="95" font-size="32" font-family="Arial, sans-serif" fill="#222">
      Paljas jännitteinen osa
    </text>

    <!-- Jännitetyöalue -> grey inner area -->
    <line x1="330" y1="215" x2="570" y2="160" stroke="#222" stroke-width="3"/>
    <circle cx="330" cy="215" r="4" fill="#222"/>
    <text x="585" y="168" font-size="32" font-family="Arial, sans-serif" fill="#222">
      Jännitetyöalue
    </text>

    <!-- Lähialue -> white ring -->
    <line x1="445" y1="220" x2="575" y2="220" stroke="#222" stroke-width="3"/>
    <circle cx="445" cy="220" r="4" fill="#222"/>
    <text x="590" y="227" font-size="32" font-family="Arial, sans-serif" fill="#222">
      Lähialue
    </text>

    <!-- Outside near area -->
    <line x1="530" y1="360" x2="575" y2="375" stroke="#222" stroke-width="3"/>
    <circle cx="530" cy="360" r="4" fill="#222"/>
    <text x="585" y="388" font-size="32" font-family="Arial, sans-serif" fill="#222">
      Lähialueen ulkopuolella
    </text>

    <!-- Bottom legend box -->
    <rect x="15" y="500" width="850" height="70" fill="none" stroke="#222" stroke-width="2"/>

    <text x="45" y="535" font-size="30" font-family="Georgia, serif" font-style="italic" fill="#222">
      D<tspan dy="8" font-size="20">L</tspan>
    </text>
    <text x="85" y="535" font-size="26" font-family="Arial, sans-serif" fill="#222">
      Etäisyys, joka määrittelee jännitetyöalueen ulkoreunan
    </text>

    <text x="45" y="562" font-size="30" font-family="Georgia, serif" font-style="italic" fill="#222">
      D<tspan dy="8" font-size="20">V</tspan>
    </text>
    <text x="85" y="562" font-size="26" font-family="Arial, sans-serif" fill="#222">
      Etäisyys, joka määrittelee lähialueen ulkoreunan
    </text>
  </svg>
</div>
      
      `,
    },
    {
      id: "10",
      title: "10. Onnettomuustilanteet ja ensiapu",
      audioSrc: "assets/audio/10.mp3",
      contentHtml: `

      <div style="margin:20px 0; padding:16px; background:#fff4f4; border:1px solid #f3b3b3; border-radius:10px;">
  <p style="margin:0; color:#b91c1c; font-weight:bold; font-size:18px;">
    ⚠️ Sähkötapaturma on aina vakava hätätilanne
  </p>
  <p style="margin:10px 0 0 0;">
    Sähköisku tai valokaari voi aiheuttaa hengenvaaran, palovammoja, sydämen rytmihäiriöitä tai
    tajuttomuuden. Toiminnan on oltava nopeaa, mutta samalla turvallista.
  </p>
</div>

<p><strong>Toimi sähkötapaturmassa tässä järjestyksessä:</strong></p>

<div style="margin:20px 0; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:16px; line-height:1.5; background:#fff; border:1px solid #d9e2f0; border-radius:10px; overflow:hidden;">
    <thead>
      <tr style="background:#1d4ed8; color:#fff;">
        <th style="padding:12px; width:60px;">#</th>
        <th style="padding:12px; text-align:left;">Sähkötapaturmien ensiapu</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">1</td>
        <td style="padding:12px;">
          <strong>Ensiapukoulutus kuuluu sähköalan töihin.</strong> Sähkötöihin osallistuville henkilöille on annettava ensiapukoulutus, joka sisältää vähintään palovammojen, ruhje- ja viiltohaavojen ensiavun sekä painelu- ja puhalluselvytyksen harjoittelun. Ensiapuvalmiuksia on pidettävä yllä jatkuvasti.
        </td>
      </tr>
      <tr>
        <td style="padding:12px; font-weight:bold;">2</td>
        <td style="padding:12px;">
          <strong>Ensiapuohjeiden tulee olla helposti saatavilla.</strong> Ensiapuohjetauluja suositellaan sijoitettavaksi sähkölaitekorjaamoihin, laboratorioihin, kojeistotiloihin ja henkilökunnan tiloihin. Sähkötapaturmien ensiapuohjeet löytyvät myös Sähkötietokortista ST 13.05.
        </td>
      </tr>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">3</td>
        <td style="padding:12px;">
          <strong>Tee nopea tilannearvio ja poista vaara.</strong> Katkaise virta turvallisesti kytkimellä, pistotulpalla tai muulla tavalla. Ellei virtaa saada heti poikki, irrota loukkaantunut eristävällä välineellä. Älä koskaan käytä kosteaa tai metallista esinettä. Suurjännitetapaturmassa pelastustoimet voi aloittaa vasta, kun sähköalan ammattihenkilö on katkaissut virran.
        </td>
      </tr>
      <tr>
        <td style="padding:12px; font-weight:bold;">4</td>
        <td style="padding:12px;">
          <strong>Tarkista tila ja hälytä apua numerosta 112.</strong> Selvitä, onko loukkaantunut hereillä ja hengittääkö hän normaalisti. Jos henkilö ei reagoi, hälytä apua heti ja noudata hätäkeskuksen ohjeita.
        </td>
      </tr>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">5</td>
        <td style="padding:12px;">
          <strong>Aloita ensiapu tarvittaessa.</strong> Jos henkilö hengittää normaalisti, käännä hänet kylkiasentoon ja seuraa hengitystä. Jos hengitys ei ole normaalia, aloita painelu-puhalluselvytys rytmillä <strong>30 painelua : 2 puhallusta</strong> ja jatka, kunnes ammattiapu saapuu, hengitys palautuu tai et enää jaksa elvyttää.
        </td>
      </tr>
      <tr>
        <td style="padding:12px; font-weight:bold;">6</td>
        <td style="padding:12px;">
          <strong>Huomioi sokki.</strong> Sokkivaikutus voi ilmetä sähkötapaturmassa nopeasti. Aseta autettava makuulle, nosta jalat koholle, pidä hänet lämpimänä ja rauhoita tilannetta. Älä jätä sokkipotilasta yksin, ellei se ole välttämätöntä avun hankkimiseksi.
        </td>
      </tr>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">7</td>
        <td style="padding:12px;">
          <strong>Palovammat ja valokaaren vaikutukset on otettava vakavasti.</strong> Sähkötapaturmassa voi syntyä sekä näkyviä että sisäisiä palovammoja. Palovammat hoidetaan vasta elintoimintojen turvaamisen jälkeen. Valokaari voi myös vahingoittaa silmiä; tällöin kylmä kääre voi helpottaa kipua ja tarvittaessa on hakeuduttava jatkohoitoon.
        </td>
      </tr>
      <tr>
        <td style="padding:12px; font-weight:bold;">8</td>
        <td style="padding:12px;">
          <strong>Ensiapu perustuu yhteistyöhön.</strong> Hätäkeskuksen, ensiapua antavan henkilön ja ammattiauttajien yhteistyö on tärkeää. Ensiaputaitoja, erityisesti elvytystä, on harjoiteltava säännöllisesti.
        </td>
      </tr>
    </tbody>
  </table>
</div>


<div style="margin:20px 0; padding:16px; background:#f8fbff; border:1px solid #d9e2f0; border-radius:10px;">
  <p style="margin:0 0 10px 0; font-weight:bold;">🫀 Elvytyksen perusohje</p>
  <p style="margin:0;">
    Jos henkilö ei hengitä normaalisti, aloita paineluelvytys. Paina rintalastan keskeltä
    reippaasti ja tasaisesti. Jos osaat puhalluselvytyksen, käytä rytmiä <strong>30 painelua : 2 puhallusta</strong>.
    Jatka, kunnes ammattiapu saapuu tai henkilö alkaa hengittää normaalisti.
  </p>
</div>

<div style="margin:20px 0; padding:16px; background:#fffbea; border:1px solid #f5d76e; border-radius:10px;">
  <p style="margin:0; font-weight:bold;">📞 Muista 112-hätäpuhelussa</p>
  <ul style="margin:10px 0 0 18px; padding:0;">
    <li>kerro mitä on tapahtunut</li>
    <li>ilmoita tarkka osoite tai sijainti</li>
    <li>vastaa kysymyksiin rauhallisesti</li>
    <li>noudata annettuja ohjeita</li>
    <li>älä sulje puhelua ennen lupaa</li>
  </ul>
</div>

<p><strong>Tärkeää:</strong> sähköiskun saanut henkilö tulee aina ohjata lääkärin arvioon,
vaikka oireet näyttäisivät aluksi lieviltä. Sähköisku voi aiheuttaa myös viiveellä ilmeneviä vaurioita.</p>
      
      
      `,
    },
    {
      id: "11",
      title: "11. Kertaus ja keskeiset muistilistat",
      audioSrc: "assets/audio/11.mp3",
      contentHtml: `

      <div style="margin:20px 0; padding:16px; background:#f8fbff; border:1px solid #d9e2f0; border-radius:10px;">
  <p style="margin:0; font-size:18px; font-weight:bold;">Kertaus: tärkeimmät asiat sähkötyöturvallisuudesta</p>
  <p style="margin:10px 0 0 0;">
    Sähkötyöturvallisuuden perustana ovat oikeat työmenetelmät, huolellinen suunnittelu,
    riskien arviointi ja selkeä vastuunjako. Turvallisuus varmistetaan aina ennen työn aloittamista
    ja koko työn ajan.
  </p>
</div>

<div style="margin:20px 0; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:16px; line-height:1.5; background:#fff; border:1px solid #d9e2f0; border-radius:10px; overflow:hidden;">
    <thead>
      <tr style="background:#1d4ed8; color:#fff;">
        <th style="padding:12px; width:70px;">Kohta</th>
        <th style="padding:12px; text-align:left;">Keskeinen muistettava asia</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">1</td>
        <td style="padding:12px;">
          Kurssin tavoitteena on vahvistaa sähköturvallista työskentelyä ja varmistaa, että työssä
          noudatetaan turvallisia menettelyjä, ajantasaisia ohjeita ja standardin periaatteita.
        </td>
      </tr>
      <tr>
        <td style="padding:12px; font-weight:bold;">2</td>
        <td style="padding:12px;">
          Sähkötöissä jokaisella on oma roolinsa ja vastuunsa. Tärkeitä toimijoita ovat esimerkiksi
          sähkötöiden johtaja, käytön johtaja, työnaikaisen sähköturvallisuuden valvoja (STV),
          käyttöä valvova henkilö (KVH) sekä työntekijä.
        </td>
      </tr>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">3</td>
        <td style="padding:12px;">
          Ennen työn aloittamista työ suunnitellaan, riskit arvioidaan ja valitaan turvallinen työmenetelmä.
          Työlle on oltava tarvittavat valtuutukset ja suojaustoimenpiteet.
        </td>
      </tr>
      <tr>
        <td style="padding:12px; font-weight:bold;">4</td>
        <td style="padding:12px;">
          Sähkö on vaarallista. Virran vaikutus ihmiskehoon riippuu virran suuruudesta, kulkureitistä,
          vaikutusajasta ja ihon impedanssista. Vikavirtasuoja pienentää vakavan sähköiskun riskiä,
          mutta ei korvaa turvallisia työmenetelmiä.
        </td>
      </tr>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">5</td>
        <td style="padding:12px;">
          Turvallisin työmenetelmä on aina työskentely jännitteettömänä. Työalue rajataan,
          riskit tunnistetaan ja käytetään oikeita työvälineitä sekä henkilönsuojaimia.
        </td>
      </tr>
      <tr>
        <td style="padding:12px; font-weight:bold;">6</td>
        <td style="padding:12px;">
          Jännitteettömäksi tekemisessä noudatetaan viittä turvallisuussääntöä:
          täydellinen erottaminen, jännitteen kytkemisen estäminen, jännitteettömyyden toteaminen,
          työmaadoittaminen ja suojaus lähellä olevilta jännitteisiltä osilta.
        </td>
      </tr>
      <tr style="background:#f8fbff;">
        <td style="padding:12px; font-weight:bold;">7</td>
        <td style="padding:12px;">
          Työskentely jännitteen läheisyydessä vaatii erityistä varovaisuutta. Turvaetäisyydet,
          merkinnät, suojaukset ja työalueen rajaus on määriteltävä etukäteen.
          Aina kun mahdollista, työkohde tehdään kokonaan jännitteettömäksi.
        </td>
      </tr>
      <tr>
        <td style="padding:12px; font-weight:bold;">8</td>
        <td style="padding:12px;">
          Sähkötapaturmassa toimitaan nopeasti mutta turvallisesti: varmista oma turvallisuutesi,
          poista jännite, hälytä 112, tarkista hengitys ja anna ensiapua tai aloita elvytys tarvittaessa.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div style="margin:20px 0; padding:16px; background:#fffbea; border:1px solid #f5d76e; border-radius:10px;">
  <p style="margin:0; font-weight:bold;">Muistilista ennen työn aloittamista</p>
  <ul style="margin:10px 0 0 18px; padding:0; line-height:1.6;">
    <li>varmista oikea työkohde</li>
    <li>arvioi vaarat ja riskit</li>
    <li>valitse turvallinen työmenetelmä</li>
    <li>käytä oikeita työvälineitä ja suojaimia</li>
    <li>varmista valtuutukset ja vastuut</li>
    <li>keskeytä työ heti, jos turvallisuudesta syntyy epäilys</li>
  </ul>
</div>

<div style="margin:20px 0; padding:16px; background:#fff4f4; border:1px solid #f3b3b3; border-radius:10px;">
  <p style="margin:0; font-weight:bold; color:#b91c1c;">Tärkein periaate</p>
  <p style="margin:10px 0 0 0;">
    Sähkötyössä turvallisuus perustuu ennakointiin, oikeisiin menettelyihin ja siihen,
    että työtä ei jatketa, jos vaaratekijät eivät ole hallinnassa.
  </p>
</div>
      
      
      `,
    },
    {
      id: "12",
      title: "12. Kurssin päätös ja todistus",
      audioSrc: "assets/audio/10.mp3",
      contentHtml: `
        <div style="max-width:800px; margin:30px auto; font-family:Arial, sans-serif;">

  <div style="background:#f0f6ff; border-left:6px solid #1d4ed8; padding:25px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">

    <h2 style="margin-top:0; color:#1d4ed8;">Kurssin päätös</h2>

    <p style="font-size:16px; line-height:1.6;">
      <strong>Onneksi olkoon – olet suorittanut kurssin materiaaliosuuden!</strong>
    </p>

    <p style="font-size:16px; line-height:1.6;">
      Seuraavaksi suoritat vielä lyhyen <strong>tentin</strong>. Kun tentti on suoritettu hyväksytysti,
      avautuu <strong>kurssitodistuksen hakulomake</strong>.
    </p>

    <p style="font-size:16px; line-height:1.6;">
      Täytä lomakkeeseen omat tietosi huolellisesti ja varmista erityisesti, että 
      <strong>sähköpostiosoite on kirjoitettu oikein</strong>. Kurssitodistus lähetetään
      ilmoittamaasi sähköpostiosoitteeseen.
    </p>

    <p style="font-size:16px; line-height:1.6;">
      Mikäli todistukseen tulee virhe tai et saa todistusta, ole yhteydessä 
      <strong>Mirus Electrum Oy:n yhteystietoihin</strong>, niin mahdolliset virheet korjataan.
    </p>

    <div style="background:#ffffff; border:1px solid #d9e2f0; padding:15px; border-radius:6px; margin-top:20px;">
      <strong>Huomio:</strong> Tentti ja kurssitodistuksen hakulomake tehdään 
      <strong>Tally-lomakkeella</strong>. Linkki tenttiin löytyy seuraavalta sivulta.
    </div>

  </div>

</div>
        <p>Kun tämä audio on kuunneltu loppuun, avautuu nappi todistuslomakkeeseen.</p>
      `,
    },
  ],
};
