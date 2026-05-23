# KuraYetu

A secure, transparent digital school election platform built on secret ballot voting for fair and accountable student leadership elections.

---

![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active_development-blue)
![Backend](https://img.shields.io/badge/backend-Supabase-3ecf8e)
![Frontend](https://img.shields.io/badge/frontend-React-61dafb)
![Database](https://img.shields.io/badge/database-PostgreSQL-316192)
![Deploy](https://img.shields.io/badge/deploy-Vercel-black)
![Votes](https://img.shields.io/badge/voting-secret_ballot-important)

---

KuraYetu is a secure, transparent, and modern digital election platform designed for junior secondary school student elections using a secret ballot voting system.

The platform enables schools to conduct elections digitally while maintaining fairness, confidentiality, accountability, and election integrity.

Unlike traditional paper-based voting systems, KuraYetu automates voting, vote counting, turnout tracking, and result publishing in real time, creating a more efficient and engaging election experience for students and administrators.

---

# Project Overview

KuraYetu is a full-stack web application that allows students to securely vote for school leadership positions through a confidential electronic ballot.

The platform is designed to:
- eliminate manual counting errors,
- improve election transparency,
- prevent duplicate voting,
- speed up result processing,
- and modernize school elections.

KuraYetu follows the principles of:
- secret ballot voting,
- fair elections,
- secure authentication,
- real-time monitoring,
- and transparent result publication.

---

# Objectives

## Main Objective
To develop a secure and transparent digital election platform for junior secondary schools.

## Specific Objectives
- Enable students to vote electronically and securely
- Ensure voter confidentiality through secret ballots
- Prevent duplicate voting
- Automate vote counting and result generation
- Improve trust and transparency in school elections
- Provide administrators with election monitoring tools
- Increase student engagement through a digital voting experience

---

# Problem Statement

Traditional school elections often face several challenges, including:
- manual counting errors,
- delayed result announcements,
- lack of transparency,
- spoiled or lost ballot papers,
- difficult turnout tracking,
- and the possibility of bias or manipulation.

KuraYetu addresses these challenges through a secure digital voting system with automated vote management and confidential voting.

---

# Core Features

# Student Features

## Secure Authentication
Students log in using:
- Admission Number / Student ID
- Unique PIN or Password

This ensures:
- one student can vote only once,
- authenticated access,
- and prevention of impersonation.

---

## Secret Ballot Voting
Students can:
- view available positions,
- review candidates,
- cast votes privately,
- and submit ballots securely.

Votes remain anonymous and cannot be modified after submission.

---

## Candidate Profiles
Each candidate profile contains:
- Full Name
- Photo
- Class
- Position
- Manifesto / Agenda

---

## Mobile-Friendly Voting
The platform is optimized for:
- smartphones,
- tablets,
- laptops,
- and desktop devices.

This ensures accessibility and ease of use across different devices.

---

# Admin Features

## Election Management
Administrators can:
- create elections,
- add leadership positions,
- register candidates,
- and manage voting schedules.

---

## Real-Time Monitoring
Admins can monitor:
- total votes cast,
- turnout percentages,
- active voting sessions,
- and election participation rates.

---

## Open and Close Voting
Administrators can:
- activate elections,
- pause voting,
- and officially close polls.

---

## Results Dashboard
After polls close, the system automatically displays:
- total votes,
- candidate rankings,
- percentages,
- winner announcements,
- and graphical visualizations.

---

# Election Integrity Principles

KuraYetu follows several important election principles:

## Secret Ballot
No voter can see how another student voted.

## One Vote Per Position
Students cannot vote multiple times for the same position.

## No Live Candidate Scores During Voting
The system intentionally avoids displaying live candidate rankings during active voting.

This helps prevent:
- peer pressure,
- popularity influence,
- herd voting,
- and biased decision-making.

Instead, only voter turnout statistics are displayed during active elections.

---

# Tech Stack

# Frontend

| Technology | Purpose |
|---|---|
| React | Frontend UI development |
| Tailwind CSS | Styling and responsive design |
| Vite | Fast frontend tooling |
| React Router | Page navigation |
| React Hook Form | Form handling |

---

# Backend & Database

| Technology | Purpose |
|---|---|
| Supabase | Backend-as-a-Service |
| PostgreSQL | Relational database |
| Supabase Auth | Authentication |
| Row Level Security (RLS) | Database security |
| Realtime Channels | Live updates |

---

# Deployment

| Platform | Purpose |
|---|---|
| Vercel | Frontend hosting |
| Supabase Cloud | Backend and database hosting |

---

# System Architecture

```text
Students/Admin
       ↓
React Frontend
       ↓
Supabase API Layer
       ↓
PostgreSQL Database
```

---

# Proposed Folder Structure

```bash
kurayetu/
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── hooks/
│   ├── services/
│   ├── context/
│   ├── utils/
│   ├── assets/
│   └── routes/
│
├── supabase/
│   ├── migrations/
│   └── seed/
│
├── .env
├── package.json
├── README.md
└── vite.config.js
```

---

# Database Design

# students

| Field | Type |
|---|---|
| id | UUID |
| name | TEXT |
| admission_no | TEXT |
| class | TEXT |
| created_at | TIMESTAMP |

---

# elections

| Field | Type |
|---|---|
| id | UUID |
| title | TEXT |
| status | TEXT |
| created_at | TIMESTAMP |

---

# positions

| Field | Type |
|---|---|
| id | UUID |
| title | TEXT |
| election_id | UUID |

---

# candidates

| Field | Type |
|---|---|
| id | UUID |
| name | TEXT |
| position_id | UUID |
| manifesto | TEXT |
| image_url | TEXT |

---

# votes

| Field | Type |
|---|---|
| id | UUID |
| student_id | UUID |
| candidate_id | UUID |
| position_id | UUID |
| created_at | TIMESTAMP |

---

# Security Features

The platform includes several security measures to protect election integrity.

## Authentication
- Secure student login
- Session management
- Protected admin access

## Database Protection
- Row Level Security (RLS)
- Restricted write permissions
- Server-side validation

## Election Protection
- Duplicate vote prevention
- Vote anonymization
- Audit logging
- Controlled result publication

---

# Real-Time Features

Using Supabase Realtime:
- turnout updates automatically,
- admin dashboards refresh live,
- and election activity syncs instantly.

Live candidate scores remain hidden until voting officially closes.

---

# Installation & Setup

# 1. Clone the Repository

```bash
git clone https://github.com/your-username/kurayetu.git
```

---

# 2. Navigate Into the Project

```bash
cd kurayetu
```

---

# 3. Install Dependencies

```bash
npm install
```

---

# 4. Configure Environment Variables

Create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

# 5. Start Development Server

```bash
npm run dev
```

---

# Future Improvements

Potential future upgrades include:
- QR Code voting
- Biometric authentication
- SMS notifications
- Printable election reports
- Multi-school election support
- Offline voting mode
- Election analytics dashboard
- Parent observer dashboards

---

# Testing

Planned testing includes:
- Unit Testing
- Authentication Testing
- Database Validation Testing
- Load Testing
- Security Testing
- UI Responsiveness Testing

---

# User Experience Goals

The platform is designed to be:
- simple,
- fast,
- intuitive,
- accessible,
- and mobile-first.

Special focus is placed on younger users through:
- clear navigation,
- large touch targets,
- readable interfaces,
- and minimal complexity.

---

# Potential Impact

KuraYetu can help schools:
- modernize elections,
- improve trust,
- encourage student participation,
- reduce administrative workload,
- and expose students to responsible democratic processes.

Students also gain firsthand experience with:
- accountability,
- digital governance,
- and fair leadership systems.

---

# License

This project is licensed under the MIT License.

---

# Contributors

Developed by:
- Your Team Name Here

Contributors:
- Add contributor names here

---

# Contribution Guidelines

Contributions are welcome.

To contribute:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# Project Status

Active Development

KuraYetu is currently in the MVP development stage.

---

# Planned Screens

- Login Screen
- Student Dashboard
- Candidate Listing
- Voting Page
- Vote Confirmation Page
- Admin Dashboard
- Results Dashboard

---

# Conclusion

KuraYetu aims to provide schools with a modern, secure, and transparent election experience while preserving the integrity of democratic participation through secret ballot voting.

By combining secure authentication, automated vote counting, real-time monitoring, and a user-friendly interface, the platform creates a scalable solution suitable for modern educational institutions.