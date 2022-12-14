import classNames from "classnames"

const Input = (props) => {
  const { className, ...otherProps } = props

  return <input {...otherProps} className={classNames(className)} />
}

export default Input