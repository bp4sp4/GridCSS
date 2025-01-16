"use client";

import { useEffect } from "react";
import imagePaths from "../../jsondata/imagePaths.json";
import styles from "../css/image.module.css";

export default function Images() {
  useEffect(() => {
    const items: NodeListOf<HTMLDivElement> = document.querySelectorAll(
      `.${styles.grid__wrapper} > div`
    );

    const classes = [styles.wide, styles.big, styles.tall];

    items.forEach((item) => {
      const randomClass = classes[Math.floor(Math.random() * classes.length)];
      item.classList.add(randomClass);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  function downloadImage(imageUrl) {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageUrl.split("/").pop();
    link.click();
  }

  return (
    <div className={styles.grid__wrapper}>
      {imagePaths.images.map((image, index) => (
        <div key={index}>
          <img
            className={styles.img}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}${image.path}`}
            alt={`Image ${index}`}
          />

          <button
            className={styles.download_btn}
            onClick={() => downloadImage(image.path)}
          >
            Download
          </button>
        </div>
      ))}
    </div>
  );
}
