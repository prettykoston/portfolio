import Map from "ol/Map.js";
import XYZ from "ol/source/XYZ.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { fromLonLat } from "ol/proj.js";
import VectorSource from "ol/source/Vector.js";
import VectorLayer from "ol/layer/Vector.js";
import Style from "ol/style/Style.js";
import Icon from "ol/style/Icon.js";
import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import { defaults } from "ol/control/defaults";

const initMap = function () {
  const map = new Map({
    target: "book-grid__map",
    controls: defaults({
      attribution: false,
      zoom: false,
    }),
    layers: [
      new TileLayer({
        source: new XYZ({
          urls: ["http://a.tile.openstreetmap.org/{z}/{x}/{y}.png", "http://b.tile.openstreetmap.org/{z}/{x}/{y}.png", "http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"],
        }),
      }),
    ],
    view: new View({
      center: fromLonLat([37.618423, 55.751244]),
      zoom: 9.6,
    }),
  });

  const markers = new VectorLayer({
    source: new VectorSource(),
    style: new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: "/images/section-book/marker.svg",
        scale: 1.2,
      }),
    }),
  });

  map.addLayer(markers);

  const markerRyabinovaya = new Feature(new Point(fromLonLat([37.42516, 55.717811])));
  markers.getSource().addFeature(markerRyabinovaya);

  const markerAvtozavodskaya = new Feature(new Point(fromLonLat([37.63956408286087, 55.70498798942697])));
  markers.getSource().addFeature(markerAvtozavodskaya);

  const markerRogozhskiy = new Feature(new Point(fromLonLat([37.679219540533076, 55.74436605119981])));
  markers.getSource().addFeature(markerRogozhskiy);

  const markerYarzevskaya = new Feature(new Point(fromLonLat([37.417773298203585, 55.74132160812538])));
  markers.getSource().addFeature(markerYarzevskaya);
};

export default initMap;
