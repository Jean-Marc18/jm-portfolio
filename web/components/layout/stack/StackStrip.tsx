"use client";

import { Label, Tag } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSiteContent } from "@/lib/content/SiteContentContext";

const StackStrip = () => {
  const { t } = useLanguage();
  const { homeStack } = useSiteContent().settings;

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
          {homeStack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackStrip;
