# Cheap Coffins — I AM MARA (Private EPK)

This repository contains a **single-page private EPK website** for industry preview use (labels, media, promoters, collaborators).

## Folder Structure

- `index.html` — page content and section layout
- `style.css` — dark editorial visual style
- `script.js` — password gate logic and session unlock behavior
- `README.md` — editing and publishing instructions
- `images/` — image assets (cover, stills, optional photos)
- `audio/` — reserved folder for future assets if needed

## What To Edit

### 1) Change the password gate
- Open `script.js`
- Update `EPK_PASSWORD` near the top:
  - `const EPK_PASSWORD = "mara-preview";`

### 2) Edit page text content
- Open `index.html`
- Search for comments marked with `EDIT ...` for quick updates:
  - Band name
  - Album title
  - Album blurb
  - Album overview metadata
  - Contact information

### 3) Replace cover image
- Add your cover image file at:
  - `images/cover.svg`
- Or change the image path in `index.html` where commented:
  - `<!-- EDIT IMAGE PATH BELOW (cover image) -->`

### 4) Change SoundCloud playlist URL
- In `index.html`, find the SoundCloud iframe in the **Private Album Stream** section.
- Replace the encoded playlist URL inside the `src` query string.
- Look for comment:
  - `<!-- EDIT SOUNDCLOUD PLAYLIST URL BELOW (replace in iframe src when needed) -->`

### 5) Change YouTube links
- In `index.html`, go to the **Video** section.
- Replace:
  - `https://www.youtube.com/embed/VIDEO_ID_ONE`
  - `https://www.youtube.com/embed/VIDEO_ID_TWO`
- Look for comments:
  - `<!-- EDIT YOUTUBE LINK BELOW -->`

## GitHub Pages Publishing

1. Commit and push this repository to GitHub.
2. In the GitHub repo, open **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your default branch), folder `/ (root)`
4. Save, then wait for deployment.
5. Open the generated GitHub Pages URL.

> This is a client-side password gate for private sharing convenience, not high-security access control.


## Troubleshooting

### Cover image 404 in console
If you see `images/cover.svg 404`, make sure a file exists at exactly:
- `images/cover.svg`

A text-based SVG placeholder image is included in this repository (`images/cover.svg`), so no binary image file is required. Replace it with your final art when ready.

### SoundCloud embed 404 in console
If SoundCloud widget requests return 404, the playlist URL may be private/unavailable or incorrect for embedding.
- Confirm the playlist exists and can be embedded.
- Update the encoded playlist URL in the iframe `src` in `index.html`.

### Password unlock appears to do nothing
- Confirm you are entering the exact password set in `script.js`.
- Default password is `mara-preview` unless changed.
- If storage is blocked by browser privacy settings, unlock still works for the current page load.
