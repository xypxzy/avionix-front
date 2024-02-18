import React from 'react'
import jsonData from './WhyUs.json'
import styles from './WhyUsStyles.module.scss'

const WhyUs: React.FC = () => {
  return (
    <div className={styles.us}>
      <h2>Why Us</h2>
      <div className={styles.us__cards}>
        {jsonData.map((item, index) => (
          <div className={styles.us__cards__card} key={index}>
            <h4 className={styles.us__cards__card__title}>{item.title}</h4>
            <div className={styles.us__cards__card__img}>
              <img src={item.img} alt="photo" />
            </div>
            <p className={styles.us__cards__card__description}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyUs
