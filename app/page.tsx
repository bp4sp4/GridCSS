import Images from "../public/components/imges";
import "./global.css";
import styles from "./main.module.css";

export default function Tomato() {
  return (
    <div>
      <h1 className={styles.title}>ArtGallery</h1>
      <Images />
    </div>
  );
}
