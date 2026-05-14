"use client";

import { Label, Tag } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "TanStack Query",
  "Zustand",
  "React Hook Form",
  "Zod",
  "Radix UI",
  "Framer Motion",
  "GSAP",
  "Sanity",
  "NextAuth.js",
];

const StackStrip = () => {
  const { t } = useLanguage();

  return (
    <section className="ho-stack-strip">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 28,
          flexWrap: "wrap",
        }}
      >
        <Label style={{ minWidth: 100 }}>{t.toolkit}</Label>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 8, flex: 1 }}
        >
          {STACK.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackStrip;
