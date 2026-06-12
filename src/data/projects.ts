import type { TagColor } from "./skills";

export interface Project {
  slug: string;
  area: string;
  title: string;
  description: string;
  tags: string[];
  color: TagColor;
  /** Longer write-up shown on the project detail page. One paragraph per entry. */
  details: string[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    slug: "threat-detection-system",
    area: "SECURITY · Python · scikit-learn · pandas",
    title: "Threat Detection System",
    description:
      "Supervised ML pipeline that classifies network and system logs as benign or malicious, combining a Random Forest classifier with anomaly scoring to flag intrusions in real time.",
    tags: ["scikit-learn", "Python", "Random Forest", "IsolationForest"],
    color: "p",
    details: [
      "Built a dual-signal detection pipeline: a Random Forest classifier scores each flow against its training labels while an IsolationForest flags structurally anomalous records that fall outside the learned distribution — combining supervised accuracy with unsupervised coverage for unknown attack patterns.",
      "Wrote parsers for two real-world log formats: CICIDS2017 CSV (with column-name whitespace, 'Infinity' string values in rate columns, and label normalization) and Suricata eve.json (both newline-delimited and JSON array), so the same trained model can run against captures from different toolchains without pre-processing.",
      "Feature engineering separates numeric flow statistics (duration, packet counts, byte volumes, flow rates) from categorical protocol fields via a ColumnTransformer — StandardScaler on numerics, OneHotEncoder on categoricals — then feeds into a balanced-class Random Forest with parallelized training across all cores.",
      "The CLI (`threatdetect train / predict / evaluate`) handles the full lifecycle: training with an 80/20 stratified split, serializing the model bundle and a metadata JSON with top-20 feature importances, and producing per-record threat probability reports in JSON for downstream alerting or SIEM ingestion.",
      "Trained on 2,264,594 records from the CICIDS2017 dataset — covering DoS, DDoS, PortScan, Brute Force, Web Attacks, Infiltration, and Botnet traffic — and evaluated on a held-out 566,149 records: 99.33% accuracy, 98.96% F1-macro, 99.89% ROC-AUC.",
    ],
    links: [{ label: "View on GitHub", url: "https://github.com/yourname/attack-logs" }],
  },
  {
    slug: "adversarial-resnet50-attacks",
    area: "AI SECURITY · Python · PyTorch",
    title: "Adversarial Attack Workbench",
    description:
      "Research workbench for generating and analysing adversarial examples against a ResNet50 brain tumor MRI classifier — probing model robustness with FGSM, PGD, and DeepFool attacks.",
    tags: ["PyTorch", "Python", "FGSM", "PGD", "DeepFool"],
    color: "t",
    details: [
      "Built a workbench to evaluate the adversarial robustness of a ResNet50 classifier trained to detect brain tumors across four classes (glioma, meningioma, pituitary, no tumor) against 1,600 test images.",
      "Implemented three attack algorithms — FGSM (single-step L∞), PGD (iterative L∞), and DeepFool (minimum L2 perturbation) — alongside three search strategies: fixed epsilon grids, binary search for the minimum fooling ε, and a sweep mode that finds the first ε at which the model breaks.",
      "Key findings: over 55% of images are misclassified at perturbations below the threshold of human perception; PGD reaches 99.4% fool rate by ε = 0.005; pituitary is the most fragile class while glioma is the most robust; and high softmax confidence is not a reliable indicator of robustness.",
      "Identified a clinically dangerous confusion pattern — glioma being misclassified as notumor — and a dominant pituitary ↔ meningioma confusion pair, suggesting the model has conflated feature representations rather than learning fully separable decision boundaries.",
      "Includes a gallery renderer that produces three-panel comparison images (original | adversarial | perturbation heatmap) and a grid of the most vulnerable examples in the test set.",
    ],
    links: [{ label: "View on GitHub", url: "https://github.com/cmheeb/Adversarial-ResNet50-Attacks" }],
  },
  {
    slug: "log-analysis-siem-integration",
    area: "SOC · SIEM · Python · Linux",
    title: "Log Analysis & SIEM Integration",
    description:
      "Automated log ingestion and alerting workflows integrated with SIEM tooling to reduce analyst triage time and surface high-priority events.",
    tags: ["SIEM", "Python", "automation", "Linux"],
    color: "b",
    details: [
      "Built ingestion and normalization pipelines that bring logs from disparate sources into a consistent format for SIEM correlation rules.",
      "Wrote automation that pre-triages incoming events by severity and known patterns, cutting down the volume an analyst has to manually review.",
      "Deployed and tuned on Linux infrastructure with an emphasis on reliability — the pipeline keeps running and keeps surfacing the events that matter.",
    ],
    links: [{ label: "View on GitHub", url: "https://github.com/yourname/log-analysis-siem" }],
  },
  {
    slug: "secure-web-application",
    area: "FULL-STACK · Security-focused",
    title: "Secure Web Application",
    description:
      "Full-stack application built with security-first principles — input validation, auth hardening, and monitoring instrumentation throughout the stack.",
    tags: ["full-stack", "secure auth", "C++", "monitoring"],
    color: "a",
    details: [
      "Designed and built a full-stack application where security was a first-class concern from day one rather than a layer bolted on afterward.",
      "Implemented strict input validation at every boundary, hardened authentication flows, and added monitoring instrumentation so unusual behavior is visible immediately.",
      "Performance-sensitive components were written in C++ to keep the security checks from becoming a bottleneck.",
    ],
    links: [{ label: "View on GitHub", url: "https://github.com/yourname/secure-web-app" }],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
