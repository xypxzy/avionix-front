import { Check } from 'lucide-react'
import { StepProps } from './RegisterForm'

interface RegisterFormStepProps {
	currentStep: number
	steps: StepProps[]
}

export function RegisterFormStep({
	currentStep,
	steps,
}: RegisterFormStepProps) {
	return (
		<nav>
			<ul className='flex justify-between'>
				{steps.map((step, index) => (
					<li key={index} className=''>
						{currentStep > index ? (
							<div className='flex size-16 items-center justify-center rounded-full bg-success'>
								<span className='text-lg text-primary-foreground'>
									<Check />
								</span>
							</div>
						) : currentStep === index ? (
							<div
								className='flex size-16 items-center justify-center rounded-full bg-primary'
								aria-current='step'
							>
								<span className='text-lg text-primary-foreground'>
									{step.id}
								</span>
							</div>
						) : (
							<div className='flex size-16 items-center justify-center rounded-full bg-[#30313133]'>
								<span className='text-lg text-secondary'>{step.id}</span>
							</div>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}
