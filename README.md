# Junaid Mohammed - Professional Portfolio Website

A modern, responsive personal portfolio website built with HTML5, CSS3, and JavaScript. Showcasing professional experience, technical skills, and featured projects.

## Features

✨ **Modern Design**
- Clean, professional dark theme with cyan accents
- Fully responsive across all devices
- Smooth animations and transitions
- Glassmorphism effects on navigation

📱 **Responsive Layout**
- Mobile-first approach
- Hamburger menu for mobile navigation
- Optimized for desktop, tablet, and mobile screens

🎯 **Interactive Elements**
- Smooth scroll navigation
- Fade-in animations on scroll
- Counter animations for statistics
- Hover effects on cards and buttons
- Active section highlighting in navbar

📄 **Complete Sections**
- Hero/Home section with CTA buttons
- About section with statistics
- Skills section with categorized technical skills
- Experience timeline
- Featured projects showcase
- Education highlights
- Contact information and social links

## Project Structure

```
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling and responsive design
├── script.js           # JavaScript for interactivity and animations
├── README.md           # This file
└── Junaid Mohammed Resume 2026.pdf  # Original resume
```

## Files Included

### index.html
Contains the complete HTML structure with semantic markup including:
- Navigation bar with smooth scrolling
- Hero section with call-to-action buttons
- About section with personal statistics
- Skills section with categorized technical skills
- Experience timeline
- Featured projects with descriptions
- Education information
- Contact section with social links

### styles.css
Comprehensive styling includes:
- CSS custom properties (variables) for consistent theming
- Modern color scheme (dark blue backgrounds with cyan accents)
- Grid and Flexbox layouts
- Responsive breakpoints for mobile, tablet, and desktop
- Hover and focus states for accessibility
- Smooth transitions and animations
- Glassmorphism effects

### script.js
Interactive features:
- Mobile hamburger menu functionality
- Smooth scroll navigation
- Navbar background on scroll
- Intersection Observer for fade-in animations
- Counter animations for statistics
- Active section highlighting
- Keyboard navigation support
- Responsive menu behavior

## How to Use

### Local Development

1. **Open in Browser**
   - Simply double-click `index.html` to open in your default browser
   - Or right-click and select "Open with" your preferred browser

2. **Live Server (Recommended)**
   - If using VS Code, install the Live Server extension
   - Right-click `index.html` and select "Open with Live Server"
   - This provides hot reload and better development experience

### Customize

**Update Personal Information:**
- Email: Replace `junnu.mohammed@gmail.com` with your email
- Phone: Replace `905-744-7188` with your phone number
- Location: Update "London, ON, Canada" to your location
- LinkedIn/GitHub URLs: Update the social media links

**Modify Colors:**
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --primary-color: #0f172a;      /* Main dark blue */
    --secondary-color: #0ea5e9;    /* Cyan blue */
    --accent-color: #06b6d4;       /* Lighter cyan */
    /* ... other colors ... */
}
```

**Add More Projects:**
Copy a project card in the projects section and update the details:
```html
<div class="project-card">
    <!-- Your project details -->
</div>
```

## Deployment Options

### 1. **GitHub Pages (Free)**
- Push files to a GitHub repository
- In repository settings, enable GitHub Pages
- Select main branch as source
- Your site will be live at `username.github.io/repository-name`

### 2. **Vercel (Free)**
- Sign up at vercel.com
- Connect your GitHub repository
- Vercel automatically deploys on push
- Get a free `yourdomain.vercel.app` URL

### 3. **Netlify (Free)**
- Sign up at netlify.com
- Drag and drop your folder or connect GitHub
- Automatic deployment on push
- Free custom domain options

### 4. **Traditional Web Hosting**
- Upload files via FTP to any web host
- Works with any shared hosting provider
- Full control over domain and server

## Browser Support

- Chrome/Edge (Latest 2 versions)
- Firefox (Latest 2 versions)
- Safari (Latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Fully optimized HTML/CSS/JS
- No external dependencies (uses CDN for icons only)
- Lightweight and fast loading
- Optimized animations using GPU acceleration

## Accessibility

- Semantic HTML5 structure
- Proper heading hierarchy
- Color contrast ratios meet WCAG standards
- Keyboard navigation support
- Responsive focus states

## Customization Tips

1. **Change Theme Colors**: Update CSS variables in `:root`
2. **Add Custom Font**: Link Google Fonts in the `<head>` tag
3. **Add More Sections**: Copy section structure and update content
4. **Optimize Images**: Add project preview images in project cards
5. **Add Animations**: Extend keyframe animations in CSS

## Future Enhancements

Consider adding:
- Blog section for articles
- Project image galleries
- Contact form with backend
- Dark/Light theme toggle
- PDF resume download
- Open source contributions section
- Testimonials section

## License

This portfolio template is open for personal use. Modify as needed for your professional portfolio.

## Support

If you encounter any issues:
1. Check browser console for errors (F12)
2. Verify all file paths are correct
3. Ensure files are in the same directory
4. Test in different browsers

---

**Happy coding! 🚀**

For updates and improvements to this portfolio, visit the repository.
