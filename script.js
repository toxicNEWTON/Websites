/* United Fiberglass Solution — official business contact details. */
const SITE_CONFIG = {
  email: 'officeworkmt14@gmail.com',
  phone: '+92 312 2075605',
  address: 'Industrial Area, Korangi, Karachi, Pakistan',
  domain: 'https://www.unitedfiberglassservices.com'
};

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const form = document.querySelector('#quote-form');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  mobileNav.hidden = isOpen;
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));

const serviceSelect = document.querySelector('#service-select');
document.querySelectorAll('[data-service]').forEach(card => {
  card.addEventListener('click', () => {
    if (serviceSelect) serviceSelect.value = card.dataset.service;
  });
});

const footerEmail = document.querySelector('#footer-email');
const footerPhone = document.querySelector('#footer-phone');
const footerAddress = document.querySelector('#footer-address');
const quoteEmail = document.querySelector('#quote-email-label');
if (SITE_CONFIG.email) {
  if (footerEmail) footerEmail.innerHTML = `Email: <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a>`;
  if (quoteEmail) { quoteEmail.textContent = SITE_CONFIG.email; quoteEmail.href = `mailto:${SITE_CONFIG.email}`; }
  document.querySelectorAll('[data-contact-email]').forEach(a => a.href = `mailto:${SITE_CONFIG.email}`);
}
if (SITE_CONFIG.phone && footerPhone) footerPhone.innerHTML = `Phone: <a href="tel:+923122075605">${SITE_CONFIG.phone}</a>`;
if (SITE_CONFIG.address && footerAddress) footerAddress.textContent = `Address: ${SITE_CONFIG.address}`;
document.querySelector('#copyright-year').textContent = new Date().getFullYear();

const obs = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
  });
}, { threshold: .08 }) : null;
document.querySelectorAll('.reveal').forEach(el => obs ? obs.observe(el) : el.classList.add('visible'));

const attachment = document.querySelector('#attachment');
const feedback = document.querySelector('#form-feedback');
attachment?.addEventListener('change', () => {
  if (attachment.files?.[0]?.size > 8 * 1024 * 1024) {
    feedback.textContent = 'Please choose a file smaller than 8 MB.';
    attachment.value = '';
  } else if (feedback) feedback.textContent = '';
});

// Netlify recognizes static HTML forms on deployment; local file previews cannot submit.
form?.addEventListener('submit', event => {
  if (attachment?.files?.[0]?.size > 8 * 1024 * 1024) {
    event.preventDefault();
    feedback.textContent = 'Please upload a file smaller than 8 MB.';
    return;
  }
  if (location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    event.preventDefault();
    feedback.textContent = 'Demo preview: form submissions activate after deploying this website to Netlify and enabling form detection.';
  }
});
