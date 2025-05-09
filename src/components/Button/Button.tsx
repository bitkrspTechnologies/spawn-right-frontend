// import React from 'react';

// interface ButtonProps {
//   text?: string;
//   onClick?: () => void;
//   className?: string;
//   type?: 'button' | 'submit' | 'reset';
//   icon?: React.ReactNode;
//   fullWidth?: boolean;
//   selected?: boolean;

// }

// const Button: React.FC<ButtonProps> = ({
//   text,
//   onClick,
//   className = '',
//   type = 'button',
//   icon,
//   fullWidth = false
// }) => {
//   const hasIconAndText = icon && text;
//   const paddingClass = hasIconAndText ? 'py-0' : 'py-2';

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`flex items-center justify-center gap-1
//         px-6 ${paddingClass} font-medium rounded-sm tracking-widest uppercase text-white
//         bg-[radial-gradient(ellipse_at_center,_#56319F_0%,_#171233_70%,_#0a0615_100%)]
//         border-2 border-[#423769]
//         shadow-[0_0_12px_rgba(122,102,196,0.4)]
//         hover:shadow-[0_0_16px_rgba(122,102,196,0.7)]
//         transition-all duration-300
//         ${fullWidth ? 'w-full' : ''}
//         ${className}`}
//     >
//       {icon && (
//         <div className="mt-1.5 flex items-center justify-center">
//           {icon}
//         </div>
//       )}

//       {text && (
//         <span className={hasIconAndText ? 'text-xl leading-none' : 'text-xs'}>
//           {text}
//         </span>
//       )}
//     </button>
//   );
// };

// export default Button;

import React from "react";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  fullWidth?: boolean;
  selected?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  type = "button",
  icon,
  fullWidth = false,
  selected = false,
}) => {
  const hasIconAndText = icon && text;
  const paddingClass = hasIconAndText ? "py-0" : "py-2";

  const selectedBorder = selected
    ? "border-[2px] border-white shadow-[inset_0_0_10px_rgba(255,255,255,0.3),_0_0_20px_rgba(255,255,255,0.6)]"
    : "border-2 border-[#423769] shadow-[0_0_12px_rgba(122,102,196,0.4)]";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative flex items-center justify-center gap-1
    px-6 ${paddingClass} font-medium rounded-sm tracking-widest uppercase text-white
    bg-[radial-gradient(ellipse_at_center,_#56319F_0%,_#171233_70%,_#0a0615_100%)]
    border-2
    ${
      selected
        ? "border-white shadow-[inset_0_0_10px_rgba(255,255,255,0.1),_0_0_20px_rgba(255,255,255,0.3)] rounded-lg"
        : "border-[#423769] shadow-[0_0_12px_rgba(122,102,196,0.4)]"
    }
    hover:shadow-[0_0_16px_rgba(122,102,196,0.7)]
    transition-all duration-300
    ${fullWidth ? "w-full" : ""}
    ${className}`}
    >
      {/* Bump Element - Only visible if selected */}
      {selected && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-38 h-2 bg-gradient-to-b from-white/100 to-transparent rounded-b-md blur-sm pointer-events-none"></span>
      )}

      {icon && (
        <div className="mt-1.5 flex items-center justify-center">{icon}</div>
      )}

      {text && (
        <span className={hasIconAndText ? "text-xl leading-none" : "text-xs"}>
          {text}
        </span>
      )}
    </button>
  );
};

export default Button;
