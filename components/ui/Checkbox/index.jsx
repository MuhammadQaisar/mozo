/**
 * Checkbox Component
 * A reusable checkbox input component that forwards all props to the underlying input element.
 * It applies default styling for form checkboxes.
 */
const Checkbox = ({ ...props }) => (
    <input
        {...props} // Spreads any additional props (e.g., checked, onChange, name) onto the input element
        type="checkbox" // Specifies the input type as checkbox
        className={`${props.className || ""} form-checkbox duration-75 rounded`} // Combines custom className with default Tailwind classes for styling
    />
);

export default Checkbox;