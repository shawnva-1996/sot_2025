// Define timeline items (same as before)
const items = new vis.DataSet([
  // ... (your existing items array)
]);

// Define groups (same as before)
const groups = new vis.DataSet([
  // ... (your existing groups array)
]);

// Initialize timeline with mobile-friendly options
const container = document.getElementById('timeline');
const options = {
  stack: true,
  orientation: 'top',
  zoomable: true,
  showCurrentTime: false,
  min: 0,
  max: 2500,
  margin: { 
    item: { 
      horizontal: 0, 
      vertical: 5 // Reduced spacing for mobile
    } 
  },
  // Mobile-specific options
  verticalScroll: true, // Allows vertical scrolling
  horizontalScroll: true, // Allows horizontal scrolling
  zoomKey: 'ctrlKey', // Allows pinch-to-zoom on touch devices
  showTooltips: true, // Show tooltips on tap
  tooltip: {
    followMouse: false, // Tooltip appears at item position
    overflowMethod: 'cap' // Handle long text in tooltips
  }
};

const timeline = new vis.Timeline(container, items, groups, options);

// Add mobile-friendly controls
document.getElementById('zoomIn').addEventListener('click', function() {
  timeline.zoomIn(0.2);
});

document.getElementById('zoomOut').addEventListener('click', function() {
  timeline.zoomOut(0.2);
});

document.getElementById('fitAll').addEventListener('click', function() {
  timeline.fit();
});

// Handle window resize
window.addEventListener('resize', function() {
  timeline.redraw();
});

// Handle touch events better
container.addEventListener('touchstart', function(e) {
  // Prevent double-tap zoom on mobile
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

// Adjust for small screens
function checkScreenSize() {
  if (window.innerWidth < 600) {
    // Reduce font sizes further for very small screens
    const itemsToUpdate = items.getIds().map(id => {
      const item = items.get(id);
      return {
        id: id,
        className: item.className + ' mobile-small'
      };
    });
    items.update(itemsToUpdate);
  }
}

checkScreenSize();
window.addEventListener('resize', checkScreenSize);