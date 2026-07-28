export const site = {
  name: "Puracator",
  legalName: "Puracator",
  registered: "PURACATOR®",
  domain: "puracator.co.uk",
  tagline:
    "The only machine that cleans, clears and pasteurises the drains of sinks, urinals and multi-deck refrigerated display cabinets — without dismantling the pipework.",
  shortTagline: "Clean drains. No dismantling. No mess.",
  contact: {
    address: {
      line1: "Unit 2C, Churnet Park",
      line2: "James Brindley Road",
      city: "Leek, Staffs",
      postcode: "ST13 8YH",
      country: "United Kingdom",
    },
    email: "info@puracator.co.uk",
    phone: "+44 (0)1908 000 000",
    phoneHref: "tel:+441908000000",
  },
} as const;

export const nav = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Products", href: "/products" },
  { label: "Affiliated products", href: "/affiliated-products" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: "5 bar", label: "Pressured water 'ring' delivered by the Purascope" },
  { value: "0", label: "Pipework dismantled — clean in place" },
  { value: "100%", label: "Inner pipe surface reached by saturated steam" },
  { value: "Months", label: "Protection when finished with a biocide coat" },
] as const;

export const applications = [
  {
    title: "Sinks",
    desc: "Kitchen and washroom sink drains cleared of grease, scale and food waste build-up.",
    icon: "sink",
  },
  {
    title: "Urinals",
    desc: "Uric scale and blockages removed and the pipe pasteurised to kill odour-causing bacteria.",
    icon: "urinal",
  },
  {
    title: "Refrigerated cabinets",
    desc: "The condensate drains of multi-deck refrigerated display cabinets cleaned without stripping the unit.",
    icon: "fridge",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Insert the Purascope",
    desc: "The specially designed Purascope is fed into the drain — no pipework is removed and the fixture stays in place.",
  },
  {
    step: "02",
    title: "Pressured ring of water",
    desc: "A pressured 'ring' of water at five bar removes obstructions and strips surface contamination, including any biofilm formed on the inner pipe wall.",
  },
  {
    step: "03",
    title: "Saturated steam pasteurises",
    desc: "Saturated steam is applied to the entire inner surface of the drain, leaving it hygienically — and measurably — clean.",
  },
  {
    step: "04",
    title: "Protect and extend",
    desc: "An enzyme or biocide treatment can then be applied to the inner surface to inhibit future growth and extend the interval between cleans.",
  },
] as const;

export const products = [
  {
    id: "sf",
    name: "Puracator SF",
    kicker: "Standard Flush",
    image: "sf-model2.png.webp",
    imageAlt: "The compact, portable Puracator SF machine",
    summary:
      "Cleans and clears the drains of sinks, urinals and multi-deck refrigerated display cabinets without dismantling the pipework.",
    features: [
      "Purascope water-ring cleaning at 5 bar",
      "Clears obstructions and removes biofilm",
      "No pipework removal — clean in place",
      "Compact, portable and mains-powered",
    ],
    accent: "from-brand to-brand-400",
    featured: false,
  },
  {
    id: "mf",
    name: "Puracator MF",
    kicker: "Multi-Function",
    image: "mf.png.webp",
    imageAlt: "The Puracator MF machine on its mobile trolley",
    summary:
      "Cleans, clears AND pasteurises the drains of sinks, urinals and multi-deck refrigerated display cabinets — the complete hygiene cycle.",
    features: [
      "Everything the SF does, plus saturated steam",
      "Pasteurises the full inner pipe surface",
      "Kills odour- and disease-causing bacteria",
      "Ready for enzyme / biocide after-treatment",
    ],
    accent: "from-aqua to-cyan",
    featured: true,
  },
] as const;

export const affiliated = [
  {
    name: "Goldshield GS75",
    category: "Long-term antimicrobial",
    desc: "A multi-surface disinfectant used in conjunction with the PURACATOR® system. Coating the internal pipe with this non-corrosive product inhibits the development of bacterial growth for months after the initial application.",
    points: [
      "Kills 99.99% of germs, including MRSA and Norovirus",
      "Non-corrosive — safe on pipework",
      "Keeps killing for months after application",
    ],
  },
  {
    name: "WhiffAway",
    category: "Washroom hygiene systems",
    desc: "A trusted washroom and drainage hygiene range that pairs naturally with Puracator's cleaning cycle to keep sinks, urinals and drains fresh between services.",
    points: [
      "Odour control and drainage hygiene",
      "Turnkey design, manufacture and maintenance",
      "Complements the Puracator clean-and-protect cycle",
    ],
  },
] as const;

export const faqs = [
  {
    q: "Does Puracator really clean drains without removing any pipework?",
    a: "Yes. The Purascope is fed into the drain in place — no joints are undone and the sink, urinal or cabinet stays exactly where it is. The pressured 5-bar water ring and saturated steam do the work from inside the pipe.",
  },
  {
    q: "What's the difference between the SF and MF machines?",
    a: "Both clean and clear the drains of sinks, urinals and multi-deck refrigerated display cabinets. The MF adds saturated-steam pasteurisation, which raises the entire inner pipe surface to a hygienic temperature — the complete clean-and-pasteurise cycle in one visit.",
  },
  {
    q: "How is this better than rods or chemical drain cleaner?",
    a: "Rodding pushes blockages along and misses the pipe wall; chemicals are harsh and temporary. Puracator's water ring strips the biofilm bonded to the inner surface, and steam pasteurises what's left — the source of odours and contamination, not just the symptom.",
  },
  {
    q: "How long does the result last?",
    a: "After cleaning, an enzyme or biocide treatment such as Goldshield GS75 can be applied to the inner pipe. It inhibits bacterial regrowth for months and significantly extends the interval between cleans.",
  },
  {
    q: "Can I see it working before buying?",
    a: "Absolutely — we recommend it. Book a demonstration and we'll clean a real drain on your own site, so you can see the before and after with no pipework removed and no mess left behind.",
  },
] as const;

export const benefits = [
  {
    title: "No dismantling",
    desc: "Clean drains in place. No stripping pipework, no downtime tearing units apart, no reassembly.",
    icon: "wrench",
  },
  {
    title: "Genuinely hygienic",
    desc: "Saturated steam reaches 100% of the inner pipe surface — not just a flush, a pasteurisation.",
    icon: "shield",
  },
  {
    title: "Removes biofilm",
    desc: "The 5-bar water ring strips the bacterial biofilm that ordinary rodding and chemicals leave behind.",
    icon: "wave",
  },
  {
    title: "Lasting protection",
    desc: "Finish with an enzyme or biocide coat to inhibit regrowth and stretch the time between cleans.",
    icon: "clock",
  },
  {
    title: "One machine, three jobs",
    desc: "Sinks, urinals and refrigerated cabinet drains — a single unit handles all three.",
    icon: "layers",
  },
  {
    title: "Chemical-light",
    desc: "Water and steam do the heavy lifting, so you reach for far fewer harsh drain chemicals.",
    icon: "leaf",
  },
] as const;
