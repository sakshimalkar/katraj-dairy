export const store = {
  name: "Katraj Milk Parlour",
  nameDev: "कात्रज मिल्क पार्लर दत्तवाडी",
  tagline: "Dattawadi, Pune",
  rating: 4.4,
  reviews: 110,
  phoneDisplay: "086002 55218",
  phoneIntl: "+918600255218",
  waNumber: "918600255218",
  email: "sakshimalkar286@gmail.com",
  address: "Shop No 2, 432, Dattawadi Rd, opp. Annapurna Mess, near Mashoba Chowk, Bank Of India Colony, Panmala, Dattawadi, Pune, Maharashtra 411030",
  plusCode: "GR2Q+9R Pune, Maharashtra",
  hours: [
    { day: "Monday – Sunday", time: "7:00 am – 11:30 pm" },
  ],
  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Shop No 2, 432, Dattawadi Rd, opp. Annapurna Mess, near Mashoba Chowk, Bank Of India Colony, Panmala, Dattawadi, Pune, Maharashtra 411030"
    ) +
    "&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Shop No 2, 432, Dattawadi Rd, opp. Annapurna Mess, near Mashoba Chowk, Bank Of India Colony, Panmala, Dattawadi, Pune, Maharashtra 411030"
    ),
};

// FormSubmit.co endpoint — sends every form on the site straight to this inbox,
// no backend server required.
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${store.email}`;
