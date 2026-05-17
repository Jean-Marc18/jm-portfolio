import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export type ContactEmailProps = {
  name: string;
  email: string;
  subjectLabel: string;
  message: string;
};

/**
 * Email envoyé à `jeanmarc.dev.18@gmail.com` à chaque soumission du
 * formulaire de contact du portfolio. Rendu via Resend.
 *
 * Design aligné avec les tokens du site (cream / ink / accent orange).
 * Compatible avec tous les clients mail majeurs (Gmail, Outlook, Apple
 * Mail) grâce aux primitives `@react-email/components` qui s'appuient
 * sur des tables HTML legacy en interne.
 */
export const ContactEmail = ({
  name,
  email,
  subjectLabel,
  message,
}: ContactEmailProps) => {
  const previewText = `${subjectLabel} — ${name}`;

  return (
    <Html lang="fr">
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                bg: "#f7f5f0",
                bgAlt: "#ffffff",
                ink: "#1a1a18",
                muted: "#6b6961",
                line: "#ddd8cc",
                accent: "#ff5a1f",
              },
            },
          },
        }}
      >
        <Body className="bg-bg font-sans text-ink">
          <Container className="mx-auto my-8 max-w-xl rounded-2xl border border-line bg-bgAlt p-10">
            {/* Header */}
            <Section className="pb-2">
              <Text className="m-0 text-xs uppercase tracking-widest text-muted">
                — Portfolio
              </Text>
              <Heading className="mb-0 mt-2 text-2xl font-medium leading-tight text-ink">
                Nouveau message de contact
              </Heading>
            </Section>

            <Hr className="my-6 border-line" />

            {/* Sender info */}
            <Section>
              <InfoRow label="Nom" value={name} />
              <InfoRow
                label="Email"
                value={
                  <Link
                    href={`mailto:${email}`}
                    className="text-ink underline"
                  >
                    {email}
                  </Link>
                }
              />
              <InfoRow label="Type" value={subjectLabel} />
            </Section>

            <Hr className="my-6 border-line" />

            {/* Message */}
            <Section>
              <Text className="m-0 mb-3 text-xs uppercase tracking-widest text-muted">
                Message
              </Text>
              <Section className="rounded-xl bg-bg p-5">
                <Text className="m-0 whitespace-pre-wrap text-[15px] leading-relaxed text-ink">
                  {message}
                </Text>
              </Section>
            </Section>

            <Hr className="my-6 border-line" />

            {/* Footer / CTA */}
            <Section className="text-center">
              <Text className="m-0 mb-3 text-sm text-muted">
                Répondre directement :
              </Text>
              <Link
                href={`mailto:${email}`}
                className="inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg no-underline"
              >
                Écrire à {name.split(" ")[0]}
              </Link>
            </Section>

            <Text className="mt-6 text-center text-xs text-muted">
              Envoyé depuis jmk-portfolio.vercel.app
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <Section className="mb-2">
    <table width="100%" cellPadding={0} cellSpacing={0}>
      <tr>
        <td
          width="80"
          style={{ paddingRight: 12, color: "#6b6961", fontSize: 13 }}
        >
          {label}
        </td>
        <td style={{ fontSize: 15, color: "#1a1a18" }}>{value}</td>
      </tr>
    </table>
  </Section>
);

// Default export for `react-email dev` preview discovery.
ContactEmail.PreviewProps = {
  name: "Aïcha Konaté",
  email: "aicha@entreprise.ci",
  subjectLabel: "Mission freelance",
  message:
    "Bonjour Jean-Marc,\n\nJ'ai vu ton portfolio et j'aimerais discuter d'une mission Next.js de 3 mois sur notre nouveau produit B2B. Disponibilité à partir du mois prochain.\n\nMerci de me recontacter si c'est ouvert de ton côté.",
} satisfies ContactEmailProps;

export default ContactEmail;
