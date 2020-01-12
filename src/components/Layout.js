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
  Icons
} from "grommet";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.css";

const theme = {
  global: {
    colors: {
      "dark-1": "#171941",
      brand: "#1d8cf8",
      "accent-1": "#eee"
    }
  },
  text: {
    extend: "font-family: 'Poppins', sans-serif",
    small: {
      size: "17px"
    }
  }
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
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
          ["main", "main"]
        ]}
      >
        <Header
          gridArea="header"
          background="dark-1"
          pad={{ right: "120px", left: "120px" }}
        >
          <Box direction="row" align="center">
            <Text weight="600" size="17px">
              SIGNUP
            </Text>
            <Text margin="5px">-</Text>
            <Text size="15px">A Bitcoin Cash Open Source Project</Text>
          </Box>
          <Box direction="row" align="center">
            <Menu
              a11yTitle="Getting Started Menu"
              label="Getting Started"
              size="medium"
              dropAlign={{ top: "bottom", right: "right" }}
              dropBackground="accent-1"
              items={[
                {
                  label: "Documentation",
                  onClick: () => {
                    document.location = linkToDocs;
                  }
                },
                { label: "Discord Channel", onClick: () => {} }
              ]}
            />
          </Box>
        </Header>

        <Box align="center" gridArea="main" background="dark-1">
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, made for freedome by ${data.author}
          </footer>
        </Box>
      </Grid>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
