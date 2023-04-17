import Image from 'next/image';
import Link from 'next/link';

export default function Logo({isResponsive, className} : {isResponsive: boolean, className?: string}) {
    const topLogo = isResponsive? 'hidden xl:block' : '';
    return(
        <Link href='/'>
        <Image
            className={`mt-1 ${topLogo} ${className}`}
            src="Logo.svg"
            alt="Coder in Austria"
            width={200}
            height={67} />
        </Link>
    );
}