/* global document */

const WHATSAPP_NUMBER = '5511967969322';

const content = {
  categories: ['Todos', 'Jaquetas', 'BonÃ©s', 'LanÃ§amentos'],
  products: [
    {
      id: 'casaco-winner',
      category: 'Jaquetas',
      title: 'Jaqueta Winner Black',
      summary: 'Conforto tÃ©rmico com visual premium para o dia a dia.',
      description:
        'Jaqueta com foco em conforto, presenÃ§a e autoestima. Ideal para quem quer uma peÃ§a versÃ¡til com identidade forte.',
      details: ['Envio para todo o Brasil', 'Tamanhos sob consulta', 'Atendimento direto no WhatsApp'],
      combine: ['BonÃ© Winner Black', 'Camiseta Essential Black'],
      media: [
        { type: 'image', src: 'assets/produto-casaco.webp', alt: 'Jaqueta Dom Winner - visÃ£o do produto' },
        { type: 'image', src: 'assets/modelo-homem-casaco.webp', alt: 'Modelo masculino usando a jaqueta Dom Winner' },
        { type: 'image', src: 'assets/modelo-mulher-casaco.webp', alt: 'Modelo feminina usando a jaqueta Dom Winner' },
      ],
    },
    {
      id: 'bone-winner',
      category: 'BonÃ©s',
      title: 'BonÃ© Winner Black',
      summary: 'Estilo urbano com acabamento premium e assinatura da marca.',
      description:
        'BonÃ© preto com logo em destaque para completar o visual com atitude. Modelo pensado para uso diÃ¡rio e combinaÃ§Ãµes versÃ¡teis.',
      details: ['Envio para todo o Brasil', 'Ajuste traseiro', 'Acabamento premium'],
      combine: ['Jaqueta Winner Black', 'Linha Dom Winner'],
      media: [
        { type: 'image', src: 'assets/produto-bone.webp', alt: 'BonÃ© Dom Winner - visÃ£o do produto' },
        { type: 'image', src: 'assets/modelo-homem-bone.webp', alt: 'Modelo masculino usando o bonÃ© Dom Winner' },
        { type: 'image', src: 'assets/modelo-mulher-bone.webp', alt: 'Modelo feminina usando o bonÃ© Dom Winner' },
      ],
    },
    {
      id: 'relogio-winner',
      category: 'LanÃ§amentos',
      title: 'RelÃ³gio Winner Black',
      summary: 'Em Breve: acessÃ³rio premium para completar o visual com presenÃ§a e atitude.',
      description:
        'RelÃ³gio Dom Winner em desenvolvimento com identidade urbana e acabamento elegante para elevar o estilo no dia a dia.',
      details: ['Em Breve', 'Design premium', 'Lista de espera no WhatsApp'],
      combine: ['Jaqueta Winner Black', 'BonÃ© Winner Black'],
      comingSoon: true,
      media: [
        { type: 'image', src: 'assets/produto-relogio.webp', alt: 'RelÃ³gio Dom Winner - visÃ£o do produto' },
      ],
    },
    {
      id: 'linha-dom-winner',
      category: 'LanÃ§amentos',
      title: 'Linha Dom Winner',
      summary: 'PeÃ§as criadas para transmitir confianÃ§a, conforto e autoestima.',
      description:
        'ColeÃ§Ã£o focada no pÃºblico brasileiro, com linguagem visual premium para destacar o produto e fortalecer a identidade da marca.',
      details: ['ColeÃ§Ã£o em evoluÃ§Ã£o', 'Drops semanais', 'Atendimento consultivo'],
      combine: ['BonÃ© Winner Black', 'Jaqueta Winner Black'],
      media: [
        { type: 'image', src: 'assets/logo-claim.jpeg', alt: 'A marca dos vencedores' },
        { type: 'image', src: 'assets/logo-main.jpeg', alt: 'Assinatura oficial da marca Dom Winner' },
      ],
    },
  ],
  metrics: [
    { value: 'ConfianÃ§a', label: 'como sensaÃ§Ã£o principal' },
    { value: 'Autoestima', label: 'como efeito da marca' },
    { value: 'Conforto', label: 'como base de uso diÃ¡rio' },
    { value: 'Brasil', label: 'vendas focadas no paÃ­s' },
  ],
  benefits: [
    {
      title: 'Acabamento Premium',
      description: 'Tecidos selecionados e controle de qualidade em cada detalhe.',
    },
    {
      title: 'Identidade Forte',
      description: 'Visual premium com linguagem de marca clara, forte e memorÃ¡vel.',
    },
    {
      title: 'Conforto + PresenÃ§a',
      description: 'PeÃ§as feitas para vestir bem e sustentar confianÃ§a em qualquer ambiente.',
    },
    {
      title: 'Atendimento Direto',
      description: 'Contato rÃ¡pido para apresentar modelos, tamanhos e condiÃ§Ãµes.',
    },
  ],
  trustPoints: [
    { title: 'Envio Brasil', text: 'Atendimento e vendas para todo o Brasil.' },
    { title: 'Pagamento seguro', text: 'Fluxo de compra com suporte no WhatsApp.' },
    { title: 'Troca facilitada', text: 'PolÃ­tica de troca alinhada no atendimento.' },
    { title: 'Suporte humano', text: 'Atendimento real para ajudar na escolha.' },
  ],
  drop: {
    main: {
      title: 'Drop Black Confidence',
      text: 'Lote especial com peÃ§as premium para elevar presenÃ§a e autoestima no dia a dia.',
    },
    side: {
      title: 'PrÃ³ximo drop',
      text: 'Chame no WhatsApp para garantir seu acesso aos prÃ³ximos lanÃ§amentos.',
    },
  },
  testimonials: [
    {
      title: 'Estilo com identidade',
      description:
        'A marca conseguiu entregar visual forte e conforto de verdade. Virei cliente fixo.',
    },
    {
      title: 'Qualidade surpreendente',
      description:
        'O acabamento e o caimento passam muita confianÃ§a. Parece uma marca muito maior.',
    },
    {
      title: 'Compra simples',
      description:
        'Fui atendido rÃ¡pido no WhatsApp e recebi exatamente o que estava procurando.',
    },
  ],
};

let activeCategory = 'Todos';

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function renderCategoryNav() {
  const container = document.getElementById('category-nav');
  if (!container) return;

  container.innerHTML = content.categories
    .map(
      (cat) => `<button class="cat-btn ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">${cat}</button>`,
    )
    .join('');

  container.querySelectorAll('.cat-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-cat') || 'Todos';
      renderCategoryNav();
      renderProducts();
    });
  });
}

function getFilteredProducts() {
  if (activeCategory === 'Todos') return content.products;
  return content.products.filter((item) => item.category === activeCategory);
}

function renderProducts() {
  const container = document.getElementById('products');
  if (!container) return;

  const list = getFilteredProducts();

  container.innerHTML = list
    .map(
      (item) => `
      <article class="product-card" data-product-id="${item.id}">
        ${item.comingSoon ? '<span class="product-badge">Em Breve</span>' : ''}
        <img src="${item.media[0].src}" alt="${item.media[0].alt}" />
        <div class="product-info">
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </div>
      </article>
    `,
    )
    .join('');

  container.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', () => {
      const productId = card.getAttribute('data-product-id');
      openProductModal(productId);
    });
  });
}

function renderMetrics() {
  const container = document.getElementById('metrics');
  if (!container) return;

  container.innerHTML = content.metrics
    .map(
      (item) => `
      <article class="metric">
        <strong>${item.value}</strong>
        <span>${item.label}</span>
      </article>
    `,
    )
    .join('');
}

function renderBenefits() {
  const container = document.getElementById('benefits');
  if (!container) return;

  container.innerHTML = content.benefits
    .map(
      (item) => `
      <article class="bullet">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `,
    )
    .join('');
}

function renderTrustPoints() {
  const container = document.getElementById('trust-points');
  if (!container) return;

  container.innerHTML = content.trustPoints
    .map(
      (item) => `
      <article class="trust-item">
        <strong>${item.title}</strong>
        <span>${item.text}</span>
      </article>
    `,
    )
    .join('');
}

function renderWeeklyDrop() {
  const container = document.getElementById('weekly-drop');
  if (!container) return;

  container.innerHTML = `
    <article class="drop-main">
      <h3>${content.drop.main.title}</h3>
      <p>${content.drop.main.text}</p>
    </article>
    <article class="drop-side">
      <h3>${content.drop.side.title}</h3>
      <p>${content.drop.side.text}</p>
    </article>
  `;
}

function renderTestimonials() {
  const container = document.getElementById('testimonials');
  if (!container) return;

  container.innerHTML = content.testimonials
    .map(
      (item) => `
      <article class="card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `,
    )
    .join('');
}

function renderMarquee() {
  const container = document.getElementById('marquee');
  if (!container) return;
  const base = 'DOM WINNER | STREETWEAR PREMIUM | A MARCA DOS VENCEDORES | ';
  container.textContent = base.repeat(12);
}

function renderModalMainMedia(item) {
  if (!item) return '';
  if (item.type === 'video') {
    return `<video controls src="${item.src}" aria-label="${item.alt || 'Video do produto'}"></video>`;
  }
  return `<img src="${item.src}" alt="${item.alt || 'Imagem do produto'}" />`;
}

function renderModalGallery(mediaItems) {
  const media = document.getElementById('modal-media');
  if (!media || !Array.isArray(mediaItems) || mediaItems.length === 0) return;

  let activeIndex = 0;

  const render = () => {
    media.innerHTML = `
      <div class="modal-viewer" id="modal-viewer">
        ${renderModalMainMedia(mediaItems[activeIndex])}
      </div>
      <div class="modal-thumbs" id="modal-thumbs">
        ${mediaItems
          .map((item, index) => {
            const thumbInner =
              item.type === 'video'
                ? `<video muted playsinline src="${item.src}" aria-hidden="true"></video>`
                : `<img src="${item.src}" alt="${item.alt || 'Miniatura do produto'}" />`;
            return `
              <button type="button" class="thumb-btn ${index === activeIndex ? 'active' : ''}" data-thumb-index="${index}" aria-label="Ver mÃ­dia ${index + 1}">
                ${thumbInner}
              </button>
            `;
          })
          .join('')}
      </div>
    `;

    media.querySelectorAll('.thumb-btn').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const nextIndex = Number(thumb.getAttribute('data-thumb-index'));
        if (Number.isNaN(nextIndex)) return;
        activeIndex = nextIndex;
        render();
      });
    });
  };

  render();
}

function openProductModal(productId) {
  const product = content.products.find((item) => item.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-modal');
  const title = document.getElementById('modal-title');
  const description = document.getElementById('modal-description');
  const media = document.getElementById('modal-media');
  const details = document.getElementById('modal-details');
  const combine = document.getElementById('modal-combine');
  const cta = document.getElementById('modal-cta');

  if (!modal || !title || !description || !media || !details || !combine || !cta) return;

  title.textContent = product.title;
  description.textContent = product.description;

  renderModalGallery(product.media);

  details.innerHTML = product.details.map((item) => `<li>${item}</li>`).join('');
  combine.innerHTML = product.combine.map((item) => `<div class="combine-item">${item}</div>`).join('');

  const baseMessage = product.comingSoon
    ? `OlÃ¡, quero entrar na lista de espera do produto: ${product.title}`
    : `OlÃ¡, tenho interesse no produto: ${product.title}`;
  const message = encodeURIComponent(baseMessage);
  cta.textContent = product.comingSoon ? 'Entrar na lista de espera' : 'Pedir no WhatsApp';
  cta.href = buildWhatsAppUrl(message);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function setupModalClose() {
  const modal = document.getElementById('product-modal');
  const closeButtons = [
    document.getElementById('modal-close'),
    document.getElementById('modal-close-secondary'),
  ].filter(Boolean);
  if (!modal || closeButtons.length === 0) return;

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  closeButtons.forEach((button) => button.addEventListener('click', closeModal));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}

function setupCtaLink() {
  const links = [document.getElementById('cta-link'), document.getElementById('floating-cta')];
  const message = encodeURIComponent('OlÃ¡, quero conhecer os produtos da Dom Winner.');

  links.forEach((link) => {
    if (!link) return;
    link.href = buildWhatsAppUrl(message);
  });
}

function setYear() {
  const el = document.getElementById('year');
  if (!el) return;
  el.textContent = new Date().getFullYear();
}

renderCategoryNav();
renderProducts();
renderMetrics();
renderBenefits();
renderTrustPoints();
renderWeeklyDrop();
renderTestimonials();
renderMarquee();
setupModalClose();
setupCtaLink();
setYear();


