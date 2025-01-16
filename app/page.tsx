import Images from "../public/components/imges";
import "../public/css/global.css";
import styles from "../public/css/main.module.css";

export default function Tomato() {
  return (
    <div>
      <h1 className={styles.title}>ArtGallery</h1>
      <Images />
    </div>
  );
}
