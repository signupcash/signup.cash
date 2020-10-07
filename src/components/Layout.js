import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Anchor,
  Heading,
  Header,
  Box,
  Text,
  Grommet,
  Menu,
  Button,
  Icons,
  Footer,
} from "grommet";
import { useStaticQuery, graphql, Link } from "gatsby";

import "./layout.css";

const theme = {
  global: {
    colors: {
      "dark-1": "#6c59db",
      brand: "#1d8cf8",
      "accent-1": "#eee",
    },
  },
  text: {
    extend: "font-family: 'Poppins', sans-serif; line-height: 1.4em",
    small: {
      size: "17px",
    },
  },
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          telegramLink
          githubLink
          docsLink
        }
      }
    }
  `);

  return (
    <Grommet theme={theme}>
      <Grid
        rows={["80px"]}
        alignContent="center"
        areas={[
          ["header", "header"],
          ["main", "main"],
          ["footer", "footer"],
        ]}
      >
        <Header
          gridArea="header"
          background="dark-1"
          pad={{ right: "10vw", left: "10vw" }}
        >
          <Box direction="row" align="center">
            <Link to="/">
              <Text weight="600" size="17px">
                Home
              </Text>
            </Link>
            <Link to="https://docs.signup.cash" style={{ marginLeft: 32 }}>
              <Text weight="600" size="17px">
                Docs
              </Text>
            </Link>
            <Link
              to={data.site.siteMetadata.githubLink}
              style={{ marginLeft: 32 }}
            >
              <Text weight="600" size="17px">
                Github
              </Text>
            </Link>
            <Link
              to={data.site.siteMetadata.telegramLink}
              style={{ marginLeft: 32 }}
            >
              <Text weight="600" size="17px">
                Telegram
              </Text>
            </Link>
          </Box>
        </Header>

        <Box
          align="center"
          gridArea="main"
          background="dark-1"
          pad={{ right: "10vw", left: "10vw" }}
        >
          {children}

          <Footer gridArea="footer" alignSelf="end" margin={{ bottom: "30px" }}>
            <Text color="light-3" weight="700" size="15px">
              Made in 2020 by{" "}
              <a href={`https://twitter.com/${data.site.siteMetadata.author}`}>
                {data.site.siteMetadata.author}
              </a>
            </Text>
          </Footer>
        </Box>
      </Grid>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
