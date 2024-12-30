export const categories = [
  {
    name: "CPU",
    children: [
      {
        BrandId: 1,
        BrandName: "Intel",
        children: {
          models: [
            {
              modelId: 1,
              title: "Intel Core i5 9th gen",
              description: "A balanced CPU for gaming and productivity.",
              price: "$199.99",
              img: "",
            },
            {
              modelId: 2,
              title: "Intel Core i7 9th gen",
              description: "A high-performance CPU for demanding tasks.",
              price: "$319.99",
              img: "",
            },
            {
              modelId: 3,
              title: "Intel Core i9 9th gen",
              description: "A top-tier CPU for the ultimate performance.",
              price: "$499.99",
              img: "",
            },
            {
              modelId: 4,
              title: "Intel Core i5 10th gen",
              description: "A balanced CPU for gaming and productivity.",
              price: "$249.99",
              img: "",
            },
            {
              modelId: 5,
              title: "Intel Core i7 10th gen",
              description: "A high-performance CPU for demanding tasks.",
              price: "$399.99",
              img: "",
            },
            {
              modelId: 6,
              title: "Intel Core i9 10th gen",
              description: "A top-tier CPU for the ultimate performance.",
              price: "$599.99",
              img: "",
            },
            {
              modelId: 7,
              title: "Intel Core i5 11th gen",
              description: "A balanced CPU for gaming and productivity.",
              price: "$299.99",
              img: "",
            },
            {
              modelId: 8,
              title: "Intel Core i7 11th gen",
              description: "A high-performance CPU for demanding tasks.",
              price: "$449.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 2,
        BrandName: "AMD",
        children: {
          models: [
            {
              modelId: 1,
              title: "AMD Ryzen 5",
              description: "A versatile CPU for gaming and multitasking.",
              price: "$199.99",
              img: "",
            },
            {
              modelId: 2,
              title: "AMD Ryzen 7",
              description: "A powerful CPU for professional workloads.",
              price: "$329.99",
              img: "",
            },
          ],
        },
      },
    ],
  },
  {
    name: "GPU",
    children: [
      {
        BrandId: 3,
        BrandName: "MSI",
        children: {
          models: [
            {
              modelId: 1,
              title: "MSI GeForce RTX 3060",
              description: "A mid-tier GPU for high-quality 1080p gaming.",
              price: "$399.99",
              img: "",
            },
            {
              modelId: 2,
              title: "MSI GeForce RTX 3070",
              description: "A high-end GPU for 1440p gaming and beyond.",
              price: "$599.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 4,
        BrandName: "ASUS",
        children: {
          models: [
            {
              modelId: 1,
              title: "ASUS ROG Strix RTX 3080",
              description: "A premium GPU for enthusiasts and 4K gaming.",
              price: "$899.99",
              img: "",
            },
            {
              modelId: 2,
              title: "ASUS TUF Gaming RTX 3060",
              description: "A reliable GPU for budget-friendly builds.",
              price: "$349.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 5,
        BrandName: "Gigabyte",
        children: {
          models: [
            {
              modelId: 1,
              title: "Gigabyte AORUS RTX 3090",
              description: "A top-tier GPU for unmatched performance.",
              price: "$1,499.99",
              img: "",
            },
            {
              modelId: 2,
              title: "Gigabyte Gaming OC RTX 3060 Ti",
              description: "An excellent GPU for 1440p gaming.",
              price: "$479.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 6,
        BrandName: "Zotac",
        children: {
          models: [
            {
              modelId: 1,
              title: "Zotac GeForce GTX 1660",
              description: "A budget GPU for entry-level gaming.",
              price: "$229.99",
              img: "",
            },
            {
              modelId: 2,
              title: "Zotac Gaming RTX 3070 Ti",
              description: "A compact GPU for small builds.",
              price: "$619.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 7,
        BrandName: "EVGA",
        children: {
          models: [
            {
              modelId: 1,
              title: "EVGA GeForce RTX 3080",
              description: "A premium GPU for enthusiasts and 4K gaming.",
              price: "$1,099.99",
              img: "",
            },
            {
              modelId: 2,
              title: "EVGA GeForce RTX 3060 Ti",
              description: "A reliable GPU for budget-friendly builds.",
              price: "$449.99",
              img: "",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Laptop",
    children: [
      {
        BrandId: 8,
        BrandName: "Dell",
        children: {
          models: [
            {
              modelId: 1,
              title: "Dell XPS 13",
              description: "A premium ultrabook for productivity.",
              price: "$1,299.99",
              img: "",
            },
            {
              modelId: 2,
              title: "Dell Inspiron 15",
              description: "A versatile laptop for everyday use.",
              price: "$699.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 9,
        BrandName: "HP",
        children: {
          models: [
            {
              modelId: 1,
              title: "HP Spectre x360",
              description: "A convertible laptop for versatility.",
              price: "$1,199.99",
              img: "",
            },
            {
              modelId: 2,
              title: "HP Envy x360",
              description: "A stylish convertible laptop for creativity.",
              price: "$999.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 10,
        BrandName: "Lenovo",
        children: {
          models: [
            {
              modelId: 1,
              title: "Lenovo ThinkPad X1 Carbon",
              description: "A business-class laptop for professionals.",
              price: "$1,499.99",
              img: "",
            },
            {
              modelId: 2,
              title: "Lenovo Yoga C940",
              description: "A 2-in-1 laptop for versatility.",
              price: "$1,299.99",
              img: "",
            },
            {
              modelId: 3,
              title: "Lenovo Legion 5",
              description: "A gaming laptop for performance.",
              price: "$1,199.99",
              img: "",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Monitor",
    children: [
      {
        BrandId: 1,
        BrandName: "Dell",
        children: {
          models: [
            {
              modelId: 1,
              title: "Dell UltraSharp U2723QE",
              description:
                "A 27-inch 4K monitor with exceptional color accuracy.",
              price: "$649.99",
              img: "",
            },
            {
              modelId: 2,
              title: "Dell S2721DGF",
              description:
                "A 27-inch QHD gaming monitor with 165Hz refresh rate.",
              price: "$399.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 2,
        BrandName: "LG",
        children: {
          models: [
            {
              modelId: 1,
              title: "LG UltraGear 27GP850-B",
              description: "A high-refresh-rate QHD gaming monitor.",
              price: "$429.99",
              img: "",
            },
            {
              modelId: 2,
              title: "LG 32UN880-B UltraFine Ergo",
              description: "A 32-inch 4K monitor with an ergonomic stand.",
              price: "$699.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 3,
        BrandName: "ASUS",
        children: {
          models: [
            {
              modelId: 1,
              title: "ASUS ROG Swift PG32UQX",
              description: "A 32-inch 4K gaming monitor with HDR support.",
              price: "$1,799.99",
              img: "",
            },
            {
              modelId: 2,
              title: "ASUS TUF Gaming VG27AQ",
              description: "A 27-inch WQHD monitor with 165Hz refresh rate.",
              price: "$349.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 4,
        BrandName: "Samsung",
        children: {
          models: [
            {
              modelId: 1,
              title: "Samsung Odyssey G7",
              description:
                "A 32-inch curved gaming monitor with QHD resolution.",
              price: "$599.99",
              img: "",
            },
            {
              modelId: 2,
              title: "Samsung Smart Monitor M8",
              description: "A 32-inch smart monitor with built-in apps.",
              price: "$699.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 5,
        BrandName: "BenQ",
        children: {
          models: [
            {
              modelId: 1,
              title: "BenQ EX3501R",
              description: "A 35-inch ultrawide monitor for immersive viewing.",
              price: "$599.99",
              img: "",
            },
            {
              modelId: 2,
              title: "BenQ PD3220U",
              description: "A 32-inch 4K designer monitor with HDR.",
              price: "$899.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 6,
        BrandName: "Acer",
        children: {
          models: [
            {
              modelId: 1,
              title: "Acer Predator XB273K",
              description: "A 27-inch 4K gaming monitor with HDR.",
              price: "$999.99",
              img: "",
            },
            {
              modelId: 2,
              title: "Acer Nitro XV272U",
              description: "A 27-inch QHD monitor with a 144Hz refresh rate.",
              price: "$299.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 7,
        BrandName: "ViewSonic",
        children: {
          models: [
            {
              modelId: 1,
              title: "ViewSonic Elite XG270",
              description: "A 27-inch 240Hz gaming monitor.",
              price: "$399.99",
              img: "",
            },
            {
              modelId: 2,
              title: "ViewSonic VP3268a-4K",
              description: "A 32-inch 4K professional-grade monitor.",
              price: "$749.99",
              img: "",
            },
          ],
        },
      },
    ],
  },
  {
    name: "GamingGears",
    children: [
      {
        BrandId: 1,
        BrandName: "Razer",
        children: {
          models: [
            {
              modelId: 1,
              title: "Razer BlackWidow V3",
              description: "Mechanical gaming keyboard with RGB lighting.",
              price: "$139.99",
              img: "",
            },
            {
              modelId: 2,
              title: "Razer DeathAdder V2",
              description: "Ergonomic gaming mouse with precision sensor.",
              price: "$69.99",
              img: "",
            },
            {
              modelId: 3,
              title: "Razer Kraken X",
              description:
                "Comfortable gaming headset with 7.1 surround sound.",
              price: "$49.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 2,
        BrandName: "Logitech",
        children: {
          models: [
            {
              modelId: 1,
              title: "Logitech G Pro X Keyboard",
              description: "Pro-grade mechanical keyboard for esports.",
              price: "$149.99",
              img: "",
            },
            {
              modelId: 2,
              title: "Logitech G502 Hero",
              description: "High-performance wired gaming mouse.",
              price: "$79.99",
              img: "",
            },
            {
              modelId: 3,
              title: "Logitech G733 Lightspeed",
              description: "Wireless RGB gaming headset with surround sound.",
              price: "$129.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 3,
        BrandName: "Corsair",
        children: {
          models: [
            {
              modelId: 1,
              title: "Corsair K95 RGB Platinum",
              description: "Premium mechanical keyboard with customizable RGB.",
              price: "$199.99",
              img: "",
            },
            {
              modelId: 2,
              title: "Corsair Dark Core RGB Pro",
              description: "Wireless gaming mouse with precision sensor.",
              price: "$99.99",
              img: "",
            },
            {
              modelId: 3,
              title: "Corsair HS80 RGB Wireless",
              description:
                "Premium wireless gaming headset with spatial audio.",
              price: "$149.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 4,
        BrandName: "SteelSeries",
        children: {
          models: [
            {
              modelId: 1,
              title: "SteelSeries Apex Pro",
              description:
                "Adjustable mechanical keyboard for precision typing.",
              price: "$199.99",
              img: "",
            },
            {
              modelId: 2,
              title: "SteelSeries Rival 600",
              description: "Dual sensor system for true 1-to-1 tracking.",
              price: "$79.99",
              img: "",
            },
            {
              modelId: 3,
              title: "SteelSeries Arctis 7",
              description: "Wireless gaming headset with DTS surround sound.",
              price: "$149.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 5,
        BrandName: "HyperX",
        children: {
          models: [
            {
              modelId: 1,
              title: "HyperX Alloy Elite 2",
              description: "RGB mechanical gaming keyboard with solid build.",
              price: "$129.99",
              img: "",
            },
            {
              modelId: 2,
              title: "HyperX Pulsefire Surge",
              description: "Gaming mouse with dynamic RGB effects.",
              price: "$49.99",
              img: "",
            },
            {
              modelId: 3,
              title: "HyperX Cloud II",
              description: "Legendary gaming headset with virtual 7.1 sound.",
              price: "$99.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 6,
        BrandName: "ASUS ROG",
        children: {
          models: [
            {
              modelId: 1,
              title: "ASUS ROG Claymore II",
              description: "Modular mechanical gaming keyboard.",
              price: "$229.99",
              img: "",
            },
            {
              modelId: 2,
              title: "ASUS ROG Gladius III",
              description: "Wired/wireless gaming mouse with high precision.",
              price: "$99.99",
              img: "",
            },
            {
              modelId: 3,
              title: "ASUS ROG Delta S",
              description: "Hi-res gaming headset with AI noise cancellation.",
              price: "$199.99",
              img: "",
            },
          ],
        },
      },
      {
        BrandId: 7,
        BrandName: "Cooler Master",
        children: {
          models: [
            {
              modelId: 1,
              title: "Cooler Master MK850",
              description: "Mechanical keyboard with Aimpad technology.",
              price: "$159.99",
              img: "",
            },
            {
              modelId: 2,
              title: "Cooler Master MM711",
              description: "Lightweight gaming mouse with honeycomb design.",
              price: "$49.99",
              img: "",
            },
            {
              modelId: 3,
              title: "Cooler Master MH670",
              description: "Wireless gaming headset with 7.1 surround sound.",
              price: "$99.99",
              img: "",
            },
          ],
        },
      },
    ],
  },
];
