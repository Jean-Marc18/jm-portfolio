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

// Inlined on every block — Outlook strips most CSS but keeps inline font-family.
const FONT_STACK = 'Geist, "Helvetica Neue", Helvetica, Arial, sans-serif';

export const ContactEmail = ({
  name,
  email,
  subjectLabel,
  message,
}: ContactEmailProps) => {
  const previewText = `${subjectLabel} — ${name}`;
  const firstName = name.split(/\s+/)[0] || name;

  return (
    <Html lang="fr">
      <Head>
        <meta name="color-scheme" content="light only" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap');
              body, table, td, a, span, p, h1, h2, h3 {
                font-family: ${FONT_STACK};
              }
            `,
          }}
        />
      </Head>
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
              fontFamily: {
                sans: [
                  "Geist",
                  "Helvetica Neue",
                  "Helvetica",
                  "Arial",
                  "sans-serif",
                ],
              },
            },
          },
        }}
      >
        <Body
          className="bg-bg font-sans text-ink"
          style={{
            margin: 0,
            padding: "32px 16px",
            fontFamily: FONT_STACK,
          }}
        >
          <Container
            className="mx-auto max-w-xl overflow-hidden rounded-sm border border-line bg-bgAlt"
            style={{ fontFamily: FONT_STACK }}
          >
            <Section className="bg-ink px-10 py-8">
              <table
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <Text
                      className="m-0 text-[11px] uppercase text-[#9c988c]"
                      style={{
                        letterSpacing: "0.18em",
                        fontFamily: FONT_STACK,
                      }}
                    >
                      JMK — Portfolio
                    </Text>
                    <Heading
                      as="h1"
                      className="m-0 mt-2 text-[28px] font-medium leading-tight text-[#f4f1ea]"
                      style={{
                        letterSpacing: "-0.02em",
                        fontFamily: FONT_STACK,
                      }}
                    >
                      Nouveau message
                    </Heading>
                  </td>
                  <td
                    style={{
                      width: 56,
                      textAlign: "right",
                      verticalAlign: "middle",
                    }}
                  >
                    <BrandMark />
                  </td>
                </tr>
              </table>
            </Section>

            <Section className="px-10 pb-2 pt-9">
              <Text
                className="m-0 mb-4 text-[11px] uppercase text-muted"
                style={{
                  letterSpacing: "0.18em",
                  fontFamily: FONT_STACK,
                }}
              >
                Expéditeur
              </Text>
              <InfoRow label="Nom :" value={name} />
              <InfoRow
                label="Email :"
                value={
                  <Link
                    href={`mailto:${email}`}
                    className="text-ink underline"
                    style={{ fontFamily: FONT_STACK }}
                  >
                    {email}
                  </Link>
                }
              />
              <InfoRow
                label="Type :"
                value={
                  <span
                    style={{
                      display: "inline-block",
                      padding: "3px 10px",
                      borderRadius: 999,
                      backgroundColor: "#f7f5f0",
                      border: "1px solid #ddd8cc",
                      fontSize: 12,
                      color: "#1a1a18",
                      fontFamily: FONT_STACK,
                    }}
                  >
                    {subjectLabel}
                  </span>
                }
              />
            </Section>

            <Hr className="mx-10 my-6 border-line" />

            <Section className="px-10">
              <Text
                className="m-0 mb-3 text-[11px] uppercase text-muted"
                style={{
                  letterSpacing: "0.18em",
                  fontFamily: FONT_STACK,
                }}
              >
                Message
              </Text>
              <Section
                style={{
                  borderRadius: 4,
                  backgroundColor: "#f7f5f0",
                  borderLeft: "3px solid #ff5a1f",
                  padding: "18px 22px",
                }}
              >
                <Text
                  className="m-0 whitespace-pre-wrap text-[15px] leading-relaxed text-ink"
                  style={{ fontFamily: FONT_STACK }}
                >
                  {message}
                </Text>
              </Section>
            </Section>

            <Section className="px-10 py-10 text-center">
              <Link
                href={`mailto:${email}`}
                style={{
                  display: "inline-block",
                  backgroundColor: "#1a1a18",
                  color: "#f7f5f0",
                  padding: "13px 26px",
                  borderRadius: 999,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: FONT_STACK,
                }}
              >
                Répondre à {firstName} →
              </Link>
            </Section>

            <Section className="border-t border-line bg-bg px-10 py-6">
              <Text
                className="m-0 text-center text-[11px] text-muted"
                style={{ fontFamily: FONT_STACK }}
              >
                Envoyé depuis{" "}
                <Link
                  href="https://jmk-portfolio.vercel.app"
                  className="text-muted underline"
                  style={{ fontFamily: FONT_STACK }}
                >
                  jmk-portfolio.vercel.app
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const BrandMark = () => (
  <div
    role="img"
    aria-label="JMK"
    style={{
      display: "inline-block",
      width: 48,
      height: 48,
      color: "#ff5a1f",
      lineHeight: 0,
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="48"
      height="48"
      viewBox="200 235 365 265"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g
        transform="translate(0,768) scale(0.1,-0.1)"
        fill="currentColor"
        stroke="none"
      >
        <path d="M2627 3831 c-279 -554 -507 -1011 -507 -1015 0 -3 64 -6 143 -6 l143 0 502 1010 c276 555 502 1012 502 1015 0 3 -62 5 -138 5 l-138 0 -507 -1009z" />
        <path d="M3940 4378 l0 -463 200 200 200 200 0 262 0 263 -200 0 -200 0 0 -462z" />
        <path d="M4923 4638 c-110 -112 -377 -383 -592 -603 l-390 -400 -1 -412 0 -413 200 0 200 0 0 397 0 397 71 -69 c39 -39 213 -217 386 -397 l316 -328 275 0 275 0 -74 78 c-41 42 -262 272 -493 510 l-418 433 158 162 c400 407 809 829 812 838 2 5 -104 9 -260 9 l-264 0 -201 -202z" />
        <path d="M3362 4035 c-145 -74 -182 -259 -77 -382 54 -63 110 -86 200 -81 62 3 80 8 117 33 23 17 56 50 72 73 25 35 31 55 34 113 5 85 -13 141 -64 193 -49 51 -89 68 -164 73 -56 4 -73 1 -118 -22z" />
      </g>
    </svg>
  </div>
);

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <table
    width="100%"
    cellPadding={0}
    cellSpacing={0}
    style={{ marginBottom: 10, borderCollapse: "collapse" }}
  >
    <tr>
      <td
        style={{
          width: 80,
          paddingRight: 12,
          color: "#6b6961",
          fontSize: 13,
          verticalAlign: "top",
          fontFamily: FONT_STACK,
        }}
      >
        {label}
      </td>
      <td
        style={{
          fontSize: 15,
          color: "#1a1a18",
          fontFamily: FONT_STACK,
        }}
      >
        {value}
      </td>
    </tr>
  </table>
);

ContactEmail.PreviewProps = {
  name: "Aïcha Konaté",
  email: "aicha@entreprise.ci",
  subjectLabel: "Mission freelance",
  message:
    "Bonjour Jean-Marc,\n\nJ'ai vu ton portfolio et j'aimerais discuter d'une mission Next.js de 3 mois sur notre nouveau produit B2B. Disponibilité à partir du mois prochain.\n\nMerci de me recontacter si c'est ouvert de ton côté.",
} satisfies ContactEmailProps;

export default ContactEmail;
