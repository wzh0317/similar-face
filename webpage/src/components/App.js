import React from "react";
import styles from "./App.module.css";
import { Container, Header, Divider } from "semantic-ui-react";
import PictureUpload from "./PictureUpload";
import Result from "./Result";

function App() {
  return (
    <Container>
      <Header size="large">
        <div className={styles.title}>SimFace</div>
      </Header>
      <Divider />
      <div className={styles.container}>
        <PictureUpload />
        <Result />
      </div>
    </Container>
  );
}

export default App;
