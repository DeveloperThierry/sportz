# Real-Time Sports Dashboard

A high-performance, real-time sports broadcasting system built with Node.js, WebSockets, and PostgreSQL.

## 🚀 Features

- **Real-Time Updates**: Live match scores, commentary, and ball-by-ball updates pushed via WebSockets (WS library).
- **Scalable Architecture**: Pub/Sub pattern for efficient event broadcasting to 100,000+ simultaneous users.
- **Data Persistence**: Robust storage using Neon PostgreSQL and Drizzle ORM.
- **Security**: Rate limiting and bot protection integrated via Arcjet.
- **Monitoring**: Performance tracking and error insights using Site24x7 APM.
- **AI-Assisted Development**: Built using industry-standard practices, leveraging CodeRabbit for automated AI code reviews.

## 🛠 Tech Stack

- **Backend**: Node.js, Express
- **Database**: PostgreSQL (Neon)
- **ORM**: Drizzle ORM
- **Real-Time**: WebSockets (WS)
- **Security**: Arcjet
- **Monitoring**: Site24x7 APM
- **Validation**: Zod

## 📋 Project Structure

- **/src**: Core application logic
- **/db**: Database schema definitions and Drizzle configuration
- **/validation**: Zod schemas for input validation
- **/seed**: Seeding scripts for demo data
- **/data**: JSON datasets for match simulation

## ⚙️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Set up Environment Variables**:
    Create a `.env` file and add your database connection string, Arcjet keys, and API configurations.
4.  **Run Migrations**:
    ```bash
    npm run db:migrate
    ```
5.  **Start the server**:
    ```bash
    npm run dev
    ```

## 📈 Performance Monitoring

This project includes Site24x7 APM integration to monitor latency, CPU, and memory usage under load, ensuring sub-second latency for live broadcasts.

## 🤝 Acknowledgments

Special thanks to Adrian for WebSockets assets and project guidance.


![Database](/public/db.png)
