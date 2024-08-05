import { cn } from '@/utils/cn'
import { HTMLProps, LabelHTMLAttributes } from 'react'


function FormControlRoot({ className, ...props }: HTMLProps<HTMLDivElement>) {
	return (
		<div className={cn('flex w-full flex-col gap-2', className)} {...props} />
	)
}

FormControlRoot.displayName = 'FormControl.Root'


function FormControlLabel({
	className,
	...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
	return (
		<label className={cn('font-medium text-gray-500', className)} {...props} />
	)
}

FormControlLabel.displayName = 'FormControl.Label'

/* -------------------------------------------------------------------------- */

function FormControlDescription({
	className,
	...props
}: HTMLProps<HTMLSpanElement>) {
	return (
		<span
			className={cn('text-sm text-gray-500', className)}
			{...props}
			role="complementary"
		/>
	)
}

FormControlDescription.displayName = 'FormControl.Description'

/* -------------------------------------------------------------------------- */

function FormControlError({ className, ...props }: HTMLProps<HTMLSpanElement>) {
	return (
		<span
			className={cn('text-sm text-red-500', className)}
			{...props}
			role="alert"
		/>
	)
}

FormControlDescription.displayName = 'FormControl.Description'

/* -------------------------------------------------------------------------- */

export const FormControl = {
	Description: FormControlDescription,
	Error: FormControlError,
	Label: FormControlLabel,
	Root: FormControlRoot,
}
