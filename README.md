# Lavilla Realstate

A complete React JavaScript + Vite website. The supplied LAVILLA logo and both supplied videos are included unchanged.

## Run

Requires Node.js 22 or newer. Open a terminal in this folder:

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. Do not double-click index.html.

```sh
npm run build
npm run preview
npm test
```

The included `dist/` folder is the production build. Deploy its contents to a static host. All local assets support subdirectory deployment.

## Brand preloader

`src/components/Preloader.jsx` owns one GSAP timeline. The logo PNG is the exact supplied file; no image editing or recoloring was performed.

- 0.00–0.40s: near-black screen and a very subtle central warm illumination.
- 0.40–1.20s: centered logo fades in, scales from 0.90 to 1, and resolves from 10px blur. A faint masked light sweep passes once.
- 1.20–1.60s: logo hold.
- 1.60–2.60s: WELCOME, TO, and LAVILLA appear with 200ms stagger; previous words remain visible.
- 2.60–3.10s: composition hold.
- 3.10–3.60s: text fades upward, logo fades at 1.04 scale, and the overlay dissolves into the already-mounted Home section.

The overlay unmounts and scroll is restored on completion. The Home MP4 preloads beneath it; the logo and fallback poster decode before exit whenever practical. A maximum 1.2-second readiness extension prevents indefinite blocking on a slow connection. Reduced motion uses a short 0.6-second opacity-only loader without blur, scale, or sheen. Desktop, tablet, and mobile logo widths match the requested ranges.

## Two independent video sections

`src/components/CinematicSections.jsx` renders two separate semantic sections in normal page flow:

1. `#home`: only `public/videos/lavilla-hero.mp4`.
2. `#interior`: only `public/videos/lavilla-interior.mp4`.

They are never composited into one frame or switched on a timer. Scroll from Home to Interior, or use “Step inside.” Each video is muted, inline, looping, and plays automatically at 0.65× when its section is visible. Offscreen and background-tab videos pause for performance; opening a menu/dialog also suspends them. No play/pause buttons, scrubber, elapsed time, progress bar, or sound controls are present.

Lenis provides smooth desktop scrolling. Scoped GSAP ScrollTriggers provide gentle parallax and section text reveals without seeking the video or pinning sections together. Reduced motion disables smooth scrolling/parallax and uses still posters. Browser/device autoplay policies can prevent playback; posters remain visible and the app retries on ordinary interaction.

`src/App.jsx` manages navigation and scroll locks. Only the welcome overlay, menu, and dialog lock the page; scrolling is available immediately after the loader finishes. Navigation, collection tabs, spatial zone tabs, calculator, inquiry saving, and overview downloads remain functional.

## Forms and persistence

Names, emails, phone numbers, messages, brochure requests, and the last 20 saved inquiries are stored in namespaced sessionStorage (`lavilla.*`). Zone/villa selection and calculator values are mirrored into small session cookies. Cookies also hold download/inquiry completion flags. Cookies use SameSite=Lax and Secure under HTTPS. Personal form data stays out of cookies, since cookies accompany HTTP requests.

Data is local to the browser session; no backend or email service was supplied. Inquiry confirmation honestly reports local saving and offers a JSON download. The overview is a real printable HTML download, not a fake PDF. Connect a backend before using this as a live sales lead collection service.

## Files and verification

- `src/components/Preloader.jsx`: precise welcome timeline and readiness handling.
- `src/components/CinematicSections.jsx`: independent video sections and scroll animation.
- `src/hooks/storage.js`: resilient session storage and preference cookies.
- `src/hooks/investment.js`: bounded illustrative calculator math.
- `tests/`: core unit checks and repeatable browser checks.
- `VERIFICATION.json`: final browser verification summary.
- `public/brand/lavilla-logo.png`: unchanged original brand asset.

Google Fonts are optional; local fonts provide a fallback. Original property specifications remain supplied project content and should be verified by the owner before public marketing use.

## Repeat the browser checks

With Google Chrome installed, run `npm run preview` in one terminal and `npm run test:browser` in another. Tests use http://127.0.0.1:4173, save screenshots to `test-results/`, and update `VERIFICATION.json`.

## Final scroll sequencing and mobile playback

Both films autoplay independently and continue playing during user scrolling. The first wheel, swipe, or section-link request waits for the current text entrance to settle, runs its 1.15-second outgoing effect, then scrolls to the next section. Additional gestures cannot interrupt that transition. Reduced motion uses ordinary navigation. Video `currentTime` is never written or tied to scroll; this avoids keyframe-seeking stutter. Phones use the exact same MP4 sources on an untransformed, full-screen `object-fit: cover` layer. Cover preserves proportions while cropping the sides of the landscape video on portrait screens. The full landscape frame cannot fill a portrait screen without either cropping or letterboxing.
