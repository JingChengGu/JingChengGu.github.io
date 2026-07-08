import type { LucideIcon } from 'lucide-react'
import {
  Workflow,
  Bot,
  Code2,
  Cloud,
  BrainCircuit,
  BarChart3,
  Wrench,
} from 'lucide-react'

export interface SkillCategory {
  title: string
  icon: LucideIcon
  items: string[]
  /** 12-column bento spans; collapse handled in CSS below 900px */
  colSpan: number
  rowSpan: number
  featured?: boolean
}

/** Categories and tools verbatim from resume Technical Skills section. */
export const skills: SkillCategory[] = [
  {
    title: 'Integration & Automation',
    icon: Workflow,
    items: [
      'n8n',
      'Dify',
      'REST APIs',
      'Webhooks',
      'JSON',
      'GraphQL',
      'MCP (Model Context Protocol)',
      'FastAPI',
      'CRM API integrations (Pipedrive, HubSpot-pattern)',
    ],
    colSpan: 6,
    rowSpan: 2,
    featured: true,
  },
  {
    title: 'AI & Agent Configuration',
    icon: Bot,
    items: [
      'LangChain',
      'LangGraph',
      'Prompt Engineering',
      'LLM Agent Design',
      'Intent Definition',
      'Guardrails',
      'Evaluation Frameworks',
      'RAG Pipelines',
      'HuggingFace',
    ],
    colSpan: 6,
    rowSpan: 2,
    featured: true,
  },
  {
    title: 'Programming',
    icon: Code2,
    items: ['Python', 'JavaScript', 'SQL', 'Pandas', 'NumPy'],
    colSpan: 4,
    rowSpan: 1,
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    items: ['AWS (Lambda, QuickSight)', 'GCP', 'Docker', 'Apache Airflow', 'PostgreSQL', 'CI/CD', 'GitHub'],
    colSpan: 4,
    rowSpan: 1,
  },
  {
    title: 'ML & Modeling',
    icon: BrainCircuit,
    items: [
      'PyTorch',
      'Scikit-Learn',
      'XGBoost',
      'LightGBM',
      'Anomaly Detection',
      'Feature Engineering',
      'Bayesian Inference',
      'Statistical Modeling',
    ],
    colSpan: 4,
    rowSpan: 1,
  },
  {
    title: 'BI & Reporting',
    icon: BarChart3,
    items: ['Tableau', 'Power BI', 'AWS QuickSight'],
    colSpan: 6,
    rowSpan: 1,
  },
  {
    title: 'Dev Tools & Practices',
    icon: Wrench,
    items: [
      'Claude Code',
      'Cursor',
      'GitHub Copilot',
      'Jira',
      'Agile/Scrum',
      'Stakeholder Communication',
      'A/B Testing',
      'Model Monitoring',
    ],
    colSpan: 6,
    rowSpan: 1,
  },
]
