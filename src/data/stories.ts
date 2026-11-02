export interface StorySection {
  heading?: string;
  paragraphs: string[];
  quote?: string;
  quoteAuthor?: string;
}

export interface Story {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  coverImage: string;
  category: string;
  isFeatured?: boolean;
  content: StorySection[];
}

export const STORIES: Story[] = [
  {
    slug: 'on-stillness-and-craft',
    title: 'On Stillness and the Craft of Code',
    subtitle: 'Why the quietest mornings often produce the most enduring architectural decisions, and learning to listen before writing the first line.',
    excerpt: 'In an industry dominated by speed and velocity metrics, we often forget that deep system architecture is an exercise in quiet editorial discernment.',
    publishedDate: 'October 24, 2026',
    readTime: '5 min read',
    coverImage: `${import.meta.env.BASE_URL}images/story_quiet_reflection_1793609549605.jpg`,
    category: 'Reflections',
    isFeatured: true,
    content: [
      {
        paragraphs: [
          'It is 5:30 in the morning in Da Nang. Before the traffic gathers along the Han River and before notification badges light up across three monitors, there is a span of eighty minutes where the world is entirely still. The only sound is the steady rain drumming against the balcony glass and the faint hiss of the kettle heating.',
          'Early in my engineering career, I measured productivity by the sheer volume of code committed before noon. If a pull request had dozens of files and hundreds of lines of green diffs, I considered it a triumphant day. But with each passing year, and with each production system that weathered real traffic and real failure modes, that calculus inverted.',
        ],
        quote: 'Code is not merely instructions for a machine; it is an enduring form of communication between human minds across time.',
        quoteAuthor: 'Notes from a quiet morning',
      },
      {
        heading: 'The Illusion of Velocity',
        paragraphs: [
          'Modern software development moves under relentless pressure to ship faster. We create abstractions upon abstractions, generate boilerplate with a single keystroke, and celebrate the illusion of speed. Yet the most devastating failures in software systems rarely stem from slow typing. They stem from unexamined assumptions—from racing toward an implementation before understanding the nature of the problem.',
          'When we pause to consider the trade-offs—the lifecycle of a data mutation, the failure modes of an asynchronous message queue, or the cognitive burden imposed on the engineer who will inherit our work three years from now—we discover that true craftsmanship requires restraint.',
        ],
      },
      {
        heading: 'The Editorial Mindset',
        paragraphs: [
          'A good writer spends more time deleting sentences than penning them. They prune adjectives, eliminate redundancies, and clarify the core thesis until every remaining word carries weight. Software architecture, at its best, is identical.',
          'Whenever I find myself drafting a complex hierarchy of classes or a sprawling tree of component state, I now force myself to step away from the keyboard. I open a physical notebook, sketch the boundaries in pen, and ask a single question: What is the absolute minimum surface area this solution needs to be correct, resilient, and honest?',
          'More often than not, half the proposed code dissolves into thin air. What remains is simple, observable, and sturdy.',
        ],
      },
      {
        heading: 'Cultivating the Space Between',
        paragraphs: [
          'We cannot build enduring systems if our minds are permanently hyper-stimulated. The ideas that resolved our thorniest distributed locks or brought clarity to an ambiguous product spec never arrived while staring frantically at a terminal. They surfaced while walking quietly along the beach, while watching the rain wash the city streets, or while enjoying a cup of black coffee with a notebook.',
          'Cultivate that stillness. Protect it fiercely. It is not an idle pause in your work; it is the very foundation upon which your best work is forged.',
        ],
      },
    ],
  },
  {
    slug: 'between-two-cities',
    title: 'Between Two Cities: The Rhythm of Da Nang and Saigon',
    subtitle: 'Reflecting on how moving between the coastal quiet of the central coast and the relentless kinetic energy of the south shapes creative momentum.',
    excerpt: 'One city teaches patience, horizon lines, and contemplative focus; the other teaches urgency, ambition, and the thrill of relentless invention.',
    publishedDate: 'August 16, 2026',
    readTime: '7 min read',
    coverImage: `${import.meta.env.BASE_URL}images/travel_coastal_cove_1793609549760.jpg`,
    category: 'Memoir & Space',
    isFeatured: false,
    content: [
      {
        paragraphs: [
          'Every few months, my life shifts coordinates between Da Nang and Ho Chi Minh City. It is a four-hundred-mile transition, but culturally and cognitively, it feels like toggling between two fundamentally different frequencies of human existence.',
          'In Saigon, the air vibrates with an electric, kinetic hum. Street vendors, delivery motorbikes weaving through neon intersections, glass towers piercing the equatorial haze, and hundreds of young founders huddled over iced coffee discussing scaling hurdles. It is intoxicating. It forces you to confront your own pace and asks: What are you building that matters?',
        ],
      },
      {
        heading: 'The Central Sanctuary',
        paragraphs: [
          'Then the flight lands in Da Nang. The humidity softens, the horizon opens into the vast blue expanse of the East Sea, and the marble mountains stand as ancient sentinels behind the coastline. Time here stretches out. Conversations linger without an eye on the clock.',
          'For a long time, I felt torn between these two extremes. I wondered if living near the sea made me too relaxed, or if living in the southern metropolis made me too anxious. It took years to realize that the tension itself was the gift.',
        ],
        quote: 'Creativity needs both the fire of the forge and the cool water of the quenching pool.',
      },
      {
        heading: 'The Dual Engine of Life',
        paragraphs: [
          'Saigon provides the spark—the raw ambition, the encounters with brilliant peers, the urgent feedback loops that test your ideas against real market gravity. Da Nang provides the sanctuary—the mental breathing room needed to digest those inputs, synthesize architectural designs, and write code that stands the test of years rather than weeks.',
          'I no longer see them as opposing forces. They are the two strokes of an engine: inhale the world, exhale the craft.',
        ],
      },
    ],
  },
  {
    slug: 'the-weight-of-simplicity',
    title: 'The Weight of Simplicity: Unlearning Complexity',
    subtitle: 'In software engineering, adding abstractions is easy. Having the discipline to strip them away requires patience and emotional courage.',
    excerpt: 'Why junior engineers look for clever solutions, senior engineers look for simple solutions, and truly great engineers remove the problem entirely.',
    publishedDate: 'May 12, 2026',
    readTime: '6 min read',
    coverImage: `${import.meta.env.BASE_URL}images/project_cloud_mesh_1793609547944.jpg`,
    category: 'Philosophy',
    isFeatured: false,
    content: [
      {
        paragraphs: [
          'Complexity has an addictive allure in engineering. When an engineer constructs an intricate labyrinth of generic interfaces, dynamic dispatchers, and automated decorators, it produces a visceral rush of intellectual validation. It looks sophisticated. It feels profound.',
          'Yet almost every outage post-mortem I have participated in over the past eight years traced back to that very cleverness. Systems fail not at the obvious, boring junctures, but at the invisible intersections where three layers of clever indirection collided during an unexpected network partition.',
        ],
      },
      {
        heading: 'The Cost of Cleverness',
        paragraphs: [
          'Every abstraction comes with an unpaid tax. You pay it in cognitive load during code reviews. You pay it in debugging sessions at 2:00 AM when the call stack resembles an Escher staircase. You pay it when a newcomer joins your team and spends three weeks trying to understand where a single database write actually occurs.',
          'Simplicity is not the absence of thought; it is the culmination of it. It takes far more intellectual rigor to arrive at a straightforward, transparent architecture than to hide behind boilerplate design patterns.',
        ],
        quote: 'Simplicity does not precede complexity, but follows it.',
        quoteAuthor: 'Alan Perlis',
      },
      {
        heading: 'Rules for Staying Lean',
        paragraphs: [
          'Over time, I adopted three personal tests before committing any structural architectural abstraction:',
          '1. Can a developer who joined yesterday diagnose an error in this flow using only standard stack traces and grep?',
          '2. Does this abstraction solve a verified failure mode today, or a hypothetical requirement that might never arrive?',
          '3. If we had to delete this entire module tomorrow, how painful would the extraction be?',
          'When you prioritize clarity over cleverness, your software becomes lighter, your team breathes easier, and your systems endure.',
        ],
      },
    ],
  },
];
