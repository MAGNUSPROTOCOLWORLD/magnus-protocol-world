import { homepage } from "@/content/site-content";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items?: FaqItem[];
};

export function FaqList({ items = homepage.faq.items }: FaqListProps) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group rounded-card border border-gold/20 bg-carbon/70 p-5"
          open={index === 0}
        >
          <summary className="cursor-pointer list-none text-base font-medium text-ivory">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="text-gold transition-transform group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-silver">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
