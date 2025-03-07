# 🌍 TravelHues App ✈️

Welcome to **TravelHues** – your go-to platform for turning travel stories into earnings! 💰✨ Whether you're a seasoned traveler, a vlogger, or just someone who loves sharing hidden gems, **TravelHues** is here to help you monetize your passion. 🚀

## 🎒 What is TravelHues?

TravelHues is built for explorers like YOU! 🌟 With our platform, you can:
- 📍 **Create & Share Itineraries** – Showcase your travel guides, tips, and must-do activities.
- 🏨 **Monetize with Affiliate Links** – Recommend stays, gear, and experiences while earning commissions. 💵
- 📲 **Boost Your Social Media** – Drive traffic to your Instagram, YouTube, and blogs effortlessly. 📢
- 🤝 **Join a Travel-Loving Community** – Connect, collaborate, and grow with like-minded adventurers. 🌎

## 🔥 Features (Coming Soon!)
- 🗺 **Personalized Travel Guides** – Tailor-made itineraries for every kind of traveler.
- 🛒 **Affiliate Integration** – Earn by recommending your favorite travel essentials.
- 📊 **Analytics Dashboard** – Track earnings and audience engagement in real time. 📈
- 🎥 **Content Boost Tools** – Amplify your reach across multiple platforms. 📡

## 🌟 Join the Movement!
We're on the lookout for **travel enthusiasts** 🇮🇳 to test, explore, and help shape TravelHues! Know the best beaches, street food spots, or offbeat adventures? We need YOU! 🏝🍛🏔

💌 **Let’s build something amazing together!** Reach out, contribute, and be part of the next big thing in travel content. 

## 📡 Stay Connected
Follow us on social media and keep the wanderlust alive! 🌍✨ 

🔗 *https://www.linkedin.com/company/travelhues*

🚀 Ready to turn your travels into treasure? Let’s go! 🧳✨

--------------------------------------------------------

--------------------------------------------------------

## 🚀 Dockerizing TravelHues App

### 🏗️ Setting Up for Production

1. **Build the Docker Image:**  
   ```sh
   docker build -t travelhues-app .
   ```

2. **Run the Container:**  
   ```sh
   docker run -p 8080:80 travelhues-app
   ```
   Your app should now be live at **http://localhost:8080** 🎉

### 🔧 Setting Up for Development (Hot Reload)

1. **Build & Start the Dev Container:**  
   ```sh
   docker-compose up --build
   ```

2. The app will be available on **http://localhost:5173** 🔥

### 📂 `.dockerignore` File
Make sure to include this to keep the build clean:
```
node_modules
dist
.git
.DS_Store
.env
```

----------------------------------------------------------------

----------------------------------------------------------------


## 🌿 GitFlow Branch Strategy
To maintain a structured workflow, we follow **GitFlow** for version control:

### 📌 Branches:
- **`main`** – Stable, production-ready code.
- **`develop`** – Active development branch (merged into `main` upon release).
- **`feature/{feature-name}`** – Individual features branched from `develop`.
- **`release/{version}`** – Prepares a new release from `develop`, allowing final fixes before merging into `main`.
- **`hotfix/{fix-name}`** – Critical fixes applied directly to `main`, then merged into `develop`.

### 🚀 Workflow:
```mermaid
graph TD;
    A[main] -->|Branch off| B(develop);
    B -->|Feature branch| C(feature/{feature-name});
    C -->|Merge back| B;
    B -->|Create release| D(release/{version});
    D -->|Test & Fixes| D;
    D -->|Merge to main| A;
    A -->|Hotfix if needed| E(hotfix/{fix-name});
    E -->|Merge to main & develop| A & B;
```


### >_ Commands:
1. **Starting a Feature:**
   ```sh
   git checkout develop
   git checkout -b feature/{feature-name}
   ```
2. **Finishing a Feature:**
   ```sh
   git checkout develop
   git merge feature/{feature-name}
   git branch -d feature/{feature-name}
   ```
3. **Creating a Release:**
   ```sh
   git checkout develop
   git checkout -b release/{version}
   ```
4. **Applying Hotfixes:**
   ```sh
   git checkout main
   git checkout -b hotfix/{fix-name}
   ```

Following this structure ensures a clean and efficient development cycle! 🔥
