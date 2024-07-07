const Button = ({style , children ,...rest}) => {
    return (
    <button  className={`${style} `} {...rest}>
      {children}
    </button>
    )
  }
  
  export default Button