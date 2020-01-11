import React from "react";
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

const linkToDocs =
  "https://www.notion.so/p0oker/SIGNup-Documentation-88024f39e70041e2a5aa33d2da565ddf";

const linkToDiscord = "https://discord.gg/SC2GDx";

function App() {
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
            <Anchor
              primary
              color="brand"
              label="Learn More"
              onClick={() => {}}
            />
            <Anchor label="Join Us In Discord" href={linkToDiscord} />
          </Box>
        </Box>
      </Grid>
    </Grommet>
  );
}

export default App;
