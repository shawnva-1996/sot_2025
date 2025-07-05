import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

mermaid.initialize({ startOnLoad: false });

let scale = 1;
const zoomStep = 1; // Each zoom click changes scale by 25%

const diagram = `
graph TD

%% Genesis Lineage from Adam to Joktan
classDef japheth fill:#e8dffb,stroke:#604
classDef ham fill:#ffebc8,stroke:#640
classDef shem fill:#d0eaff,stroke:#048

Adam --> Seth --> Enosh --> Kenan --> Mahalalel --> Jared --> Enoch --> Methuselah --> Lamech --> Noah

Noah --> Shem
Noah --> Ham
Noah --> Japheth

%% Japheth's line
Japheth --> Gomer --> Ashkenaz
Gomer --> Riphath
Gomer --> Togarmah
Japheth --> Magog
Japheth --> Madai
Japheth --> Javan --> Elishah
Javan --> Tarshish
Javan --> Kittites
Javan --> Rodanites
Japheth --> Tubal
Japheth --> Meshek
Japheth --> Tiras
class Japheth,Gomer,Ashkenaz,Riphath,Togarmah,Magog,Madai,Javan,Elishah,Tarshish,Kittites,Rodanites,Tubal,Meshek,Tiras japheth

%% Ham's line
Ham --> Cush --> Seba
Cush --> Havilah
Cush --> Sabtah
Cush --> Raamah --> Sheba
Raamah --> Dedan
Cush --> Sabteka
Cush --> Nimrod
Ham --> Egypt --> Ludites
Egypt --> Anamites
Egypt --> Lehabites
Egypt --> Naphtuhites
Egypt --> Pathrusites
Egypt --> Kasluhites --> Philistines
Egypt --> Caphtorites
Ham --> Put
Ham --> Canaan --> Sidon
Canaan --> Hittites
Canaan --> Jebusites
Canaan --> Amorites
Canaan --> Girgashites
Canaan --> Hivites
Canaan --> Arkites
Canaan --> Sinites
Canaan --> Arvadites
Canaan --> Zemarites
Canaan --> Hamathites
class Ham,Cush,Seba,Havilah,Sabtah,Raamah,Sheba,Dedan,Sabteka,Nimrod,Egypt,Ludites,Anamites,Lehabites,Naphtuhites,Pathrusites,Kasluhites,Philistines,Caphtorites,Put,Canaan,Sidon,Hittites,Jebusites,Amorites,Girgashites,Hivites,Arkites,Sinites,Arvadites,Zemarites,Hamathites ham

%% Shem's line
Shem --> Elam
Shem --> Ashur
Shem --> Arphaxad --> Shelah --> Eber --> Peleg --> Joktan
Shem --> Lud
Shem --> Aram --> Uz
Aram --> Hul
Aram --> Gether
Aram --> Meshek_Aram
Joktan --> Almodad
Joktan --> Sheleph
Joktan --> Hazarmaveth
Joktan --> Jerah
Joktan --> Hadoram
Joktan --> Uzal
Joktan --> Diklah
Joktan --> Obal
Joktan --> Abimael
Joktan --> Sheba_Joktan
Joktan --> Ophir
Joktan --> Havilah_Joktan
Joktan --> Jobab
class Shem,Elam,Ashur,Arphaxad,Shelah,Eber,Peleg,Joktan,Almodad,Sheleph,Hazarmaveth,Jerah,Hadoram,Uzal,Diklah,Obal,Abimael,Sheba_Joktan,Ophir,Havilah_Joktan,Jobab,Lud,Aram,Uz,Hul,Gether,Meshek_Aram shem
`;

mermaid.render('genesis-tree', diagram).then(({ svg }) => {
  const target = document.getElementById('family-tree-diagram');
  target.innerHTML = svg;
  setupZoomControls();
});

function setupZoomControls() {
  const svgEl = document.querySelector('#family-tree-diagram svg');
  if (!svgEl) return;

  document.getElementById('zoom-in').onclick = () => adjustZoom(svgEl, zoomStep);
  document.getElementById('zoom-out').onclick = () => adjustZoom(svgEl, -zoomStep);
  document.getElementById('zoom-reset').onclick = () => {
    scale = 1;
    svgEl.style.transform = `scale(${scale})`;
    svgEl.style.transformOrigin = 'top left';
  };
}

function adjustZoom(svg, delta) {
  scale = Math.max(0.2, Math.min(3, scale + delta));
  svg.style.transform = `scale(${scale})`;
  svg.style.transformOrigin = 'top left';
}