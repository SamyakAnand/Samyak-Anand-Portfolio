# Samyak Anand Portfolio

This is a professional portfolio website built with React, Vite, and Tailwind CSS.

## Deployment to Vercel

1. Push the code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and create a new project
3. Import your GitHub repository
4. Configure the project settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy the project

## Environment Variables

Make sure to set the following environment variables in your Vercel project settings:

- `VITE_EURI_API_KEY`
- `VITE_EURI_API_URL`
- `VITE_EURI_MODEL`
- `VITE_RESUME_DOWNLOAD_URL`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Local Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.