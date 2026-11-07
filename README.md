# Leoneigh Portal

> A read-only, multi-tenant client operations dashboard for Leoneigh Digital. 

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Overview

The **Leoneigh Portal** is a prototype dashboard designed to replace disjointed status calls, Slack threads, and email chains with a single, high-signal audit surface. 

It provides clients with a real-time, read-only view of their active engagement, including sprint progress, retainer hours burned, recent deliverables, and locked architectural decisions. 

The prototype includes a **Tenancy Switcher** to demonstrate how the exact same UI shell scales across completely different engagement types (e.g., an active engineering sprint, a design systems project, or a heavy platform migration).

## Core Modules

- **Tenant Switcher:** A sidebar rail allowing seamless toggling between different demo client profiles (Studio A, Agency B, Foundry C).
- **Sprint Telemetry:** Live progress against the active bi-weekly milestone, including a day-by-day visual tracker and individual milestone statuses.
- **Retainer Burn Meter:** Tabular telemetry showing hours consumed, committed, and available, broken down by discipline (Engineering, Design, QA) with rollover reserves.
- **Deliverable Ledger:** A clean log of shipped PRs, architecture docs, and RFCs with status badges (`IN PRODUCTION`, `DEPLOYED`, `REVIEW`, `QUEUED`).
- **Dispatch Log:** An asynchronous communication feed that replaces Slack, featuring dispatch notes, embedded video recaps, and zero-latency decision logs. Filterable by entry type.
- **Decision Register:** A permanent, read-only record of locked and superseded decisions.

## Design Language

The interface is built on a "matte carbon" aesthetic tailored for high-density operational data. 
- **Background:** Matte Carbon (`#0a0a0a`)
- **Surface:** Zinc tones (`#121215`)
- **Borders:** Structural lines (`#242220`)
- **Accent:** Signal Crimson (`#dc2626`)
- **Typography:** Editorial serif for headings, monospace for data, and system sans for body text.

## Running Locally

This project is built with vanilla web technologies. There are no build steps, bundlers, or dependencies.

**Option 1: Open directly**
Just double-click `index.html` to open it in your browser.

**Option 2: Local Server (Recommended)**
Using Python:
python3 -m http.server 5500

Then visit http://localhost:5500 in your browser.

Using VS Code:
Install the Live Server extension, right-click index.html, and select Open with Live Server.

 Project Structure
The project is intentionally split into three clean layers for easy maintenance:

index.html — The semantic HTML structure and layout hooks.

styles.css — All visual styling, CSS variables, layout grids, and responsive breakpoints.

app.js — The data layer (hardcoded CLIENTS array), state management, and DOM rendering logic.

🛠️ Customization
To add a new client or change the demo data, simply edit the CLIENTS array at the top of app.js. The rendering functions are designed to dynamically generate the entire dashboard based on the object passed to them. No CSS changes are required.

Internal Prototype · Leoneigh Digital
