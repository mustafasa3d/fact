
interface FieldData {
    number: number;
    title: string[];
    description: string[];
}

export default function FieldCard({ data }: { data: FieldData }) {
    return (
        <div className="relative flex flex-col items-center justify-start p-6 rounded-lg">
            {/* Background Circle */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[188px] h-[188px] rounded-full bg-primary/10 z-0" />

            {/* Large Number */}
            <div className="text-[120px] lg:text-[126px] font-bold text-primary leading-none">
                {data.number}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-bold text-primary text-center mb-4 leading-snug">
                {data.title.map((line, index) => (
                    <span key={index}>
                        {line}
                        {index < data.title.length - 1 && <br />}
                    </span>
                ))}
            </h3>

            {/* Description List */}
            <div className="text-center max-w-[300px]">
                {data.description.map((line, index) => (
                    <p key={index} className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
}   