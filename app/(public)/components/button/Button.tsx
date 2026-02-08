

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'outline' | 'solid' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  onClick: () => void;
}

export default function Button({ children, variant = 'solid', size = 'md', onClick }: ButtonProps) {

  const variantClasses = {
    outline: "border border-gray-300 text-foreground dark:text-foreground",
    solid: "text-foreground dark:text-foreground hover:bg-blue-600",
    ghost: "text-foreground dark:text-foreground hover:bg-gray-100",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-2.5",
    icon: "p-2",
  };

  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];

  return (
    <button 
      onClick={onClick} 
      className={`${variantClass} ${sizeClass} rounded transition-colors cursor-pointer`}
    >
      {children}
    </button>
  );
}