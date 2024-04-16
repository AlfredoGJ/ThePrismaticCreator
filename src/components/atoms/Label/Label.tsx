
interface LabelProps {
    text:string
}

export default function Label   ({text}:LabelProps) {

    return <small className="text-small" >
        {text}
    </small>
}