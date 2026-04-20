export type CmsLink = {
  label: string;
  href: string;
};

export type CmsFooter = {
  quickLinks: CmsLink[];
  legal: CmsLink[];
  social: CmsLink[];
  description: string;
  email: string;
  copyright: string;
};

export type CmsHomepage = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: CmsLink;
    secondaryCta: CmsLink;
    stats: Array<{ label: string; value: string }>;
  };
  mission: {
    title: string;
    copy: string;
  };
  principlesPreview: {
    title: string;
    intro: string;
    items: string[];
    cta: CmsLink;
  };
  ecosystem: {
    title: string;
    intro: string;
    cards: Array<{ title: string; body: string }>;
  };
  why: {
    title: string;
    bullets: string[];
  };
  vision: {
    title: string;
    copy: string;
  };
  cta: {
    title: string;
    copy: string;
    primaryCta: CmsLink;
    secondaryCta: CmsLink;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  newsletter: {
    title: string;
    copy: string;
    inputPlaceholder: string;
    buttonLabel: string;
  };
};

export type CmsPrinciple = {
  title: string;
  statement: string;
};

export type CmsPageCopy = {
  about: {
    title: string;
    subtitle: string;
    sections: Array<{ heading: string; body: string }>;
    cta: string;
  };
  ecosystem: {
    title: string;
    subtitle: string;
    sections: Array<{ heading: string; body: string }>;
    cta: string;
  };
  vision: {
    title: string;
    subtitle: string;
    sections: Array<{ heading: string; body: string }>;
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    intro: string;
    responseSla: string;
    inquiryTypes: string[];
    form: {
      formTitle: string;
      fullName: string;
      organization: string;
      role: string;
      email: string;
      region: string;
      inquiryType: string;
      message: string;
      submit: string;
      placeholders: {
        fullName: string;
        organization: string;
        role: string;
        email: string;
        region: string;
        message: string;
      };
    };
    cards: {
      generalContactTitle: string;
      investorTitle: string;
      investorBody: string;
      responseTitle: string;
      responseBody: string;
    };
  };
};

export type CmsPrinciplesPage = {
  eyebrow: string;
  title: string;
  subtitle: string;
  doctrineTitle: string;
  doctrineDescription: string;
  manifestoTitle: string;
  manifestoSupport: string;
  ctas: {
    primary: CmsLink;
    secondary: CmsLink;
  };
};

export type CmsLegalCopy = {
  privacy: {
    title: string;
    effectiveDate: string;
    intro: string;
    sections: string[];
  };
  terms: {
    title: string;
    effectiveDate: string;
    intro: string;
    sections: string[];
  };
  cookie: {
    title: string;
    effectiveDate: string;
    intro: string;
    sections: string[];
  };
};

export type CmsContent = {
  locale: "en" | "pt";
  navigation: {
    main: CmsLink[];
    language: {
      enLabel: string;
      ptLabel: string;
    };
    headerCta: string;
  };
  footer: CmsFooter;
  homepage: CmsHomepage;
  principles: CmsPrinciple[];
  principlesPage: CmsPrinciplesPage;
  pages: CmsPageCopy;
  manifesto: string;
  legal: CmsLegalCopy;
};
