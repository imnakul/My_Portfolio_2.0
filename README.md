# Nakul Srivastava - Personal Brand Website

A modern, performance-optimized personal website built with Next.js featuring a bio.link-style landing page, full portfolio, products showcase, and services pages.

## 🎯 Project Overview

This project follows a strategic SEO-focused architecture:

- **`/` (Landing Page)** - Bio.link-style hub with video background
- **`/portfolio`** - Complete portfolio with projects and AI twin
- **`/products`** - Digital products and SaaS showcase
- **`/services`** - Professional development services

## 🚀 Features

- **Performance Optimized**: Video backgrounds with mobile fallbacks
- **SEO Friendly**: Structured data, sitemap, robots.txt
- **Modern Design**: Glass morphism, smooth animations
- **Mobile First**: Responsive design with mobile optimizations
- **Fast Loading**: Dynamic imports, image optimization

## 🎬 Video Optimization Required

Your current video `rdr-snowy-cabin.3840x2160.mp4` (4K, ~22 seconds) needs optimization:

### Quick Optimization Steps:

1. **Using HandBrake (Recommended)**:
   - Download HandBrake (free)
   - Import your 4K video
   - Use "Web Optimized" preset
   - Set resolution to 1920x1080
   - Set quality to RF 23 (good balance)
   - Remove audio track
   - Export as MP4

2. **Using FFmpeg** (Command line):
   ```bash
   # 1080p optimized version
   ffmpeg -i rdr-snowy-cabin.3840x2160.mp4 -vf scale=1920:1080 -c:v libx264 -crf 23 -preset medium -an rdr-snowy-cabin-1080p.mp4
   
   # 720p mobile version
   ffmpeg -i rdr-snowy-cabin.3840x2160.mp4 -vf scale=1280:720 -c:v libx264 -crf 25 -preset medium -an rdr-snowy-cabin-720p.mp4
   
   # WebM version for better compression
   ffmpeg -i rdr-snowy-cabin.3840x2160.mp4 -vf scale=1920:1080 -c:v libvpx-vp9 -crf 30 -b:v 0 -an rdr-snowy-cabin-1080p.webm
   ```

3. **Then update the video sources in `/src/pages/index.js`**:
   ```jsx
   <source src="/rdr-snowy-cabin-1080p.webm" type="video/webm" />
   <source src="/rdr-snowy-cabin-1080p.mp4" type="video/mp4" />
   ```

### Target File Sizes:
- 1080p MP4: 2-4MB
- 720p MP4: 1-2MB  
- 1080p WebM: 1-3MB

## 🛠️ Setup & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Customization

### Update Personal Information:

1. **Social Links** (`/src/pages/index.js`):
   - Update LinkedIn, GitHub URLs
   - Add Twitter, Instagram as needed

2. **Products** (`/src/pages/products.js`):
   - Add your actual products
   - Update product images and links

3. **Services** (`/src/pages/services.js`):
   - Customize service offerings
   - Update pricing and contact info

4. **SEO Settings**:
   - Update meta descriptions
   - Replace placeholder URLs in sitemap.xml

### Images to Replace:
- `/public/profile.png` - Your profile photo
- `/public/bg2.jpg` - Fallback background image
- Product showcase images

## 🎨 Design Philosophy

### Landing Page (Bio.link Style):
- **Ultra-fast loading**: Minimal JS, optimized assets
- **Visual impact**: Video background with glass morphism
- **Clear navigation**: Direct links to main sections
- **Mobile optimized**: Static image fallback on mobile

### Subdirectories:
- **SEO consolidated**: All under main domain for authority
- **Rich content**: Detailed project showcases
- **Interactive elements**: Smooth animations and effects

## 📈 SEO Optimizations

- ✅ Structured data (JSON-LD)
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Fast Core Web Vitals
- ✅ Mobile-first responsive design

## 🔧 Performance Tips

1. **Video optimization is crucial** - Follow the video guide above
2. **Image optimization**: Use WebP format when possible
3. **Font optimization**: Preload critical fonts
4. **Code splitting**: Components are dynamically imported
5. **Caching**: Configure proper cache headers in production

## 📱 Mobile Performance

- Video disabled on mobile (uses static background)
- Reduced particle count for better performance
- Touch-optimized interface elements
- Fast loading with minimal JavaScript

## 🚀 Deployment

This project is optimized for:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting with Node.js support**

### Environment Variables (if needed):
```env
NEXT_PUBLIC_SITE_URL=https://devnakul.me
```

## 📞 Support

For questions about implementation or customization, reach out through the contact form or email.

---

Built with ❤️ using Next.js, TailwindCSS, and modern web technologies.
- **Projects Showcase**: Interactive carousel and modals highlighting my best work, with live links and feature breakdowns.
- **AI Cognitive Twin**: Chat with an AI-powered assistant to learn more about me, my skills, and fun facts.
- **Stats**: Visual stats and achievements (e.g., GitHub, coding activity, etc.).
- **Contact**: Easy-to-use contact section for collaboration or networking.
- **Fully Responsive**: Optimized for all devices, with smooth animations and a futuristic dark theme.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React-based, SSR & SSG)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + custom CSS for glassmorphism, gradients, and glowing effects
- **Fonts**: [Orbitron](https://fonts.google.com/specimen/Orbitron) (headings), [Inter](https://fonts.google.com/specimen/Inter) (body)
- **Animation**: [react-spring](https://www.react-spring.dev/) for smooth transitions & animated content
- **Markdown Rendering**: [react-markdown](https://github.com/remarkjs/react-markdown)
- **Icons**: [react-icons](https://react-icons.github.io/react-icons/)
- **AI Integration**: Custom API route for Gemini/AI Cognitive Twin chat
- **Deployment**: [Vercel](https://vercel.com/) ready

---

## 📁 Project Structure

- `src/components/` – All React components (Navbar, About, Skills, Projects, AI Twin, etc.)
- `src/pages/` – Next.js pages and API routes
- `src/styles/` – Global and component styles
- `public/` – Static assets (images, icons, resume, etc.)

---

## 🚦 Getting Started

```bash
npm install
npm run dev
# or yarn dev / pnpm dev / bun dev
```

<!--Open [http://localhost:3000](http://localhost:3000) to view the site. -->

---

## 🌐 Live Demo

> [devnakul.me](https://devnakul.me/)

---

## 🤝 Connect

- [LinkedIn](https://www.linkedin.com/in/your-profile)
- [GitHub](https://github.com/your-username)
- [Twitter](https://twitter.com/your-handle)

---

## 📄 License

MIT

---

> Built with ❤️ by Nakul Srivastava. Inspired by the future of web and AI.
