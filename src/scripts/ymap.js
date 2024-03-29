(function () {
  ymaps.ready(init);


  function init() {
    var map = new ymaps.Map('map', {
      center: [56.326797, 44.006516],
      center: [56.31789991245484,44.00100978495467],
      zoom: 13,
      controls: ['zoomControl'],
      behaviors: ['drag']
    });
  
    var placemark = new ymaps.Placemark([56.32779283005114,44.00367053629744], {
      hintContent: 'Кремль',
      balloonContent: 'Нижний Новгород, Кремль, 6А'
  
    },
  
      {
        iconLayout: 'default#image',
        // iconImageHref: './img/location/mark.png',
        // iconImageSize: [46, 57],
        // iconImageOffset: [-23, -57]
  
      });
  
    var placemark1 = new ymaps.Placemark([56.31541557724594,43.99131345540926], {
      hintContent: 'Макдональдс',
      balloonContent: 'Нижний Новгород, площадь Максима Горького, 2'
  
    },
  
      {
        iconLayout: 'default#image',
        // iconImageHref: './img/location/mark.png',
        // iconImageSize: [46, 57],
        // iconImageOffset: [-23, -57]
  
      });
  
    
  
    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);
    // map.geoObjects.add(placemark2);
    // map.geoObjects.add(placemark3);
  }
})();