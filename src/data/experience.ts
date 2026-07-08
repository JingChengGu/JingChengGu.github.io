import helportLogo from '../assets/images/logos/helport.png'
import sdgeLogo from '../assets/images/logos/sdge.png'
import mercuryLogo from '../assets/images/logos/mercury.svg'
import redrockLogo from '../assets/images/logos/redrock.png'
import ucsdLogo from '../assets/images/logos/ucsd.png'

export interface ExperienceEntry {
  role: string
  company: string
  location: string
  dates: string
  logo: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'AI Solutions Engineer & Technical Project Manager',
    company: 'Helport AI',
    location: 'San Diego, CA',
    dates: 'Jul 2025 – Present',
    logo: helportLogo,
    bullets: [
      'Led end-to-end delivery of AI agent integrations for 10+ SMB clients across mortgage, solar, insurance, and real estate — owned the full deployment lifecycle from customer discovery and solution architecture through build, go-live, and adoption measurement.',
      'Designed and deployed AI agent workflows using LangChain, Dify, n8n, and REST APIs — configured intent logic, prompt engineering, guardrails, and performance evaluation frameworks for LLM agents operating in live call center environments.',
      'Built a three-stage Dify prompt-optimization workflow orchestrated by Python, paired with a React/TypeScript human-in-the-loop review UI — reduced the prompt optimization cycle from 12 person-hours to 30 person-minutes (24x) while keeping a human approval gate before production.',
      'Built reusable integration frameworks and deployment playbooks adopted across 4 regional teams — reduced manual data entry to zero via a production MCP-pattern CRM automation layer connecting LLM agents to external systems via structured REST API tool-calling.',
      'Managed outbound sales operations across 50+ agents in 3 countries — owned call workflows, dispositions, QA feedback loops, and agent performance tracking.',
      'Stepped into B2B sales after director departure — led customer discovery, scoped the solution architecture, closed the deal solo, and doubled client revenue within 3 months.',
      'Trained team leads and regional managers on AI workflow tools — ran enablement sessions and upskilled 4 team leads to independently troubleshoot deployed systems.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'San Diego Gas & Electric',
    location: 'San Diego, CA',
    dates: 'Sep 2024 – Mar 2025',
    logo: sdgeLogo,
    bullets: [
      'Shipped Flare: an end-to-end AI-powered inspection pipeline replacing manual workflows for 400+ field employees — fine-tuned an NVIDIA mit-b3 transformer via HuggingFace, containerized with Docker, deployed to GCP via FastAPI.',
      'Built automated Python/SQL data pipelines with Airflow orchestration across 1,100+ EV charger deployments — Scikit-Learn modeling and geospatial feature engineering over messy, unstructured datasets.',
      'Developed and deployed ML forecasting models — Bayesian inference, regression, and XGBoost — monitoring performance against real usage to improve infrastructure planning.',
      'Delivered Tableau self-serve dashboards and translated ML outputs into recommendations for executive and technical audiences in weekly stakeholder reports.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Mercury Alert AI',
    location: 'San Diego, CA',
    dates: 'Jun 2023 – Oct 2023',
    logo: mercuryLogo,
    bullets: [
      'Built and deployed a production Python anomaly detection pipeline via AWS Lambda — automated real-time ingestion and alerting across 50+ devices, reducing manual error checks by 40% and improving pipeline reliability by 30%.',
      'Built model monitoring workflows in AWS QuickSight to flag low-confidence predictions in production — improved model reliability through targeted retraining, relabeling mispredictions directly in the Lambda deployment pipeline.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Redrock Biometrics',
    location: 'San Francisco, CA',
    dates: 'Jun 2022 – Sep 2022',
    logo: redrockLogo,
    bullets: [
      'Built a Python/OpenCV/NumPy pipeline to preprocess and analyze 1,200 biometric samples, enabling accurate feature extraction for downstream deep learning classification models.',
      'Optimized a KNN classification model through feature engineering and threshold tuning — reduced the False Negative Rate by 63.6% — and connected model performance metrics to engineering decisions via SQL and Tableau.',
    ],
  },
]

export interface EducationEntry {
  school: string
  degree: string
  logo: string
  details: string[]
}

export const education: EducationEntry = {
  school: 'University of California, San Diego',
  degree: 'B.S. in Data Science',
  logo: ucsdLogo,
  details: [
    'Probabilistic Modeling & Machine Learning · Statistical Methods · Scalable Machine Learning · Data Engineering · Relational Databases · Recommender Systems',
    'Certification: Google Data Analytics (Coursera)',
  ],
}
