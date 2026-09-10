// Product catalogue — names taken directly from the Katraj Milk Parlour
// signboard (Dattawadi branch), grouped into shoppable categories.

export const categories = [
  { id: "all", label: "All" },
  { id: "milk", label: "Milk & Buttermilk" },
  { id: "lassi", label: "Lassi" },
  { id: "ghee-cream", label: "Ghee & Cream" },
  { id: "paneer", label: "Paneer" },
  { id: "sweets", label: "Shrikhand & More" },
];

export const products = [
  { id: 1, name: "Milk", nameDev: "दूध", category: "milk", icon: "bi-cup-straw", tag: "Daily fresh", desc: "Farm-fresh, pasteurised milk delivered every morning." },
  { id: 2, name: "Flavoured Milk", nameDev: "सुगंधी दूध", category: "milk", icon: "bi-cup-hot", tag: "Kids' favourite", desc: "Lightly sweetened, aromatic milk in classic flavours." },
  { id: 3, name: "Jeera Buttermilk", nameDev: "जिरा ताक", category: "milk", icon: "bi-droplet-half", tag: "Cooling", desc: "Spiced buttermilk with roasted cumin — a summer staple." },
  { id: 4, name: "Plain Buttermilk", nameDev: "साधे ताक", category: "milk", icon: "bi-droplet", tag: "Everyday", desc: "Light, tangy buttermilk churned fresh in-house." },
  { id: 5, name: "Lassi", nameDev: "लस्सी", category: "lassi", icon: "bi-cup", tag: "Bestseller", desc: "Thick, creamy classic lassi made the traditional way." },
  { id: 6, name: "Mango Lassi", nameDev: "मँगो लस्सी", category: "lassi", icon: "bi-cup-fill", tag: "Seasonal", desc: "Real mango pulp folded into our signature lassi." },
  { id: 7, name: "Pineapple Lassi", nameDev: "पायनापल लस्सी", category: "lassi", icon: "bi-cup-fill", tag: "Fruity", desc: "A tropical twist on our house lassi recipe." },
  { id: 8, name: "Cow Cream", nameDev: "गाय क्रिम", category: "ghee-cream", icon: "bi-egg-fried", tag: "Rich", desc: "Pure, hand-skimmed cream from cow's milk." },
  { id: 9, name: "Cow Ghee", nameDev: "गाय तूप", category: "ghee-cream", icon: "bi-droplet-fill", tag: "Slow-cooked", desc: "Traditional bilona-style ghee, slow-simmered for aroma." },
  { id: 10, name: "Buffalo Cream", nameDev: "म्हैस क्रिम", category: "ghee-cream", icon: "bi-egg-fried", tag: "Extra rich", desc: "Thick, luscious cream from buffalo milk." },
  { id: 11, name: "Buffalo Ghee", nameDev: "म्हैस तूप", category: "ghee-cream", icon: "bi-droplet-fill", tag: "Classic", desc: "Deep golden ghee with a full-bodied aroma." },
  { id: 12, name: "Malai Paneer", nameDev: "मलई पनीर", category: "paneer", icon: "bi-square", tag: "Soft & fresh", desc: "Malai-soft paneer, cut fresh to order." },
  { id: 13, name: "Low-Fat Paneer", nameDev: "लो फॅट पनीर", category: "paneer", icon: "bi-square-fill", tag: "Light", desc: "A lighter paneer for everyday cooking." },
  { id: 14, name: "Shrikhand", nameDev: "श्रीखंड", category: "sweets", icon: "bi-flower2", tag: "Festive", desc: "Hung-curd shrikhand, silky and lightly sweetened." },
  { id: 15, name: "Aamrakhand", nameDev: "आम्रखंड", category: "sweets", icon: "bi-flower3", tag: "Seasonal", desc: "Shrikhand layered with real alphonso mango." },
  { id: 16, name: "Chakka", nameDev: "चक्का", category: "sweets", icon: "bi-circle-square", tag: "Base culture", desc: "Hung curd base, ready for your own shrikhand or dips." },
  { id: 17, name: "Curd", nameDev: "दही", category: "milk", icon: "bi-cup-straw", tag: "Set daily", desc: "Thick, set curd made fresh in small batches." },
  { id: 18, name: "Loni (White Butter)", nameDev: "लोणी", category: "ghee-cream", icon: "bi-record-circle", tag: "Traditional", desc: "Hand-churned white butter, unsalted and pure." },
];
