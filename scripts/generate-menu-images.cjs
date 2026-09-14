const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const menuCards = [
  {
    num: 1,
    title: 'SIGNATURE MENU',
    subtitle: 'PREMIUM SALON SERVICES & HIGHLIGHTS',
    items: [
      { name: 'Royal Hair Cut & Finish (Men / Women)', price: '₹750 / ₹1,200', desc: 'Custom consultation, clarifying wash & blow styling' },
      { name: '24K Gold Hydra Glow Facial', price: '₹2,800', desc: 'Triple exfoliation, gold serum infusion & crystal mask' },
      { name: 'Moroccan Argan Hair Spa', price: '₹1,950', desc: 'Intense moisture restore with ultrasonic ozone steam' },
      { name: 'Global Color / Balayage Couture', price: '₹4,500+', desc: 'L\'Oréal Professionnel ammonia-free gloss & bond builder' },
      { name: 'Luxury Beard Sculpt & Hot Towel', price: '₹600', desc: 'Precision contouring, organic cedar balm & cold stone soothe' },
      { name: 'Crystal Spa Pedicure & Manicure', price: '₹2,200', desc: 'Sea salt soak, volcanic scrub & paraffin wax wrap' },
    ],
    tag: 'PRIMARY MENU CARD',
  },
  {
    num: 2,
    title: 'HAIR CUTTING & STYLING',
    subtitle: 'PRECISION HAIRSTYLING BY MASTER ARTISTS',
    items: [
      { name: 'Signature Haircut (Men)', price: '₹650', desc: 'Wash, precision cut, beard blending & finish' },
      { name: 'Couture Haircut & Layering (Women)', price: '₹1,200', desc: 'Stylist consult, shampoo, texture cut & blowdry' },
      { name: 'Executive Kids Haircut', price: '₹450', desc: 'Gentle trim and playful styled finish' },
      { name: 'Glamour Blowdry & Hollywood Waves', price: '₹950', desc: 'Volumizing thermal styling with heat protection' },
      { name: 'Ironing / Tongs Curling Ritual', price: '₹1,100', desc: 'Glass-hair finish or beach wave curls' },
      { name: 'Anti-Frizz Keratin Express Touch', price: '₹1,800', desc: 'Instant frizz tamer lasting up to 4 weeks' },
    ],
    tag: 'HAIR DESIGN',
  },
  {
    num: 3,
    title: 'LUXURY HAIR SPA & DETOX',
    subtitle: 'RESTORATIVE CELLULAR CARE & NOURISHMENT',
    items: [
      { name: 'Intense Keratin Hair Spa', price: '₹2,200', desc: 'Keratin peptide infusion for distressed & brittle strands' },
      { name: 'Moroccan Argan Oil Spa', price: '₹1,950', desc: 'Deep hydration ritual for silky sheen and elasticity' },
      { name: 'Anti-Dandruff Scalp Clarifying Ritual', price: '₹1,650', desc: 'Zinc-pyrithione peel, tea tree serum & micro-mist' },
      { name: 'Olaplex No. 1 & 2 Molecular Repair', price: '₹2,500', desc: 'Rebuilds broken disulphide bonds from color damage' },
      { name: 'Hair Fall Defense Botanical Therapy', price: '₹2,100', desc: 'Stem cell scalp energizer & stimulating acupressure' },
      { name: 'Head Massage with Cold-Pressed Herbals', price: '₹750', desc: '30 mins warm oil Indian champi & steam' },
    ],
    tag: 'SCALP & HAIR RITUALS',
  },
  {
    num: 4,
    title: 'COLOR, HIGHLIGHTS & BALAYAGE',
    subtitle: 'MULTI-DIMENSIONAL TONES & FRENCH TECHNIQUES',
    items: [
      { name: 'Global Hair Color (Ammonia Free)', price: '₹3,200+', desc: 'Seamless root-to-tip glossy coverage' },
      { name: 'Root Touch-Up Premium', price: '₹1,600', desc: 'Flawless 100% grey coverage with scalp shield' },
      { name: 'French Balayage / Ombre Freehand', price: '₹4,800+', desc: 'Sun-kissed transitions with bespoke root melt' },
      { name: 'Highlights / Foil Frosting (Crown)', price: '₹2,600', desc: 'Dimension and luminosity for framed facial contour' },
      { name: 'Full Head Foils & Babylights', price: '₹5,500+', desc: 'High-density micro foils for maximum blonding' },
      { name: 'Color Glaze / Gloss Refresh', price: '₹1,800', desc: 'Post-color tone neutralization and mirror shine' },
    ],
    tag: 'HAIR COLOR BAR',
  },
  {
    num: 5,
    title: 'SKIN RITUALS & FACIALS',
    subtitle: 'DERMA-LUXE BRIGHTENING & ANTI-AGING',
    items: [
      { name: '24 Karat Gold Luxury Radiance Facial', price: '₹2,800', desc: 'Real gold flakes, brightening peel & lymphatic drainage' },
      { name: 'Hydra-Infusion Medi Facial', price: '₹3,500', desc: 'Vacuum pore suction, hyaluronic acid jet & cold hammer' },
      { name: 'O3+ Bridal Glow Glow Facial', price: '₹3,000', desc: 'Oxygenating booster mask for luminous clarity' },
      { name: 'Activated Bamboo Charcoal Detox Cleanup', price: '₹1,400', desc: 'Blackhead extraction, sebum balancing & mint mask' },
      { name: 'Seaweed Hydration & Calming Ritual', price: '₹1,900', desc: 'Ideal for sensitive skin with botanical marine minerals' },
      { name: 'Under-Eye Dark Circle & Collagen Peel', price: '₹950', desc: 'Caffeine peptide infusion & chilled jade massage' },
    ],
    tag: 'DERMA AESTHETICS',
  },
  {
    num: 6,
    title: 'BEARD & MEN\'S GROOMING',
    subtitle: 'OLD-WORLD BARBERING MEETS MODERN PRECISION',
    items: [
      { name: 'Royal Hot Towel Straight Razor Shave', price: '₹500', desc: 'Pre-shave eucalyptus oil, warm lather & badger brush' },
      { name: 'Beard Sculpture & Line-Up Definition', price: '₹450', desc: 'Trimmer tapering, foil razor cheeklines & mustache wax' },
      { name: 'Enreach Signature Beard Spa', price: '₹850', desc: 'Exfoliating scrub, argan steam wrap & hydrating butter' },
      { name: 'Men\'s Charcoal Facial & Tan Erase', price: '₹1,600', desc: 'Deep pore purge, ultrasonic cleanse & SPF armor' },
      { name: 'Beard Color & Grey Blending', price: '₹600', desc: 'Natural demi-permanent tint for youthful density' },
      { name: 'Executive Groom Combo (Cut + Beard + Facial)', price: '₹2,400', desc: 'Complete 90-minute full head rejuvenation' },
    ],
    tag: 'BARBER & GROOMING',
  },
  {
    num: 7,
    title: 'HANDS & FEET THERAPY',
    subtitle: 'LUXURY SPA PEDICURE, MANICURE & NAILS',
    items: [
      { name: 'Crystal Rose Petal Pedicure', price: '₹1,400', desc: 'Jelly soak, foot scrub, cuticle work & callus buff' },
      { name: 'Aroma Nourishing Manicure', price: '₹1,000', desc: 'Essential oil soak, hand mask & tension relief massage' },
      { name: 'Warm Paraffin Wax Deep Moisture Wrap', price: '₹800', desc: 'Thermal healing wrap for soft, baby-smooth skin' },
      { name: 'Gel Polish Application (Hands / Feet)', price: '₹900', desc: 'High-shine UV-cured chip-free polish up to 3 weeks' },
      { name: 'Nail Extensions (Acrylic / Hard Gel)', price: '₹2,400+', desc: 'Sculpted length with French tips or chrome pigment' },
      { name: 'Bespoke Nail Art & Chrome Dusting', price: '₹150 / nail', desc: 'Minimalist metallic foils, ombres, and gems' },
    ],
    tag: 'NAIL LOUNGE',
  },
  {
    num: 8,
    title: 'DETAN & BODY CARE',
    subtitle: 'ORGANIC EXFOLIATION & SMOOTHING RITUALS',
    items: [
      { name: 'Full Arms + Legs Tan Removal Pack', price: '₹1,600', desc: 'Milk protein & kojic acid detan paste with wipe down' },
      { name: 'Full Back Glow Detan & Polish', price: '₹1,200', desc: 'Walnut shell buffing, clay wrap & brightening lotion' },
      { name: 'Rica White Chocolate Wax (Full Body)', price: '₹3,400', desc: 'Colophony-free Italian wax gentle on sensitive skin' },
      { name: 'Underarms & Bikini Line Waxing', price: '₹900', desc: 'Hypoallergenic peel-off wax with soothing aloe gel' },
      { name: 'Thread Artistry (Eyebrows + Upper Lip)', price: '₹150', desc: 'Precision thread geometry and aloe gel dab' },
      { name: 'Full Face Threading & Detan Cleanse', price: '₹650', desc: 'Peach fuzz removal, herbal wipe & ice pack' },
    ],
    tag: 'BODY WELLNESS',
  },
  {
    num: 9,
    title: 'BRIDAL & EVENT PACKAGES',
    subtitle: 'COUTURE MAKEUP, HAIR & CELEBRATION PACKAGES',
    items: [
      { name: 'The Royal Bridal Complete Journey', price: '₹18,000+', desc: 'Pre-bridal facials, body spa, HD makeup, hair & draping' },
      { name: 'The Aristocrat Groom Wedding Package', price: '₹8,500', desc: 'Hair designer cut, beard couture, gold facial & detan' },
      { name: 'HD Party Makeup & Hair Updo', price: '₹4,500', desc: 'M.A.C / Huda Beauty airbrush glow with false mink lashes' },
      { name: 'Saree Draping & Dupatta Pinning', price: '₹800', desc: 'Crisp traditional or modern pleated draping style' },
      { name: 'Engagement / Reception Glamour Look', price: '₹7,500', desc: 'Long-wear waterproof base with couture eye detailing' },
      { name: 'Family & Bridesmaid Group Styling (per person)', price: '₹3,200', desc: 'Subtle dewy makeup, beach waves or soft curls' },
    ],
    tag: 'BRIDAL SUITE',
  },
];

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateSVG(card) {
  const width = 1080;
  const height = 1520;

  const itemsHtml = card.items.map((item, idx) => {
    const y = 500 + idx * 140;
    return `
      <!-- Item ${idx + 1} -->
      <g transform="translate(110, ${y})">
        <!-- Item Name -->
        <text x="0" y="0" font-family="'Cinzel', serif, sans-serif" font-size="28" font-weight="700" fill="#F3E5AB" letter-spacing="0.5">
          ${escapeXml(item.name)}
        </text>
        
        <!-- Price with Gold Box -->
        <g transform="translate(${860 - 110}, -24)">
          <rect x="-140" y="2" width="140" height="34" rx="4" fill="#1E1911" stroke="#D4AF37" stroke-width="1.2" />
          <text x="-70" y="25" text-anchor="middle" font-family="'Cinzel', serif, sans-serif" font-size="21" font-weight="700" fill="#E6C65A" letter-spacing="0.5">
            ${escapeXml(item.price)}
          </text>
        </g>
        
        <!-- Description -->
        <text x="0" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" fill="#9E9E9E" font-weight="400">
          ${escapeXml(item.desc)}
        </text>

        <!-- Subtle dotted divider -->
        <line x1="0" y1="64" x2="860" y2="64" stroke="#D4AF37" stroke-width="1" stroke-dasharray="3, 5" stroke-opacity="0.25" />
      </g>
    `;
  }).join('');

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <!-- Background Gradient -->
        <radialGradient id="bgGrad" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stop-color="#181818" />
          <stop offset="60%" stop-color="#0D0D0D" />
          <stop offset="100%" stop-color="#050505" />
        </radialGradient>
        
        <!-- Gold Metallic Gradient -->
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#BF953F" />
          <stop offset="25%" stop-color="#FCF6BA" />
          <stop offset="50%" stop-color="#B38728" />
          <stop offset="75%" stop-color="#FBF5B7" />
          <stop offset="100%" stop-color="#AA771C" />
        </linearGradient>

        <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.4" />
          <stop offset="50%" stop-color="#F3E5AB" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#D4AF37" stop-opacity="0.4" />
        </linearGradient>

        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.8" />
        </filter>
      </defs>

      <!-- Deep Dark Textured Base -->
      <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

      <!-- Subtle Luxury Grid / Texture Lines -->
      <rect x="36" y="36" width="${width - 72}" height="${height - 72}" fill="none" stroke="#D4AF37" stroke-width="1" stroke-opacity="0.15" />
      
      <!-- Outer Main Gold Border -->
      <rect x="52" y="52" width="${width - 104}" height="${height - 104}" rx="8" fill="none" stroke="url(#goldBorder)" stroke-width="2.5" />
      
      <!-- Inner Thin Gold Border -->
      <rect x="68" y="68" width="${width - 136}" height="${height - 136}" rx="4" fill="none" stroke="#D4AF37" stroke-width="1" stroke-opacity="0.35" />

      <!-- Ornate Corner Accents -->
      <g stroke="#D4AF37" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Top Left -->
        <path d="M 52 90 L 90 52 M 52 75 L 75 52 M 85 85 L 85 65 M 85 85 L 65 85" stroke-opacity="0.8" />
        <circle cx="95" cy="95" r="3.5" fill="#D4AF37" />
        
        <!-- Top Right -->
        <path d="M ${width - 52} 90 L ${width - 90} 52 M ${width - 52} 75 L ${width - 75} 52 M ${width - 85} 85 L ${width - 85} 65 M ${width - 85} 85 L ${width - 65} 85" stroke-opacity="0.8" />
        <circle cx="${width - 95}" cy="95" r="3.5" fill="#D4AF37" />

        <!-- Bottom Left -->
        <path d="M 52 ${height - 90} L 90 ${height - 52} M 52 ${height - 75} L 75 ${height - 52} M 85 ${height - 85} L 85 ${height - 65} M 85 ${height - 85} L 65 ${height - 85}" stroke-opacity="0.8" />
        <circle cx="95" cy="${height - 95}" r="3.5" fill="#D4AF37" />

        <!-- Bottom Right -->
        <path d="M ${width - 52} ${height - 90} L ${width - 90} ${height - 52} M ${width - 52} ${height - 75} L ${width - 75} ${height - 52} M ${width - 85} ${height - 85} L ${width - 85} ${height - 65} M ${width - 85} ${height - 85} L ${width - 65} ${height - 85}" stroke-opacity="0.8" />
        <circle cx="${width - 95}" cy="${height - 95}" r="3.5" fill="#D4AF37" />
      </g>

      <!-- Brand Header -->
      <!-- Salon Crown / Scissors Icon Emblem -->
      <g transform="translate(540, 140)">
        <circle cx="0" cy="0" r="38" fill="#1A1712" stroke="url(#goldGrad)" stroke-width="1.8" />
        <!-- Scissors / Crest Icon -->
        <path d="M -14 -12 L 14 12 M -14 12 L 14 -12" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="-16" cy="-14" r="5" fill="none" stroke="#D4AF37" stroke-width="2" />
        <circle cx="16" cy="-14" r="5" fill="none" stroke="#D4AF37" stroke-width="2" />
        <circle cx="0" cy="0" r="3.5" fill="#FCF6BA" />
      </g>

      <!-- Salon Brand Name -->
      <text x="540" y="222" text-anchor="middle" font-family="'Cinzel', serif, sans-serif" font-size="44" font-weight="800" fill="url(#goldGrad)" letter-spacing="6">
        ENREACH UNISEX SALON
      </text>

      <!-- Tag Badge -->
      <g transform="translate(540, 260)">
        <rect x="-130" y="-16" width="260" height="32" rx="16" fill="#1A160F" stroke="#D4AF37" stroke-width="1" />
        <text x="0" y="6" text-anchor="middle" font-family="'Cinzel', serif, sans-serif" font-size="14" font-weight="700" fill="#E5C365" letter-spacing="3">
          ${escapeXml(card.tag)}
        </text>
      </g>

      <!-- Decorative Divider -->
      <g transform="translate(540, 320)">
        <line x1="-220" y1="0" x2="-35" y2="0" stroke="url(#goldBorder)" stroke-width="1.5" />
        <polygon points="0,-7 7,0 0,7 -7,0" fill="#D4AF37" />
        <circle cx="-16" cy="0" r="2.5" fill="#D4AF37" />
        <circle cx="16" cy="0" r="2.5" fill="#D4AF37" />
        <line x1="35" y1="0" x2="220" y2="0" stroke="url(#goldBorder)" stroke-width="1.5" />
      </g>

      <!-- Section Title & Subtitle -->
      <text x="540" y="380" text-anchor="middle" font-family="'Cinzel', serif, sans-serif" font-size="34" font-weight="700" fill="#FFFFFF" letter-spacing="3">
        ${escapeXml(card.title)}
      </text>

      <text x="540" y="420" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="500" fill="#D4AF37" letter-spacing="2">
        ${escapeXml(card.subtitle)}
      </text>

      <!-- Menu Items List -->
      ${itemsHtml}

      <!-- Bottom Card Footer / Hygiene Stamp -->
      <g transform="translate(540, 1400)">
        <line x1="-300" y1="0" x2="300" y2="0" stroke="#D4AF37" stroke-width="1" stroke-opacity="0.3" />
        <text x="0" y="32" text-anchor="middle" font-family="'Cinzel', serif, sans-serif" font-size="15" font-weight="600" fill="#B38728" letter-spacing="4">
          PREMIUM CARE • 100% STERILIZED • MASTER STYLISTS
        </text>
        <text x="0" y="58" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="400" fill="#757575">
          CARD 0${card.num} OF 09 • ENREACH DIGITAL MENU
        </text>
      </g>
    </svg>
  `;
}

async function run() {
  for (const card of menuCards) {
    const svgStr = generateSVG(card);
    const svgBuffer = Buffer.from(svgStr);
    
    // Generate in /public/imageX.jpg
    const outPath = path.join(publicDir, `image${card.num}.jpg`);
    await sharp(svgBuffer)
      .jpeg({ quality: 95 })
      .toFile(outPath);
    console.log(`Generated ${outPath}`);

    // Also copy to root directory just in case someone requests it without leading slash
    const rootPath = path.join(__dirname, '..', `image${card.num}.jpg`);
    fs.copyFileSync(outPath, rootPath);
  }
  console.log('All 9 menu cards generated successfully!');
}

run().catch(console.error);
