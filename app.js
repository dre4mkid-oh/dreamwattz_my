const arrowIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
`;

const icons = {
  pen: `<svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m4 20 4.4-1.1L20 7.3 16.7 4 5.1 15.6 4 20Z"/><path d="m14.8 5.9 3.3 3.3"/></svg>`,
  search: `<svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.2"/><path d="m16 16 4 4"/></svg>`,
  file: `<svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14H7V3Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>`,
  mail: `<svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4V6Z"/><path d="m4 7 8 6 8-6"/></svg>`,
  target: `<svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M16 8 21 3M17 3h4v4"/></svg>`,
  chat: `<svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v10H8l-3 3V5Z"/><path d="M8 9h8M8 12h5"/></svg>`,
  spark: `<svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v5M12 16v5M3 12h5M16 12h5M6.2 6.2l3.2 3.2M14.6 14.6l3.2 3.2M17.8 6.2l-3.2 3.2M9.4 14.6l-3.2 3.2"/></svg>`,
  flow: `<svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="7" r="3"/><circle cx="18" cy="7" r="3"/><circle cx="12" cy="18" r="3"/><path d="M8.7 8.4 11 15M15.3 8.4 13 15M9 7h6"/></svg>`,
  users: `<svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13a4 4 0 1 1 8 0"/><circle cx="12" cy="7" r="3"/><path d="M3 18a5 5 0 0 1 6-4.9M21 18a5 5 0 0 0-6-4.9"/></svg>`,
  check: `<svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`,
  bulb: `<svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 22h4"/><path d="M8 14a6 6 0 1 1 8 0c-.8.7-1 1.5-1 2H9c0-.5-.2-1.3-1-2Z"/></svg>`,
  screen: `<svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H4V5Z"/><path d="M9 20h6M12 16v4"/></svg>`,
  shield: `<svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v6c0 5-3.4 8.1-8 9-4.6-.9-8-4-8-9V6l8-3Z"/><path d="m8.8 12.1 2.1 2.1 4.5-4.7"/></svg>`
};

const services = [
  {
    slug: "copywriting",
    title: "Copywriting",
    icon: icons.pen,
    summary: "Conversion-focused copy for websites, landing pages, ads, and campaigns.",
    description:
      "We turn your offer into clear, useful, persuasive copy that gives visitors a reason to trust you and a reason to act.",
    outcomes: ["Website and landing page copy", "Offer messaging and positioning", "Ad, sales, and launch copy", "Clear voice and tone guidelines"]
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    icon: icons.search,
    summary: "Technical SEO, on-page optimization, and content that can earn search demand.",
    description:
      "DreamWattz builds practical SEO foundations, improves page relevance, and connects search intent to useful content.",
    outcomes: ["Keyword and intent mapping", "On-page SEO updates", "Content refreshes", "Performance and ranking reporting"]
  },
  {
    slug: "blog-writing",
    title: "Blog Writing",
    icon: icons.file,
    summary: "Well-researched articles that build authority, traffic, and buyer confidence.",
    description:
      "We write helpful, structured blog content designed for human readers, search engines, and your sales journey.",
    outcomes: ["Editorial calendar planning", "SEO-informed article drafts", "Expert review workflows", "Refreshes for existing posts"]
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    icon: icons.mail,
    summary: "Newsletter and campaign systems that nurture leads and increase repeat revenue.",
    description:
      "We create lifecycle emails, campaign sequences, and newsletter content that keep your audience warm without sounding automated.",
    outcomes: ["Welcome and nurture sequences", "Campaign copy and segmentation", "Newsletter planning", "Performance optimization"]
  },
  {
    slug: "content-strategy",
    title: "Content Strategy",
    icon: icons.target,
    summary: "Audience-led strategy that aligns topics, channels, and campaigns with business goals.",
    description:
      "We clarify what to publish, where it should live, how it should convert, and how each piece supports the bigger growth plan.",
    outcomes: ["Content audits", "Messaging frameworks", "Channel and topic strategy", "Quarterly editorial roadmaps"]
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    icon: icons.chat,
    summary: "Platform-native content and strategy that grows attention without chasing noise.",
    description:
      "We shape social content systems that fit your brand, repurpose core ideas, and create useful touchpoints across channels.",
    outcomes: ["Social content calendars", "Post and caption writing", "Campaign repurposing", "Brand voice consistency"]
  },
  {
    slug: "ai-assisted-marketing",
    title: "AI-Assisted Marketing",
    icon: icons.spark,
    summary: "AI-supported content creation, ideation, and optimization with human editorial control.",
    description:
      "We help teams use AI to move faster while protecting quality, accuracy, voice, and strategic judgment.",
    outcomes: ["Prompt libraries", "AI content workflows", "Editorial QA systems", "Team enablement sessions"]
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow & Automation",
    icon: icons.flow,
    summary: "Streamline repeatable marketing processes and scale output with smart automation.",
    description:
      "We map repetitive work, design AI-assisted processes, and build simple automations that save time across content operations.",
    outcomes: ["Workflow mapping", "Automation planning", "Content ops templates", "AI-assisted handoff systems"]
  },
  {
    slug: "digital-marketing-consulting",
    title: "Digital Marketing Consulting",
    icon: icons.users,
    summary: "Expert guidance to diagnose growth blockers and choose the next best moves.",
    description:
      "We bring strategic clarity to campaigns, funnels, messaging, channels, and content operations so teams can act with confidence.",
    outcomes: ["Growth audits", "Campaign planning", "Funnel and offer reviews", "Executive strategy sessions"]
  }
];

const caseStudies = [
  {
    title: "GreenHome",
    category: "Sustainable Living eCommerce",
    stat: "312%",
    metric: "Organic traffic increase",
    body: "A refreshed SEO and content strategy helped build consistent search visibility and higher-intent traffic."
  },
  {
    title: "FinSmart",
    category: "FinTech SaaS",
    stat: "2.6x",
    metric: "Qualified leads",
    body: "A new messaging system, landing page copy, and email campaigns improved lead quality and conversions."
  },
  {
    title: "CareConnect",
    category: "Healthcare Services",
    stat: "185%",
    metric: "Increase in appointments",
    body: "Targeted local content and on-page SEO lifted patient inquiries for high-value services."
  }
];

const pricing = [
  {
    title: "Starter",
    price: "$899",
    cadence: "/month",
    items: ["Content strategy", "4 blog posts per month", "On-page SEO", "Monthly performance report"]
  },
  {
    title: "Growth",
    price: "$1,999",
    cadence: "/month",
    featured: true,
    items: ["Everything in Starter", "8 blog posts per month", "Email marketing campaigns", "SEO and content optimization", "Performance reporting"]
  },
  {
    title: "Scale",
    price: "$3,999",
    cadence: "/month",
    items: ["Everything in Growth", "Social media management", "AI workflow automation", "Priority support", "Monthly strategy call"]
  }
];

const insights = [
  {
    title: "How to Create Content That Ranks",
    body: "A practical framework for matching search intent, useful structure, and conversion paths.",
    tag: "SEO"
  },
  {
    title: "Email Sequences That Actually Convert",
    body: "How to nurture subscribers with timing, relevance, and clear next steps.",
    tag: "Email"
  },
  {
    title: "5 Ways to Use AI to Scale Your Marketing",
    body: "Simple ways to save time, improve output, and protect editorial quality.",
    tag: "AI"
  }
];

const proofItems = [
  { icon: icons.check, text: "Results-focused strategy" },
  { icon: icons.bulb, text: "AI-assisted execution" },
  { icon: icons.screen, text: "Transparent communication" },
  { icon: icons.shield, text: "Built for scalable growth" }
];

const routes = {
  "/": renderHome,
  "/about": renderAbout,
  "/services": renderServices,
  "/portfolio": renderPortfolio,
  "/pricing": renderPricing,
  "/blog": renderBlog,
  "/work-with-us": renderWorkWithUs,
  "/work-with-us/discovery-call": () => renderFormPage("Discovery Call", "Book a focused strategy call to clarify goals, spot the best opportunities, and decide whether DreamWattz is the right fit.", "Schedule your call", "discovery"),
  "/work-with-us/request-a-quote": () => renderFormPage("Request a Quote", "Share your project goals, timeline, and priorities. We will respond with the right starting point and package recommendation.", "Send request", "quote"),
  "/contact": () => renderFormPage("Contact Us", "Questions, partnerships, and project conversations can start here. Tell us what you are working on and we will point you in the right direction.", "Send message", "contact"),
  "/legal/privacy-policy": renderPrivacy,
  "/legal/terms-of-service": renderTerms
};

services.forEach((service) => {
  routes[`/services/${service.slug}`] = () => renderServiceDetail(service);
});

function renderHome() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <h1>DreamWattz Content <span>Marketing</span></h1>
          <p class="hero-copy">We help ambitious businesses attract, engage, and convert with high-impact content and AI-driven workflows that save time and deliver real results.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#/services">Explore our services ${arrowIcon}</a>
            <a class="button button-secondary" href="#/work-with-us/request-a-quote">Request a quote ${arrowIcon}</a>
          </div>
          <div class="proof-row">
            ${proofItems.map((item) => `<div class="proof-item">${item.icon}<span>${item.text}</span></div>`).join("")}
          </div>
        </div>
        <div class="hero-media">
          <img src="assets/dreamwattz-hero.png" alt="A marketing dashboard on a laptop with analytics, content planning panels, and electric workflow lines." />
        </div>
      </div>
    </section>
    ${servicesSection()}
    ${caseStudiesSection()}
    ${pricingSection()}
    ${insightsSection()}
    ${ctaSection()}
  `;
}

function servicesSection() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <div>
            <h2>End-to-end content and AI marketing services</h2>
            <p>Everything you need to create, optimize, automate, and scale.</p>
          </div>
          <a class="link-arrow" href="#/services">View all services ${arrowIcon}</a>
        </div>
        <div class="grid service-grid">
          ${services.map(serviceCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function serviceCard(service) {
  return `
    <article class="card">
      ${service.icon}
      <h3>${service.title}</h3>
      <p>${service.summary}</p>
      <a class="link-arrow" href="#/services/${service.slug}">Learn more ${arrowIcon}</a>
    </article>
  `;
}

function caseStudiesSection() {
  return `
    <section class="section section-soft">
      <div class="container">
        <div class="section-heading">
          <div>
            <h2>Real results. Real impact.</h2>
            <p>A few examples of how we help businesses grow.</p>
          </div>
          <a class="link-arrow" href="#/portfolio">View case studies ${arrowIcon}</a>
        </div>
        <div class="grid grid-3">
          ${caseStudies.map(caseCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function caseCard(item) {
  return `
    <article class="card case-card">
      <h3>${item.title}</h3>
      <p>${item.category}</p>
      <strong class="case-stat">${item.stat}</strong>
      <p><strong>${item.metric}</strong></p>
      <p>${item.body}</p>
      <a class="link-arrow" href="#/portfolio">Read case study ${arrowIcon}</a>
    </article>
  `;
}

function pricingSection() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <div>
            <h2>Simple packages. Scalable results.</h2>
            <p>Flexible plans for businesses at every stage.</p>
          </div>
          <a class="link-arrow" href="#/pricing">View full pricing ${arrowIcon}</a>
        </div>
        <div class="grid grid-3">
          ${pricing.map(priceCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function priceCard(plan) {
  return `
    <article class="card pricing-card ${plan.featured ? "featured" : ""}">
      ${plan.featured ? '<div class="popular-strip">Most popular</div>' : ""}
      <h3>${plan.title}</h3>
      <div class="price">${plan.price} <span>${plan.cadence}</span></div>
      <ul class="check-list">
        ${plan.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <div class="section-actions">
        <a class="button ${plan.featured ? "button-amber" : "button-secondary"}" href="#/work-with-us/discovery-call">Get started ${arrowIcon}</a>
      </div>
    </article>
  `;
}

function insightsSection() {
  return `
    <section class="section section-soft">
      <div class="container">
        <div class="section-heading">
          <div>
            <h2>Insights that drive growth</h2>
            <p>Practical tips, strategies, and AI-forward ideas.</p>
          </div>
          <a class="link-arrow" href="#/blog">View all insights ${arrowIcon}</a>
        </div>
        <div class="grid grid-3">
          ${insights.map(insightCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function insightCard(item) {
  return `
    <article class="card">
      <svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v14H5V5Z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <a class="link-arrow" href="#/blog">Read more ${arrowIcon}</a>
    </article>
  `;
}

function ctaSection() {
  return `
    <section class="section">
      <div class="container">
        <div class="cta-band">
          <div>
            <h2>Ready to grow smarter?</h2>
            <p>Let’s build a content and AI strategy that powers real results.</p>
          </div>
          <div class="hero-actions">
            <a class="button button-amber" href="#/work-with-us/discovery-call">Book a discovery call ${arrowIcon}</a>
            <a class="button button-secondary" href="#/work-with-us/request-a-quote">Request a quote ${arrowIcon}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderPageHero(title, copy) {
  return `
    <section class="page-hero">
      <div class="container">
        <h1>${title}</h1>
        <p class="page-copy">${copy}</p>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    ${renderPageHero("About <span>DreamWattz</span>", "We combine sharp content strategy, editorial craft, SEO thinking, and AI-enabled workflows to help teams market with more clarity and less drag.")}
    <section class="page-section">
      <div class="container split">
        <div class="content-block">
          <h2>Built for teams that need strategy and execution.</h2>
          <p>DreamWattz exists for businesses that know content matters but need a better operating system around it. We help clarify messaging, create useful content, improve search visibility, automate repeatable work, and turn scattered marketing activity into a focused growth engine.</p>
          <div class="stat-strip">
            <div class="stat"><strong>9</strong><span>Core services</span></div>
            <div class="stat"><strong>3</strong><span>Growth packages</span></div>
            <div class="stat"><strong>1</strong><span>Clear plan</span></div>
          </div>
        </div>
        <ol class="process-list">
          <li><strong>Clarity first</strong><span>We define the audience, offer, channels, and content priorities before production begins.</span></li>
          <li><strong>Practical systems</strong><span>We use AI and automation where they reduce busywork without watering down quality.</span></li>
          <li><strong>Measurable progress</strong><span>Every engagement is tied to traffic, leads, conversion, consistency, or team efficiency.</span></li>
        </ol>
      </div>
    </section>
    ${ctaSection()}
  `;
}

function renderServices() {
  return `
    ${renderPageHero("Services", "From copywriting and SEO to AI workflow automation, DreamWattz gives your marketing a complete content engine.")}
    <section class="page-section">
      <div class="container">
        <div class="grid service-grid">
          ${services.map(serviceCard).join("")}
        </div>
      </div>
    </section>
    ${ctaSection()}
  `;
}

function renderServiceDetail(service) {
  return `
    ${renderPageHero(service.title, service.description)}
    <section class="page-section">
      <div class="container split">
        <div class="content-block">
          ${service.icon}
          <h2>What this service helps you do</h2>
          <p>${service.summary}</p>
          <p>We keep the work focused, useful, and tied to business outcomes instead of producing more content for its own sake.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#/work-with-us/discovery-call">Book a discovery call ${arrowIcon}</a>
            <a class="button button-secondary" href="#/pricing">View packages ${arrowIcon}</a>
          </div>
        </div>
        <div class="card">
          <h3>Common deliverables</h3>
          <ul class="check-list">
            ${service.outcomes.map((outcome) => `<li>${outcome}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>
    ${servicesSection()}
  `;
}

function renderPortfolio() {
  return `
    ${renderPageHero("Portfolio / <span>Case Studies</span>", "A concise look at the kinds of outcomes DreamWattz can support through focused content, SEO, messaging, and workflow systems.")}
    <section class="page-section section-soft">
      <div class="container">
        <div class="grid grid-3">
          ${caseStudies.map(caseCard).join("")}
        </div>
      </div>
    </section>
    ${ctaSection()}
  `;
}

function renderPricing() {
  return `
    ${renderPageHero("Pricing / <span>Packages</span>", "Choose a starting point that fits your goals. Packages can be adjusted after a discovery call.")}
    ${pricingSection()}
    <section class="page-section section-soft">
      <div class="container split">
        <div class="content-block">
          <h2>Need something custom?</h2>
          <p>Some teams need a content sprint, a workflow audit, a launch campaign, or consulting without monthly production. We can scope that cleanly.</p>
        </div>
        <div class="card">
          <h3>Custom projects can include</h3>
          <ul class="check-list">
            <li>Website messaging and copy refreshes</li>
            <li>AI workflow mapping and implementation</li>
            <li>SEO audits and content recovery plans</li>
            <li>Campaign strategy and launch support</li>
          </ul>
          <div class="section-actions">
            <a class="button button-primary" href="#/work-with-us/request-a-quote">Request a quote ${arrowIcon}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBlog() {
  return `
    ${renderPageHero("Blog / <span>Insights</span>", "Practical notes on copy, SEO, content systems, AI-assisted marketing, and automation.")}
    <section class="page-section">
      <div class="container">
        <div class="grid grid-3">
          ${insights.map(insightCard).join("")}
        </div>
      </div>
    </section>
    ${ctaSection()}
  `;
}

function renderWorkWithUs() {
  return `
    ${renderPageHero("Work With Us", "Start with a focused conversation or send a project brief. We will help you choose the simplest next step.")}
    <section class="page-section">
      <div class="container grid grid-3">
        <article class="card">
          ${icons.bulb}
          <h3>Discovery Call</h3>
          <p>A focused conversation to clarify goals, constraints, and the highest-impact opportunities.</p>
          <a class="link-arrow" href="#/work-with-us/discovery-call">Book a call ${arrowIcon}</a>
        </article>
        <article class="card">
          ${icons.file}
          <h3>Request a Quote</h3>
          <p>Send your project details and we will recommend the right package, sprint, or consulting path.</p>
          <a class="link-arrow" href="#/work-with-us/request-a-quote">Request a quote ${arrowIcon}</a>
        </article>
        <article class="card">
          ${icons.mail}
          <h3>Contact Us</h3>
          <p>Ask a question, explore a partnership, or get pointed toward the best next move.</p>
          <a class="link-arrow" href="#/contact">Get in touch ${arrowIcon}</a>
        </article>
      </div>
    </section>
    ${ctaSection()}
  `;
}

function renderFormPage(title, copy, buttonText, type) {
  const serviceOptions = services.map((service) => `<option>${service.title}</option>`).join("");
  return `
    ${renderPageHero(title, copy)}
    <section class="page-section">
      <div class="container split">
        <div class="content-block">
          <h2>Tell us what you want to build.</h2>
          <p>DreamWattz works best when we can see your goal, audience, timeline, and current marketing challenges. Share what you know now and we can help shape the rest.</p>
          <ol class="process-list">
            <li><strong>Share the brief</strong><span>Send the goal, service interest, budget range, and timeline.</span></li>
            <li><strong>Get a clear next step</strong><span>We respond with questions, recommendations, or a suggested package.</span></li>
            <li><strong>Start with focus</strong><span>Once the scope is right, we build a plan that keeps the work moving.</span></li>
          </ol>
        </div>
        <form class="form-shell" data-form="${type}">
          <div class="form-grid">
            <div class="field">
              <label for="${type}-name">Name</label>
              <input id="${type}-name" name="name" autocomplete="name" required />
            </div>
            <div class="field">
              <label for="${type}-email">Email</label>
              <input id="${type}-email" name="email" type="email" autocomplete="email" required />
            </div>
            <div class="field">
              <label for="${type}-company">Company</label>
              <input id="${type}-company" name="company" autocomplete="organization" />
            </div>
            <div class="field">
              <label for="${type}-service">Service interest</label>
              <select id="${type}-service" name="service">
                <option>Not sure yet</option>
                ${serviceOptions}
              </select>
            </div>
            <div class="field full">
              <label for="${type}-message">Project details</label>
              <textarea id="${type}-message" name="message" required></textarea>
            </div>
          </div>
          <div class="section-actions">
            <button class="button button-primary" type="submit">${buttonText} ${arrowIcon}</button>
          </div>
          <p class="form-note" role="status">Thanks. Your details are ready for DreamWattz to review.</p>
        </form>
      </div>
    </section>
  `;
}

function renderPrivacy() {
  return `
    ${renderPageHero("Privacy Policy", "How DreamWattz handles basic contact and project information.")}
    <section class="page-section">
      <div class="container legal-copy">
        <p>This starter policy is provided as website copy for a basic site and should be reviewed by a qualified professional before publication.</p>
        <h2>Information we collect</h2>
        <p>We may collect information you submit through forms, including name, email, company, service interest, and project details.</p>
        <h2>How we use information</h2>
        <p>We use submitted information to respond to inquiries, prepare project recommendations, provide services, and improve our communication.</p>
        <h2>Sharing</h2>
        <p>We do not sell personal information. We may share limited information with service providers when needed to operate the website or deliver requested services.</p>
        <h2>Contact</h2>
        <p>For privacy questions, contact DreamWattz through the Contact Us page.</p>
      </div>
    </section>
  `;
}

function renderTerms() {
  return `
    ${renderPageHero("Terms of Service", "Basic terms for using the DreamWattz website and starting a project conversation.")}
    <section class="page-section">
      <div class="container legal-copy">
        <p>These starter terms are provided as website copy for a basic site and should be reviewed by a qualified professional before publication.</p>
        <h2>Website use</h2>
        <p>By using this website, you agree to use it lawfully and avoid interfering with its operation or security.</p>
        <h2>Service discussions</h2>
        <p>Submitting a form does not create a client relationship. Project work begins only after written agreement on scope, timing, and fees.</p>
        <h2>Content ownership</h2>
        <p>Website content, branding, and materials belong to DreamWattz unless otherwise noted.</p>
        <h2>Limitations</h2>
        <p>Website information is provided for general purposes and may change over time.</p>
      </div>
    </section>
  `;
}

function normalizeRoute() {
  const hash = window.location.hash.replace(/^#/, "");
  return hash && hash.startsWith("/") ? hash : "/";
}

function renderRoute() {
  const route = normalizeRoute();
  const renderer = routes[route] || renderNotFound;
  document.querySelector("#main").innerHTML = renderer();
  document.title = `${getPageTitle(route)} | DreamWattz`;
  document.querySelector(".primary-nav").classList.remove("is-open");
  document.querySelector(".nav-toggle").setAttribute("aria-expanded", "false");
  wireForms();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function getPageTitle(route) {
  if (route === "/") return "Content Marketing and AI Workflows";
  const service = services.find((item) => route === `/services/${item.slug}`);
  if (service) return service.title;
  const labels = {
    "/about": "About Us",
    "/services": "Services",
    "/portfolio": "Portfolio / Case Studies",
    "/pricing": "Pricing / Packages",
    "/blog": "Blog / Insights",
    "/work-with-us": "Work With Us",
    "/work-with-us/discovery-call": "Discovery Call",
    "/work-with-us/request-a-quote": "Request a Quote",
    "/contact": "Contact Us",
    "/legal/privacy-policy": "Privacy Policy",
    "/legal/terms-of-service": "Terms of Service"
  };
  return labels[route] || "Page Not Found";
}

function renderNotFound() {
  return `
    ${renderPageHero("Page not found", "That page does not exist yet, but the main DreamWattz site map is ready.")}
    <section class="page-section">
      <div class="container">
        <a class="button button-primary" href="#/">Return home ${arrowIcon}</a>
      </div>
    </section>
  `;
}

function wireForms() {
  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.querySelector(".form-note").classList.add("is-visible");
      form.reset();
    });
  });
}

document.querySelector(".nav-toggle").addEventListener("click", () => {
  const nav = document.querySelector(".primary-nav");
  const isOpen = nav.classList.toggle("is-open");
  document.querySelector(".nav-toggle").setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("hashchange", renderRoute);
renderRoute();
