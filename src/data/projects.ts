import type { ProjectDetail } from "../app/components/ProjectModal";

export type ProjectCategory =
  | "Product Engineering"
  | "Machine Learning / AI"
  | "Systems & Team Projects";

export interface CategorizedProject extends ProjectDetail {
  category: ProjectCategory;
  featured?: boolean;
}

export const projects: CategorizedProject[] = [
  {
    id: "gist-capstone",
    category: "Product Engineering",
    featured: true,
    title: "The Gist (Capstone) - iOS News App",
    description:
      "Cross-platform product work focused on authenticated experiences, secure data access, and AI summarization.",
    image: `${import.meta.env.BASE_URL}images/gist.jpg`,
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Hugging Face",
    ],
    liveUrl: "https://apps.apple.com/ca/app/the-gist-summarized-news/id6471227626",
    problem:
      "Readers want fast, digestible access to news without information overload, while maintaining an app experience that feels smooth and personalized.",
    solution:
      "Built a mobile-first experience with authenticated user flows, secure data access patterns, and AI-powered summarization to make articles easier to consume.",
    architecture: [
      "Mobile app built with React Native + Expo using a shared TypeScript codebase",
      "Auth + user profiles implemented with Supabase Auth and PostgreSQL-backed storage",
      "Role-based permissions and secure access patterns for user data",
      "Integrated Hugging Face API to generate concise summaries (high-level, NDA-safe)",
      "Search + filtering UX optimized for fast retrieval and relevance (tool-neutral wording)",
    ],
    technicalDetails:
      "Focused on building production-style app flows: authentication, profile management, secure database interactions, and integration of an external NLP summarization API. Worked in an Agile workflow with task tracking, PR reviews, and milestone delivery.",
    results: [
      "Shipped an iOS build available on the App Store for real-device validation and demos",
      "Improved readability through concise summarization, enabling faster content scanning",
      "Implemented secure PostgreSQL-backed user data access with role-based permissions",
      "Delivered features iteratively via milestone-driven Agile collaboration",
    ],
  },
      {
    id: "studypulse",
    category: "Product Engineering",
    featured: true,
    title: "StudyPulse - Student Productivity & Wellbeing Web App",
    description:
      "Full-stack web app with tasks, daily check-ins, profile editing, and burnout insights, built with a clean architecture backend and a modern React UI.",
    image: `${import.meta.env.BASE_URL}images/studypulse.jpg`,
    tags: [
      "C#",
      ".NET 8",
      "PostgreSQL",
      "React",
      "TypeScript",
      "shadcn/ui",
      "Docker",
    ],
    githubUrl: "https://github.com/Farhan-Labib-afk/Student-Life-OS.git",
    problem:
      "Students juggle deadlines and wellbeing without a unified, lightweight way to track progress and stress signals.",
    solution:
      "Built a focused workflow for planning tasks, logging daily check-ins, and surfacing a weekly burnout score with quick profile updates.",
    architecture: [
      "ASP.NET Core Web API with Clean Architecture (Domain/Application/Infrastructure/WebApi)",
      "EF Core + PostgreSQL with migrations for users, tasks, check-ins, refresh tokens",
      "JWT auth with refresh tokens and secure password hashing",
      "React + TypeScript frontend with feature-based structure and TanStack Query caching",
      "Component UI built with Radix primitives + shadcn/ui patterns and Tailwind CSS",
    ],
    technicalDetails:
      "Implemented auth flows, task CRUD with filters, check-in upsert, profile update, and dashboard summary analytics. Added unit + integration tests and CI checks.",
    results: [
      "Delivered end-to-end product flow: register/login, tasks, check-ins, dashboard",
      "Enabled profile editing with secure token lifecycle",
      "Built responsive dashboards and charts using Recharts",
      "Added automated tests and CI/CD to reduce regressions",
    ],
  },
  {
    id: "medml-toolkit",
    category: "Machine Learning / AI",
    featured: true,
    title: "MedML Toolkit - Precision Medicine ML Pipeline",
    description:
      "Packaged Python toolkit + Streamlit UI for feature selection, model training, cross-validated evaluation, and diagnostic plots.",
    image: `${import.meta.env.BASE_URL}images/medml.jpg`,
    tags: [
      "Python",
      "scikit-learn",
      "pandas",
      "NumPy",
      "SciPy",
      "Matplotlib",
    ],
    githubUrl: "https://github.com/Farhan-Labib-afk/MedML-Toolkit.git",
    problem:
      "Running reproducible ML experiments on clinical-style tabular data often requires repetitive setup: preprocessing, feature selection, model training, evaluation, and plotting.",
    solution:
      "Created a packaged toolkit with a Streamlit UI that runs a configurable ML workflow end-to-end: feature selection, model training, cross-validated metrics, and visualization.",
    architecture: [
      "Packaged core library under src/medml_toolkit with a MedMLToolkit class",
      "Feature selection using ANOVA F-test and Chi-squared scoring + iterative feature selection (IFS)",
      "Model training: Logistic Regression and RBF SVM; optional GridSearchCV tuning",
      "Cross-validated evaluation producing ACC, F1, MCC, sensitivity, specificity (binary/multiclass aware)",
      "Visualization utilities (ROC/PR, PCA/TSNE, correlations) rendered in Streamlit",
    ],
    technicalDetails:
      "Implemented modular utilities for feature scoring, iterative feature count evaluation, CV prediction aggregation, and plotting helpers. Streamlit app supports CSV uploads, target selection, optional auto-binning for continuous targets, model selection, and grid search toggles.",
    results: [
      "Reduced experiment setup time by centralizing preprocessing, training, evaluation, and plots in one toolkit",
      "Enabled rapid comparison across feature counts via iterative feature selection (IFS)",
      "Provided diagnostic visualizations to support interpretability and model debugging",
      "Delivered a self-serve UI so non-ML users can run experiments on uploaded datasets",
    ],
  },
  {
    id: "cifar10-cnn",
    category: "Machine Learning / AI",
    featured: true,
    title: "CIFAR-10 CNN Classifier - Scratch vs ResNet18",
    description:
      "PyTorch training pipeline + Streamlit dashboard comparing a custom CNN against transfer learning with ResNet18 on CIFAR-10.",
    image: `${import.meta.env.BASE_URL}images/cifar.jpg`,
    tags: [
      "PyTorch",
      "Torchvision",
      "scikit-learn",
      "Streamlit",
      "Matplotlib",
    ],
    githubUrl: "https://github.com/Farhan-Labib-afk/cnn-cifar10-classification.git",
    problem:
      "It's hard to compare scratch-built CNNs against pretrained transfer learning fairly without consistent training loops, saved checkpoints, metrics, and visual reporting.",
    solution:
      "Built a reproducible pipeline that trains both models, logs results, saves artifacts, and displays outcomes in a Streamlit dashboard.",
    architecture: [
      "CIFAR-10 download + augmentation (random flip/crop) using torchvision transforms",
      "Custom CNN with 3 conv blocks + BatchNorm/ReLU/MaxPool + dropout classifier",
      "Transfer learning pipeline using pretrained ResNet18 with final layer replaced for CIFAR-10",
      "Training loop with Adam, CrossEntropyLoss, ReduceLROnPlateau; best checkpoints saved to models/",
      "Artifacts generated (curves, confusion matrix, sample predictions) and summarized into results for dashboard display",
    ],
    technicalDetails:
      "Pipeline emphasizes reproducibility: consistent training/evaluation, checkpointing, metrics persistence, and artifact generation. Streamlit dashboard reads results.json and displays metrics + generated plots, with sidebar inputs to edit/save results.",
    results: [
      "Created a repeatable benchmark workflow for scratch CNN vs transfer learning",
      "Produced per-class evaluation (classification report + confusion matrix) for deeper analysis",
      "Generated visual artifacts (training curves, sample predictions) to communicate performance",
      "Packaged results using ETL to make a dashboard-ready format",
    ],
  },
  {
    id: "self-checkout",
    category: "Systems & Team Projects",
    featured: true,
    title: "Self-Checkout System Simulator",
    description:
      "Java desktop simulation with customer/attendant UIs, bagging-area discrepancy logic, and payment flows validated with JUnit tests. Code available upon request.",
    image: `${import.meta.env.BASE_URL}images/checkout_system.jpg`,
    tags: ["Java", "Swing", "JUnit", "OOP", "Simulation"],
    problem:
      "Self-checkout software must handle many real-world edge cases: scanning vs PLU entry, weight discrepancies, attendant approvals, and multiple payment methods.",
    solution:
      "Built a simulator with customer + attendant workflows, device enable/disable logic on discrepancies, and end-to-end payment flows, backed by automated tests.",
    architecture: [
      "Swing UI with separate customer and attendant windows (JFrame/JPanel-based panels)",
      "ShoppingManager orchestrator for scanning, cart state, expected vs actual weight, and UI transitions",
      "Discrepancy detection with device disable/enable logic and attendant notification flows",
      "Payment modules for coin, banknote, credit, and debit simulations; change/dispense logic",
      "JUnit tests covering shopping logic, payment handling, and key UI panel behaviors",
    ],
    technicalDetails:
      "Implemented event/listener-driven flows to simulate scanners/scales and enforce bagging-area validation. Designed modular shopping logic for barcode, PLU, bulky items, and own-bags flows. Added test coverage with JUnit to validate edge cases.",
    results: [
      "Delivered multi-flow checkout simulation (scan/PLU/bulky/own-bags) with discrepancy handling",
      "Validated core logic with automated JUnit tests for higher confidence changes",
      "Demonstrated full-cycle customer journey: add items -> resolve discrepancies -> pay -> success",
      "Showcased team-based engineering on a logic-heavy system",
    ],
  },
  {
    id: "component-store",
    category: "Product Engineering",
    title: "Computer Component Store (DBMS Group Project)",
    description:
      "Full-stack store with customer + admin workflows, built using Flask + MySQL with HTML/CSS/JS frontend. Code available upon request.",
    image: `${import.meta.env.BASE_URL}images/dbms.jpg`,
    tags: ["Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    problem:
      "Managing an online store requires reliable data modeling for products, orders, suppliers, deliveries, and role-based admin operations.",
    solution:
      "Developed a DB-backed web application with customer shopping flows and admin dashboards for managing core store entities.",
    architecture: [
      "Flask backend exposing endpoints for customer and admin workflows",
      "Relational schema modeled in MySQL for products, orders, suppliers, deliveries, and employees",
      "Customer flows: registration/login, browsing, cart operations, checkout, order history",
      "Admin flows: CRUD operations for store entities and dashboard-style management",
    ],
    technicalDetails:
      "Focused on clean separation between backend routes and frontend templates/static assets. Used environment-based configuration and structured SQL operations through the app layer.",
    results: [
      "Delivered end-to-end store functionality across customer + admin roles",
      "Implemented core DBMS concepts through relational modeling and query-driven workflows",
      "Improved maintainability via modular routes and structured entity management",
    ],
  },
];
