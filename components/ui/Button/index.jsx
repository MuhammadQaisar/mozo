const Button = ({ children, ...props }) => (
    <button
        role="button"
        {...props}
        className={`${props.className || ""} w-full sm:w-auto px-4 py-2 rounded-lg duration-150`}
    >
        {children}
    </button>
)
export default Button