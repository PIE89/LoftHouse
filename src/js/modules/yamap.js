// async function initMap() {
//   await ymaps3.ready;

//   const {
//     YMap,
//     YMapDefaultSchemeLayer,
//     YMapDefaultFeaturesLayer,
//     YMapMarker,
//   } = ymaps3;
//   const { YMapDefaultMarker } = await ymaps3.import(
//     "@yandex/ymaps3-markers@0.0.1"
//   );

//   const map = new YMap(
//     document.getElementById("map"),
//     {
//       location: {
//         center: [30.338928, 59.943543],
//         zoom: 15,
//         showScaleInCopyrights: true,
//       },
//     },
//     [new YMapDefaultSchemeLayer({}), new YMapDefaultFeaturesLayer({})]
//   );

//   map.addChild(
//     new YMapDefaultMarker({
//       coordinates: [30.338928, 59.943543],
//       color: "#d4c17f",
//       popup: {
//         content: "Жилой Комплекс LOFT HOUSE (Наб. реки Фонтанки 10-15)",
//         position: "top",
//       },
//     })
//   );
// }

// export default await initMap;


async function initMap() {
    await ymaps3.ready;
  
    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapMarker,
    } = ymaps3;
    const { YMapDefaultMarker } = await ymaps3.import(
      "@yandex/ymaps3-markers@0.0.1"
    );
  
    const map = new YMap(
      document.getElementById("map"),
      {
        location: {
          center: [30.338928, 59.943543],
          zoom: 15,
          showScaleInCopyrights: true,
        },
      },
      [new YMapDefaultSchemeLayer({}), new YMapDefaultFeaturesLayer({})]
    );
  
    map.addChild(
      new YMapDefaultMarker({
        coordinates: [30.338928, 59.943543],
        color: "#d4c17f",
        popup: {
          content: "Жилой Комплекс LOFT HOUSE (Наб. реки Фонтанки 10-15)",
          position: "top",
        },
      })
    );
  }
  
  export default await initMap;
  