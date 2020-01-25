import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Highlight from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Heading, Paragraph, Box, Text } from "grommet";
import Layout from "../components/Layout";

const codeSample = `(async function() {
  const user = await signup.cash.authorize();
  // requesting your user to follow p0oker in memo
  await user.memoProtocol.follow('p0oker');
  
  // requesting your user to pay
  await user.pay(0.005, 'BCH');
})();`;

export default function({ data }) {
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
          What is SIGNUP?
        </Heading>
        <Paragraph fill margin="small" size="large">
          Signup is a library for web developers to request Bitcoin Cash
          transactions from their users. They can ask users to pay for a service
          or perform social interactions on top of Memo protocol{" "}
          <Text color="accent-3" size="large">
            without keeping the custody
          </Text>{" "}
          of their users private key or asking them to scan QR codes with their
          phone wallet. See it like a non-custodial alternative to Facebook
          Login buttons!
        </Paragraph>
        <Paragraph fill margin="small" size="large">
          Signup will provide a very high-level and easy to understand API for
          developers to enhance special functions like communicating with Memo
          protocol without understanding the caveats of OP_RETURN script.
        </Paragraph>
        <Heading level="3" margin="small">
          How it works?
        </Heading>
        <Paragraph fill margin="small" size="large">
          Developers register in Signup and receive a two line script that will
          BCH-enable their website. Meaning that they can simply request users
          for any kind of transaction and users will confirm the request with a
          click. Developers under no condition have the ability to make the
          users perform unwanted transaction or find out about their private or
          even public key.
        </Paragraph>
        <Heading level="3" margin="small">
          Show me the code!
        </Heading>
        <Paragraph fill margin="small" size="large">
          As an example with this code you can authenticate the user (if they
          are already not) and request them to pay 1000 satoshi and then follow
          my username in memo!
        </Paragraph>
        <Box width="580px" alignSelf="center" direction="row-responsive">
          <Highlight language="javascript" style={atomOneDark}>
            {codeSample}
          </Highlight>
        </Box>

        <Heading level="3" margin="small">
          Is it ready to be used?
        </Heading>
        <Paragraph fill margin="small" size="large">
          Not yet but soon will be. If you are interested to get involved with
          the development{" "}
          <a href={data.site.siteMetadata.telegramLink}>
            join the Telegram group
          </a>{" "}
          and say hi!
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
