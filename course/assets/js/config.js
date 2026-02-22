// course/assets/js/config.js
// Muuta nämä omiksi:
const COURSE = {
  name: "Sähkötyöturvallisuuskurssi (SFS 6002) – kurssipohja",
  // Tally linkki todistuslomakkeelle (vaihda kun valmis)
  certificateFormUrl: "https://tally.so/r/XXXXX",
  // Jos haluat palata pääsivustolle kurssin jälkeen
  returnToSiteUrl: "/",
  // 10 lessonia (muokkaa otsikot + sisällöt + audio-polut)
  lessons: [
    {
      id: "01",
      title: "1. Kurssin tavoite ja rakenne",
      audioSrc: "assets/audio/01.mp3",
      contentHtml: `
        <p><strong>Täytä tähän oma sisältösi.</strong></p>
        <p>Esim. kurssin tavoite, kenelle suunnattu, miten suoritus etenee.</p>
        <ul>
          <li>Ohje: kuuntele audio loppuun avataksesi seuraavan sivun.</li>
          <li>Token-linkki on henkilökohtainen.</li>
        </ul>
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
