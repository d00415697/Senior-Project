# Senior-Project
Fitness Buddy is a full-featured mobile fitness tracking application developed as a senior project by Deray Lowe for Utah Tech University (Spring 2025). The app provides a comprehensive platform to help users manage their physical wellness through exercise logging, calorie tracking, and nutritional insight. By integrating powerful APIs and modern development tools, Fitness Buddy aims to bridge the gap between convenience and personalized fitness management.

# Overview
Fitness Buddy is designed to support users throughout their fitness journey. Whether it’s logging a weightlifting workout, tracking food intake, or accessing preset exercises, the app is built to offer simplicity, accuracy, and helpful insights. The app is built using React Native via Expo and integrates the Edamam Food Database API through StepZen, a modern GraphQL layer that enables seamless access to third-party REST APIs.

# Features
- Authentication System
Create a new account
Sign in with existing credentials
Reset forgotten passwords
Receive account recovery emails
- Exercise Explorer
Browse a list of preset exercises
View descriptions and muscle groups
Enter custom sets, reps, and weight data
Log basic exercise performance
- Calorie Tracker
Add food items by name (e.g., "grilled chicken")
Real-time data fetch via Edamam API
View:
Food name and category
Calories and nutrient breakdown (fat, protein, carbs)
Portion quantity and suggested serving sizes
- API-Powered Intelligence
Leverages StepZen to query Edamam’s RESTful service using GraphQL
Efficient and secure data requests through API keys and schema abstraction

# Technology Stack
Language: JavaScript
Framework: React Native (via Expo)
Mobile Platform: Expo Go / Android Emulator / iOS Sim
API Integration: StepZen (GraphQL) + Edamam (REST)
IDE: Visual Studio Code
Package Manager: npm
Version Control: Git + GitHub

# Architecture
Frontend (React Native)
UI components written using JSX
State managed via React Hooks (useState, useEffect)
Navigation handled via expo-router
Backend Layer (StepZen + GraphQL)
REST-to-GraphQL abstraction
Authentication via StepZen API key
Data fetched from Edamam Food Database
External API (Edamam)
Nutrition data by food query
Response parsed into user-friendly structure

# API Integrations
Edamam API
Endpoint: https://api.edamam.com/api/food-database/v2/parser
Required Query Parameters:
- app_id
- app_key
ingr (ingredient search term)
StepZen (GraphQL Wrapper)
Local file: api/curl/index.graphql
Endpoint: https://murieji.us-east-a.ibm.stepzen.net/api/open-lambkin/__graphql
StepZen auto-generates GraphQL types from imported curl schema

# Planned Features
- GPS Cardio Tracker
Log runs, walks, or bike rides with real-time map data
- Social Activity Feed
Share progress or workouts with friends in a community tab
- Music Integration
Add Spotify/YouTube playlists to motivate workouts

# Author
Deray Lowe
Senior Project
Utah Tech University — CS 4600
Spring 2025
Email: deraylowe@utahtech.com

# Acknowledgements
- Edamam API
- StepZen
- Expo

# Professors and peers from Utah Tech CS Department
- Curtis Larsen
  
