import Images from "../components/imges";
import "../styles/global.css";
import styles from "../styles/main.module.css";

export default function Tomato() {
  return (
    <div>
      <h1 className={styles.title}>ArtGallery</h1>
      <Images />
    </div>
  );
}
