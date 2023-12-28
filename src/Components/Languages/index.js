
const Languages = (props) => {
  console.log(props, props.children);
  const  {children}  = props;
  return (
    <h1>{children} very usefull</h1>
  )
}

export default Languages;
