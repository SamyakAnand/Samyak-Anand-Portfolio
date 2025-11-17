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

For the portfolio to function correctly, you must set the following environment variables in your Vercel project settings or local `.env` file:

### EmailJS Configuration (Contact Form)
- `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

### Resume Download
- `VITE_RESUME_DOWNLOAD_URL` - Direct link to your resume file

### EURI Chatbot API (if used)
- `VITE_EURI_API_KEY` - API key for EURI chatbot
- `VITE_EURI_API_URL` - API endpoint for EURI chatbot
- `VITE_EURI_MODEL` - Model name for EURI chatbot

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# The app will be available at http://localhost:5173
```

## 🏗️ Build for Production

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The build output will be in the `dist` folder.

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

- **React** - Frontend library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **EmailJS** - Contact form handling
- **React Icons** - Icon library
- **React Parallax Tilt** - 3D tilt effects

## 📞 Contact

For any inquiries, please reach out via the contact form on the website or directly at samyak.g.anand@gmail.com.