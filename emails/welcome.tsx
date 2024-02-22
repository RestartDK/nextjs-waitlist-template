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
    <Preview>Thank you for joining the waitlist!</Preview>
    <Body className="bg-white">
      <Container >
        <Heading>Login to the next big thing</Heading>
        <Link
          href={url}
          target="_blank"
        >
          Click here to log in with this magic link
        </Link>
        <Text
        >
          If you didn&apos;t try to login, you can safely ignore this email.
        </Text>
        <Img
          src={`${host}/public/vercel.svg`}
          width="32"
          height="32"
        />
        <Text>
          <Link
            href={host}
            target="_blank"
          >
            Company name
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
  );
}