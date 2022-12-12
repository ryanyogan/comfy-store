import type { Category, Product } from "./types";

export const categories: Category[] = [
  {
    id: "c001",
    name: "Dining tables",
    slug: "dining-tables",
    products: ["p001", "p002"],
  },
  {
    id: "c002",
    name: "Desks",
    slug: "desks",
    products: ["p003", "p004"],
  },
  {
    id: "c003",
    name: "Office chairs",
    slug: "office-chairs",
    products: ["p005", "p006"],
  },
  {
    id: "c004",
    name: "Beds",
    slug: "beds",
    products: ["p007", "p008"],
  },
  {
    id: "c005",
    name: "Nightstands",
    slug: "nightstands",
    products: ["p009", "p010"],
  },
  {
    id: "c006",
    name: "Sofas & couches",
    slug: "sofas-and-couches",
    products: ["p011", "p012"],
  },
];

export const products: Product[] = [
  // Dining tables
  {
    id: "p001",
    categoryId: "c001",
    name: "Dining table, acacia",
    description:
      "Every table is unique, with varying grain pattern and natural colour shifts that are part of the charm of wood.",
    price: 429,
    slug: "dining-table-acacia",
    images: ["/assets/products/p001.jpeg"],
  },
  {
    id: "p002",
    categoryId: "c001",
    name: "Table, oak veneer brown stained",
    description: "",
    price: 699,
    slug: "table-oak-veneer-brown-stained",
    images: ["/assets/products/p002.jpeg"],
  },
  // Desks
  {
    id: "p003",
    categoryId: "c002",
    name: "Desk sit/stand, white stained oak veneer/white",
    description:
      "This sturdy desk is guaranteed to outlast years of coffee and hard work. You get a generous work surface and a clever solution to keep cables in place underneath.",
    price: 419,
    slug: "desk-sit-stand-white-stained-oak-veneer-white",
    images: ["/assets/products/p003.jpeg"],
  },
  {
    id: "p004",
    categoryId: "c002",
    name: "Desk, black/grey-turquoise",
    description:
      "Mix and match your choice of table top and legs - or choose this ready-made combination. Strong and light-weight, made with a technique that uses less raw materials, reducing the impact on the environment.",
    price: 129.99,
    slug: "desk-black-grey-turquoise",
    images: ["/assets/products/p004.jpeg"],
  },
  // Office chairs
  {
    id: "p005",
    categoryId: "c003",
    name: "Office chair, Vissle dark grey",
    description:
      "Adjust the height and angle of this chair so your workday feels comfortable - the mesh backrest lets air through so you keep cool even when the workload rises. Built to outlast years of ups and downs.",
    price: 169.99,
    slug: "office-chair-vissle-dark-grey",
    images: ["/assets/products/p005.jpeg"],
  },
  {
    id: "p006",
    categoryId: "c003",
    name: "Conference chair with armrests, blue/white",
    description:
      "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.",
    price: 167.99,
    slug: "conference-chair-with-armrests-blue-white",
    images: ["/assets/products/p006.jpeg"],
  },
  // Beds
  {
    id: "p007",
    categoryId: "c004",
    name: "Upholstered bed frame, light grey",
    description:
      "Upholstered in soft woven fabric that brings a cosy feeling into your bedroom. The headboard is a comfy backrest for late night reading.",
    price: 149,
    slug: "upholstered-bed-frame-light-grey",
    images: ["/assets/products/p007.jpeg"],
  },
  {
    id: "p008",
    categoryId: "c004",
    name: "Upholstered storage bed, dark grey",
    description:
      "The sloping headboard and soft upholstery make this bed frame extra comfortable. Classic button detailing and turned wooden legs are timeless, while soft-closing drawers under the bed add everyday storage.",
    price: 599,
    slug: "upholstered-storage-bed-dark-grey",
    images: ["/assets/products/p008.jpeg"],
  },
  // Nightstands
  {
    id: "p009",
    categoryId: "c005",
    name: "Chest of 2 drawers, black-brown",
    description:
      "Sustainable beauty from sustainably-sourced solid wood. A traditional look combined with modern function like quiet, smooth-running drawers.",
    price: 89.99,
    slug: "chest-of-2-drawers-black-brown",
    images: ["/assets/products/p009.jpeg"],
  },
  {
    id: "p010",
    categoryId: "c005",
    name: "Bedside table, white",
    description:
      "This bedside table has room for items you want and need close at hand when sleeping - with a drawer and display shelves for decorations.",
    price: 29.99,
    slug: "bedside-table-white",
    images: ["/assets/products/p010.jpeg"],
  },
  // Sofas & couches
  {
    id: "p011",
    categoryId: "c006",
    name: "3-seat sofa, beige/brown",
    description:
      "If you like the stylish airy look, you have to try the deep generous seats. Sit down and relax by yourself or together with the whole family.",
    price: 789,
    slug: "3-seat-sofa-beige-brown",
    images: ["/assets/products/p011.jpeg"],
  },
  {
    id: "p012",
    categoryId: "c006",
    name: "3-seat sofa, dark green",
    description:
      "Do you believe in love at first sight? Sleek design, quick assembly and easy-care with a removable and washable cover make it easy to love this sofa. Welcoming to all of your loved ones!",
    price: 399,
    slug: "3-seat-sofa-dark-green",
    images: ["/assets/products/p012.jpeg"],
  },
];
