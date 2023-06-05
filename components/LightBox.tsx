'use client'
import Image from 'next/image';

interface LightHouseProps {
    src: string;
    alt?: string;
}
const LightHouse: React.FC<LightHouseProps> = ({ src, alt }) => {

    return (
        <div className="relative item-detail">
            <Image
                fill
                src={src ? src : '/next.svg'}
                alt={alt ? alt : 'image'}
                
                className="w-full object-cover"
            />
        </div>
    )
}

export default LightHouse;