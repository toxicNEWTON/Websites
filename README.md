# United Fiberglass Solution — Website

A responsive, single-page business website matching the approved white / navy / teal concept. Built with plain HTML, CSS, and JavaScript; no framework or build process required.

## Preview
Open `index.html` in a browser. All sections, mobile navigation, service selection, and animations are functional in preview. The quote form intentionally **does not submit locally**.

## Go live on Netlify
1. Create an account at https://www.netlify.com/.
2. Upload the entire `united-fiberglass-website` folder through Netlify's manual deploy feature (or connect a Git repository).
3. Open Site configuration / Forms in Netlify and verify form detection and submissions are enabled for your plan/site.
4. Deploy or redeploy the site after form detection is configured. The form's HTML has `data-netlify="true"` and is named `quote-request`.
5. In Netlify's Forms area, test a submission and set email notifications to **officeworkmt14@gmail.com** (this notification is not automatically enabled by the HTML).
6. Connect your domain and enable HTTPS under Domain management.

**Important:** Form submission is designed for Netlify hosting; it will not store or email requests on other static hosts unless you connect a working backend/form provider. Business contact details have been added. The domain is included in metadata but must still be connected and verified with your DNS/hosting provider.

## Update company information
Current company details:
- Name: United Fiberglass Solution
- Phone: +92 312 2075605
- Email: officeworkmt14@gmail.com
- Address: Industrial Area, Korangi, Karachi, Pakistan
- Domain: https://www.unitedfiberglassservices.com/

Update `SITE_CONFIG` in `script.js` and matching HTML content in `index.html` if these details change.

## Images and commercial use
The images in `assets/` were cropped from the AI-generated design mockup provided in this conversation. They are **illustrative placeholders**, not photographs of your own completed projects. Replace them with actual company project photographs prior to launching or claiming specific project work. Project titles are category examples, not verified case studies.

## Files
- `index.html` – full homepage
- `styles.css` – responsive design and animations
- `script.js` – navigation, form checks, contact configuration
- `thank-you.html` – confirmation page for live form submissions
- `assets/` – illustrative images cropped from the mockup

## Launch checklist
- [x] Company name, email, telephone, location, and domain entered
- [ ] Add business hours if needed
- [ ] Replace illustrative project photos with genuine photos
- [ ] Review service availability and wording
- [ ] Add privacy policy and legal details appropriate to your region
- [ ] Deploy to Netlify and test quote submissions / notifications end-to-end
- [ ] Connect business domain and HTTPS
- [ ] Review mobile layout, accessibility and SEO title/description

## Domain / launch note
The website package does not register or activate a domain. Connect `www.unitedfiberglassservices.com` to your hosting provider, configure DNS and SSL, then confirm HTTPS works before public launch. The domain shown in metadata is not proof of ownership or deployment.

## Latest refinements
- Project gallery cards now have consistent, taller photo stages and subtle soft shadows.
- Images use `object-fit: contain` without heavy cropping or zoom, so the whole tank, enclosure, boat, and ducting examples remain visible.
- Subtle hover lift and focus-friendly Facebook and Instagram icons were added in the footer.
- Facebook: https://www.facebook.com/profile.php?id=100086352588277
- Instagram: https://www.instagram.com/united_fiber_glass

### Project image fit (latest)
The “Built for Every Challenge” gallery now uses two larger cards per row on desktop and one per row on smaller screens. Photos retain their original wide aspect ratio, with no zoom, crop, or hover scale.
