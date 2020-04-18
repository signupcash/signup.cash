import React, { Fragment } from "react";
import {
  Anchor,
  Heading,
  Header,
  Box,
  Text,
  Menu,
  Button,
  Icons,
} from "grommet";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

function App({ data }) {
  return (
    <Layout>
      <>
        <Helmet
          title={
            data.site.siteMetadata.title +
            " - " +
            data.site.siteMetadata.description
          }
        />
        <Box direction="row" margin={{ top: "150px", bottom: "20px" }}>
          <Text size="65px" weight="600">
            SIGN
          </Text>
          <Box
            animation={{
              type: "slideDown",
              delay: 200,
              duration: 600,
              size: "large",
            }}
            alignSelf="end"
          >
            <Text size="50px" margin="5px" weight="600">
              UP
            </Text>
          </Box>
        </Box>

        <Box animation="fadeIn" width="500px">
          <Text size="1.5rem" textAlign="center" weight="600">
            Non-custodial platform as a service for building{" "}
            <Text size="1.5rem" weight="600" color="status-error">
              decentralized apps
            </Text>{" "}
          </Text>
        </Box>

        <Box
          direction="row"
          margin={{ top: "50px", bottom: "150px" }}
          gap="20px"
        >
          <Link to="/learn_more">Learn More</Link>
          <Anchor
            label="Join Us In Telegram"
            href={data.site.siteMetadata.telegramLink}
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
        telegramLink
        docsLink
      }
    }
  }
`;
