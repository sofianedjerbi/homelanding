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
      tagline: 'High-availability cloud infrastructure',
      description: 'Multi-node Kubernetes on Talos Linux with automated failover, self-healing workloads, and GitOps reconciliation.',
      author: 'by Sofiane Djerbi',
      viewPortfolio: 'View portfolio',
    },
    infra: {
      title: 'Infrastructure',
      items: [
        { label: 'Orchestration', value: 'Kubernetes on Talos' },
        { label: 'Networking', value: 'Cilium + Gateway API' },
        { label: 'GitOps', value: 'ArgoCD + SOPS' },
        { label: 'Identity', value: 'Keycloak SSO' },
        { label: 'IaC', value: 'Terragrunt' },
        { label: 'Hosting', value: '3 control planes @ Hetzner' },
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
      tagline: 'Infrastructure cloud haute disponibilité',
      description: 'Kubernetes multi-noeud sur Talos Linux. Failover automatique, self-healing, réconciliation GitOps.',
      author: 'par Sofiane Djerbi',
      viewPortfolio: 'Voir le portfolio',
    },
    infra: {
      title: 'Infrastructure',
      items: [
        { label: 'Orchestration', value: 'Kubernetes sur Talos' },
        { label: 'Réseau', value: 'Cilium + Gateway API' },
        { label: 'GitOps', value: 'ArgoCD + SOPS' },
        { label: 'Identité', value: 'Keycloak SSO' },
        { label: 'IaC', value: 'Terragrunt' },
        { label: 'Hébergement', value: '3 control planes @ Hetzner' },
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
