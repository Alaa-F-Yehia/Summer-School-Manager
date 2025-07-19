
# 🧠 Brainwave AI Web App

A full-stack, Dockerized AI-powered educational assistant built with:

- ⚙️ Node.js + Express backend  
- ⚛️ React frontend  
- 🐘 PostgreSQL database  
- 🤖 LLaMA 3 AI integration using [Ollama](https://ollama.com)

This app allows you to view data like classes and teachers from a database, and interact with an AI model locally on your machine through natural language prompts.

## 🚀 Features

- RESTful API to fetch data from `classes`, `teachers`, and `announcements` tables  
- AI text generation with LLaMA 3 using Ollama locally  
- Clean separation of backend, frontend, and database via Docker containers  
- Easy to install and run on any machine with Docker

## 📦 Prerequisites

1. **Docker Desktop**  
   Install from: https://www.docker.com/products/docker-desktop

2. **Ollama (for running LLaMA 3 model locally)**  
   Download from: https://ollama.com/download

## ⚙️ How to Run the Project

### 1️⃣ Clone the project

```bash
git clone https://github.com/your-username/brainwave.git
cd brainwave
ollama pull llama3
ollama run llama3
docker-compose up --build

