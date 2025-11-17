// Project Section Logo's
import Neflix_dashboard_snapshot from './assets/work_logo/Neflix_dashboard_snapshot.png';
import Amazon_dashboard_snapshot from './assets/work_logo/Amazon prime snapshot.png';
import Insurance_dashboard from './assets/work_logo/Overview page.png';
import Stud_performance from './assets/work_logo/Index.png';
// Using existing image as placeholder for Financial Risk Dashboard
import Financial_risk_dashboard from './assets/work_logo/Loan default and overview page 1 (1).png';
import Applicant_demographics from './assets/work_logo/applicant demographics and financial profile page 2.png';
import Financial_risk_metrics from './assets/work_logo/financial risk metrics page 3.png';
// Import new images for Blinkit and Credit Card projects
import Blinkit_dashboard from './assets/work_logo/Blinkit Dashboard image.png';
import CC_Transaction_Report from './assets/work_logo/CC_Transaction Report.png';
import CC_Customer_Report from './assets/work_logo/CC_Customer Report.png';
// Placeholder image for Car24 Web Scraper Project
import Car24_scraper from './assets/work_logo/cars24.png';
// New images as requested
import Resume_analyzer from './assets/work_logo/Resume analyzer.png';
// Disease Predictor images
import Disease_home from './assets/work_logo/Disease predictor images/Home.png';
import Disease_screenshot1 from './assets/work_logo/Disease predictor images/Screenshot 2025-07-21 181413.png';
import Disease_screenshot2 from './assets/work_logo/Disease predictor images/Screenshot 2025-07-21 181441.png';
import Disease_screenshot3 from './assets/work_logo/Disease predictor images/Screenshot 2025-07-21 181521.png';
import Disease_screenshot4 from './assets/work_logo/Disease predictor images/Screenshot 2025-07-21 181555.png';
import Disease_screenshot5 from './assets/work_logo/Disease predictor images/Screenshot 2025-07-21 181659.png';
import Disease_screenshot6 from './assets/work_logo/Disease predictor images/Screenshot 2025-07-21 181718.png';
import Disease_screenshot7 from './assets/work_logo/Disease predictor images/Screenshot 2025-07-21 181802.png';
import Disease_screenshot8 from './assets/work_logo/Disease predictor images/Screenshot 2025-07-21 181818.png';
import Disease_screenshot9 from './assets/work_logo/Disease predictor images/Screenshot 2025-07-21 182033.png';
import Disease_screenshot10 from './assets/work_logo/Disease predictor images/Screenshot 2025-07-21 182048.png';
// Live Project Images
import DikshaPortfolioImage from './assets/work_logo/Diksha portfolio.png';
import SonaliMakeoverImage from './assets/work_logo/Sonalimakeoverartistry.png';
import HorekaImage from './assets/work_logo/Horeka.png';
import AurumImage from './assets/work_logo/aurum.png';
// Network Security Project Image
import NetworkSecurityImage from './assets/work_logo/Gemini_Generated_Image_huwzkdhuwzkdhuwz.png';

export const projects = [
  {
    id: 0,
    title: "Financial Risk Analytics Dashboard",
    description: "A three-page interactive Power BI dashboard that analyzes loan risk, borrower behavior, demographic trends, and default patterns. Built to support financial institutions, credit analysts, and risk teams in making data-driven decisions.",
    images: [Financial_risk_dashboard, Applicant_demographics, Financial_risk_metrics],
    tags: ["Power BI", "Data Analysis", "Risk Analytics", "Financial Data", "DAX", "Data Modeling", "Dashboard"],
    category: ["Data Science", "Data Analysis"],
    github: "https://github.com/SamyakAnand/Financial-Risk-Analytics-Dashboard-End-to-End-Power-BI-Project",
    webapp: "https://github.com/SamyakAnand/Financial-Risk-Analytics-Dashboard-End-to-End-Power-BI-Project",
  },
  {
    id: 1,
    title: "Credit Card Analytics Dashboard",
    description: "An end-to-end Power BI analytics solution that provides deep insights into credit card revenue, customer demographics, spending behavior, transaction patterns, high-value segments, risk profiling, expenditure trends, and performance by age, education, income, job, and state. The dashboard consists of two fully-designed pages: Transaction Report and Customer Report.",
    images: [CC_Transaction_Report, CC_Customer_Report],
    tags: ["Power BI", "Data Analysis", "Financial Data", "DAX", "Data Modeling", "Dashboard", "MSSQL"],
    category: ["Data Science", "Data Analysis"],
    github: "https://github.com/SamyakAnand/Credit-Card-Analytics-Dashboard-Power-BI-",
    webapp: "https://github.com/SamyakAnand/Credit-Card-Analytics-Dashboard-Power-BI-",
  },
  {
    id: 2,
    title: "Blinkit Sales & Inventory Analytics Dashboard",
    description: "An interactive Power BI dashboard that analyzes sales performance, outlet behavior, product categories, fat content distribution, and outlet characteristics for Blinkit (India's Last Minute App). The dashboard helps stakeholders understand sales performance across outlets, product-level contribution, fat content & outlet tier impact on sales, item visibility, ratings, and inventory distribution.",
    image: Blinkit_dashboard,
    tags: ["Power BI", "Data Analysis", "Sales Analytics", "Inventory Management", "DAX", "Data Modeling", "Dashboard"],
    category: ["Data Science", "Data Analysis"],
    github: "https://github.com/SamyakAnand/Blinkit-Sales-Inventory-Analytics-Dashboard-End-to-End-Power-BI-Project",
    webapp: "https://github.com/SamyakAnand/Blinkit-Sales-Inventory-Analytics-Dashboard-End-to-End-Power-BI-Project",
  },
  {
    id: 3,
    title: "Car24 Hyderabad Web Scraper & Analysis",
    description: "A Python pipeline that crawls Cars24's Hyderabad listings, extracts key vehicle details, cleans and structures the data with pandas, and exports it to CSV for downstream analysis. Features seed-based URL harvesting, BeautifulSoup parsing, regex-driven cleaning, and schema-enforced DataFrame assembly with duplicate removal.",
    image: Car24_scraper,
    tags: ["Python", "Web Scraping", "BeautifulSoup", "Pandas", "Data Analysis", "CSV", "Data Cleaning"],
    category: ["Data Science", "Data Analysis"],
    github: "https://github.com/SamyakAnand/Car24_Webscraping_project",
    webapp: "https://github.com/SamyakAnand/Car24_Webscraping_project",
  },
  {
    id: 4,
    title: "Student Performance Indicator",
    description:"This project analyzes how various socioeconomic and educational factors impact a student's academic performance based on test scores. Using a Kaggle dataset with 1,000 records, it explores attributes like gender, ethnicity, parental education level, lunch type, and test preparation participation.",
    image: Stud_performance,
    tags: ["Machine Learning", "Data Science", "Predictive Modeling","Render", "Regression", "Flask API", "Docker", "Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    category: ["Data Science","Data Analysis","Machine Learning"],
    github: "https://github.com/SamyakAnand/Student-Performance-Indicatorr",
    webapp: "https://student-performance-indicator-3pe6.onrender.com/",
  },
  {
    id: 5,
    title: "Amazon Dashboard in PowerBI",
    description: "This interactive Power BI dashboard provides deep insights into Prime Video's content catalog, covering titles, ratings, genres, directors, and country-wise trends. With engaging visualizations, users can explore ratings, content distribution, and yearly trends at a glance.",
    image: Amazon_dashboard_snapshot,
    tags: ["Data Analysis", "Data Visualization", "PowerBI"],
    category:["Data Science","Data Analysis"],
    github: "https://github.com/SamyakAnand/Amazon-Prime-Video-Dashboard-in-Power-BI-",
    webapp: "https://github.com/SamyakAnand/Amazon-Prime-Video-Dashboard-in-Power-BI-/blob/main/Snapshot/Amazon%20prime%20snapshot.png"
  },
  {
    id: 6,
    title: "Netflix Dashboard in PowerBI",
    description: "Analyze Netflix’s content library with this interactive Power BI dashboard. It highlights metrics like title counts, genres, ratings, production countries, and yearly trends. Featuring engaging visuals, it offers valuable insights into Netflix's catalog and growth patterns....",
    image: Neflix_dashboard_snapshot,
    tags: ["Data Analysis", "Data Visualization", "PowerBI"],
    category: ["Data Science","Data Analysis"],
    github: "https://github.com/SamyakAnand/Netflix-Dashboard-in-Power-BI",
    webapp: "https://github.com/SamyakAnand/Netflix-Dashboard-in-Power-BI/blob/main/Snapshot/Neflix_dashboard_snapshot.png",
  },
  {
    id: 7,
    title: "Insurance Data Analysis in PowerBI",
    description:"This project is an interactive dashboard inspired by PRISM Insurance's business model. It analyzes insurance data to reveal insights about policy performance, customer demographics, and claim behavior. Key metrics—such as premium amounts, coverage totals, and claim distributions—are segmented by policy type, age group, and customer activity. With dynamic filters and engaging charts, the dashboard makes it easy to explore trends and uncover actionable insights.",
    image: Insurance_dashboard,
    tags: ["Data Analysis", "Data Visualization", "PowerBI"],
    category: ["Data Science","Data Analysis"],
    github: "https://github.com/SamyakAnand/Insurance-Data-Analysis",
    webapp: "https://github.com/SamyakAnand/Insurance-Data-Analysis/blob/main/Screenshots/Overview%20page.png",
  },
  {
    id: 8,
    title: "Disease Predictor (Multi-Disease ML System)",
    description: "One platform predicting multiple diseases: Heart disease, Diabetes, Breast Cancer, Kidney Disease, Liver Disease. A complete machine learning system that can predict various diseases based on patient data using different ML models for each disease type.",
    images: [
      Disease_home,
      Disease_screenshot1,
      Disease_screenshot2,
      Disease_screenshot3,
      Disease_screenshot4,
      Disease_screenshot5,
      Disease_screenshot6,
      Disease_screenshot7,
      Disease_screenshot8,
      Disease_screenshot9,
      Disease_screenshot10
    ],
    tags: ["Python", "Scikit-learn", "Machine Learning", "Logistic Regression", "Random Forest", "SVC", "Train/Test Split", "Cross-Validation", "Feature Engineering", "Streamlit", "Flask", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Model Evaluation"],
    category: ["Data Science", "Machine Learning"],
    github: "https://github.com/SamyakAnand/Disease-Predictor",
    webapp: "https://github.com/SamyakAnand/Disease-Predictor",
  },
  {
    id: 9,
    title: "Resume Analyzer (NLP Web App)",
    description: "An NLP-based resume analyzing system comparing resumes vs job descriptions using semantic similarity. The system parses resumes and job descriptions, then calculates similarity scores to help match candidates with appropriate positions.",
    image: Resume_analyzer,
    tags: ["Python", "Flask", "NLP", "NLTK", "TF-IDF Vectorization", "Cosine Similarity", "Regex", "PDF Parsing", "Bootstrap", "Text Preprocessing", "Stopwords", "Stemming"],
    category: ["Data Science", "NLP", "Web Development"],
    github: "https://github.com/SamyakAnand/Resume-Analyzer",
    webapp: "https://github.com/SamyakAnand/Resume-Analyzer",
  },
  {
    id: 10,
    title: "Customer Churn Prediction (Deep Learning + Streamlit)",
    description: "Deep learning model predicting customer churn with an interactive Streamlit app. The project builds a neural network to predict which customers are likely to leave and provides an interactive interface for exploring predictions.",
    image: Financial_risk_dashboard, // Using placeholder for now
    tags: ["Python", "TensorFlow", "Keras", "Deep Neural Networks", "Streamlit", "Pandas", "NumPy", "StandardScaler", "OneHotEncoder", "Model Evaluation", "Loss", "Accuracy", "Saved Model"],
    category: ["Data Science", "Deep Learning"],
    github: "https://github.com/SamyakAnand/Customer-Churn-Prediction-Deep-Learning",
    webapp: "https://github.com/SamyakAnand/Customer-Churn-Prediction-Deep-Learning",
  },
  {
    id: 11,
    title: "Network Security ML Pipeline",
    description: "End-to-end ML project building a complete security anomaly detection system. The pipeline ingests network data, processes it, trains models to detect anomalies, and provides a complete architecture ready for deployment.",
    image: NetworkSecurityImage,
    tags: ["Python", "MongoDB", "Machine Learning Pipeline", "Scikit-learn", "EDA", "Feature Engineering", "Custom Logging", "Exception Handling", "Modular Code", "Model Deployment"],
    category: ["Data Science", "Machine Learning", "Data Engineering"],
    github: "https://github.com/SamyakAnand/NetworkSecurity",
    webapp: "https://github.com/SamyakAnand/NetworkSecurity",
  },
  {
    id: 12,
    title: "Amazon Prime Video Dashboard (Power BI)",
    description: "Analytics dashboard analyzing Amazon Prime Video content library by genre, year, countries, actors, and ratings. Provides insights into content distribution and performance metrics.",
    image: Amazon_dashboard_snapshot,
    tags: ["Power BI", "Power Query", "DAX", "Genre Analysis", "Ratings Analysis", "Trend Charts", "Donut Charts", "Tables", "Custom Theme"],
    category: ["Data Science", "Data Analysis"],
    github: "https://github.com/SamyakAnand/Amazon-Prime-Video-Dashboard-in-Power-BI-",
    webapp: "https://github.com/SamyakAnand/Amazon-Prime-Video-Dashboard-in-Power-BI-",
  },
  // Live Projects
  {
    id: 13,
    title: "Diksha Anand Portfolio",
    description: "A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.",
    image: DikshaPortfolioImage,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: ["Live Projects", "Portfolio"],
    github: "https://github.com/SamyakAnand/diksha-portfolio",
    webapp: "https://dikshaanand.vercel.app/",
  },
  {
    id: 14,
    title: "Sonali Makeover Artistry",
    description: "Professional portfolio website for Sonali Makeup Artistry showcasing Mehendi, Makeup, Nails, and Hair Styling services with elegant animations and booking system.",
    image: SonaliMakeoverImage,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "EmailJS"],
    category: ["Live Projects", "Website"],
    github: "https://github.com/sonalimakeoverartistry-stack/SonaliMakeoverArtistry",
    webapp: "https://sonali-makeover-artistry.vercel.app/",
  },
  {
    id: 15,
    title: "Horeka",
    description: "A professional networking platform built with Next.js 15, MongoDB, and Clerk authentication. Features include professional networking, job listings, marketplace, real-time messaging, content sharing, and learning resources.",
    image: HorekaImage,
    tags: ["Next.js", "MongoDB", "Clerk", "Tailwind CSS", "TypeScript", "React", "Node.js"],
    category: ["Live Projects", "Startup"],
    github: "#",
    webapp: "#",
    comingSoon: true
  },
  {
    id: 16,
    title: "Aurum Delights",
    description: "Premium Indian sweets brand specializing in luxury ladoos that blend royal heritage with modern craftsmanship. Crafting memories one handcrafted bite at a time.",
    image: AurumImage,
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    category: ["Live Projects", "Website"],
    github: "#",
    webapp: "https://aurum-delights.vercel.app/",
  }
];

// Skills Info
export const SkillsInfo = [
  {
    title: "Core Programming",
    skills: [
      { name: "Python", logo: "https://skillicons.dev/icons?i=python&theme=dark" },
      { name: "R", logo: "https://skillicons.dev/icons?i=r&theme=dark" },
      { name: "SQL", logo: "https://img.shields.io/badge/SQL-025E8C?style=for-the-badge&logo=databricks&logoColor=white" },
      { name: "Java", logo: "https://skillicons.dev/icons?i=java&theme=dark" },
      { name: "C", logo: "https://skillicons.dev/icons?i=c&theme=dark" },
      { name: "HTML", logo: "https://skillicons.dev/icons?i=html&theme=dark" },
      { name: "CSS", logo: "https://skillicons.dev/icons?i=css&theme=dark" },
    ],
  },
  {
    title: "Data Science & Analytics",
    skills: [
      { name: "Pandas", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
      { name: "NumPy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
      { name: "Matplotlib", logo: "https://matplotlib.org/stable/_images/sphx_glr_logos2_001.png" },
      { name: "Seaborn", logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
      { name: "Tableau", logo: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/tableau.svg" },
      { name: "Power BI", logo: "https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg" },
      { name: "Excel", logo: "https://img.icons8.com/color/512/microsoft-excel-2019.png" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", logo: "https://skillicons.dev/icons?i=mysql&theme=dark" },
      { name: "PostgreSQL", logo: "https://skillicons.dev/icons?i=postgres&theme=dark" },
      { name: "MongoDB", logo: "https://skillicons.dev/icons?i=mongodb&theme=dark" },
      { name: "MS SQL Server", logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Scikit-learn", logo: "https://skillicons.dev/icons?i=sklearn&theme=dark" },
      { name: "TensorFlow", logo: "https://skillicons.dev/icons?i=tensorflow&theme=dark" },
      { name: "PyTorch", logo: "https://skillicons.dev/icons?i=pytorch&theme=dark" },
      { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
      { name: "NLTK", logo: "https://img.shields.io/badge/NLTK-026e00?style=for-the-badge&logo=python&logoColor=white" },
      { name: "spaCy", logo: "https://img.shields.io/badge/spaCy-09A3D5?style=for-the-badge&logo=python&logoColor=white" },
      { name: "Transformers", logo: "https://img.shields.io/badge/Transformers-HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" },
    ],
  },
  {
    title: "MLOps & Cloud",
    skills: [
      { name: "FastAPI", logo: "https://skillicons.dev/icons?i=fastapi&theme=dark" },
      { name: "Flask", logo: "https://skillicons.dev/icons?i=flask&theme=dark" },
      { name: "Docker", logo: "https://skillicons.dev/icons?i=docker&theme=dark" },
      { name: "Kubernetes", logo: "https://skillicons.dev/icons?i=kubernetes&theme=dark" },
      { name: "MLflow", logo: "https://img.shields.io/badge/MLflow-0194E2?style=for-the-badge&logo=mlflow&logoColor=white" },
      { name: "DVC", logo: "https://cdn.simpleicons.org/dvc/945DD6" },
      { name: "AWS", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
      { name: "GCP", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
      { name: "Azure", logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", logo: "https://skillicons.dev/icons?i=git&theme=dark" },
      { name: "GitHub", logo: "https://skillicons.dev/icons?i=github&theme=dark" },
      { name: "VS Code", logo: "https://skillicons.dev/icons?i=vscode&theme=dark" },
      { name: "PyCharm", logo: "https://skillicons.dev/icons?i=pycharm&theme=dark" },
      { name: "Jupyter", logo: "https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white" },
      { name: "DAGsHub", logo: "https://img.shields.io/badge/DAGsHub-000000?style=for-the-badge&logo=github&logoColor=white" },
    ],
  },
];

// Experiences
export const experiences = [
  {
    id: 1,
    img: "/src/assets/company_logo/evoastra.png",
    role: "Data Scientist Intern",
    company: "Evoastra Ventures Inc",
    date: "Jun 2025 - Present",
    desc: "Led a team of 5 interns to build end-to-end Machine Learning (ML) workflows using Python, SQL, scikit-learn, and Power BI, covering data ingestion, cleaning, modeling, and interactive dashboards. Developed a CARS24 web-scraping & analytics pipeline to track real-time pricing trends and uncover market patterns, enhancing market analysis capabilities. Created an AI-powered resume parser (Natural Language Processing (NLP) + Flask) that extracts candidate details and matches resumes to job descriptions, accelerating shortlisting processes.",
    skills: ["Python", "SQL", "Scikit-learn", "Power BI", "Machine Learning", "Web Scraping", "NLP", "Flask"],
  },
  {
    id: 2,
    img: "/src/assets/company_logo/webverse_logo.png",
    role: "Data Science & ML Intern",
    company: "Gilbert Research Center",
    date: "Mar - Jul 2024",
    desc: "Engineered clinical Machine Learning (ML) models and modular pipelines with drift detection and API deployment using Flask, MLflow, and DAGsHub. Applied advanced statistical methods to improve accuracy and interpretability of clinical data insights. Collaborated cross-functionally to turn data insights into clinical recommendations, improving patient outcomes.",
    skills: ["Python", "Machine Learning", "Flask", "MLflow", "DAGsHub", "Statistical Analysis", "Clinical Data"],
  },
];

// Education
export const education = [
  {
    id: 1,
    img: "/src/assets/education_logo/gla_logo.png",
    school: "Ballarpur Institute of Technology",
    date: "Sep 2021 - Aug 2024",
    desc: "B.Tech in Computer Science & Engineering.",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    skills: [
      "Python", "Machine Learning", "Data Analysis", 
      "SQL", "Java", "Cloud Computing"
    ]
  },
  {
    id: 2,
    img: "/src/assets/education_logo/bsa_logo.png",
    school: "Bajaj College of Polytechnic",
    date: "Jun 2018 – Aug 2021",
    desc: "Diploma in Computer Science with focus on programming, database management, and computer networks.",
    degree: "Diploma in Computer Science",
    skills: [
      "C Programming", "Database Management", 
      "Computer Networks", "Web Development"
    ]
  },
];

// Certifications
export const certifications = [
  {
    id: 1,
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "2024",
    description: "Introduction to machine learning concepts including supervised and unsupervised learning, model evaluation, and feature engineering.",
    tags: ["Machine Learning", "Scikit-learn", "Supervised Learning", "Unsupervised Learning"],
    platform: "Kaggle",
    credential: "https://drive.google.com/file/d/1gTKfv3SqqsOmE5rabXFiNnsa482Jqox5/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Pandas",
    issuer: "Kaggle",
    date: "2024",
    description: "Gained expertise in data manipulation and analysis using Pandas, including data cleaning, transformation, and aggregation techniques.",
    tags: ["Pandas", "Data Cleaning", "Data Transformation", "Data Analysis"],
    platform: "Kaggle",
    credential: "https://drive.google.com/file/d/14zLla9ukIX1nS8oaUmqHhYS-rhLCasGc/view?usp=sharing",
  },
  {
    id: 3,
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
    date: "2024",
    description: "Advanced machine learning techniques including handling missing values, categorical variables, pipelines, cross-validation, XGBoost, and preventing data leakage.",
    tags: ["Machine Learning", "XGBoost", "Pipelines", "Cross-validation"],
    platform: "Kaggle",
    credential: "https://drive.google.com/file/d/1rq5vENWlVaDEznE2YLVpQ6Cj-UpnxBWN/view?usp=sharing",
  },
  {
    id: 4,
    title: "Feature Engineering",
    issuer: "Kaggle",
    date: "2024",
    description: "Learned advanced techniques for feature engineering including mutual information, creating features, clustering, principal component analysis, and target encoding.",
    tags: ["Feature Engineering", "Clustering", "PCA", "Target Encoding"],
    platform: "Kaggle",
    credential: "https://drive.google.com/file/d/1LpOkKnO3Q-eV9S1l1GmUTtx4l6JVhfiU/view?usp=sharing",
  },
  {
    id: 5,
    title: "Data Visualization",
    issuer: "Kaggle",
    date: "2024",
    description: "Learned to create effective visualizations using Python libraries like Seaborn and Plotly to communicate insights from data.",
    tags: ["Data Visualization", "Seaborn", "Plotly", "Matplotlib"],
    platform: "Kaggle",
    credential: "https://drive.google.com/file/d/1YEzVPfDuYO91Rzg5sViJGELBOs2zyW1K/view?usp=sharing",
  },
  {
    id: 6,
    title: "Data Cleaning",
    issuer: "Kaggle",
    date: "2024",
    description: "Mastered data cleaning techniques including handling missing values, scaling and normalization, parsing dates, character encodings, and inconsistent data entry.",
    tags: ["Data Cleaning", "Missing Values", "Normalization", "Parsing Dates"],
    platform: "Kaggle",
    credential: "https://drive.google.com/file/d/1ZSfo0eqpAkly7LFK2jvEwYBJwvHsNtG6/view?usp=sharing",
  },
  {
    id: 7,
    title: "Data Scientist Intern",
    issuer: "Evoastra Ventures",
    date: "2025",
    description: "Internship certificate for working as a Data Scientist Intern at Evoastra Ventures, developing end-to-end Machine Learning workflows and data analytics solutions.",
    tags: ["Data Science", "Machine Learning", "Internship", "Python"],
    platform: "Evoastra Ventures",
    credential: "https://drive.google.com/file/d/1ALH-bn08GuyttrPXgytg5msicyTivg8U/view?usp=sharing",
  },
  {
    id: 8,
    title: "Full Stack Data Science and AI",
    issuer: "Naresh IT Hyderabad",
    date: "2024",
    description: "Comprehensive training in full stack data science and AI, covering end-to-end data science workflows, machine learning, and AI implementation.",
    tags: ["Data Science", "AI", "Machine Learning", "Full Stack"],
    platform: "Naresh IT Hyderabad",
    credential: "https://drive.google.com/file/d/1Xt-6yvDKc1HBgtIq_XNYELI9KuXi_6pe/view?usp=sharing",
  },
  {
    id: 9,
    title: "Essential Java Course",
    issuer: "CADD",
    date: "2024",
    description: "Completed essential Java programming course covering fundamentals of Java programming, object-oriented programming, and application development.",
    tags: ["Java", "Programming", "OOP", "Application Development"],
    platform: "CADD",
    credential: "https://drive.google.com/file/d/1qfKmLL8z1Rfxo3X24diN5WPIeg4jxeVW/view?usp=sharing",
  },
  {
    id: 10,
    title: "Data Science and ML Intern",
    issuer: "Gilbert Research Center",
    date: "2024",
    description: "Internship certificate for working as a Data Science and Machine Learning Intern at Gilbert Research Center, engineering clinical ML models and modular pipelines.",
    tags: ["Data Science", "Machine Learning", "Internship", "Clinical Data"],
    platform: "Gilbert Research Center",
    credential: "https://drive.google.com/file/d/110GOvC_rg53Na7fu77q6JEbazoFC1L2D/view?usp=sharing",
  },
  {
    id: 11,
    title: "Data Science and Machine Learning Basic to Advance",
    issuer: "Udemy",
    date: "2024",
    description: "Comprehensive course covering data science and machine learning from basics to advanced topics including Python, statistics, data visualization, and ML algorithms.",
    tags: ["Data Science", "Machine Learning", "Python", "Statistics"],
    platform: "Udemy",
    credential: "https://drive.google.com/file/d/1u5E4sWX2bVP207NKi6GZ6e5yOXeex82B/view?usp=sharing",
  }
];