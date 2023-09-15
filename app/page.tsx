import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Tetera Web&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>

      </div>
      <div>
        <ul>
          <li>Primer Contrato</li>
          <li>Segundo Contrato</li>
          <li>Tercer Contrato</li>
        </ul>
      </div>
    </main>
  )
}
