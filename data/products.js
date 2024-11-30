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
];
