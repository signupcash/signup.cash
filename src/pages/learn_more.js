import React from "react";
import { Heading, Paragraph, Box } from "grommet";
import Layout from "../components/Layout";

export default function() {
  return (
    <Layout>
      <Box margin={{ horizontal: "150px" }} animation="fadeIn">
        <Heading level="3" margin="small">
          Intro
        </Heading>
        <Paragraph fill margin="small" size="large">
          SIGNUP is a web based solution for any web developer to start
          performing transactions on top of Bitcoin Cash with a few lines of
          code. See it like a non-custodial alternative to Facebook Login
          buttons!
        </Paragraph>
        <Paragraph fill margin="small" size="large">
          Developers don't need to deal with the custody of users private key or
          require their users to install an extension on their browsers. SIGNUP
          will provide a very high-level and easy to understand API for
          developers to enhance special capabilities like communicating with
          MEMO protocol without understanding the caveats of OP_RETURN script.
        </Paragraph>
      </Box>
    </Layout>
  );
}
