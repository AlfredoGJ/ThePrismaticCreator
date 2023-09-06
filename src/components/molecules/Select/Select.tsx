import { ReactNode } from "react";
import Item from "../../atoms/Item/Item";

interface SelectProps extends React.SelectHTMLAttributes<String> {
}

export default function Select({ children }: SelectProps) {

    return <div>
        <select className="p-2 rounded border border-purple-400">
            {children}
        </select>
    </div>
}