
interface iconProps extends React.SVGLineElementAttributes<String> {

}

export default function Icon({ children }:iconProps) {

    return <svg >
        {children}
    </svg>
}