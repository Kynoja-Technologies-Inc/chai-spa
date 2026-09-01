import {
  BackMuscleBodyIcon,
  Flower01Icon,
  Leaf01Icon,
  MedicineBottle01Icon,
  TreatmentIcon,
} from "@hugeicons/core-free-icons";

export const services = [
  {
    id: "full-body-relaxation-massage",
    icon: BackMuscleBodyIcon,
    title: "Full-Body Relaxation Massage",
    time: "60 - 90 min",
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
    imageAlt: "Full-body relaxation massage setup",
    shortDescription:
      "A healing full-body massage that eases tension and helps your body feel refreshed.",
    description:
      "A slow restorative massage for easing tight muscles, lowering stress, and bringing the body back to balance.",
    overview:
      "This full-body treatment uses calm pacing, steady pressure, and long restorative movements to release built-up tension. Your therapist adjusts focus areas around your neck, shoulders, back, legs, and arms so the session feels complete without feeling rushed.",
    bestFor: ["Whole-body fatigue", "Muscle tension", "Stress recovery"],
    includes: [
      "Pressure consultation before treatment",
      "Warm oil massage with full-body coverage",
      "Focused work on tight areas",
      "Quiet aftercare guidance",
    ],
  },
  {
    id: "revitalizing-facial-glow-treatment",
    icon: TreatmentIcon,
    title: "Revitalizing Facial Glow Treatment",
    time: "45 - 75 min",
    image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg",
    imageAlt: "Revitalizing facial glow treatment",
    shortDescription:
      "A gentle facial treatment that cleanses, hydrates, and restores your natural glow.",
    description:
      "A gentle cleanse, hydration ritual, and calming facial massage made to refresh tired skin and soften tension.",
    overview:
      "This facial is designed for skin that needs calm, hydration, and visible freshness. We combine cleansing, soft exfoliation, massage, and nourishing finishers while keeping the experience relaxed and sensory-light.",
    bestFor: ["Dull skin", "Dryness", "Facial tension"],
    includes: [
      "Skin comfort check",
      "Gentle cleanse and preparation",
      "Hydrating mask and facial massage",
      "Moisture finish and care notes",
    ],
  },
  {
    id: "aromatic-relaxation-therapy",
    icon: MedicineBottle01Icon,
    title: "Aromatic Relaxation Therapy",
    time: "50 - 80 min",
    image: "https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg",
    imageAlt: "Aromatic relaxation oils and therapy",
    shortDescription:
      "A calming session using aromatic oils to relax your mind and soothe your body.",
    description:
      "A soothing treatment using selected oils, steady pressure, and warm room rituals to calm the nervous system.",
    overview:
      "This therapy pairs light-to-medium bodywork with selected aromatics to create a slower, quieter reset. It is ideal when the body feels tired but the mind needs calm just as much as the muscles need care.",
    bestFor: ["Mental fatigue", "Restlessness", "Light body tension"],
    includes: [
      "Aroma preference check",
      "Warm oil application",
      "Relaxation-focused massage flow",
      "Breathing and grounding close",
    ],
  },
  {
    id: "herbal-exfoliation-body-wrap",
    icon: Flower01Icon,
    title: "Herbal Exfoliation & Body Wrap",
    time: "75 - 100 min",
    image: "https://images.pexels.com/photos/5480192/pexels-photo-5480192.jpeg",
    imageAlt: "Herbal exfoliation and body wrap spa treatment",
    shortDescription:
      "A soft herbal scrub and wrap that smooths, nourishes, and refreshes your skin.",
    description:
      "A soft herbal scrub and nourishing wrap that smooths skin, supports circulation, and leaves the body refreshed.",
    overview:
      "This body ritual refreshes skin through gentle exfoliation, herbal wrapping, and a calm finish that leaves the body feeling clean and softened. It works well as a longer reset or as a seasonal renewal treatment.",
    bestFor: ["Dry skin", "Seasonal reset", "Body renewal"],
    includes: [
      "Herbal scrub preparation",
      "Gentle full-body exfoliation",
      "Nourishing wrap and rest period",
      "Soft rinse and finishing care",
    ],
  },
];

export const serviceCategories = [
  {
    icon: Leaf01Icon,
    title: "Relaxation",
    items: ["Swedish massage", "Warm oil therapy", "Sleep recovery ritual"],
  },
  {
    icon: BackMuscleBodyIcon,
    title: "Body Care",
    items: ["Deep tension release", "Herbal body wrap", "Back and shoulder focus"],
  },
  {
    icon: TreatmentIcon,
    title: "Skin Care",
    items: ["Hydrating facial", "Glow treatment", "Gentle exfoliation"],
  },
];
