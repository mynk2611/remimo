"use client"
export const Select = ({ options, onSelect }: {
    onSelect: (value: string) => void;
    options: {
        key: string;
        value: string;
    }[];
}) => {
    return (
        <div className="p-5 pt-2">
            <select onChange={(e) => {
            onSelect(e.target.value)
        }} style={{ backgroundColor: "#27272A" }} className="text-zinc-400 text-sm rounded-lg focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600 block w-full p-2.5">
            {options.map(option => <option value={option.key}>{option.value}</option>)}
        </select>
        </div>
    )
}