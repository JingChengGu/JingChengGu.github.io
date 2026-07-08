export interface Stat {
  value: string
  label: string
  detail: string
}

/** Every figure traces to a specific resume bullet — do not add invented stats. */
export const stats: Stat[] = [
  {
    value: '10+',
    label: 'SMB clients deployed',
    detail: 'End-to-end AI agent integrations across mortgage, solar, insurance, and real estate',
  },
  {
    value: '24x',
    label: 'Faster optimization cycle',
    detail: 'Prompt optimization cut from 12 person-hours to 30 person-minutes',
  },
  {
    value: '50+',
    label: 'Agents across 3 countries',
    detail: 'Outbound operations owned end-to-end: workflows, dispositions, performance',
  },
  {
    value: '4',
    label: 'Regional teams enabled',
    detail: 'Reusable integration frameworks and deployment playbooks adopted org-wide',
  },
]
