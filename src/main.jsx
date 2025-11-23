import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Enhanced error handling
const renderApp = () => {
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    console.error('Failed to find the root element')
    document.body.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #050414; color: white; text-align: center; padding: 20px;">
        <div>
          <h1 style="font-size: 2rem; margin-bottom: 1rem;">Application Error</h1>
          <p>Failed to find the root element. Please check the HTML structure.</p>
        </div>
      </div>
    `
    return
  }

  try {
    // Clear any existing content
    rootElement.innerHTML = ''
    
    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  } catch (error) {
    console.error('Failed to render app:', error)
    rootElement.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #050414; color: white; text-align: center; padding: 20px;">
        <div>
          <h1 style="font-size: 2rem; margin-bottom: 1rem;">Application Error</h1>
          <p>Failed to render the application. Please try refreshing the page.</p>
          <button onclick="window.location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #8245ec; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      </div>
    `
  }
}

// Add error boundary to catch any unhandled errors
window.addEventListener('error', (e) => {
  console.error('Global error caught:', e.error)
})

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason)
})

// Render the app
renderApp()