export interface Community {
  id: string;
  name: string;
  location: string;
  state: string;
  description: string;
  members: number;
  image: string;
}

export const MOCK_COMMUNITIES: Community[] = [
  {
    id: "1",
    name: "Organic Wheat Growers",
    location: "Bathinda",
    state: "Punjab",
    description: "A collective of farmers sharing best practices for organic wheat cultivation and sustainable soil management.",
    members: 1240,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    name: "Sustainable Rice Initiative",
    location: "Karnal",
    state: "Haryana",
    description: "Focusing on water-saving rice farming techniques and direct market access for members.",
    members: 850,
    image: "https://images.unsplash.com/photo-1536630596251-245f762e92c9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    name: "Dairy Farmers Union",
    location: "Anand",
    state: "Gujarat",
    description: "Supporting small-scale dairy farmers with veterinary advice and collective fodder procurement.",
    members: 3200,
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    name: "Cotton Cultivators Group",
    location: "Yavatmal",
    state: "Maharashtra",
    description: "Empowering cotton farmers through pest management education and fair price negotiation.",
    members: 1500,
    image: "https://images.unsplash.com/photo-1599582531853-3171822c954a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    name: "Horticulture Heroes",
    location: "Nashik",
    state: "Maharashtra",
    description: "A network for fruit and vegetable growers focusing on export quality standards.",
    members: 600,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "6",
    name: "Spices & Herbs Collective",
    location: "Idukki",
    state: "Kerala",
    description: "Promoting organic spice farming and direct-to-consumer sales channels.",
    members: 920,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
  }
];
