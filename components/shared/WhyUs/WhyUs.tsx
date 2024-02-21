'use client'
import React, { useEffect } from 'react'
import data from './WhyUs2.json'
import styles from './WhyUsStyles.module.scss'
import { useParams } from 'next/navigation'

const WhyUs: React.FC = () => {
  const params = useParams()

  return (
    <div className={styles.why_us}>
      <h2 className={styles.why_us__title}>Why Us</h2>
      <div className={styles.why_us__cards}>
        {data.map((el, index) =>
          el.content
            .filter((item) => params.locale === item.lan.toLowerCase())
            .map((filteredItem, itemIndex) => (
              <div className={styles.why_us__item} key={itemIndex}>
                <h4 className={styles.why_us__item__title}>
                  {filteredItem.title}
                </h4>
                <div className={styles.why_us__item__image}>
                  <img width="100%" src={filteredItem.img} alt="photo" />
                </div>
                <p className={styles.why_us__item__description}>
                  {filteredItem.description}
                </p>
              </div>
            ))
        )}
      </div>
    </div>
  )
}

export default WhyUs
