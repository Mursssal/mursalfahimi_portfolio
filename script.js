// Highlight the nav link for the section currently in view
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-links a');

const setActive = (id) => {
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
};

const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
  { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
);
sections.forEach(s => observer.observe(s));

// Project filters
const filterButtons = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    filterButtons.forEach(b => b.classList.toggle('active', b === btn));
    projects.forEach(p => {
      const tags = p.dataset.tags.split(' ');
      p.classList.toggle('hidden', f !== 'all' && !tags.includes(f));
    });
  });
});
