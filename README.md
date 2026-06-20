# Microservices & APIs Tutorial

A single-page, beginner-friendly tutorial covering APIs, REST, microservices, CI/CD automation, and hands-on **FastAPI** + **uvicorn** examples (GET, POST, PUT/PATCH, DELETE). Includes **100 interactive MCQs** with explanations.

Live site structure:

| File | Purpose |
|------|---------|
| `index.html` | Tutorial content, SVG diagrams, quiz containers |
| `script.js` | Navigation, mobile menu, 100 MCQs rendered as accordion cards |
| `CNAME` | Custom domain for GitHub Pages (optional) |

---

## Host on GitHub Pages

### Important: Private repository implications

This repository is currently **private**. GitHub Pages behavior depends on your account plan:

| Account type | Private repo + GitHub Pages |
|--------------|----------------------------|
| **GitHub Free** | Pages is **not available** for private repositories. You must make the repo **public**, or upgrade. |
| **GitHub Pro / Team / Enterprise** | Pages **is available** for private repos. You can enable Pages without changing visibility. |

If you are on **GitHub Free** and want a **public** tutorial site, you need to make the repository public first (see below). Only do this if you are comfortable with the tutorial content being visible to everyone on GitHub.

---

### Option A — Make the repository public (GitHub Free)

1. **Review the repo** — Ensure no secrets, API keys, or private data are committed (`.env`, credentials, etc.).

2. **Change visibility to Public**
   - Open the repository on GitHub.
   - Go to **Settings** → **General**.
   - Scroll to **Danger Zone** → **Change repository visibility**.
   - Select **Public** and confirm.

3. **Push your files** (if not already on `main`):

   ```bash
   git add index.html script.js CNAME README.md
   git commit -m "Add microservices and APIs tutorial site"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - **Settings** → **Pages** (left sidebar).
   - Under **Build and deployment**:
     - **Source:** Deploy from a branch
     - **Branch:** `main` → `/ (root)` → **Save**

5. **Wait 1–3 minutes**, then open:
   `https://<your-github-username>.github.io/microservices-tute/`

6. **Custom domain (optional)**  
   Edit `CNAME` with your real domain (e.g. `tutorial.example.com`), push, then configure DNS at your registrar:
   - **CNAME record:** `tutorial` → `<username>.github.io`  
   In repo **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS** when available.

---

### Option B — Keep the repository private (GitHub Pro+)

1. Push `index.html`, `script.js`, and optionally `CNAME` to `main`.

2. **Settings** → **Pages** → deploy from branch `main`, folder `/ (root)`.

3. Choose visibility for the **published site** (GitHub may offer public or private site access depending on plan).

4. Access the URL shown under **Pages** settings.

---

### Local preview

No build step required — open the file directly or use a simple server:

```bash
# Python 3
python -m http.server 8080
# Visit http://localhost:8080
```

Or use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code / Cursor.

---

## Project structure

```
microservices-tute/
├── index.html      # Tutorial page (Tailwind via CDN)
├── script.js       # TOC, mobile nav, 100 MCQs
├── CNAME           # Custom domain placeholder
└── README.md       # This file
```

---

## Customization

- **Colors / theme:** Edit Tailwind classes in `index.html` or extend `tailwind.config` in the `<head>`.
- **Content:** Add sections in `index.html` and matching quiz arrays in `script.js` under `QUIZ_DATA`.
- **Domain:** Replace `www.yourcustomdomain.com` in `CNAME` before enabling a custom domain on GitHub Pages.

---

## License

Use and adapt freely for learning and teaching.
