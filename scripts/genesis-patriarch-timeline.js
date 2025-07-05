// Define the timeline items (each patriarch gets a unique group)
const items = new vis.DataSet([
  // Pre-Flood Patriarchs (Genesis 5)
  { id: 1, content: 'Adam (930)', start: 0, end: 930, group: 1, className: 'adam' },
  { id: 2, content: 'Seth (912)', start: 130, end: 1042, group: 2 },
  { id: 3, content: 'Enosh (905)', start: 235, end: 1140, group: 3 },
  { id: 4, content: 'Kenan (910)', start: 325, end: 1235, group: 4 },
  { id: 5, content: 'Mahalalel (895)', start: 395, end: 1290, group: 5 },
  { id: 6, content: 'Jared (962)', start: 460, end: 1422, group: 6 },
  { id: 7, content: 'Enoch (365)', start: 622, end: 987, group: 7, className: 'enoch' },
  { id: 8, content: 'Methuselah (969)', start: 687, end: 1656, group: 8 },
  { id: 9, content: 'Lamech (777)', start: 874, end: 1651, group: 9 },
  { id: 10, content: 'Noah (950)', start: 1056, end: 2006, group: 10 },

  // Post-Flood Patriarchs (Genesis 11)
  { id: 11, content: 'Shem (600)', start: 1556, end: 2156, group: 11 },
  { id: 12, content: 'Arphaxad (438)', start: 1658, end: 2096, group: 12 },
  { id: 13, content: 'Shelah (433)', start: 1693, end: 2126, group: 13 },
  { id: 14, content: 'Eber (464)', start: 1723, end: 2187, group: 14 },
  { id: 15, content: 'Peleg (239)', start: 1757, end: 1996, group: 15 },
  { id: 16, content: 'Reu (239)', start: 1787, end: 2026, group: 16 },
  { id: 17, content: 'Serug (230)', start: 1819, end: 2049, group: 17 },
  { id: 18, content: 'Nahor (148)', start: 1849, end: 1997, group: 18 },
  { id: 19, content: 'Terah (205)', start: 1878, end: 2083, group: 19 },
  { id: 20, content: 'Abraham (175)', start: 1948, end: 2123, group: 20 },

  // Key Events
  { id: 21, content: 'FLOOD', start: 1656, end: 1656, type: 'point', group: 21, className: 'flood' },
  { id: 22, content: 'Tower of Babel', start: 1757, end: 1757, type: 'point', group: 22, className: 'babel' }
]);

// Assign each patriarch to a unique group (for stacking)
const groups = new vis.DataSet([
  { id: 1, content: 'Adam' }, 
  { id: 2, content: 'Seth' },
  { id: 3, content: 'Enosh' },
  { id: 4, content: 'Kenan' },
  { id: 5, content: 'Mahalalel' },
  { id: 6, content: 'Jared' },
  { id: 7, content: 'Enoch' },
  { id: 8, content: 'Methuselah' },
  { id: 9, content: 'Lamech' },
  { id: 10, content: 'Noah' },
  { id: 11, content: 'Shem' },
  { id: 12, content: 'Arphaxad' },
  { id: 13, content: 'Shelah' },
  { id: 14, content: 'Eber' },
  { id: 15, content: 'Peleg' },
  { id: 16, content: 'Reu' },
  { id: 17, content: 'Serug' },
  { id: 18, content: 'Nahor' },
  { id: 19, content: 'Terah' },
  { id: 20, content: 'Abraham' },
  { id: 21, content: 'FLOOD' },
  { id: 22, content: 'Babel' }
]);

// Initialize the timeline
const container = document.getElementById('timeline');
const options = {
  stack: true, // <-- KEY CHANGE: Stack items vertically
  orientation: 'top',
  zoomable: true,
  showCurrentTime: false,
  min: 0,
  max: 2500,
  margin: { item: { horizontal: 0, vertical: 10 } } // Spacing between bars
};

const timeline = new vis.Timeline(container, items, groups, options);