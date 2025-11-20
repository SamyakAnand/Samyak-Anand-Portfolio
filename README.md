# Samyak Anand Portfolio

This is a professional portfolio website built with React, Vite, and Tailwind CSS. It showcases projects, skills, and experience as a Data Scientist and ML Engineer.

## 🚀 Deployment to Vercel

### Automatic Deployment (Recommended)
1. Push the code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and create a new project
3. Import your GitHub repository
4. Configure the project settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add Environment Variables (see section below)
6. Deploy the project

### Manual Deployment
```bash
# Install dependencies
npm install

# Build for production
npm run build

# The build output will be in the `dist` folder
# Upload the contents of the `dist` folder to your hosting provider
```

## 🔐 Environment Variables

For the portfolio to function correctly, you must set the following environment variables in your Vercel project settings:

```bash
# Euri API Configuration (Optional - for chatbot functionality)
VITE_EURI_API_KEY=your_euri_api_key_here
VITE_EURI_API_URL=https://api.euron.one/api/v1/euri/chat/completions
VITE_EURI_MODEL=gpt-4.1-nano

# Resume Download Link (Required - link to your resume)
VITE_RESUME_DOWNLOAD_URL=/Samyak_Updated_CV.pdf

# EmailJS Configuration (Required - for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Setting Environment Variables in Vercel
1. Go to your Vercel project dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables" in the sidebar
4. Add each variable with its corresponding value
5. Redeploy your project for changes to take effect

## 🛠️ Development

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd Samyak-Portfolio

# Install dependencies
npm install
```

### Running the Development Server
```bash
# Start the development server
npm run dev

# Open your browser and visit http://localhost:5173
```

### Building for Production
```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure
```
src/
├── assets/          # Images, logos, and other assets
├── components/      # React components
├── constants.js     # Project data and constants
├── App.jsx          # Main App component
└── main.jsx         # Entry point
```

## 🎨 Technologies Used
- React
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons
- React Parallax Tilt
- React Typing Effect

## 📞 Contact
If you have any questions or feedback, feel free to reach out to Samyak Anand at samyakanand2003@gmail.com.