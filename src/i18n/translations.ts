export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

export const translations = {
  en: {
    title: 'etcd.me | Cloud Infrastructure',
    hero: {
      greeting: 'Welcome to',
      name: 'etcd.me',
      tagline: 'Production-grade cloud infrastructure',
      description: 'Immutable Kubernetes on Talos Linux, secured with zero-trust networking and fully automated GitOps deployments.',
      author: 'by Sofiane Djerbi',
      viewPortfolio: 'View portfolio',
    },
    infra: {
      title: 'Infrastructure',
      items: [
        { label: 'Orchestration', value: 'Kubernetes on Talos Linux' },
        { label: 'Networking', value: 'Cilium CNI with Gateway API' },
        { label: 'GitOps', value: 'ArgoCD with SOPS encryption' },
        { label: 'Identity', value: 'Keycloak OIDC / SSO' },
        { label: 'IaC', value: 'Terraform + Terragrunt' },
        { label: 'Hosting', value: 'Hetzner Cloud (Nuremberg)' },
      ],
    },
    services: {
      title: 'Services',
      items: [
        {
          name: 'n8n',
          description: 'Workflow automation',
          url: 'https://n8n.etcd.me',
        },
        {
          name: 'Grafana',
          description: 'Observability',
          url: 'https://grafana.etcd.me',
        },
        {
          name: 'ArgoCD',
          description: 'Continuous delivery',
          url: 'https://argo.etcd.me',
        },
        {
          name: 'Keycloak',
          description: 'Identity provider',
          url: 'https://auth.etcd.me',
        },
        {
          name: 'Uptime',
          description: 'Status monitoring',
          url: 'https://uptime.etcd.me',
        },
      ],
    },
    footer: {
      cta: 'Explore the Infrastructure',
      ctaSub: '100% open source on GitHub',
      repo: 'https://github.com/sofianedjerbi/homelab',
    },
  },
  fr: {
    title: 'etcd.me | Infrastructure Cloud',
    hero: {
      greeting: 'Bienvenue sur',
      name: 'etcd.me',
      tagline: 'Infrastructure cloud de qualité production',
      description: 'Kubernetes immuable sur Talos Linux, sécurisé avec un réseau zero-trust et des déploiements GitOps entièrement automatisés.',
      author: 'par Sofiane Djerbi',
      viewPortfolio: 'Voir le portfolio',
    },
    infra: {
      title: 'Infrastructure',
      items: [
        { label: 'Orchestration', value: 'Kubernetes sur Talos Linux' },
        { label: 'Réseau', value: 'Cilium CNI avec Gateway API' },
        { label: 'GitOps', value: 'ArgoCD et SOPS' },
        { label: 'Identité', value: 'Keycloak OIDC / SSO' },
        { label: 'IaC', value: 'Terraform + Terragrunt' },
        { label: 'Hébergement', value: 'Hetzner Cloud (Nuremberg)' },
      ],
    },
    services: {
      title: 'Services',
      items: [
        {
          name: 'n8n',
          description: 'Automatisation',
          url: 'https://n8n.etcd.me',
        },
        {
          name: 'Grafana',
          description: 'Observabilité',
          url: 'https://grafana.etcd.me',
        },
        {
          name: 'ArgoCD',
          description: 'Livraison continue',
          url: 'https://argo.etcd.me',
        },
        {
          name: 'Keycloak',
          description: 'Fournisseur d\'identité',
          url: 'https://auth.etcd.me',
        },
        {
          name: 'Uptime',
          description: 'Surveillance de disponibilité',
          url: 'https://uptime.etcd.me',
        },
      ],
    },
    footer: {
      cta: 'Explorer l\'Infrastructure',
      ctaSub: '100% open source sur GitHub',
      repo: 'https://github.com/sofianedjerbi/homelab',
    },
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return translations[lang];
}
