## Calendar Event Frontend

Simple React/TypeScript frontend for viewing and managing calendar events.

### Tech stack

- **Framework**: React 17
- **Language**: TypeScript
- **State management**: Redux Toolkit
- **Bundler**: Webpack 5
- **Styling**: SCSS / CSS Modules

### Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm start
   ```

   - Serves the app in development mode with source maps.
   - Webpack dev server will usually be available at `http://localhost:8080` (or the port configured in your Webpack dev server settings).

3. **Create a production build**

   ```bash
   npm run build
   ```

   - Outputs an optimized production bundle to the `dist` directory (as configured in Webpack).

### Project structure (high level)

- **`src/App.tsx`**: Root React component; initializes the app and loads calendar events.
- **`src/components/calendar/`**: Calendar UI components.
- **`src/hooks/`**: Custom hooks such as `useActions` used to dispatch Redux actions.
- **`src/common.scss`**: Global/common styles.

### Scripts (from `package.json`)

- **`npm start`**: `webpack serve --mode=development --devtool source-map`
- **`npm run build`**: `webpack --mode=production`

### Requirements

- **Node.js** and **npm** installed on your machine.
