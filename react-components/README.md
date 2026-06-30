# React Timeline Components

This folder contains the React conversion of the HTML timeline design. The implementation maintains **100% visual fidelity** with the original HTML version.

## Components Structure

```
react-components/
├── CompanyPage.jsx      # Main page component
├── Navbar.jsx           # Navigation bar with dropdown
├── Timeline.jsx         # Timeline section wrapper
├── TimelineItem.jsx     # Individual timeline item
└── README.md           # This file
```

## Usage

### 1. Basic Implementation

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import CompanyPage from './react-components/CompanyPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CompanyPage />
  </React.StrictMode>
);
```

### 2. Using Individual Components

```jsx
import Timeline from './react-components/Timeline';

const policies = [
  {
    stepNumber: '01',
    title: 'Terms and Conditions',
    description: 'Your description here',
    link: 'terms.html',
    position: 'left'
  },
  // ... more policies
];

function App() {
  return <Timeline policies={policies} />;
}
```

## CSS Import

Make sure to import your existing `style.css` file. You can do this in:
- `CompanyPage.jsx` (already included)
- Or in your main `index.js`/`App.js`

```jsx
import './style.css';
```

## Component Props

### Timeline
| Prop | Type | Description |
|------|------|-------------|
| policies | Array | Array of policy objects |

### TimelineItem
| Prop | Type | Description |
|------|------|-------------|
| stepNumber | String | Step number (e.g., "01") |
| title | String | Policy title |
| description | String | Policy description |
| link | String | Link to policy page |
| position | String | "left" or "right" |

## Key Features

✅ **Exact Visual Match** - Renders identically to the HTML version  
✅ **Responsive Design** - All mobile/tablet breakpoints preserved  
✅ **Hover Animations** - All CSS transitions and effects maintained  
✅ **Reusable Components** - Easy to customize and extend  
✅ **Clean JSX** - Proper React syntax with className instead of class  

## No Changes Required

- ✅ CSS file remains unchanged
- ✅ All class names preserved
- ✅ Spacing and layout identical
- ✅ Colors and styling unchanged
- ✅ Animations work exactly the same

## Installation in a React Project

1. Copy the `react-components` folder to your React project
2. Copy your existing `style.css` to your React project
3. Import and use the components as shown above

```bash
# If using Create React App
npm start

# If using Vite
npm run dev
```

## Browser Compatibility

Same as the original HTML version - works in all modern browsers.
