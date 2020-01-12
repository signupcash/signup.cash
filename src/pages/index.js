import React, { Fragment } from "react";
import {
  Anchor,
  Heading,
  Header,
  Box,
  Text,
  Menu,
  Button,
  Icons
} from "grommet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

function App({ data }) {
  return (
    <Layout>
      <>
        <Box direction="row" margin={{ top: "150px", bottom: "20px" }}>
          <Text size="70px" weight="600">
            SIGN
          </Text>
          <Box
            animation={{
              type: "slideDown",
              delay: 200,
              duration: 600,
              size: "xlarge"
            }}
            alignSelf="end"
          >
            <Text size="50px" margin="5px" weight="600">
              UP
            </Text>
          </Box>
        </Box>

        <Box animation="fadeIn" width="500px">
          <Text size="1.4rem" textAlign="center" weight="600">
            Non-custodial web-based{" "}
            <Text size="1.4rem" weight="600" color="status-error">
              key signer
            </Text>{" "}
            and social interactions with BCH
          </Text>
        </Box>

        <Box direction="row" margin={{ top: "50px" }} gap="20px">
          <Anchor primary color="brand" label="Learn More" onClick={() => {}} />
          <Anchor
            label="Join Us In Discord"
            href={data.site.siteMetadata.discordLink}
          />
        </Box>
      </>
    </Layout>
  );
}

export default App;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        discordLink
        docsLink
      }
    }
  }
`;
