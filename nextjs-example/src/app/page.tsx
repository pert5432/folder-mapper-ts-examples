import Image from "next/image";
import styles from "./page.module.css";
import { MAP } from "./public-map";

export default function Home() {
  return (
    <main className={styles.main}>
      <span>
        Corporate wants you to find the difference between these 2 pictures:
      </span>
      <div className={styles.container}>
        <Image
          src={MAP.images["bus_1.gif"]}
          alt={"bus"}
          width={300}
          height={300}
        />
        <Image
          src={MAP.images["bus_2.gif"]}
          alt={"bus"}
          width={300}
          height={300}
        />
      </div>

      <details>
        <summary></summary> They are the same picture
      </details>
    </main>
  );
}
