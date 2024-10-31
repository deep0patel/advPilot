# AI-Driven Drone Flight Planning Workflow

Welcome to the **AI-Driven Drone Flight Planning Workflow** project! This repository provides an introductory AI-based workflow designed to automate essential parts of drone flight planning, with a focus on regulatory compliance, airspace assessment, and operational categorization. This solution is tailored for professional drone operators in North America, addressing common challenges and enabling safer, more efficient flight preparations.

## Overview

This workflow streamlines drone flight planning by taking in simple inputs such as:
- **Flight Location (Address)**
- **Max Operational Altitude** (in feet)
- **Drone Model**

The workflow connects to a custom API developed specifically for this project, which retrieves detailed drone specifications, assesses the airspace for regulatory compliance, and categorizes the type of operation (e.g., "No Rules," "Basic," "Advanced," or "SFOC Required"). With these automated checks, pilots can confidently plan flights while ensuring adherence to applicable regulations.

## Key Features

- **Automated Drone Information Retrieval**: Retrieves specific information about the drone model to personalize the flight planning experience.
- **Airspace Assessment**: Uses location and altitude to assess airspace class, proximity to the nearest aerodrome, and direction relative to the operation.
- **Operation Classification**: Determines the required type of operation based on drone capabilities, airspace restrictions, and intended altitude.
- **Hybrid Flow with Custom API Integration**: A custom API is integrated into the workflow to handle heavy processing tasks, minimizing reliance on LLM inference. This design ensures low cost and high processing speed.
- **Future Expansion**: Future updates will include emergency contact details and additional compliance features to further enhance operational safety.

## Video Demo

Watch the full demo of the AI workflow on [YouTube](https://youtu.be/xjShxkWGHo0?si=fVhvWqqdcqYLCelF).

## Scrrenshot of the workflow

![Flight_Planning_Workflow](https://github.com/user-attachments/assets/c6048923-1caf-45e3-97ac-7775db4b8c09)

 
### Special thanks to dify ai to provide a platform to orchestrate the ai workflow.
