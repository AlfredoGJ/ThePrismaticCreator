interface optionProps extends React.OptionHTMLAttributes<String> {

}

export default function Item({ disabled, label, selected, value }: optionProps) {

    return <option className="flex">
        {label}
    </option>
}