import { cn } from '@/shared/utils'
import React from 'react'

interface Props {
	className?: string
}

export const Wrapper: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	children,
}) => {
	return <div className={cn('m-[30px]', className)}>{children}</div>
}
