/**
 * Button Component
 * A reusable button component that accepts children as its content and forwards all other props to the underlying button element.
 * It applies default styling for responsiveness and transitions.
 */
const Button = ({ children, ...props }) => (
    <button
        role="button" // Semantic role for accessibility
        {...props} // Spreads any additional props (e.g., onClick, type) onto the button element
        className={`${props.className || ""} w-full sm:w-auto px-4 py-2 rounded-lg duration-150`} // Combines custom className with default Tailwind classes for responsiveness and styling
    >
        {children} {/* Renders the content passed inside the Button component */}
    </button>
);

export default Button;