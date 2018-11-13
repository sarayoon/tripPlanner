module.exports((markType, long, lat) => {
  newMarker = new mapboxgl.Marker(markType).setLngLat([long, lat]).addTo(map);
  newMarker.style.width = '32px';
  newMarker.style.height = '39px';

  if (markType === 'activity') {
    newMarker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  }

  if (markType === 'hotel') {
    newMarker.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
  }

  if (markType === 'restaurant') {
    newMarker.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
  }
});
