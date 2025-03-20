Here’s the complete **README.md** in a single file with proper formatting:

````markdown
# Ninte Kadha: Your Story - Backend

## 📌 Overview

Ninte Kadha ("Your Story" in Malayalam) is the backend of an AI-powered application that analyzes browsing history to generate a personality breakdown. Built using **Node.js** and **Express**, this backend processes user-submitted browsing history, extracts key patterns, and leverages **Gemini AI** to generate meaningful insights.

This repository contains the **core API**, responsible for handling requests, processing data, and serving AI-generated personality reports.

---

## ⚡ Features

- **RESTful API** built with Express.js
- **AI-driven analysis** of browsing behavior using Gemini AI
- **Secure and privacy-focused** – No data storage or logging
- **Environment variable management using dotenv**
- **Fast and efficient** API requests with Axios

---

## 🏗️ Tech Stack

- **Framework:** Express.js
- **Language:** JavaScript (Node.js)
- **AI Model:** Gemini AI
- **HTTP Client:** Axios
- **Environment Management:** dotenv

---

## 🔧 API Endpoints

| Endpoint       | Method | Description                                                  |
| -------------- | ------ | ------------------------------------------------------------ |
| `/upload`      | `POST` | Accepts JSON file of browsing history                        |
| `/analyze`     | `POST` | Processes the history and generates insights using Gemini AI |
| `/results/:id` | `GET`  | Retrieves generated analysis report                          |
| `/health`      | `GET`  | Checks API health status                                     |

---

## 🚀 Getting Started

### 🔹 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-backend-repo.git
   cd ninte-kadha-backend
   ```
````

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**  
   Create a `.env` file in the root directory and configure it with the necessary API keys:

   ```env
   GEMINI_API_KEY=your_gemini_api_key
   PORT=8000
   ```

4. **Run the Express server:**

   ```sh
   npm start
   ```

5. Open [`http://127.0.0.1:5000`](http://127.0.0.1:5000) to access the API.

---

## 📁 Project Repositories

| Repository                      | Link                                                                     |
| ------------------------------- | ------------------------------------------------------------------------ |
| **Frontend Repository**         | [Ninte Kadha - Frontend](https://github.com/ashbi8137/ninte-kadha-Front) |
| **Complete Project Repository** | [Ninte Kadha - Full Project](https://github.com/aaagrud/ninte_kadha)     |

---

## ⚠️ Disclaimer

Ninte Kadha is designed for **educational purposes only**. The backend does **not store user data** and ensures **privacy and security**. All data is processed **locally** and is not logged or shared with third parties.

---
