// ── Google Drive Image URL Utilities ─────────────────────────────────
//
// HOW TO GET A FILE ID FROM GOOGLE DRIVE:
//   1. Upload photo to Google Drive
//   2. Right-click → "Share" → set to "Anyone with the link"
//   3. Copy the share link — it looks like:
//        https://drive.google.com/file/d/1mkizoH77PPu631fXKPIlepk0PVlEr1AZ/view
//      The FILE_ID is the long string between /d/ and /view
//
// HOW TO USE IN tilak.js images array:
//   Option A — plain file ID with gdrive: prefix (recommended):
//     'gdrive:1mkizoH77PPu631fXKPIlepk0PVlEr1AZ'
//
//   Option B — full share link (auto-parsed):
//     'https://drive.google.com/file/d/1mkizoH77PPu631fXKPIlepk0PVlEr1AZ/view'
//
//   Option C — already an lh3 URL (used as-is):
//     'https://lh3.googleusercontent.com/d/1mkizoH77PPu631fXKPIlepk0PVlEr1AZ'
// ─────────────────────────────────────────────────────────────────────

/**
 * Extract a Google Drive file ID from various input formats.
 *
 * Handles:
 *   https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *   https://drive.google.com/open?id=FILE_ID
 *   https://drive.google.com/uc?id=FILE_ID&export=view
 *   https://lh3.googleusercontent.com/d/FILE_ID
 *   gdrive:FILE_ID
 *   FILE_ID  (plain 25–44 char alphanumeric string)
 *
 * @param {string} input
 * @returns {string|null}
 */
function parseGdriveId(input) {
  if (!input) return null;

  // gdrive:FILE_ID shorthand
  if (input.startsWith('gdrive:')) return input.slice(7);

  // https://drive.google.com/file/d/FILE_ID/...
  let m = input.match(/\/file\/d\/([\w-]+)/);
  if (m) return m[1];

  // ?id=FILE_ID  (open, uc, thumbnail endpoints)
  m = input.match(/[?&]id=([\w-]+)/);
  if (m) return m[1];

  // lh3.googleusercontent.com/d/FILE_ID
  m = input.match(/googleusercontent\.com\/d\/([\w-]+)/);
  if (m) return m[1];

  // Plain file ID — 25–44 alphanumeric/dash/underscore chars
  if (/^[\w-]{25,44}$/.test(input)) return input;

  return null;
}

/**
 * Build a direct-display image URL from a Google Drive file ID.
 * Uses lh3.googleusercontent.com for full-resolution display.
 *
 * @param {string} fileId
 * @returns {string}
 */
function gdriveFullUrl(fileId) {
  return 'https://lh3.googleusercontent.com/d/' + fileId;
}

/**
 * Build a thumbnail URL from a Google Drive file ID.
 * Faster for gallery grids; size controls the max width in pixels.
 *
 * @param {string} fileId
 * @param {number} [size=800]  max width in pixels
 * @returns {string}
 */
function gdriveThumbnailUrl(fileId, size) {
  return 'https://drive.google.com/thumbnail?id=' + fileId + '&sz=w' + (size || 800);
}

/**
 * Convert any Google Drive input (file ID, share URL, gdrive: shorthand,
 * or lh3 URL) to an embeddable image URL.
 *
 * @param {string} input
 * @param {'full'|'thumb'} [mode='full']  'thumb' uses the thumbnail endpoint
 * @param {number}         [thumbSize=800]
 * @returns {string}  embeddable URL, or input unchanged if not a Drive reference
 */
function gdriveImgUrl(input, mode, thumbSize) {
  const id = parseGdriveId(input);
  if (!id) return input;
  return (mode === 'thumb')
    ? gdriveThumbnailUrl(id, thumbSize || 800)
    : gdriveFullUrl(id);
}

// ── Mehndi Corner Ornaments ───────────────────────────────────────────
// Injects real SVG DOM elements at each corner of a gallery item.
// Using JS-injected SVGs instead of CSS data URIs for full mobile support.

const _mehndiSVG = (rotate) => {
  const cx = 21, cy = 21;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
    <g transform="rotate(${rotate} ${cx} ${cy})">
      <polygon points="0,0 24,0 0,24" fill="#0a0202" opacity="0.9"/>
      <path d="M2,40 L2,2 L40,2" stroke="#2C1810" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M7,35 L7,7 L35,7" stroke="#2C1810" stroke-width="0.6" fill="none" stroke-linecap="round" opacity="0.5"/>
      <circle cx="2" cy="2" r="2.5" fill="#1a0808"/>
      <path d="M2,2 C14,2 18,13 11,19 C7,22 2,16 2,2Z" fill="#1a0808"/>
      <path d="M5,5 C14,5 17,13 11,17 C9,19 5,14 5,5Z" fill="none" stroke="#3d1212" stroke-width="0.7"/>
      <circle cx="10" cy="10" r="2.3" fill="#2C1810"/>
      <circle cx="10" cy="10" r="1" fill="#0a0202"/>
      <path d="M2,14 C6,14 9,18 7,21 C5,23 2,20 2,14Z" fill="#1a0808" opacity="0.65"/>
      <path d="M14,2 C14,6 18,9 21,7 C23,5 20,2 14,2Z" fill="#1a0808" opacity="0.65"/>
      <circle cx="21" cy="2" r="1.8" fill="#1a0808"/>
      <circle cx="30" cy="2" r="1.8" fill="#1a0808"/>
      <circle cx="2" cy="21" r="1.8" fill="#1a0808"/>
      <circle cx="2" cy="30" r="1.8" fill="#1a0808"/>
    </g>
  </svg>`;
};

/**
 * Append four mehndi corner ornaments to a gallery item element.
 * @param {HTMLElement} item
 */
function addMehndiCorners(item) {
  const corners = [
    { cls: 'mc-tl', rotate: 0   },
    { cls: 'mc-tr', rotate: 90  },
    { cls: 'mc-br', rotate: 180 },
    { cls: 'mc-bl', rotate: 270 },
  ];
  corners.forEach(({ cls, rotate }) => {
    const el = document.createElement('span');
    el.className = 'mehndi-corner ' + cls;
    el.innerHTML = _mehndiSVG(rotate);
    item.appendChild(el);
  });
}

