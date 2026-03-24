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
