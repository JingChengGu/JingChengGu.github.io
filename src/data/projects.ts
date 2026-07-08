import newsapiImg from '../assets/images/projects/newsapi.png'
import spotifyImg from '../assets/images/projects/spotify.jpeg'
import helportLogo from '../assets/images/logos/helport.png'
import pipedriveLogo from '../assets/images/logos/pipedrive.svg'
import sdgeLogo from '../assets/images/logos/sdge.png'

export interface Project {
  title: string
  year: string
  tagline: string
  problem: string
  approach: string
  outcome: string
  tags: string[]
  /** Header-band screenshot; cards without one get a branded gradient + logo fallback */
  image?: string
  /** Client/platform logo shown in the header band when there is no screenshot */
  logo?: string
  repo?: string
  demo?: { label: string; url: string }
  /** 12-column bento span; collapse handled in CSS below 900px */
  colSpan: number
  featured?: boolean
}

/**
 * Sources: resume Project Experience section + verified GitHub repos
 * (Tech_Stocks_VS_News_Sentiment, spotify_monthly_listener_predictor).
 * No invented metrics — every number traces to the resume or repo notebooks.
 */
export const projects: Project[] = [
  {
    title: 'TwinX Prompt Optimization Pipeline',
    year: '2026',
    tagline: 'AI-assisted workflow tooling with a human approval gate',
    problem:
      'Optimizing the system prompts behind a live voice bot took 4 people × 3 hours per cycle — too slow to keep pace with real-world call data.',
    approach:
      'Designed a three-stage Dify workflow (transcript extraction → deduplication/clustering → surgical prompt assembly) running on Gemini 2.5 Flash, orchestrated end-to-end by a Python script that batches outbound call transcripts. Built a React/TypeScript human-in-the-loop review UI in Claude Code so operators inspect and confirm every proposed change.',
    outcome:
      'Cut the cycle from 12 person-hours to 30 person-minutes — a 24x reduction — while preserving human oversight on every change that reaches the production voice bot.',
    tags: ['Dify', 'Gemini 2.5 Flash', 'Python', 'React', 'TypeScript', 'Claude Code'],
    logo: helportLogo,
    colSpan: 12,
    featured: true,
  },
  {
    title: 'CRM Lead Entry AI Agent',
    year: '2026',
    tagline: 'Production integration deployed across a multi-team operation',
    problem:
      'Every call outcome had to be manually re-keyed into the CRM — contacts, deals, notes, calendar activities — across multiple regional teams.',
    approach:
      'Built a production LangChain agent with LLM function calling that parses unstructured call transcripts and creates structured Pipedrive records via its REST API. Deployed a configurable JavaScript web app with custom inference logic — entity extraction, routing rules, timezone normalization, attendee injection — hosted on Netlify.',
    outcome:
      'In daily use across 4 regional teams; per-record processing under 60 seconds at scale, with accuracy tracked and prompt logic iterated across successive production versions.',
    tags: ['LangChain', 'Function Calling', 'Pipedrive API', 'JavaScript', 'Netlify'],
    logo: pipedriveLogo,
    colSpan: 6,
  },
  {
    title: 'EV Charger Fault Detection (Flare)',
    year: '2026',
    tagline: 'End-to-end computer vision deployment for field operations',
    problem:
      'Fault inspection across SDG&E EV charger infrastructure was a fully manual workflow for 400+ field employees.',
    approach:
      'Designed a two-stage PyTorch inference pipeline — an NVIDIA mit-b3 transformer for semantic segmentation followed by a binary classifier served via HuggingFace — containerized with Docker and deployed on GCP via FastAPI.',
    outcome:
      'Replaced the manual inspection workflow end-to-end, designed as a reusable, configurable application so fault detection scales to new device types without retraining from scratch. Presented to 200+ SDG&E employees, from principal engineers to directors.',
    tags: ['PyTorch', 'HuggingFace', 'Docker', 'GCP', 'FastAPI'],
    logo: sdgeLogo,
    demo: { label: 'Website', url: 'https://jingchenggu.github.io/FLARE-website/' },
    colSpan: 6,
  },
  {
    title: 'Financial News Sentiment Pipeline',
    year: '2025',
    tagline: 'Automated daily ETL with domain-tuned sentiment scoring',
    problem:
      'Correlating market-moving news with price action requires ingesting unstructured news text daily and scoring it reliably — generic sentiment models misclassify financially-neutral language.',
    approach:
      'Built an Apache Airflow + Docker + PostgreSQL ETL pipeline ingesting news (NewsAPI) and price data (Alpha Vantage) for 10 stocks. Started with TextBlob, then switched to FinBERT — a domain-specific transformer via PyTorch — after finding generic models misread neutral financial language; added keyword heuristics to filter non-financial noise (e.g. fruit-related "Apple" articles).',
    outcome:
      'A daily automated inference workflow with end-to-end data quality validation and anomaly alerting, scoring sentiment on a −1 to 1 scale and surfacing results in a self-serve Tableau dashboard.',
    tags: ['Apache Airflow', 'Docker', 'PostgreSQL', 'FinBERT', 'PyTorch', 'Tableau'],
    image: newsapiImg,
    repo: 'https://github.com/JingChengGu/Tech_Stocks_VS_News_Sentiment',
    demo: {
      label: 'Dashboard',
      url: 'https://public.tableau.com/app/profile/jason.gu2268/viz/stocks_and_news/Dashboard1',
    },
    colSpan: 6,
  },
  {
    title: 'Spotify Monthly Listener Predictor',
    year: '2025',
    tagline: 'Regression modeling on Spotify artist data',
    problem:
      'A&R scouts evaluating independent artists need a fast way to estimate audience size from public signals.',
    approach:
      'Modeled monthly listener counts from popularity score, follower count, and release-year range on a static Spotify artist dataset — benchmarking Linear/Ridge regression against tree ensembles (Random Forest, XGBoost, LightGBM) with GridSearchCV tuning.',
    outcome:
      'Improved test R² from ≈0.73 (linear baselines) to ≈0.97 with tree-based models, ending with a live prediction demo against a named artist.',
    tags: ['Scikit-Learn', 'XGBoost', 'LightGBM', 'Pandas', 'GridSearchCV'],
    image: spotifyImg,
    repo: 'https://github.com/JingChengGu/spotify_monthly_listener_predictor',
    colSpan: 6,
  },
]
