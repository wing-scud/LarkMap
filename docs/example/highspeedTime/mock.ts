export const POINT_DATA = [
  {
    longitude_to: 113.477391,
    latitude_to: 34.626256,
    name: '郑州',
    time: '',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 125.593273,
    latitude_to: 44.290795,
    name: '长春市',
    time: '8h43m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 127.966759,
    latitude_to: 45.648633,
    name: '哈尔滨',
    time: '9h57m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 123.143796,
    latitude_to: 42.100641,
    name: '沈阳',
    time: '7h12m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 117.347043,
    latitude_to: 39.288036,
    name: '天津',
    time: '3h07m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 116.41995,
    latitude_to: 40.18994,
    name: '北京',
    time: '2h25m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 112.322147,
    latitude_to: 37.960573,
    name: '太原',
    time: '2h15m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 114.444982,
    latitude_to: 38.133034,
    name: '石家庄',
    time: '1h21m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 117.221211,
    latitude_to: 36.640013,
    name: '济南',
    time: '3h01m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 103.644112,
    latitude_to: 36.355083,
    name: '兰州',
    time: '4h24m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 108.797426,
    latitude_to: 34.10671,
    name: '西安',
    time: '1h47m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 106.347233,
    latitude_to: 38.2883,
    name: '银川',
    time: '5h11m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 103.931804,
    latitude_to: 30.652329,
    name: '成都',
    time: '5h45m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 107.8839,
    latitude_to: 30.067297,
    name: '重庆',
    time: '7h28m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 102.87442,
    latitude_to: 25.387092,
    name: '昆明',
    time: '8h16m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 108.467546,
    latitude_to: 23.055985,
    name: '南宁',
    time: '8h11m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 113.544372,
    latitude_to: 23.329249,
    name: '广州',
    time: '5h31m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 114.348204,
    latitude_to: 30.623025,
    name: '武汉',
    time: '1h43m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 113.158697,
    latitude_to: 28.224232,
    name: '长沙',
    time: '3h05m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 106.711127,
    latitude_to: 26.84011,
    name: '贵阳',
    time: '6h11m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 117.226884,
    latitude_to: 31.849254,
    name: '合肥',
    time: '2h31m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 118.847868,
    latitude_to: 31.927726,
    name: '南京',
    time: '2h39m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 121.438737,
    latitude_to: 31.072559,
    name: '上海',
    time: '3h43m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 116.023468,
    latitude_to: 28.647424,
    name: '南昌',
    time: '3h44m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 119.306239,
    latitude_to: 26.075302,
    name: '福州',
    time: '7h39m',
  },
  {
    longitude_form: 113.477391,
    latitude_form: 34.626256,
    longitude_to: 120.153576,
    latitude_to: 30.287459,
    name: '杭州',
    time: '4h29m',
  },
];


export const LINE_DATA = (() => {
  return {
    type: 'FeatureCollection',
    features: POINT_DATA.filter((item) => item.latitude_form).map((item) => {
      return {
        type: 'Feature',
        properties: { ...item },
        geometry: {
          type: 'LineString',
          coordinates: [
            [item.longitude_form, item.latitude_form],
            [item.longitude_to, item.latitude_to],
          ],
        },
      };
    }),
  };
})();
