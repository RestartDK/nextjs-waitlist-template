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

interface WelcomeEmailProps {
  name: string | null | undefined;
}

export default function WelcomeEmail({ name }: WelcomeEmailProps) {
  return (
    <Html>
    <Head />
    <Preview>Thank you {name ? name : ""} for joining the waitlist!</Preview>
    <Body className="bg-white">
      <Container >
        <Heading>This is the future</Heading>
        <Text>
          You took a big step towards the future. We will keep updating you on the progress of our project.
        </Text>
      </Container>
    </Body>
  </Html>
  );
}