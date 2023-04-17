import Image from 'next/image';

export default function Logo() {
    return(
        <Image 
            src="Logo.svg"
            alt="Coder in Austria"
            width={200}
            height={67} />
    );
}