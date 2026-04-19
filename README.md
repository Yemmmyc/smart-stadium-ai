# 🏟️ Smart Stadium AI Agent

![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![Docker](https://img.shields.io/badge/Docker-Container-blue)
![Google Cloud Run](https://img.shields.io/badge/GCP-Cloud%20Run-orange)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-purple)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

> AI-powered cloud-native stadium crowd simulation system deployed with full DevOps pipeline.

---

## 🚀 Live Application

👉 https://smart-stadium-ai-934712061771.us-central1.run.app

---

## 📌 Project Summary

Smart Stadium AI Agent is a lightweight decision-support system designed to simulate intelligent routing logic for crowd movement in stadium environments.

It demonstrates how AI-inspired decision models, containerization, and cloud deployment can be combined to solve real-world crowd management challenges such as congestion, delays, and inefficient movement flow.

---

## 🧠 Key Features

- AI-inspired rule-based decision engine
- Crowd flow simulation logic
- Real-time routing suggestion system (simulation)
- Lightweight Node.js Express backend
- Dockerized microservice architecture
- Cloud-native deployment on Google Cloud Run
- Public HTTPS endpoint

---

## 🏗️ System Architecture

### Tech Stack
- Backend: Node.js (Express)
- Containerization: Docker
- Cloud Platform: Google Cloud Run
- AI Layer: Rule-based agent logic

---

## 🔄 System Flow Architecture

Stadium Users (Browser / Client)
            │
            ▼
Node.js Express Application
            │
            ▼
AI Decision Logic Layer
            │
            ▼
Crowd Routing Output Engine
            │
            ▼
Google Cloud Run Deployment
            │
            ▼
Public HTTPS Response

---

## ⚙️ How It Works

1. User interacts with the system via browser
2. Request is processed by Express backend
3. AI logic evaluates crowd conditions using rules
4. System generates routing suggestion
5. Response is returned to user

---

## 🤖 AI Agent Logic

IF crowd_density > threshold  
THEN suggest alternative exit routes

This simulates intelligent decision-making used in real-world crowd management systems.

---

## ☁️ Deployment Overview

- Node.js application built with Express
- Containerized using Docker
- Deployed on Google Cloud Run
- Exposed via secure HTTPS endpoint

---

## 📂 Project Structure

smart-stadium-ai/
│
├── server.js
├── package.json
├── Dockerfile
├── .gitignore
│
└── public/
    └── index.html

---

## 🔄 CI/CD (Conceptual Workflow)

Developer Push → GitHub Repository → Docker Build → Google Cloud Run Deployment → Live Update

---

## 📈 Impact

- Demonstrates cloud-native architecture
- Shows DevOps deployment pipeline understanding
- Applies AI-inspired decision modeling
- Simulates real-world crowd management systems

---

## 🚀 Future Improvements

- Integrate real-time IoT crowd sensors
- Replace rule-based logic with ML model
- Fully automate CI/CD with GitHub Actions
- Add monitoring dashboards (Grafana/Prometheus)

---

## 🏁 Author

Cloud + DevOps Engineering Project demonstrating end-to-end system design, containerization, and cloud deployment.