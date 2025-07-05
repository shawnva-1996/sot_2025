import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

mermaid.initialize({ startOnLoad: false });

let scale = 1;

const diagram = `
graph TD
  %% Pre-Flood Lineage
  Adam["Adam\\n(Lived 930 years)"] --> Seth["Seth\\nSon of Adam, lived 912 years"]
  Seth --> Enosh["Enosh\\nSon of Seth, lived 905 years"]
  Enosh --> Kenan["Kenan\\nSon of Enosh, lived 910 years"]
  Kenan --> Mahalalel["Mahalalel\\nSon of Kenan, lived 895 years"]
  Mahalalel --> Jared["Jared\\nSon of Mahalalel, lived 962 years"]
  Jared --> Enoch["Enoch\\nTaken by God"]
  Enoch --> Methuselah["Methuselah\\nLived 969 years"]
  Methuselah --> Lamech["Lamech\\nLived 777 years"]
  Lamech --> Noah["Noah\\nFather of Shem, Ham, Japheth"]

  %% Noah’s sons
  Noah --> Shem["Shem"]
  Noah --> Ham["Ham"]
  Noah --> Japheth["Japheth"]

  %% Japheth's Line
  Japheth --> Gomer
  Japheth --> Magog
  Japheth --> Madai
  Japheth --> Javan
  Japheth --> Tubal
  Japheth --> Meshek
  Japheth --> Tiras

  Gomer --> Ashkenaz
  Gomer --> Riphath
  Gomer --> Togarmah

  Javan --> Elishah
  Javan --> Tarshish
  Javan --> Kittites
  Javan --> Rodanites

  %% Ham's Line
  Ham --> Cush
  Ham --> Egypt
  Ham --> Put
  Ham --> Canaan

  Cush --> Seba
  Cush --> Havilah
  Cush --> Sabtah
  Cush --> Raamah
  Cush --> Sabteka
  Cush --> Nimrod["Nimrod\\nMighty hunter before the Lord"]

  Raamah --> Sheba
  Raamah --> Dedan

  Egypt --> Ludites
  Egypt --> Anamites
  Egypt --> Lehabites
  Egypt --> Naphtuhites
  Egypt --> Pathrusites
  Egypt --> Kasluhites
  Kasluhites --> Philistines
  Egypt --> Caphtorites

  Canaan --> Sidon
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

  %% Shem's Line
  Shem --> Elam
  Shem --> Ashur
  Shem --> Arphaxad
  Shem --> Lud
  Shem --> Aram

  Aram --> Uz
  Aram --> Hul
  Aram --> Gether
  Aram --> Meshek_Aram

  Arphaxad --> Shelah
  Shelah --> Eber
  Eber --> Peleg["Peleg\\nIn his time the earth was divided"]
  Eber --> Joktan

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
`;

mermaid.render('genesis-tree', diagram).then(({ svg }) => {
  const target = document.getElementById('family-tree-diagram');
  target.innerHTML = svg;
  setupZoomControls();
});

function setupZoomControls() {
  const svgEl = document.querySelector('#family-tree-diagram svg');
  if (!svgEl) return;

  document.getElementById('zoom-in').onclick = () => adjustZoom(svgEl, 0.1);
  document.getElementById('zoom-out').onclick = () => adjustZoom(svgEl, -0.1);
  document.getElementById('zoom-reset').onclick = () => {
    scale = 1;
    svgEl.style.transform = `scale(${scale})`;
    svgEl.style.transformOrigin = 'top left';
  };
}

function adjustZoom(svg, delta) {
  scale = Math.max(0.2, Math.min(3, scale + delta)); // clamp scale
  svg.style.transform = `scale(${scale})`;
  svg.style.transformOrigin = 'top left';
}