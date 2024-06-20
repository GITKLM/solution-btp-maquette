import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import LogoSansTitre from '@/components/LogoSansTitre';
import Link from 'next/link';
import { IoHomeOutline } from 'react-icons/io5';

type SkeletonProps = {
    title: string;
    imageSrc: string;
    imageAlt: string;
    IconHref?: string;
    buttonText1?: string;
    buttonHref1?: string;
    buttonText2: string;
    buttonHref2: string;
    h31: string;
    h32: string;
    paragraph1: string;
    paragraph2: string;
    IconComponent?: React.ElementType;
};

const Skeleton: React.FC<SkeletonProps> = ({
    title,
    imageSrc,
    imageAlt,
    IconComponent,
    IconHref,
    buttonText1,
    buttonHref1,
    buttonText2,
    buttonHref2,
    h31,
    h32,
    paragraph1,
    paragraph2,
}) => {
    return (
        <Bounded className="relative">
            <h3 className="text-balance text-center mb-20 font-bold text-5xl">
                {title}
            </h3>
            <div className="grid mt-16 items-center rounded-xl border border-blue-50 bg-gradient-to-b from-[#76A042]/25 to-[#76A042]/35 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center mb-4">
                        <Link href="/" className="pointer max-w-6 text-lg">
                            <IoHomeOutline />
                        </Link>
                        <span className="text-[#76A042] font-semibold">/</span>
                        {IconComponent && IconHref && (
                            <Link href={IconHref} className="pointer max-w-6 text-lg">
                                <IconComponent />
                            </Link>
                        )}
                    </div>
                    <div className="w-fit rounded-lg bg-gray-500/10 p-4 text-xl lg:text-3xl">
                        <LogoSansTitre width={60} height={60} />
                    </div>
                    <div className="mt-6 text-2xl font-normal">
                        <p className='font-bold text-[#76A042]'>Notre expertise</p>
                    </div>
                    <div className="mt-4 max-w-x prose prose-invert">
                        <h3 className="font-bold text-md">{h31}</h3>
                        <p className="mb-2">{paragraph1}</p>
                        <h3 className="font-bold text-md">{h32}</h3>
                        <p>{paragraph2}</p>
                    </div>
                    <div className="text-center py-6">
                        <Link href="/contact">
                            <Button>Contactez-nous</Button>
                        </Link>
                    </div>
                </div>

                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 lg:translate-x-[15%] rounded-lg"
                    width={690}
                    height={500}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6 mt-4">
                {buttonText1 && buttonHref1 && (
                    <Link href={buttonHref1}>
                        <Button className='bg-[#76A042] hover:bg-[#76A042] hover:bg-opacity-90 text-[#10263E]'>{buttonText1}</Button>
                    </Link>
                )}
                <Link href={buttonHref2}>
                    <Button className='bg-[#76A042] hover:bg-[#76A042] hover:bg-opacity-90 text-[#10263E]'>{buttonText2}</Button>
                </Link>
            </div>
        </Bounded>
    );
};

export default Skeleton;
