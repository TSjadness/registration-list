import { cn } from '@/utils/cn'
import { VariantProps, cva } from 'class-variance-authority'
import { ReactNode } from 'react'


const textStyles = cva('', {
	variants: {
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			base: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
		},
		weight: {
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},
	},
})

type TextStyleProps = VariantProps<typeof textStyles>

export interface TextProps extends TextStyleProps {
	children: ReactNode
	className?: string
	as?: 'p' | 'span'
}

export function Text({
	children,
	className,
	size = 'base',
	weight = 'normal',
	as: Element = 'p',
}: TextProps) {
	return (
		<Element className={cn(textStyles({ size, weight }), className)}>
			{children}
		</Element>
	)
}
