import Images from "../public/components/imges";
import "../app/styles/global.css";
import styles from "../app/styles/main.module.css";

export default function Tomato() {
  return (
    <div>
      <h1 className={styles.title}>ArtGallery</h1>
      <Images />
    </div>
  );
}
