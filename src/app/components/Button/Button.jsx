const Button = ({ children, className = '',type,handleClick, ...props }) => {
    const defaultColor = 'bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-2xl shadow-md transition duration-300 w-[150px]';
  
    return (
      <button
        className={className ? className : defaultColor}
        type={type}
        {...props}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  