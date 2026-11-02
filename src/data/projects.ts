export interface Project {
  id: string;
  title: string;
  headline: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  isFeatured?: boolean;
  image?: string;
  metrics?: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  year: string;
  role: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'distributed-telemetry-mesh',
    title: 'Distributed Telemetry & Edge Mesh',
    headline: 'High-throughput system observability and distributed tracing for multi-region clusters',
    description:
      'Engineered an event-driven telemetry monitoring control plane processing over 1.4M events/min with sub-30ms global visualization latency.',
    longDescription:
      'Built with a high-efficiency .NET Core pipeline, eBPF packet capture, and an ultra-responsive React canvas dashboard. Provides real-time topology mapping, automated anomaly alerts, and distributed trace inspection with zero GC pauses.',
    technologies: ['React', 'TypeScript', 'C# / .NET 9', 'Apache Kafka', 'eBPF', 'Tailwind CSS'],
    isFeatured: true,
    image: '/src/assets/images/project_cloud_mesh_1793609547944.jpg',
    metrics: [
      { label: 'Throughput', value: '1.4M req/min' },
      { label: 'Edge Latency', value: '28ms' },
      { label: 'Data Accuracy', value: '99.99%' },
    ],
    githubUrl: 'https://github.com/toinguyen/telemetry-mesh',
    liveUrl: 'https://telemetry-mesh.demo.internal',
    year: '2026',
    role: 'Lead Architect',
  },
  {
    id: 'docuflow-ai-engine',
    title: 'DocuFlow Semantic Reasoning Engine',
    headline: 'Production generative AI document intelligence and reasoning pipeline',
    description:
      'Architected a multi-modal document extraction and semantic cross-referencing system using Google Gemini 2.5 with strict Zod/Pydantic structured schemas.',
    technologies: ['Next.js', 'TypeScript', 'Gemini 2.5', 'Vector Search', 'Node.js'],
    isFeatured: false,
    githubUrl: 'https://github.com/toinguyen/docuflow-engine',
    liveUrl: 'https://docuflow.demo.internal',
    year: '2025',
    role: 'AI Systems Engineer',
  },
  {
    id: 'nexus-financial-ledger',
    title: 'Nexus Financial Consensus Core',
    headline: 'Immutable event-sourced ledger engine with real-time auditability',
    description:
      'Designed an append-only double-entry financial core utilizing CQRS, optimistic concurrency, and PostgreSQL logical replication for institutional transactions.',
    technologies: ['C# / .NET 9', 'PostgreSQL', 'Redis', 'Docker', 'System Design'],
    isFeatured: false,
    githubUrl: 'https://github.com/toinguyen/nexus-core',
    year: '2025',
    role: 'Backend Architect',
  },
  {
    id: 'hyperion-ui-system',
    title: 'Hyperion Minimalist Design System',
    headline: 'Accessible, tokenized Swiss-inspired component library for web applications',
    description:
      'Created an ultra-lightweight component architecture prioritizing zero-slop typography, keyboard navigability, and seamless dual-theme token switching.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Radix UI'],
    isFeatured: false,
    githubUrl: 'https://github.com/toinguyen/hyperion-ui',
    liveUrl: 'https://hyperion.demo.internal',
    year: '2024',
    role: 'Creator & Maintainer',
  },
];
