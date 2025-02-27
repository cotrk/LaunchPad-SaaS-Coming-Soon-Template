# LaunchPad - SaaS Coming Soon Template

A modern, responsive, and customizable coming soon page template designed for SaaS startups and product launches.

![LaunchPad Screenshot](assets/screenshot.png)

## Features

- 🚀 Clean, minimal design focused on conversions
- 📱 Fully responsive (mobile, tablet, and desktop)
- 📧 Email capture form ready to connect to most email providers
- 🌙 Dark mode by default with light mode toggle
- ⚡ Built with HTML, CSS, and minimal JavaScript
- 🔧 Easy to customize with clear documentation
- 🔍 SEO-friendly structure
- 🎨 Customizable sections to highlight your product's features

## Demo

See the live demo: [https://launchpad-template.demo.com](https://launchpad-template.demo.com)

## Quick Start

1. Clone this repository
```bash
git clone https://github.com/yourusername/launchpad.git
```

2. Open `index.html` in your code editor

3. Customize the content:
   - Update the title, description, and feature sections
   - Replace the logo in `/assets/logo.svg`
   - Modify colors in `css/styles.css`

4. Connect your email form to your preferred email service (Mailchimp, ConvertKit, etc.)

5. Deploy to your preferred hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Customization Options

### Colors

The main colors can be easily customized by editing the CSS variables in `css/styles.css`:

```css
:root {
  --primary-color: #5e72e4;
  --background-color: #0a0c10;
  --text-color: #ffffff;
  --secondary-text-color: #a0aec0;
  --accent-color: #4fd1c5;
}
```

### Features Section

The "What to expect" section can be modified in the `index.html` file. Add or remove features as needed:

```html
<div class="features-container">
  <div class="feature-card">
    <h3>Your Feature Title</h3>
    <p>Your feature description goes here. Keep it concise and focused on benefits.</p>
  </div>
  <!-- Add more feature cards as needed -->
</div>
```

### Form Integration

The template includes a basic email capture form. You can connect it to services like:

- Mailchimp
- ConvertKit
- SendGrid
- FormSubmit
- Netlify Forms

Example for Mailchimp integration:
```html
<form action="https://yoursite.us1.list-manage.com/subscribe/post?u=YOURUSERID&amp;id=YOURLISTID" method="post" class="signup-form">
  <!-- Form fields here -->
</form>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is released under the MIT License. See the LICENSE file for details.

## Credits

- Font: [Inter](https://fonts.google.com/specimen/Inter)
- Icons: [Feather Icons](https://feathericons.com/)

## About

Created by [Your Name/Company]. If you find this template useful, please consider starring the repository.

Need help customizing this template? Reach out to me at [your@email.com](mailto:your@email.com).
