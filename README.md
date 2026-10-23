# ALB Portfolio

A modern, responsive portfolio website showcasing cloud infrastructure engineering expertise and professional experience.

## About

This is the personal portfolio website. The site showcases professional experience, technical projects, certifications, and ongoing learning initiatives.

## Features

- **Responsive Design** - Mobile-first approach with hamburger menu for smaller screens
- **Smooth Animations** - Intersection Observer API for scroll-triggered animations
- **Interactive Timeline** - Visual representation of career progression
- **Project Showcase** - Detailed technical implementations of self-hosted infrastructure
- **PWA Support** - Web manifest for install-to-home-screen capability
- **Zero Dependencies** - Built with vanilla JavaScript for optimal performance

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Hosting**: Firebase Hosting
- **Fonts**: Google Fonts (Crimson Pro, DM Sans)
- **Icons**: Custom SVG assets (16 professional icons)

## Project Structure

```
alb-portfolio-goos/
├── public/                       # Firebase deployment directory
│   ├── index.html               # Home/Hero page
│   ├── experience.html          # Work experience timeline
│   ├── projects.html            # Technical projects showcase
│   ├── certifications.html      # Credentials & learning goals
│   ├── 404.html                 # Custom 404 error page
│   ├── styles.css               # Main stylesheet
│   ├── script.js                # Interactive functionality
│   └── assets/                  # Images, favicons, web manifest
│       └── icons/               # SVG icons
├── firebase.json                 # Hosting config: clean URLs, security + cache headers
└── .firebaserc                   # Firebase project settings
```

## Key Sections

### Home
- Hero section with professional summary
- "My Journey" overview
- Professional philosophy and principles
- Social links (LinkedIn, GitHub, Medium)

### Experience
- Interactive timeline of 5 key positions
- Skills overview across 8 technical categories
- Detailed responsibilities and achievements

### Projects
- 5 Self-hosted infrastructure projects:
  - Pi-Hole (DNS-based ad blocking)
  - Jellyfin (Media streaming)
  - Nextcloud (Cloud storage)
  - Vaultwarden (Password management)
  - Homelab Infrastructure (Complete setup)

## Deployment

This site is deployed using Firebase Hosting.

### Prerequisites
- [Firebase CLI](https://firebase.google.com/docs/cli) installed
- Firebase account with project access

### Deploy Steps

1. Install Firebase CLI (if not already installed):
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Preview locally (serves `public/` with the same headers and clean URLs as production):
```bash
firebase emulators:start --only hosting
```
Then open http://localhost:5000. Links use clean URLs (`/experience`), so open the site through the emulator rather than as local files.

4. Deploy to Firebase:
```bash
firebase deploy --only hosting
```

The site will be deployed from the `public/` directory.

## Configuration Files

- **firebase.json** - Firebase hosting configuration
- **.firebaserc** - Firebase project settings
- **.hintrc** - webhint validation rules
- **.vscode/launch.json** - VS Code debugger configuration
- **public/assets/site.webmanifest** - Web app manifest for install-to-home-screen

## Code Quality

- Semantic HTML5 structure
- CSS Variables for consistent theming
- Modern JavaScript with no external dependencies
- Progressive enhancement approach
- Security headers (CSP, nosniff, referrer policy) set in `firebase.json`
- Respects `prefers-reduced-motion`
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Zero external JavaScript libraries
- Optimized asset loading
- Efficient CSS with variable reuse
- Compressed WebP headshot with explicit dimensions
- Fast initial page load

## License

All rights reserved. This portfolio is for demonstration purposes.

## Contact

- **LinkedIn**: [Ashley Lawrance-Brown](https://linkedin.com/in/ashley-lawrance-brown)

---

Built with ❤️ using vanilla web technologies
