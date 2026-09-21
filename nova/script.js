const portfolioProjects = [
  {
    id: 'midnight',
    name: 'The Midnight Archive',
    authorType: 'Mystery & Thriller Author',
    concept: 'Concept Website',
    headline: 'Dark, cinematic, unforgettable.',
    description: 'A moody author website for a suspense-driven brand built around mystery, tone, and immersive storytelling.',
    style: 'Cinematic • Editorial • Immersive',
    features: ['Book Showcase', 'Author Profile', 'Newsletter', 'Book Detail Pages', 'Reader Reviews', 'Purchase Links'],
    designer: 'Mystery & Thriller Authors',
    theme: 'midnight',
    palette: {
      hero: 'linear-gradient(135deg, #171d22, #201d1d)',
      cover: 'linear-gradient(160deg, #7f2c2e, #d1a18c, #1f1a1c 72%)',
      accent: '#d7b59e',
      card: '#11181d'
    },
    heroImage: 'https://images.unsplash.com/photo-1505682634904-d7c1de8f1b1a?auto=format&fit=crop&w=1200&q=85',
    authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85',
    images: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=85'
    ],
    nav: ['Home', 'Books', 'About', 'Contact', 'Newsletter'],
    hero: {
      eyebrow: 'THE MIDNIGHT ARCHIVE',
      title: 'Every secret leaves a trace.',
      text: 'Elena Marlowe is a mystery and psychological thriller author whose stories explore secrets, hidden identities, and the choices people make when the truth comes knocking.',
      ctaPrimary: 'Explore the Books',
      ctaSecondary: 'Meet Elena',
      featureTitle: 'THE LAST LETTER',
      featureAuthor: 'Elena Marlowe',
      featureGenre: 'Psychological Mystery',
      featureDescription: 'When a forgotten letter surfaces twenty years after a disappearance, journalist Clara Vale begins following a trail that someone would rather keep buried.',
      featureButton: 'Discover the Book'
    },
    books: [
      {
        id: 'last-letter',
        title: 'The Last Letter',
        author: 'Elena Marlowe',
        genre: 'Psychological Mystery',
        description: 'When a forgotten letter surfaces twenty years after a disappearance, journalist Clara Vale begins following a trail that someone would rather keep buried.',
        about: 'A fast-paced mystery about guilt, memory, and the cost of burying the truth for too long.',
        review: 'A razor-sharp thriller with gorgeous atmosphere and a devastating final twist.',
        rating: '4.9/5',
        cover: 'linear-gradient(160deg, #7f2c2e, #d1a18c, #1f1a1c 72%)',
        accent: '#d7b59e'
      },
      {
        id: 'silent-room',
        title: 'The Silent Room',
        author: 'Elena Marlowe',
        genre: 'Suspense Thriller',
        description: 'A grieving widow receives a voicemail from a room that has been sealed for twelve years.',
        about: 'Told through broken timelines and a tense sense of dread, this novel explores grief, obsession, and silence.',
        review: 'Taut, elegant, and deeply unsettling from the very first chapter.',
        rating: '4.8/5',
        cover: 'linear-gradient(160deg, #3c4d5d, #9d8e84, #1c2329 75%)',
        accent: '#b6c7d7'
      },
      {
        id: 'house-without-windows',
        title: 'A House Without Windows',
        author: 'Elena Marlowe',
        genre: 'Psychological Suspense',
        description: 'A woman returns to the estate she escaped as a child and finds the past still breathing behind its walls.',
        about: 'A layered psychological mystery about inheritance, memory, and the stories families choose to hide.',
        review: 'Beautifully written and deeply atmospheric, every page carries tension.',
        rating: '4.9/5',
        cover: 'linear-gradient(160deg, #4a2d2a, #a6917c, #25232b 74%)',
        accent: '#d0b7a7'
      }
    ],
    about: {
      title: 'Meet Elena Marlowe',
      text: 'Elena Marlowe is a mystery and psychological thriller author whose stories explore secrets, hidden identities, and the choices people make when the truth comes knocking.',
      longText: 'Elena writes suspenseful fiction shaped by memory, moral compromise, and the unsettling process of uncovering what has been deliberately forgotten. Her novels are built for readers who love layered mysteries and elegant tension.',
      books: '3',
      genre: 'Mystery & Thriller',
      latest: 'The Last Letter',
      photo: 'linear-gradient(160deg, #7f2c2e, #d1a18c, #1f1a1c 72%)'
    },
    reviews: [
      { quote: 'A breathless read full of atmosphere, suspense, and secrets that refuse to stay buried.', author: '— Reader Review' },
      { quote: 'Every chapter felt like a locked door opening one step at a time.', author: '— Sample Review' },
      { quote: 'Elegant, tense, and completely absorbing from beginning to end.', author: '— Literary Journal' }
    ],
    newsletter: {
      title: 'Enter the Archive',
      text: 'Receive new release announcements, behind-the-scenes notes, and occasional secrets from Elena\'s writing desk.'
    }
  },
  {
    id: 'willow',
    name: 'Letters From Willow Creek',
    authorType: 'Romance / Contemporary Fiction',
    concept: 'Concept Website',
    headline: 'Warm, heartfelt, and beautifully human.',
    description: 'A warm, editorial romance site with gentle typography, personal branding, and a reader-friendly book collection.',
    style: 'Warm • Elegant • Emotional',
    features: ['Book Collection', 'Author Story', 'Sample Reviews', 'Newsletter', 'Purchase Links', 'Reader-Friendly Layout'],
    designer: 'Romance & Contemporary Authors',
    theme: 'willow',
    palette: {
      hero: 'linear-gradient(135deg, #f7f3ee, #e8d7c3)',
      cover: 'linear-gradient(160deg, #d9a76d, #f0d6b0, #b76a58 84%)',
      accent: '#915d4c',
      card: '#f5efe7'
    },
    heroImage: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=85',
    images: [
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=85'
    ],
    nav: ['Home', 'Books', 'About', 'Reviews', 'Contact'],
    hero: {
      eyebrow: 'Letters From Willow Creek',
      title: 'Some stories begin with a letter.',
      text: 'Books about love, second chances, and finding your way home.',
      ctaPrimary: 'Meet Clara',
      ctaSecondary: 'Explore the Books',
      featureTitle: 'THE SUMMER WE REMEMBER',
      featureAuthor: 'Clara Bennett',
      featureGenre: 'Contemporary Romance',
      featureDescription: 'Two old friends. One unexpected summer. And a letter that changes everything.',
      featureButton: 'Read More'
    },
    books: [
      {
        id: 'summer-we-remember',
        title: 'The Summer We Remember',
        author: 'Clara Bennett',
        genre: 'Contemporary Romance',
        description: 'Two old friends. One unexpected summer. And a letter that changes everything.',
        about: 'A moving story about second chances, family expectations, and the courage to choose a more honest life.',
        review: 'Heartfelt, tender, and full of beautiful emotional nuance.',
        rating: '4.8/5',
        cover: 'linear-gradient(160deg, #d9a76d, #f0d6b0, #b76a58 84%)',
        accent: '#915d4c'
      },
      {
        id: 'where-we-left-off',
        title: 'Where We Left Off',
        author: 'Clara Bennett',
        genre: 'Romance',
        description: 'A new chapter begins when two people discover they still know each other better than they ever admitted.',
        about: 'A warm, realistic romance about healing, trust, and learning to let love in again.',
        review: 'A gentle, radiant story with a lot of heart and a lot of feeling.',
        rating: '4.7/5',
        cover: 'linear-gradient(160deg, #dca58d, #f7d7b6, #8e8069 84%)',
        accent: '#a36d5b'
      },
      {
        id: 'last-train-home',
        title: 'The Last Train Home',
        author: 'Clara Bennett',
        genre: 'Contemporary Fiction',
        description: 'A chance encounter on a train may lead one woman back to the life she left behind.',
        about: 'This novel follows a woman who must decide whether to return home, start fresh, or finally choose herself.',
        review: 'Easy to love, emotionally rich, and full of hopeful detail.',
        rating: '4.9/5',
        cover: 'linear-gradient(160deg, #af7a5d, #f0dec7, #a8896b 82%)',
        accent: '#8d5a4f'
      }
    ],
    about: {
      title: 'About Clara',
      text: 'Clara Bennett writes contemporary stories about ordinary people, unexpected moments, and the courage it takes to begin again.',
      longText: 'Clara is known for warm, character-driven storytelling that blends emotional honesty with beautiful details from everyday life. Her work explores love, family, and second chances with a gentle, welcoming voice.',
      books: '3',
      genre: 'Contemporary Romance',
      latest: 'The Summer We Remember',
      photo: 'linear-gradient(160deg, #d9a76d, #f0d6b0, #b76a58 84%)'
    },
    reviews: [
      { quote: 'Soft, beautiful, and deeply comforting — exactly the kind of story you want to sink into.', author: '— Sample Review' },
      { quote: 'Clara has a gift for making everyday moments feel profound and unforgettable.', author: '— Reader Favorite' },
      { quote: 'Warm, emotional, and wonderfully human. I wanted to stay in this world longer.', author: '— Sample Review' }
    ],
    newsletter: {
      title: 'Stay in the Story',
      text: 'Get new release announcements, reading recommendations, and occasional letters from Clara.'
    }
  },
  {
    id: 'wildwood',
    name: 'Wildwood Tales',
    authorType: 'Children\'s Book Author',
    concept: 'Concept Website',
    headline: 'Big adventures start with imagination.',
    description: 'A playful children’s author website designed with warmth, illustration-inspired visuals, and family-friendly storytelling.',
    style: 'Playful • Colorful • Imaginative',
    features: ['Illustrated Book Showcase', 'Author Profile', 'Parents & Teachers', 'Newsletter', 'Reading Activities', 'Book Discovery'],
    designer: 'Children\'s Book Authors',
    theme: 'wildwood',
    palette: {
      hero: 'linear-gradient(135deg, #f9f5e2, #dce7b4)',
      cover: 'linear-gradient(160deg, #4f9c72, #f9d978, #6aa9d8 84%)',
      accent: '#3d7051',
      card: '#eef6e7'
    },
    heroImage: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=85',
    authorImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=85',
    images: [
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1535572290543-960a8046f5af?auto=format&fit=crop&w=800&q=85'
    ],
    nav: ['Home', 'Books', 'About', 'Parents', 'Newsletter'],
    hero: {
      eyebrow: 'Wildwood Tales',
      title: 'Big Adventures Begin With a Little Imagination.',
      text: 'Welcome to the world of Amelia Rose — where curious children, magical creatures, and unforgettable adventures come to life.',
      ctaPrimary: 'Explore the Story',
      ctaSecondary: 'Meet Amelia',
      featureTitle: 'LUNA AND THE WHISPERING FOREST',
      featureAuthor: 'Amelia Rose',
      featureGenre: 'Children’s Adventure',
      featureDescription: 'When Luna follows a trail of glowing fireflies into the forest, she discovers a world that needs her help.',
      featureButton: 'Explore Book'
    },
    books: [
      {
        id: 'luna-whispering-forest',
        title: 'Luna and the Whispering Forest',
        author: 'Amelia Rose',
        genre: 'Adventure',
        description: 'When Luna follows a trail of glowing fireflies into the forest, she discovers a world that needs her help.',
        about: 'A magical adventure about courage, curiosity, and the strength it takes to protect what you love.',
        review: 'A joyful, imaginative story that sparks wonder in every chapter.',
        rating: '4.9/5',
        cover: 'linear-gradient(160deg, #4f9c72, #f9d978, #6aa9d8 84%)',
        accent: '#2a6a47'
      },
      {
        id: 'little-cloud-couldnt-rain',
        title: 'The Little Cloud Who Couldn\'t Rain',
        author: 'Amelia Rose',
        genre: 'Picture Book',
        description: 'A cloud learns that every feeling has a place, and not every storm must be feared.',
        about: 'A comforting, whimsical story about emotions, bravery, and learning to let your feelings bloom.',
        review: 'A cheerful, thoughtful picture book with a beautifully gentle message.',
        rating: '4.8/5',
        cover: 'linear-gradient(160deg, #8dc6df, #f1d667, #b48ec0 80%)',
        accent: '#4a6d90'
      },
      {
        id: 'max-moonlight-dragon',
        title: 'Max and the Moonlight Dragon',
        author: 'Amelia Rose',
        genre: 'Fantasy',
        description: 'A brave young explorer follows a dragon’s glow over the hill and into a hidden valley.',
        about: 'A story about wonder, creativity, and how imagination can turn the ordinary into something magical.',
        review: 'Whimsical and magical in all the best ways for young readers.',
        rating: '4.9/5',
        cover: 'linear-gradient(160deg, #7c5fd8, #f7d8a8, #74b7a5 80%)',
        accent: '#504496'
      }
    ],
    about: {
      title: 'Meet Amelia Rose',
      text: 'Amelia Rose creates imaginative stories that encourage children to explore, ask questions, and believe in the magic of their own ideas.',
      longText: 'Amelia writes with warmth and wonder, designing stories that invite children into imaginative worlds while gently teaching confidence, empathy, and curiosity. Her books are designed for young readers, families, and classroom discovery.',
      books: '3',
      genre: 'Children\'s Books',
      latest: 'Luna and the Whispering Forest',
      photo: 'linear-gradient(160deg, #4f9c72, #f9d978, #6aa9d8 84%)'
    },
    reviews: [
      { quote: 'My daughter asked to read it twice in one evening. That says everything.', author: '— Parent Review' },
      { quote: 'A magical story with a warm heart and a wonderfully imaginative world.', author: '— Sample Review' },
      { quote: 'Full of wonder and charm, with the kind of detail children love to linger over.', author: '— Teacher Review' }
    ],
    newsletter: {
      title: 'Join the Wildwood Club',
      text: 'Get new story announcements, activities, and magical surprises.'
    }
  }
];

const portfolioGrid = document.getElementById('portfolioGrid');
const demoOverlay = document.getElementById('demoOverlay');
const demoContent = document.getElementById('demoContent');
const backToStudioButton = document.getElementById('backToStudio');
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

function renderPortfolioCards() {
  if (!portfolioGrid) return;

  portfolioGrid.innerHTML = portfolioProjects
    .map(
      (project) => `
        <article class="portfolio-card reveal">
          <div class="portfolio-preview theme-${project.theme}">
            <div class="preview-top">
              <span>${project.concept}</span>
              <span>${project.authorType}</span>
            </div>
            <div class="preview-window">
              <div class="preview-copy">
                <h3>${project.name}</h3>
                <p>${project.headline}</p>
              </div>
              <div class="preview-cover">${project.name.split(' ')[0].toUpperCase()}</div>
            </div>
          </div>
          <div class="portfolio-card-body">
            <span class="portfolio-tag">${project.authorType}</span>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="#" class="button button-primary explore-demo" data-project="${project.id}">Explore Demo</a>
            <div class="project-detail">
              <h4>Project Details</h4>
              <ul>
                <li><strong>Project:</strong> ${project.name}</li>
                <li><strong>Designed For:</strong> ${project.designer}</li>
                <li><strong>Style:</strong> ${project.style}</li>
                <li><strong>Features:</strong> ${project.features.join(', ')}</li>
              </ul>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.explore-demo').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      openDemo(event.currentTarget.dataset.project);
    });
  });
}

function openDemo(projectId) {
  const project = portfolioProjects.find((item) => item.id === projectId);
  if (!project) return;

  const markup = `
    <div class="demo-content demo-theme-${project.theme}">
      <div class="demo-topbar">
        <div class="demo-brand">${project.name}</div>
        <nav aria-label="Demo navigation">
          ${project.nav.map((item) => `<a href="#${item.toLowerCase().replace(/\s+/g, '-')}">${item}</a>`).join('')}
        </nav>
      </div>

      <main class="demo-main">
        <section class="demo-hero" id="home">
          <div>
            <p class="eyebrow">${project.hero.eyebrow}</p>
            <h1>${project.hero.title}</h1>
            <p>${project.hero.text}</p>
            <div class="demo-hero-actions">
              <button class="button button-primary demo-scroll" data-target="#books" type="button">${project.hero.ctaPrimary}</button>
              <button class="button button-secondary demo-scroll" data-target="#about" type="button">${project.hero.ctaSecondary}</button>
            </div>
          </div>
          <div class="demo-feature-book">
            <div class="feature-book-cover" style="background-image:linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.72)),url('${project.heroImage}');">
              <span>${project.hero.featureTitle}</span>
            </div>
          </div>
        </section>

        ${project.id === 'wildwood' ? `
          <section class="demo-story-callout">
            <div><p class="eyebrow">Interactive Story World</p><h2>Step inside a world made for curious minds.</h2><p>Meet friendly characters, explore story maps, and find little activities for reading time at home or in the classroom.</p></div>
            <div class="demo-story-icons"><span>COLOR</span><span>PLAY</span><span>IMAGINE</span></div>
          </section>
          <section class="demo-resource-strip"><span>Parent guides</span><span>Classroom activities</span><span>Read-aloud ideas</span></section>
        ` : project.id === 'midnight' ? `
          <section class="demo-investigation">
            <div><p class="eyebrow">Interactive Investigation</p><h2>Every clue changes the story.</h2><p>Follow the evidence, inspect the characters, and uncover the hidden thread behind the latest case.</p></div>
            <div class="evidence-board"><span>CASE FILE 07</span><span>THE LAST LETTER</span><span>WHO KNOWS THE TRUTH?</span></div>
          </section>
        ` : `
          <section class="demo-romance-callout">
            <p class="eyebrow">Read the first chapter</p><h2>A little more time. A second chance.</h2><p>Download a free sample, fall into the story, and discover the book readers are recommending to everyone they love.</p><a class="inline-button primary" href="#sample">Read a free sample</a>
          </section>
        `}

        <section class="demo-section" id="books">
          <div class="section-title-block">
            <p class="eyebrow">Featured titles</p>
            <h2>${project.hero.featureTitle}</h2>
          </div>
          <div class="demo-books-grid">
            ${project.books
              .map(
                (book, index) => `
                  <article class="book-card">
                    <div class="book-cover" style="background-image:linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.65)),url('${project.images[index]}');">${book.title}</div>
                    <div class="book-card-body">
                      <div class="meta">${book.genre}</div>
                      <h3>${book.title}</h3>
                      <p>${book.description}</p>
                      <div class="book-card-actions">
                        <button class="inline-button primary view-book" data-project="${project.id}" data-book="${book.id}" type="button">View Book</button>
                        <a href="#buy" class="inline-button">Buy</a>
                      </div>
                    </div>
                  </article>
                `
              )
              .join('')}
          </div>
        </section>

        <section class="demo-section" id="about">
          <div class="section-title-block">
            <p class="eyebrow">Author story</p>
            <h2>${project.about.title}</h2>
          </div>
          <div class="demo-about-layout">
            <div class="author-photo" style="background-image:linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.58)),url('${project.authorImage}');">${project.about.title}</div>
            <div class="author-bio">
              <p>${project.about.text}</p>
              <p>${project.about.longText}</p>
              <div class="author-facts">
                <div class="fact"><span>Books</span><strong>${project.about.books}</strong></div>
                <div class="fact"><span>Genre</span><strong>${project.about.genre}</strong></div>
                <div class="fact"><span>Latest</span><strong>${project.about.latest}</strong></div>
              </div>
            </div>
          </div>
        </section>

        ${project.id === 'willow' ? `
          <section class="demo-sample" id="sample">
            <p class="eyebrow">A reader favorite</p>
            <h2>“Somewhere between goodbye and home, we found each other again.”</h2>
            <p>Start reading today and receive the opening chapter in your inbox.</p>
            <a class="inline-button primary" href="#newsletter">Send me the sample</a>
          </section>
        ` : ''}

        <section class="demo-section" id="reviews">
          <div class="section-title-block">
            <p class="eyebrow">Sample Reviews</p>
            <h2>What Readers Are Saying</h2>
          </div>
          <div class="demo-review-grid">
            ${project.reviews
              .map(
                (item) => `
                  <article class="review-card">
                    <p>“${item.quote}”</p>
                    <strong>${item.author}</strong>
                  </article>
                `
              )
              .join('')}
          </div>
        </section>

        <section class="demo-section" id="newsletter">
          <div class="newsletter-box">
            <p class="eyebrow">Newsletter</p>
            <h3>${project.newsletter.title}</h3>
            <p>${project.newsletter.text}</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Your email address" aria-label="Email address" />
              <button class="button button-primary" type="submit">${project.id === 'midnight' ? 'Join the List' : project.id === 'willow' ? 'Subscribe' : 'Join'}</button>
            </form>
          </div>
        </section>

        <section class="demo-section" id="contact">
          <div class="demo-contact-grid">
            <div class="demo-contact-card">
              <p class="eyebrow">Contact</p>
              <h2>Reach out</h2>
              <p>${project.name}<br />${project.authorType}</p>
              <p>hello@${project.id}.concept</p>
            </div>
            <div class="demo-summary">
              <h3>Visit the book world</h3>
              <ul>
                <li>Home</li>
                <li>Books</li>
                <li>About</li>
                <li>Newsletter</li>
                <li>Social links</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;

  demoContent.innerHTML = markup;
  demoOverlay.classList.remove('hidden');

  demoContent.querySelectorAll('.demo-scroll').forEach((button) => {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  demoContent.querySelectorAll('.view-book').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedBook = project.books.find((book) => book.id === button.dataset.book);
      if (selectedBook) showBookDetail(project, selectedBook);
    });
  });

  demoContent.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('This is a concept demo form.');
    });
  });
}

function showBookDetail(project, book) {
  const detailMarkup = `
    <div class="demo-book-detail">
      <div class="book-detail-layout">
        <div class="book-detail-cover" style="background:${book.cover};">${book.title}</div>
        <div class="book-detail-copy">
          <span class="book-detail-tag">${book.genre}</span>
          <h2>${book.title}</h2>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
          <p>${book.description}</p>
          <p>${book.about}</p>
          <div class="purchase-buttons">
            <a href="#buy" class="inline-button primary">Buy the Book</a>
            <a href="#" class="inline-button">Share</a>
          </div>
          <div class="share-buttons" style="margin-top: 14px;">
            <a href="#" class="inline-button">Facebook</a>
            <a href="#" class="inline-button">X</a>
            <a href="#" class="inline-button">Email</a>
          </div>
          <div class="demo-summary" style="margin-top: 22px;">
            <h3>Reader notes</h3>
            <p>${book.review}</p>
            <p><strong>Reader rating:</strong> ${book.rating}</p>
          </div>
          <div style="margin-top: 20px;">
            <button class="button button-secondary back-to-books" type="button">← Back to Books</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const demoMain = demoContent.querySelector('.demo-main');
  if (!demoMain) return;

  demoMain.innerHTML = detailMarkup;

  const backButton = demoMain.querySelector('.back-to-books');
  if (backButton) {
    backButton.addEventListener('click', () => {
      openDemo(project.id);
    });
  }
}

function closeDemo() {
  demoOverlay.classList.add('hidden');
}

backToStudioButton.addEventListener('click', closeDemo);

demoOverlay.addEventListener('click', (event) => {
  if (event.target === demoOverlay) closeDemo();
});

navToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

renderPortfolioCards();

document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you. This inquiry form is a demo for the Nova Digital Studio portfolio concept.');
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
