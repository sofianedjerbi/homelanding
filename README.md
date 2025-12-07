# homelanding

Landing page for [etcd.me](https://etcd.me) - showcasing production-grade homelab infrastructure.

## Live

**[etcd.me](https://etcd.me)** | [Portfolio](https://sofianedjerbi.com)

## Stack

- **Astro** - Static site generation
- **Tailwind CSS** - Styling
- **i18n** - English/French

## Deploy

Self-contained GitOps deployment:

```
k8s/
├── deployment.yaml
├── service.yaml
├── httproute.yaml
└── namespace.yaml
```

Push to `main` → GitHub Actions builds image → ArgoCD deploys automatically.

## Dev

```bash
npm install
npm run dev
```

---

Built by [Sofiane Djerbi](https://sofianedjerbi.com)
