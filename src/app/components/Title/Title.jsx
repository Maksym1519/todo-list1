
const Title = ({ as = 'h1', children, className = '', ...props }) => {
    const Tag = as;
    
    return (
      <Tag
        className={`text-center font-bold text-4xl text-black mb-8 dark:text-white`}
        {...props}
      >
        {children}
      </Tag>
    );
  };
 
 
  export default Title;