import { text } from "stream/consumers";

interface textboxProps extends React.InputHTMLAttributes<String> {

}

export default function Textbox({ placeholder }: textboxProps) {

    return <input type="text" className="rounded p-2 margin border border-purple-400" placeholder={placeholder}>
    </input>

}