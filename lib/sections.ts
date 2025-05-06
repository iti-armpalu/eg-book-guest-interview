// lib/sections.ts

export const sections = [
  {
    id: "01",
    title: "More Inequality?",
    subheading: "New tech brings progress, but the rich progress first.",
    content:
      "Ever major technology, from the plough to the railroad to electricity, to AI, increases the gap between the rich and the poor.",
      image: "/adoption-curve-graph.jpg",
    bgColorVar: "--color-0",
    textColorVar: "--text-dark",
    isCalendly: false,
  },
  {
    id: "02",
    title: "The J-Curve Problem",
    subheading:
      "Why the Adoption of New Tech is Harder For the Masses",
    content:
      "We all want to get better at what we do, but we don’t know how, so we try, but we don’t get it right.",
    image: "/j-curve-graph.jpg",
    bgColorVar: "--color-1",
    textColorVar: "--text-dark",
    isCalendly: false,
  },
  {
    id: "03",
    title: "The Empathy Gradient",
    subheading:
      "A New Way to Understand How to Adopt AI Without Anxiety",
    content:
      "All this talk about AI taking jobs is stopping the average person from adopting the most important tech out there. We can change that with this framework.",
    image: "/empathy-gradient-graph.jpg",
    bgColorVar: "--color-2",
    textColorVar: "--text-light",
    isCalendly: false,
  },
  {
    id: "04",
    title: "You Are A Lighthouse in this Fog",
    subheading:
      "",
    content:
      "With all the information and misinformation going on, no one knows who to trust. We trust you, so we want to interview you as part of a chapter in the book that will teach everyone how to apply AI without needing millions in investment.",
    image: "/book-cover-graph.jpg",
    bgColorVar: "--color-3",
    textColorVar: "--text-light",
    isCalendly: false,
  },
  {
    id: '05',
    title: 'We value your time. Choose a time that works best and we’ll handle the rest.',
    // title: 'I will be in Vevey with your team on the 12th, if you are available please pick a time. Otherwise, please pick "Another Day" and I will follow up with you',

    content: 'I’ve selected 4 time slots that work for me. Each is an 8-hour window, but the interview will take no more than 2 hours. We can align on the exact time later. If none work, I’ll add more availability for the following weeks.',
    image: '',
    bgColorVar: '--color-0', // or a distinct background
    textColorVar: '--text-dark',
    isCalendly: true, // new flag to check for special rendering
  }
  
];
