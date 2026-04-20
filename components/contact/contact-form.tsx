import { pageCopy } from "@/content/site-content";
import { Button } from "@/components/ui/button";

type ContactFormCopy = {
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

type ContactFormProps = {
  inquiryTypes?: string[];
  copy?: ContactFormCopy;
  responseSla?: string;
};

const defaultCopy: ContactFormCopy = {
  fullName: "Full Name",
  organization: "Organization",
  role: "Role",
  email: "Email",
  region: "Region",
  inquiryType: "Inquiry Type",
  message: "Message",
  submit: "Submit Inquiry",
  placeholders: {
    fullName: "Your full name",
    organization: "Organization name",
    role: "Your role",
    email: "name@company.com",
    region: "Region or country",
    message: "Share context, objectives, and timeline."
  }
};

export function ContactForm({
  inquiryTypes = pageCopy.contact.inquiryTypes,
  copy = defaultCopy,
  responseSla = pageCopy.contact.responseSla
}: ContactFormProps) {
  return (
    <form className="grid gap-5" action="#" method="post">
      <div className="grid gap-5 md:grid-cols-2">
        <label htmlFor="contact-name" className="grid gap-2 text-sm text-silver">
          {copy.fullName}
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className="h-12 rounded-xl border border-gold/30 bg-obsidian px-4 text-sm text-ivory outline-none transition-colors placeholder:text-silver/60 focus:border-gold"
            placeholder={copy.placeholders.fullName}
          />
        </label>
        <label htmlFor="contact-organization" className="grid gap-2 text-sm text-silver">
          {copy.organization}
          <input
            id="contact-organization"
            name="organization"
            autoComplete="organization"
            className="h-12 rounded-xl border border-gold/30 bg-obsidian px-4 text-sm text-ivory outline-none transition-colors placeholder:text-silver/60 focus:border-gold"
            placeholder={copy.placeholders.organization}
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label htmlFor="contact-role" className="grid gap-2 text-sm text-silver">
          {copy.role}
          <input
            id="contact-role"
            name="role"
            className="h-12 rounded-xl border border-gold/30 bg-obsidian px-4 text-sm text-ivory outline-none transition-colors placeholder:text-silver/60 focus:border-gold"
            placeholder={copy.placeholders.role}
          />
        </label>
        <label htmlFor="contact-email" className="grid gap-2 text-sm text-silver">
          {copy.email}
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="h-12 rounded-xl border border-gold/30 bg-obsidian px-4 text-sm text-ivory outline-none transition-colors placeholder:text-silver/60 focus:border-gold"
            placeholder={copy.placeholders.email}
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label htmlFor="contact-region" className="grid gap-2 text-sm text-silver">
          {copy.region}
          <input
            id="contact-region"
            name="region"
            className="h-12 rounded-xl border border-gold/30 bg-obsidian px-4 text-sm text-ivory outline-none transition-colors placeholder:text-silver/60 focus:border-gold"
            placeholder={copy.placeholders.region}
          />
        </label>
        <label htmlFor="contact-inquiry-type" className="grid gap-2 text-sm text-silver">
          {copy.inquiryType}
          <select
            id="contact-inquiry-type"
            name="inquiryType"
            className="h-12 rounded-xl border border-gold/30 bg-obsidian px-4 text-sm text-ivory outline-none transition-colors focus:border-gold"
            defaultValue={inquiryTypes[0]}
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label htmlFor="contact-message" className="grid gap-2 text-sm text-silver">
        {copy.message}
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          className="min-h-[140px] rounded-xl border border-gold/30 bg-obsidian px-4 py-3 text-sm text-ivory outline-none transition-colors placeholder:text-silver/60 focus:border-gold"
          placeholder={copy.placeholders.message}
        />
      </label>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs tracking-[0.07em] text-silver">{responseSla}</p>
        <Button type="submit">{copy.submit}</Button>
      </div>
    </form>
  );
}
