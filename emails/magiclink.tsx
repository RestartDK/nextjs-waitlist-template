import * as React from "react";

import {
  Body,
  Html,
  Link,
  Container,
  Head,
  Heading,
  Text,
  Preview,
  Img
} from "@react-email/components";

interface MagicLinkEmailProps {
  host: string;
  url: string;
}

export default function MagicLinkEmail({ host, url }: MagicLinkEmailProps) {
  return (
    <Html>
    <Head />
    <Preview>Join the waitlist with this magic link</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Login to the next big thing</Heading>
        <Link
          href={url}
          target="_blank"
          style={{
            ...link,
            display: "block",
            marginBottom: "16px",
          }}
        >
          Click here to log in with this magic link
        </Link>
        <Text
          style={{
            ...text,
            color: "#ababab",
            marginTop: "14px",
            marginBottom: "16px",
          }}
        >
          If you didn&apos;t try to login, you can safely ignore this email.
        </Text>
        <Img
          src={`${host}/public/building.png`}
          width="32"
          height="32"
          alt="Company name logo"
        />
        <Text style={footer}>
          <Link
            href={host}
            target="_blank"
            style={{ ...link, color: "#898989" }}
          >
            Company name
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
