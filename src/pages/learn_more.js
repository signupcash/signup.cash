import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Highlight from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Heading, Paragraph, Box, Text } from "grommet";
import Layout from "../components/Layout";

const codeSample = `(async function() {
  const user = await signup.cash.authorize();
  // requesting your user to pay
  await user.pay(1000, 'SAT');
  // requesting your user to follow p0oker in memo
  await user.memoProtocol.follow('p0oker');
})();`;

export default function ({ data }) {
  return (
    <Layout>
      <Helmet
        title={data.site.siteMetadata.title + " - " + "Learn More About SIGNUP"}
      />
      <Box
        margin={{ horizontal: "150px", top: "150px", bottom: "100px" }}
        animation="fadeIn"
      >
        <Heading level="3" margin="small">
          What is Signup?
        </Heading>
        <Paragraph fill margin="small" size="large">
          Signup is a non-custodial platform as a service for developers to
          build BCH decentralized apps. Developers can use this platform to
          onboard users without any need to keep the custody of their private
          keys. Providing a safer and more reliable environment to build Bitcoin
          Cash apps for the web. <br />
          The core elements of the Signup consist of:
        </Paragraph>
        <Paragraph fill margin="small" size="large">
          <Text color="accent-3" size="large">
            DApp Wallet:
          </Text>{" "}
          A non-custodial fully functional and programmable wallet on users
          browser to work like a secure gateway, allowing users to login,
          perform transactions and provide signatures to the applications.
        </Paragraph>
        <Paragraph fill margin="small" size="large">
          <Text color="accent-3" size="large">
            Libraries:
          </Text>{" "}
          Utility functions and easy to use API for developers to request users
          for different type of transactions or signatures without exposing the
          technical side of building a transaction on the blockchain.
        </Paragraph>
        <Paragraph fill margin="small" size="large">
          <Text color="accent-3" size="large">
            Provider:{" "}
          </Text>
          A script that can be inserted in the html of the applications or be
          imported by modern JavaScript environments to connect applications to
          Signup wallet.{" "}
        </Paragraph>
        <Paragraph fill margin="small" size="large">
          Signup will provide a very high-level and easy to understand API for
          developers to enhance special functions like signign transactions,
          requesting/verifying signatures and giving authorized access to users
          using their Bitcoin Cash address.
        </Paragraph>

        <Heading level="3" margin="small">
          Where to start?
        </Heading>
        <Paragraph fill margin="small" size="large">
          You can start by going through our documentation page or join the
          Telegram group (both links are provided on top) to learn more about
          how to utilize Signup in your application.
        </Paragraph>
      </Box>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        telegramLink
      }
    }
  }
`;
