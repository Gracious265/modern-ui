import React from 'react'
import styles from '../style';
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col '>
      <h2 className={styles.heading2}>
        Lets try ours services now
      </h2>
      <p className={`${styles.flexCenter} ${styles.paragraph } max-w-[470px] m-5`}>Everything you need to accept card payments and grow your business anywhere on the planent</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>

    </section>
  )
}

export default CTA;