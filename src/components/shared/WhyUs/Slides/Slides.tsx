import ISlidesProps from '@/src/shared/types/discovery'
import React from 'react'

const styles = [
	'left-[15%] sm:left-[17%] md:left-[30%] top-[22%] max-w-[200px] sm:max-w-[240px] md:max-w-[320px] lg:max-w-[400px] text-black',
	'left-[1%] sm:left-[4%] md:left-[8%] top-[18%] max-w-[200px] sm:max-w-[240px] md:max-w-[320px] lg:max-w-[400px] text-black',
	'right-[4%] sm:right-[5%] md:right-[6%] top-[12%] max-w-[200px] sm:max-w-[240px] md:max-w-[320px] lg:max-w-[400px] text-white',
]
const Slides: React.FC<ISlidesProps> = ({ index, data }) => {
	return (
		<div className='w-full shrink-0 grow-0 basis-full pl-0 sm:pl-10'>
			<div
				className={`relative size-full max-h-[715px] max-w-[1374px] rounded-full`}
			>
				<img
					src={data.logoUrl}
					className={`size-full rounded-2xl object-cover object-center`}
					alt={data.id}
				/>
				<div
					className={`container absolute ${index === 0 && styles[0]} ${index === 1 && styles[1]} ${index === 2 && styles[2]}`}
				>
					<h5
						className={`text-center text-[12px] font-[600] sm:text-[18px] md:text-[24px] lg:text-[32px]`}
					>
						{data.title}
					</h5>
					<p
						className={`text-center text-[6px] font-[500] sm:text-[9px] md:text-[12px] lg:text-[15px]`}
					>
						{data.description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default React.memo(Slides)
