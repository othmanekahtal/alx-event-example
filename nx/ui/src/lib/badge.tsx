import clsx from 'clsx';
import { ReactNode } from 'react';
const variants = {
  active: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  pending: 'bg-orange-100 text-orange-600 border-orange-200',
  info: 'bg-blue-100 text-blue-600 border-blue-200',
};

interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  variant: keyof typeof variants;
  label: ReactNode;
}

function Badge({ variant, label, className, ...rest }: Readonly<BadgeProps>) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-x-1 rounded-full border px-1.5 py-1 text-xs font-medium',
        variants[variant] ?? 'bg-gray-100 text-gray-800',
        className,
      )}
      {...rest}
    >
      {label}
    </span>
  );
}

export { Badge, BadgeProps };