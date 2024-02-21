import { Star } from 'lucide-react'
interface StarRatingProps {
  rating: number
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star className={index < rating ? 'text-yellow-500' : 'text-white-500'} />
  ))

  return <div className="text-xl flex gap-2">{stars}</div>
}

export default StarRating
