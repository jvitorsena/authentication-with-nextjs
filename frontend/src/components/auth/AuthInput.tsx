interface AuthInputProps {
    label: string
    value: any
    type?: 'text' | 'password'
    changeValue: (newValue: any) => void
    placeholder?: any
    disabled: boolean
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div>
            <div className="flex items-center mt-4 ">
                <label className="pr-3 text-gray-700">{props.label}</label>
                <input
                    type={props.type}
                    value={props.value}
                    onChange={e => props.changeValue?.(e.target.value)}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    className={`
                        px-4 py-1 rounded-lg bg-gray-200 mt-2
                        border focus:border-blue-500 focus:bg-white
                        focus:outline-none
                        shadow-lg
                    `}
                />
            </div>
        </div>
    )
}