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
      "dark-1": "#171941",
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
                SIGNUP
              </Text>
            </Link>
          </Box>
          <Box direction="row" align="center">
            <Menu
              a11yTitle="Getting Started Menu"
              label="Getting Started"
              size="small"
              dropAlign={{ top: "bottom", right: "right" }}
              dropBackground="accent-1"
              items={[
                {
                  label: "Documentation",
                  onClick: () => {
                    document.location = data.site.siteMetadata.docsLink;
                  },
                },
                {
                  label: "Telegram Channel",
                  onClick: () => {
                    document.location = data.site.siteMetadata.telegramLink;
                  },
                },
                {
                  label: "Github",
                  onClick: () => {
                    document.location = data.site.siteMetadata.githubLink;
                  },
                },
              ]}
            />
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
              {" "}
              code is being written by{" "}
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
