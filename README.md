# NewsVilla

**NewsVilla** is a user-friendly news application built with React and styled using Bootstrap. It fetches and displays the latest news articles from various sources, providing users with an intuitive and responsive interface to stay updated.

## Features

- **Responsive Design**: Ensures optimal viewing experience across devices.
- **Latest News**: Fetches up-to-date articles from multiple sources.
- **Category Filtering**: Allows users to filter news by categories like technology, sports, etc.

## Prerequisites

Before running the application, ensure you have the following:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Comes bundled with Node.js
- **NewsAPI Key**: Obtain an API key from [NewsAPI.org](https://newsapi.org/)

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/amitdubey88/NewsVillaCode.git
   cd NewsVillaCode
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure API Keys**:

   - Open `src/Contexts/ContextWrapper.js`.
   - Replace the placeholder with your NewsAPI key:

     ```javascript
     apiKey: 'YOUR_NEWSAPI_KEY_HERE'
     ```

   - If using a CORS proxy, add your RapidAPI key:

     ```javascript
     rapidAPICors: 'YOUR_RAPIDAPI_KEY_HERE'
     ```

4. **Start the application**:

   ```bash
   npm start
   ```

   The app will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload upon code changes, and any lint errors will appear in the console.

## Available Scripts

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner in interactive watch mode.
- **`npm run build`**: Builds the app for production to the `build` folder.

## Deployment

To deploy the application:

1. **Build the app**:

   ```bash
   npm run build
   ```

   This creates an optimized production build in the `build` folder.

2. **Serve the build** using a static server or deploy it to platforms like Netlify, Vercel, or GitHub Pages.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. Commit your changes:

   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/YourFeatureName
   ```

5. Open a pull request.


## Acknowledgements

- [NewsAPI](https://newsapi.org/) for providing news data.
- [Bootstrap](https://getbootstrap.com/) for responsive design components.
- [React](https://reactjs.org/) for the robust frontend library.

---

*Developed by [Amit Dubey](https://github.com/amitsince2001/)*
