# 🧠 AI Voice Agent

A production-grade Node.js + Express.js server for an AI-powered voice assistant. This backend listens to voice input, converts it to text, processes it using an AI model, and responds using text-to-speech — all with a modular and scalable architecture.

## 🔥 Features

- 🎙️ Voice input via speech-to-text
- 💬 AI response generation using LLM (e.g. OpenAI)
- 🔊 Text-to-speech output with natural voice synthesis
- ⚡ Express.js REST API with modular structure
- 🛡️ Security with Helmet, CORS, and Rate Limiting
- 🧩 Clean separation of controllers, routes, and services

## 🧱 Tech Stack

- **Node.js** + **Express.js**
- **Speech-to-Text**: Whisper / Google STT
- **LLM**: ChatGPT / OpenAI API
- **Text-to-Speech**: ElevenLabs / Google TTS
- **Security**: Helmet, CORS, express-rate-limit

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/gauravp95/ai-voice-agents.git
cd ai-voice-agents
