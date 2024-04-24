import { cn } from '@/src/shared/utils/classnames'
import React from 'react'

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('animate-pulse rounded-md bg-slate-300', className)}
			{...props}
		/>
	)
}

export { Skeleton }
