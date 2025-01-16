import Images from "../components/imges";
import "../public/styles/global.css";
import styles from "../public/styles/main.module.css";

export default function Tomato() {
  return (
    <div>
      <h1 className={styles.title}>ArtGallery</h1>
      <Images />
    </div>
  );
}
