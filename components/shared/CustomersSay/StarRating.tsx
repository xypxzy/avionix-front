import { StyleRegistry } from 'styled-jsx'
import styles from './StarRatingStyle.module.scss'
import { Star } from 'lucide-react'
interface StarRatingProps {
  rating: number
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star
      className={index < rating ? styles.rating__gold : styles.rating__contour}
    />
  ))

  return <div className={styles.rating}>{stars}</div>
}

export default StarRating
