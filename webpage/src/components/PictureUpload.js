import React from "react";
import styles from "./PictureUpload.module.css";
import { Icon } from "semantic-ui-react";

function PictureUpload() {
  return (
    <div
      className={styles.container}
      onClick={() => {
        console.log("Click!");
      }}
    >
      <div className={styles.item}>
        <Icon name="upload" />
      </div>
      <div className={styles.item}>Upload a picture</div>
    </div>
  );
}

export default PictureUpload;
