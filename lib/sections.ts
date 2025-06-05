// lib/sections.ts

export const sections = [
  {
    id: "01",
    title: "More Inequality?",
    subheading: "New tech brings progress, but the rich progress first.",
    content: [
      "Ever major technology, from the plough to the railroad to electricity, to AI, increases the gap between the rich and the poor.",
    ],
    image: "/adoption-curve-graph.jpg",
    bgColorVar: "--color-0",
    textColorVar: "--text-dark",
    isCalendly: false,
  },
  {
    id: "02",
    title: "The J-Curve Problem",
    subheading: "Why the Adoption of New Tech is Harder For the Masses",
    content: [
      "We all want to get better at what we do, but we don’t know how, so we try, but we don’t get it right.",
    ],
    image: "/j-curve-graph.jpg",
    bgColorVar: "--color-1",
    textColorVar: "--text-dark",
    isCalendly: false,
  },
  {
    id: "03",
    title: "The Empathy Gradient",
    subheading: "A New Way to Understand How to Adopt AI Without Anxiety",
    content: [
      "All this talk about AI taking jobs is stopping the average person from adopting the most important tech out there. We can change that with this framework.",
    ],
    image: "/empathy-gradient-graph.jpg",
    bgColorVar: "--color-2",
    textColorVar: "--text-light",
    isCalendly: false,
  },
  {
    id: "04",
    title: "You Are A Lighthouse in this Fog",
    subheading: "",
    content: [
      "With all the information and misinformation going on, no one knows who to trust. We trust you, so we want to interview you as part of a chapter in the book that will teach everyone how to apply AI without needing millions in investment.",
    ],
    image: "/book-cover-graph.jpg",
    bgColorVar: "--color-3",
    textColorVar: "--text-light",
    isCalendly: false,
  },
  {
    id: "05",
    title: "Your Chapter: Processes on the Empathy Gradient",
    // title: 'I will be in Vevey with your team on the 12th, if you are available please pick a time. Otherwise, please pick "Another Day" and I will follow up with you',
    content: [
      "This chapter focuses on how to apply AI not just to isolated tasks, but to entire processes.",
      "It makes the case that achieving meaningful outcomes through AI requires more than automation; it demands structural clarity, human context, and collaboration.",
      "The chapter introduces the “Empathy Gradient,” a strategic model that helps teams identify where human judgment is essential and where automation adds value—without disrupting execution flow.",
      {
        list: [
          "A common vision",
          "A common process",
          "A common work environment",
        ],
      },
      "We see Miro as a key enabler of this shift. Its visual collaboration tools help distributed teams align not only on tasks, but on the process logic and context that make collaboration scalable and humane. We’re especially interested in how the design of the environment (Miro boards, integrations, templates) affects both human behavior and agent orchestration.",
      "Your vision for how distributed work can become more adaptive, intuitive, and agent-integrated.",
      "Lessons you’ve learned about operational clarity, team alignment, and scalable decision-making.",
    ],
    image: "",
    bgColorVar: "--color-0", // or a distinct background
    textColorVar: "--text-dark",
    isCalendly: false, // new flag to check for special rendering
  },
];
