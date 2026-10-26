
export type PackageData = {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  duration: string;
  featured: boolean;
  services: string[];
  gifts: string[];
  button: string;
};

export const packages: PackageData[] = [
  {
    id: "essential",
    name: "Essential",
    price: "399 €",
    originalPrice: "450 €",
    duration: "4 ore",
    featured: false,
    services: [
      "Cabină foto",
      "Fotografii nelimitate",
      "Fotografii digitale",
      "QR Sharing",
      "Accesorii foto",
      "Audio Guest Book",
      "Cutie pentru dar",
      "Oglindă selfie personalizată",
      "Șevalet Welcome",
    ],
    gifts: [
      "🎁 Guestbook personalizat",
    ],
    button: "Alege Essential",
  },
  {
    id: "premium",
    name: "Premium",
    price: "699 €",
    originalPrice: "950 €",
    duration: "5 ore",
    featured: true,
    services: [
      "Cabină foto",
      "Fotografii nelimitate",
      "Fotografii digitale",
      "QR Sharing",
      "Accesorii foto",
      "Audio Guest Book",
      "Cutie pentru dar",
      "Oglindă selfie personalizată",
      "Șevalet Welcome",
      "Panou Seating Plan",
      "Photo Corner personalizat",
    ],
    gifts: [
      "🎁 Guestbook personalizat",
      "🍬 Candy bar pentru 30 de persoane",
      "🍫 Fântână de ciocolată",
      "🍓 60 de frigărui cu fructe",
    ],
    button: "Alege Premium",
  },
  {
    id: "luxury",
    name: "Luxury",
    price: "1.200 €",
    originalPrice: "1.800 €",
    duration: "6 ore",
    featured: false,
    services: [
      "Cabină foto",
      "Fotografii fizice și digitale nelimitate",
      "Accesorii foto",
      "Audio Guest Book",
      "Cutie pentru dar",
      "Oglindă selfie personalizată",
      "Șevalet Welcome",
      "Panou Seating Plan",
      "Photo Corner personalizat",
      "Aparat cu baloane de fum",
      "Pahare personalizate pentru miri și nași",
      "Decor pentru camera mirilor",
      "Panou «These Kids Are Getting Married»",
    ],
    gifts: [
      "🎁 Guestbook personalizat",
      "🍫 Fântână de ciocolată cadou",
      "🍓 120 de frigărui cu fructe cadou",
      "🥞 Bar de mini-pancakes nelimitat — valoare de 6 €/persoană",
    ],
    button: "Alege Luxury",
  },
  {
    id: "botez",
    name: "Botez",
    price: "499 €",
    originalPrice: "650 €",
    duration: "5 ore",
    featured: false,
    services: [
      "Cabină foto",
      "Fotografii fizice și digitale nelimitate",
      "QR Sharing",
      "Audio Guest Book",
      "Photo Corner personalizat sau arcadă de baloane, la alegere",
      "Panou «Bine ați venit!»",
      "Oglindă selfie personalizată",
    ],
    gifts: [
      "🎁 Guestbook personalizat",
    ],
    button: "Alege Botez",
  },
  {
    id: "aniversare",
    name: "Aniversare",
    price: "399 €",
    originalPrice: "500 €",
    duration: "4 ore",
    featured: false,
    services: [
      "Cabină foto",
      "Fotografii fizice și digitale nelimitate",
      "Photo Corner personalizat sau arcadă de baloane, la alegere",
      "Oglindă selfie personalizată",
    ],
    gifts: [
      "🎁 Guestbook personalizat",
    ],
    button: "Alege Aniversare",
  },
];
