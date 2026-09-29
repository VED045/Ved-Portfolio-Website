# Ved's Portfolio Website

An interactive portfolio for **Ved Deshpande**. It presents selected AI, computer vision, product, and full-stack work through a cinematic single-page experience.

## Highlights

- Interactive laptop terminal in the hero section
- 3D Galaxy S25 Ultra-inspired project viewer
- Pop-up front camera and detailed rear camera interaction
- Six featured projects, including Daily News Intelligence and TripMate
- Experience timeline for Barclays India, Tenancy Passport, and Thelios.ai
- Responsive design, keyboard navigation, and reduced-motion support

## Built with

Vanilla HTML, CSS, and JavaScript. No build process or package installation is required.

## Run locally

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python -m http.server 4173
```

Then visit [http://localhost:4173](http://localhost:4173).

## Project structure

```text
index.html   # Page structure and portfolio content
styles.css   # Visual design, animations, responsive layout
script.js    # Project data and interactive behaviour
```

## Updating content

- Change project details and links in `script.js`.
- Update experience, education, contact details, and page copy in `index.html`.
- Adjust colors, spacing, typography, and animations in `styles.css`.

## Deploy to Vercel

1. Sign in at [vercel.com](https://vercel.com) using GitHub.
2. From the Vercel dashboard, select **Add New → Project**.
3. Import the `VED045/Ved-Portfolio-Website` repository.
4. Set the project name to `veds-portfolio-website` (or any available name you prefer).
5. Keep the root directory as `./` and select **Other** as the framework preset.
6. Leave the build command and output directory empty: Vercel serves this static HTML, CSS, and JavaScript site directly.
7. Select **Deploy**.

Once Vercel shows the deployment as ready, open the generated `*.vercel.app` URL to view the live portfolio.

## Automatic deployments

Importing the GitHub repository in the Vercel steps above configures deployments automatically:

- Every push to `main` creates a production deployment.
- Every pull request creates a preview deployment with its own URL.

To publish an update, commit and push it:

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

Vercel will build and publish the new version automatically. The deployment status and live URL appear in the Vercel dashboard and on the related GitHub commit.

## License

Personal portfolio project for Ved Deshpande.
