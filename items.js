const ITEMS = [
  {
    id: 1,
    category: 'mac',
    imgUrl: '../img/macbook-air-2.png',
    name: 'MacBook Air',
    display: 13.3, // дюймы
    color: ['Gold', 'Silver', 'Space Grey'],
    price: 999, // доллары
    chip: {
      name: 'M1',
      cores: 8
    },
    ram: 8, // Гб
    storage: 256, // Гб
    touchId: true,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: '720p FaceTime HD camera',
      back: null
    },
    audio: {
      microphone: 'Three-mic array with directional beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '1.61', // cm
      width: '30.41', // cm
      depth: '21.24', // cm
      weight: '1.29' // Кг
    },
    os: 'macOS',
    InTheBox: ['MacBook Air', '30W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
    orderInfo: {
      inStock: {
        value: '435',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 77, // процент положительных отзывов
      amount: 310
    }
  },
  {
    id: 2,
    category: 'mac',
    imgUrl: '../img/macbook-air-2.png',
    name: 'MacBook Air',
    display: 13.3, // дюймы
    color: ['Gold', 'Silver', 'Space Grey'],
    price: 1249, // доллары
    chip: {
      name: 'M1',
      cores: 8
    },
    ram: 16, // Гб
    storage: 512, // Гб
    touchId: true,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: '720p FaceTime HD camera',
      back: null
    },
    audio: {
      microphone: 'Three-mic array with directional beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '1.61', // cm
      width: '30.41', // cm
      depth: '21.24', // cm
      weight: '1.29' // Кг
    },
    os: 'macOS',
    InTheBox: ['MacBook Air', '30W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
    orderInfo: {
      inStock: {
        value: '0',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 84, // процент положительных отзывов
      amount: 118
    }
  },
  {
    id: 3,
    category: 'mac',
    imgUrl: '../img/image5.png',
    name: 'MacBook Pro 13',
    display: 13.3, // дюймы
    color: ['Silver', 'Space Grey'],
    price: 1299, // доллары
    chip: {
      name: 'Intel Core i5',
      cores: 8
    },
    ram: 8, // Гб
    storage: 512, // Гб
    touchId: true,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: '720p FaceTime HD camera',
      back: null
    },
    audio: {
      microphone:
        'Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '1.56', // cm
      width: '30.41', // cm
      depth: '21.24', // cm
      weight: '1.4' // Кг
    },
    os: 'macOS',
    InTheBox: ['MacBook pro 13', '61W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
    orderInfo: {
      inStock: {
        value: '25',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 85, // процент положительных отзывов
      amount: 515
    }
  },
  {
    id: 4,
    category: 'mac',
    imgUrl: '../img/image5.png',
    name: 'MacBook Pro 13',
    display: 13.3, // дюймы
    color: ['Silver', 'Space Grey'],
    price: 1499, // доллары
    chip: {
      name: 'M1',
      cores: 8
    },
    ram: 16, // Гб
    storage: 1024, // TB
    touchId: true,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: '720p FaceTime HD camera',
      back: null
    },
    audio: {
      microphone:
        'Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '1.56', // cm
      width: '30.41', // cm
      depth: '21.24', // cm
      weight: '1.4' // Кг
    },
    os: 'macOS',
    InTheBox: ['MacBook pro 13', '61W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
    orderInfo: {
      inStock: {
        value: '256',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 80, // процент положительных отзывов
      amount: 392
    }
  },
  {
    id: 5,
    category: 'mac',
    imgUrl: '../img/macbook-pro16-2.png',
    name: 'MacBook Pro 16',
    display: 16, // дюймы
    color: ['Silver', 'Space Grey'],
    price: 2399, // доллары
    chip: {
      name: ' Intel Core i7',
      cores: 6
    },
    ram: 16, // Гб
    storage: 1024, // TB
    touchId: true,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: '720p FaceTime HD camera',
      back: null
    },
    audio: {
      microphone:
        'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '1.62', // cm
      width: '35.79', // cm
      depth: '24.59', // cm
      weight: '2' // Кг
    },
    os: 'macOS',
    InTheBox: ['MacBook pro 16', '96W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
    orderInfo: {
      inStock: {
        value: '124',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 91, // процент положительных отзывов
      amount: 401
    }
  },
  {
    id: 6,
    category: 'mac',
    imgUrl: '../img/macbook-pro16-2.png',
    name: 'MacBook Pro 16',
    display: 16, // дюймы
    color: ['Silver', 'Space Grey'],
    price: 2799, // доллары
    chip: {
      name: ' Intel Core i9',
      cores: 8
    },
    ram: 32, // Гб
    storage: 2048, // TB
    touchId: true,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: '720p FaceTime HD camera',
      back: null
    },
    audio: {
      microphone:
        'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '1.62', // cm
      width: '35.79', // cm
      depth: '24.59', // cm
      weight: '2' // Кг
    },
    os: 'macOS',
    InTheBox: ['MacBook pro 16', '96W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
    orderInfo: {
      inStock: {
        value: '69',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 90, // процент положительных отзывов
      amount: 651
    }
  },
  {
    id: 7,
    category: 'mac',
    imgUrl: '../img/imac-2.png',
    name: 'IMac',
    display: 21.5, // дюймы
    color: ['Space Grey'],
    price: 1099, // доллары
    chip: {
      name: 'Intel Core i5,',
      cores: '6' //dual‑core
    },
    ram: 8, // Гб
    storage: 256,
    touchId: false,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 4.2 '],
    camera: {
      front: '720p FaceTime HD camera',
      back: null
    },
    audio: {
      microphone: 'Microphone',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '45', // cm
      width: '52.8', // cm
      depth: '17.5', // cm
      weight: '5.44' // Кг
    },
    os: 'macOS',
    InTheBox: [
      'iMac ',
      'Magic Keyboard',
      'Magic Mouse 2',
      'Power cord',
      'Lightning to USB Cable',
      'Polishing cloth'
    ],
    orderInfo: {
      inStock: {
        value: '742',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 75, // процент положительных отзывов
      amount: 119
    }
  },
  {
    id: 8,
    category: 'mac',
    imgUrl: '../img/imac-2.png',
    name: 'IMac',
    display: 27, // дюймы
    color: ['Space Grey'],
    price: 1799, // доллары
    chip: {
      name: 'Intel Core i5,',
      cores: '6' //dual‑core
    },
    ram: 8, // Гб
    storage: 256,
    touchId: false,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0 '],
    camera: {
      front: '720p FaceTime HD camera',
      back: null
    },
    audio: {
      microphone: 'Microphone',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '51.6', // cm
      width: '65', // cm
      depth: '20.3', // cm
      weight: '8.92' // Кг
    },
    os: 'macOS',
    InTheBox: [
      'iMac with Retina 5K display ',
      'Magic Keyboard',
      'Magic Mouse 2',
      'Power cord',
      'Lightning to USB Cable',
      'Polishing cloth'
    ],
    orderInfo: {
      inStock: {
        value: '0',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 99, // процент положительных отзывов
      amount: 431
    }
  },
  {
    id: 9,
    category: 'mac',
    imgUrl: '../img/mac-pro-2.png',
    name: 'Mac Pro',
    display: null, // дюймы
    color: ['Space Grey'],
    price: 2499, // доллары
    chip: {
      name: 'Intel Xeon W',
      cores: '16' //dual‑core
    },
    ram: 64, // Гб
    storage: 1024, //
    touchId: false,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0 '],
    camera: {
      front: null,
      back: null
    },
    audio: {
      microphone: 'Microphone',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '50', // cm
      width: '30', // cm
      depth: '60', // cm
      weight: '18' // Кг
    },
    os: 'macOS',
    InTheBox: [
      'Mac Pro',
      'Magic Keyboard with Numeric Keypad',
      'Magic Mouse 2',
      'USB-C to Lightning Cable (1 m)',
      'Power cord (2 m)'
    ],
    orderInfo: {
      inStock: {
        value: '587',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 56, // процент положительных отзывов
      amount: 234
    }
  },
  {
    id: 10,
    category: 'ipad',
    imgUrl: '../img/compare-ipad-pro.png',
    name: 'IPad Pro ',
    display: 11, // дюймы
    color: ['Silver', 'Space Grey'],
    price: 750, // доллары
    chip: {
      name: 'A12Z Bionic',
      cores: null
    },
    ram: null, // Гб
    storage: 128, // TB
    touchId: false,
    faceId: true,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: '720p FaceTime HD camera',
      back: 'Ultra Wide: 10MP'
    },
    audio: {
      microphone:
        'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '24.7', // cm
      width: '17.8', // cm
      depth: '0.6', // cm
      weight: '0.470' // Кг
    },
    os: 'macOS',
    InTheBox: ['iPad Pro', 'USB-C Charge Cable (1 meter)', '18W USB-C Power Adapter'],
    orderInfo: {
      inStock: {
        value: '32',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 99, // процент положительных отзывов
      amount: 285
    }
  },
  {
    id: 34,
    category: 'ipad',
    imgUrl: '../img/ipad-air-2.png',
    name: 'IPad Air',
    display: 10.9, // дюймы
    color: ['Silver', 'Space Grey', 'Rose Gold', 'Green', 'Sky Blue'],
    price: 549, // доллары
    chip: {
      name: 'A14 Bionic ',
      cores: null
    },
    ram: null, // Гб
    storage: 64, // TB
    touchId: true,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: '720p FaceTime HD camera',
      back: 'Ultra Wide: 10MP'
    },
    audio: {
      microphone: 'Dual microphones for calls, video recording, and audio recording',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '24.7', // cm
      width: '17.8', // cm
      depth: '0.6', // cm
      weight: '0.458' // Кг
    },
    os: 'macOS',
    InTheBox: ['iPad Air', 'USB-C Charge Cable (1 meter)', '20W USB-C Power Adapter'],
    orderInfo: {
      inStock: {
        value: '97',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 97, // процент положительных отзывов
      amount: 185
    }
  },
  {
    id: 11,
    category: 'ipad',
    imgUrl: '../img/ipad-2.png',
    name: 'IPad',
    display: 10.2, // дюймы
    color: ['Silver', 'Space Grey', 'Gold'],
    price: 309, // доллары
    chip: {
      name: 'A12 Bionic  ',
      cores: null
    },
    ram: null, // Гб
    storage: 32, // TB
    touchId: true,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: '720p FaceTime HD camera',
      back: 'Ultra Wide: 10MP'
    },
    audio: {
      microphone: 'Dual microphones for calls, video recording, and audio recording',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '25.7', // cm
      width: '17.4', // cm
      depth: '0.6', // cm
      weight: '0.490' // Кг
    },
    os: 'macOS',
    InTheBox: ['iPad', 'USB-C Power Adapter', 'Lightning to USB-C Cable'],
    orderInfo: {
      inStock: {
        value: '90',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 0, // процент положительных отзывов
      amount: 843
    }
  },
  {
    id: 12,
    category: 'ipad',
    imgUrl: '../img/compare-ipad-mini.png',
    name: 'IPad mini',
    display: 7.9, // дюймы
    color: ['Silver', 'Space Grey', 'Gold'],
    price: 309, // доллары
    chip: {
      name: 'A12 Bionic  ',
      cores: null
    },
    ram: null, // Гб
    storage: 64, // TB
    touchId: true,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: '720p FaceTime HD camera',
      back: 'Ultra Wide: 10MP'
    },
    audio: {
      microphone: 'Dual microphones for calls, video recording, and audio recording',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '20.3', // cm
      width: '13.4', // cm
      depth: '0.6', // cm
      weight: '0.300' // Кг
    },
    os: 'macOS',
    InTheBox: ['iPad mini', 'USB-C Power Adapter', 'Lightning to USB-C Cable'],
    orderInfo: {
      inStock: {
        value: '77',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 85, // процент положительных отзывов
      amount: 324
    }
  },
  {
    id: 13,
    category: 'Watch',
    imgUrl: '../img/apple-watch-series-6-2.png',
    name: 'Apple Watch Series 6',
    display: 1.73228, // дюймы
    color: ['Silver', 'Space Grey', 'Gold', 'Blue', 'Graphite'],
    price: 399, // доллары
    chip: {
      name: 'S6 SiP   ',
      cores: null
    },
    ram: null, // Гб
    storage: 32, // TB
    touchId: false,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: null,
      back: null
    },
    audio: {
      microphone: 'Dual microphones for calls, video recording, and audio recording',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '4,4', // cm
      width: '3.8', // cm
      depth: '0.6', // cm
      weight: '1.07' // Кг
    },
    os: 'macOS',
    InTheBox: ['Case', 'Solo Loop', '1m Magnetic Charging Cable'],
    orderInfo: {
      inStock: {
        value: '90',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 458, // процент положительных отзывов
      amount: 179
    }
  },
  {
    id: 14,
    category: 'Watch',
    imgUrl: '../img/apple-watch-se.png',
    name: 'Apple Watch Series SE',
    display: 1.73228, // дюймы
    color: ['Silver', 'Space Grey', 'Gold', 'Blue', 'Graphite'],
    price: 309, // доллары
    chip: {
      name: 'S5 SiP   ',
      cores: null
    },
    ram: null, // Гб
    storage: 22.1654, // TB
    touchId: false,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: null,
      back: null
    },
    audio: {
      microphone: 'Dual microphones for calls, video recording, and audio recording',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '4,4', // cm
      width: '3.8', // cm
      depth: '0.6', // cm
      weight: '1.07' // Кг
    },
    os: 'macOS',
    InTheBox: [
      'Case',
      'Band (can be configured for either S/M or M/L length)',
      '1m Magnetic Charging Cable'
    ],
    orderInfo: {
      inStock: {
        value: '79',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 69, // процент положительных отзывов
      amount: 284
    }
  },
  {
    id: 15,
    category: 'Watch',
    imgUrl: '../img/apple-watch3.png',
    name: 'Apple Watch Series 3',
    display: 22.1654, // дюймы
    color: ['Silver', 'Space Grey', 'Gold', 'Blue', 'Graphite'],
    price: 309, // доллары
    chip: {
      name: 'S5 SiP   ',
      cores: null
    },
    ram: null, // Гб
    storage: 8, // TB
    touchId: false,
    faceId: false,
    wireless: ['Wi-Fi', 'Bluetooth 5.0'],
    camera: {
      front: null,
      back: null
    },
    audio: {
      microphone: 'Dual microphones for calls, video recording, and audio recording',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '4,2', // cm
      width: '3.3', // cm
      depth: '0.6', // cm
      weight: '1.07' // Кг
    },
    os: 'macOS',
    InTheBox: [
      'Case',
      'Band (can be configured for either S/M or M/L length)',
      '1m Magnetic Charging Cable'
    ],
    orderInfo: {
      inStock: {
        value: '47',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 93, // процент положительных отзывов
      amount: 165
    }
  },
  {
    id: 16,
    category: 'iphone',
    imgUrl: '../img/iphone-12-2.png',
    name: 'IPhone 12',
    display: 6.1, // дюймы
    color: ['Black', 'White', 'Green', 'Blue', 'Red'],
    price: 799, // доллары
    chip: {
      name: 'A14',
      cores: null
    },
    ram: null, // Гб
    storage: 128, // Гб
    touchId: false,
    faceId: true,
    wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
    camera: {
      front: '720p FaceTime HD camera',
      back: 'Dual 12MP camera system'
    },
    audio: {
      microphone: 'Three-mic array with directional beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '14.6', // cm
      width: '7.1', // cm
      depth: '0.7', // cm
      weight: '0.164' // Кг
    },
    os: 'IOS',
    InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
    orderInfo: {
      inStock: {
        value: '73',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 12, // процент положительных отзывов
      amount: 594
    }
  },
  {
    id: 17,
    category: 'iphone',
    imgUrl: '../img/iphone-12-2.png',
    name: 'IPhone 12',
    display: 6.1, // дюймы
    color: ['Black', 'White', 'Green', 'Blue', 'Red'],
    price: 899, // доллары
    chip: {
      name: 'A14',
      cores: null
    },
    ram: null, // Гб
    storage: 256, // Гб
    touchId: false,
    faceId: true,
    wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
    camera: {
      front: '720p FaceTime HD camera',
      back: 'Dual 12MP camera system'
    },
    audio: {
      microphone: 'Three-mic array with directional beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '14.6', // cm
      width: '7.1', // cm
      depth: '0.7', // cm
      weight: '0.164' // Кг
    },
    os: 'IOS',
    InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
    orderInfo: {
      inStock: {
        value: '0',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 73, // процент положительных отзывов
      amount: 876
    }
  },
  {
    id: 18,
    category: 'iphone',
    imgUrl: '../img/iphone-12-2.png',
    name: 'IPhone 12 Mini',
    display: 5.4, // дюймы
    color: ['Black', 'White', 'Green', 'Blue', 'Red'],
    price: 669, // доллары
    chip: {
      name: 'A14',
      cores: null
    },
    ram: null, // Гб
    storage: 128, // Гб
    touchId: false,
    faceId: true,
    wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
    camera: {
      front: '720p FaceTime HD camera',
      back: 'Dual 12MP camera system'
    },
    audio: {
      microphone: 'Three-mic array with directional beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '13.1', // cm
      width: '6.41', // cm
      depth: '0.7', // cm
      weight: '0.135' // Кг
    },
    os: 'IOS',
    InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
    orderInfo: {
      inStock: {
        value: '43',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 100, // процент положительных отзывов
      amount: 187
    }
  },
  {
    id: 19,
    category: 'iphone',
    imgUrl: '../img/iphone-12-pro-2.png',
    name: 'IPhone 12 Pro',
    display: 6.1, // дюймы
    color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
    price: 999, // доллары
    chip: {
      name: 'A14',
      cores: null
    },
    ram: null, // Гб
    storage: 256, // Гб
    touchId: false,
    faceId: true,
    wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
    camera: {
      front: '720p FaceTime HD camera',
      back: 'Pro 12MP camera system'
    },
    audio: {
      microphone: 'Three-mic array with directional beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '14.6', // cm
      width: '7.1', // cm
      depth: '0.7', // cm
      weight: '0.164' // Кг
    },
    os: 'IOS',
    InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
    orderInfo: {
      inStock: {
        value: '74',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 99, // процент положительных отзывов
      amount: 348
    }
  },
  {
    id: 20,
    category: 'iphone',
    imgUrl: '../img/iphone-12-pro-2.png',
    name: 'IPhone 12 Pro',
    display: 6.1, // дюймы
    color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
    price: 1099, // доллары
    chip: {
      name: 'A14',
      cores: null
    },
    ram: null, // Гб
    storage: 512, // Гб
    touchId: false,
    faceId: true,
    wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
    camera: {
      front: '720p FaceTime HD camera',
      back: 'Pro 12MP camera system'
    },
    audio: {
      microphone: 'Three-mic array with directional beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '14.6', // cm
      width: '7.1', // cm
      depth: '0.7', // cm
      weight: '0.164' // Кг
    },
    os: 'IOS',
    InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
    orderInfo: {
      inStock: {
        value: '2',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 99, // процент положительных отзывов
      amount: 456
    }
  },
  {
    id: 21,
    category: 'iphone',
    imgUrl: '../img/iphone-12-pro-2.png',
    name: 'IPhone 12 Pro Max',
    display: 6.7, // дюймы
    color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
    price: 1099, // доллары
    chip: {
      name: 'A14',
      cores: null
    },
    ram: null, // Гб
    storage: 256, // Гб
    touchId: false,
    faceId: true,
    wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
    camera: {
      front: '720p FaceTime HD camera',
      back: 'Pro 12MP camera system'
    },
    audio: {
      microphone: 'Three-mic array with directional beamforming',
      speakers: 'Stereo speakers'
    },
    size: {
      height: '16.0', // cm
      width: '7.8', // cm
      depth: '0.7', // cm
      weight: '0.228' // Кг
    },
    os: 'IOS',
    InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
    orderInfo: {
      inStock: {
        value: '5',
        pict: {
          succ: '../img/yes.png',
          err: '../img/no.png'
        }
      },
      reviews: 100, // процент положительных отзывов
      amount: 654
    }
  }
];

export default ITEMS;
