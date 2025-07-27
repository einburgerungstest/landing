# Mobile App Showcase Astro Theme
<img width="1920" alt="pb-rounded" src="https://github.com/cadensstudio/app-showcase/assets/54109914/d76cbfb7-b5e0-4298-84f8-648753629ff6">

This theme is a fully responsive and customizable landing page for showcasing mobile apps. Built with Astro, it utilizes simple HTML and CSS for design and layout, ensuring simplicity and speed. Ideal for developers and designers looking for a lightweight starting point to promote their app.

## Features

- **No Dependencies**: Apart from Astro, this theme does not use any external dependencies.
- **Fully Customizable**: Customize every element of the theme including fonts, images, and text by simple edits.
- **Responsive Design**: Ensures your app looks stunning on both desktop and mobile devices.

## Usage

To begin using this theme for your mobile app landing page, we recommend taking advantage of the GitHub "Use this template" feature, located above the Clone button. This will allow you to create a separate repository where you can customize the theme as you wish.

## Getting Started

1. Create a new repository by clicking "Use this template".
2. Navigate to the project directory and install dependencies with `npm install`.
3. Start the development server with `npm start`.

## Customization Guide

### Content

Edit the frontmatter section at the top of `/src/pages/index.astro` to update the website content, including text and images.

### Styles

All CSS is located in `/src/styles/main.css`. Modify this file to change the look and feel of the site.

### Images

Replace images by uploading new ones to the `/public/images` folder and update the references in the frontmatter of `index.astro`.

### Fonts

Add new font files to `/public/fonts` and reference them in `/src/styles/main.css` to change fonts. For easy integration of Google Fonts into your project, check out [Hermes](https://github.com/cadensstudio/hermes).

## Project Structure

- `/src/pages/index.astro`: The main Astro file for your landing page.
- `/src/styles/main.css`: CSS file for styling your landing page.
- `/public/images`: Directory for storing images.
- `/public/fonts`: Directory for storing fonts.

## Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**: In your repository settings, go to "Pages" and set the source to "GitHub Actions"
2. **Push to main**: The site will automatically deploy when you push to the main branch
3. **Manual deployment**: You can also trigger deployment manually from the Actions tab

The site will be available at: `https://einburgerungstest.github.io/landing`

### Other Hosting Services

This theme can also be deployed on any static site hosting service that supports Astro:
- Netlify
- Vercel  
- Cloudflare Pages
- Any static hosting provider

Follow the hosting provider's instructions for deploying an Astro project.
# GitHub Pages deployment test
