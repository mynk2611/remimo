"use client"

export const TextInput = ({
    placeholder,
    onChange,
    label
}: {
    placeholder: string;
    onChange: (value: string) => void;
    label: string;
}) => {
    return (
        <div className=" bg-black p-5 mt-5">
            <label className="block text-white mb-2 text-sm font-medium text-gray-900">First Name</label>
            <input
             style={{ backgroundColor: "#27272A" }}
             onChange={(e) => onChange(e.target.value)}
            type="text" id="first_name" className="text-white text-sm rounded-md  block w-full p-2.5 focus-visible:outline-none
            focus-visible:ring-[2px]  focus-visible:ring-neutral-600"
            placeholder={placeholder} />
        </div>
    )
}

