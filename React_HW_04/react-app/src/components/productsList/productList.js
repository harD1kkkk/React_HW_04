import comp from "../../images/comp.webp";
import monoblock from "../../images/monoblock.webp";
import MacBook_Air_13 from "../../images/MacBook Air 13.webp";
import Lenovo_ThinkPad_X1_2_in_1_Gen_9 from "../../images/Lenovo ThinkPad X1 2-in-1 Gen 9.webp";


export const productList = [
  {
    id: Math.random(),
    image: comp,
    info: "Комп'ютер ARTLINE Gaming X47 (X47v45) AMD Ryzen 5 5500 / 16ГБ DDR4 / HDD 1ТБ + SSD 480ГБ / nVidia GeForce RTX 3060 12 ГБ",
    price: "28 999",
    expire: false,

    more: {
      processor: "AMD Ryzen 5 5500 (3.6 - 4.2 ГГц)",
      ram: "16ГБ",
      storage: "HDD 1 ТБ + SSD 480 ГБ",
      display: "НЕМАЄ",
    }
  },
  {
    id: Math.random(),
    image: monoblock,
    info: "Моноблок Lenovo IdeaCentre AIO 27IRH9 (F0HM0073UO) 27 IPS 100Hz 2K QHD / Intel Core i7-13620H / RAM 32ГБ DDR5-5200 / SSD 1ТБ SSD M.2 PCIe NVMe / Intel UHD Graphics / Wi-Fi 6 + BT5.2",
    price: "43 999",
    expire: false,

    more: {
      processor: "Intel Core i7-13620H (2.4 - 4.9 ГГц)",
      ram: "32ГБ",
      storage: "SSD 1 ТБ",
      display: "27 IPS 100Hz (2560x1440) QHD",
    }
  },
  {
    id: Math.random(),
    image: MacBook_Air_13,
    info: "Ноутбук Apple MacBook Air 13",
    price: "36 999",
    expire: true,

    more: {
      processor: "Apple M1",
      ram: "8ГБ",
      storage: "SSD 256 ГБ",
      display: "Retina (2560x1600) WQXGA, глянсовий",
    }
  },
  {
    id: Math.random(),
    image: Lenovo_ThinkPad_X1_2_in_1_Gen_9,
    info: "Ноутбук Lenovo ThinkPad X1 2-in-1 Gen 9 (21KE003HRA) Grey",
    price: "121 099",
    expire: false,

    more: {
      processor: "Intel Core Ultra 7 155U (1.7 - 4.8 ГГц)",
      ram: "32ГБ",
      storage: "SSD 1 ТБ",
      display: "Екран 14 OLED (2880x1800) 2.8K 120 Гц, Multi-touch, глянсовий",
    }
  },
];
