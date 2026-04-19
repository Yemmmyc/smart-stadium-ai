# 🏟️ Smart Stadium AI Agent

## 📌 Project Overview
The Smart Stadium AI Agent is a cloud-deployed system designed to improve the physical event experience for attendees at large-scale sporting venues.  

It addresses common stadium challenges such as:
- Crowd congestion at entry and exit points  
- Long waiting times at facilities  
- Lack of real-time coordination during events  

The system uses an AI-agent-inspired design (prompt-based logic) to simulate intelligent decision-making for crowd movement optimization.

---

## 🚀 Live Demo
👉 https://smart-stadium-ai-934712061771.us-central1.run.app

---

## 🧠 Key Features
- AI Agent logic for crowd flow analysis (prompt-based reasoning)
- Real-time crowd movement simulation
- Event experience optimization model
- Cloud-based deployment for scalability
- Lightweight Node.js backend system

---

## 🏗️ Architecture
- Backend: Node.js (Express)
- Containerization: Docker
- Deployment: Google Cloud Run
- Version Control: Git & GitHub
- AI Layer: Prompt-based agent simulation logic

            ┌─────────────────────┐
            │   Stadium Users     │
            │ (Browser / Client)  │
            └─────────┬───────────┘
                      │
                      ▼
        ┌──────────────────────────┐
        │  Node.js Express App     │
        │  (Smart Stadium AI)      │
        └─────────┬───────────────┘
                  │
          AI Prompt Logic Engine
                  │
                  ▼
        ┌──────────────────────────┐
        │ Crowd Decision Output    │
        │ (Routes / Suggestions)   │
        └─────────┬───────────────┘
                  │
                  ▼
     ┌──────────────────────────────┐
     │  Google Cloud Run (Hosting)  │
     └──────────────────────────────┘



## ⚙️ How It Works
1. User interacts with the system (simulated stadium environment)
2. AI Agent evaluates crowd conditions using predefined logic prompts
3. System generates optimized movement or coordination suggestions
4. Output is displayed in real-time response format

---

## 🤖 AI Agent Logic (MCP-style reasoning)

This system simulates an AI agent using structured prompt-based reasoning to improve stadium crowd management.

### Decision Flow:
1. Receive crowd scenario input
2. Analyze congestion level (high / medium / low)
3. Apply predefined reasoning rules
4. Output optimized movement recommendation

### Example Rule:
IF crowd_density > threshold  
THEN suggest alternate exit routes

This mimics MCP-style decision pipelines used in intelligent systems for real-world coordination and decision-making.

---

## ☁️ Deployment Steps (Summary)
- Built Node.js application
- Containerized using Docker
- Deployed to Google Cloud Run
- Exposed via public HTTPS endpoint

---

## 📂 Project Structure
```
smart-stadium-ai/
│
├── server.js
├── package.json
├── Dockerfile
├── public/
│   └── index.html
└── .gitignore
```

---

## 🔄 CI/CD PIPELINE

```
┌─────────────────────┐
│  Developer Pushes   │
│  to GitHub Repo     │
└─────────┬───────────┘
          │
          ▼
┌──────────────────────────┐
│ GitHub Actions Trigger   │
│ (Builds Docker Image)    │
└─────────┬───────────────┘
          │
          ▼
┌──────────────────────────┐
│ Google Cloud Build       │
│ (Pushes to Artifact Reg) │
└─────────┬───────────────┘
          │
          ▼
┌──────────────────────────┐
│ Google Cloud Run         │
│ (Deploys New Version)    │
└─────────┬───────────────┘
          │
          ▼
┌──────────────────────────┐
│ Live App Updated         │
│ (Zero Downtime)          │
└──────────────────────────┘
```

---


## 🧑‍💻 Tech Stack
- Node.js
- Express.js
- Docker
- Google Cloud Run
- GitHub

---

## 📈 Impact
This project demonstrates how AI agent systems can be applied to real-world environments like stadiums to improve:
- Safety
- Efficiency
- User experience

---

## CI/CD Improvement (Future Enhancement)
A GitHub Actions pipeline can be integrated to automate Docker builds and deployment to Google Cloud Run on every push.

---

## 📌 Author
Built as part of a cloud + AI systems engineering project.
