import Image from "next/image";

export default function Intro(){
    return(
        <>
            <div className="col-span-2 text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed">
                <p className="p-2">
				Albert Banda is...
				
                First and foremost, I am a tech enthusiast, I love technology, I love tweaking, creating, I love advancements 
                in technology. I love when hardware makes small leaps and bounds, I love when software improves, from rugged, unusable
                messes that were car infotainment systems to the smooth ones we have now. I love technology across a large spectrum 
                [linux, gaming, hardware, web applications, programming [ PHP, Laravel, Javascript, HTML, CSS, React, Next.js, Tailwind, MySQL ], 
                android, ios, cloud, database, containerization] so I am still learning and finding my footing, but I also mention technologies
                I frequently play around with.
                <br />
                I
                </p>
            </div>

            <div className="bg-sakura rounded-xl scale-90 row-span-1 h-auto bg-opacity-50">
                <div className="bg-sakura-light rounded-xl -rotate-6 bg-opacity-50">
                    <Image className="transition duration-100 rounded-xl shadow-inner saturate-150 scale-90 origin-center -rotate-12 hover:rotate-45 hover:origin-top "
                        src={"/images/albert_banda_image.jpg"}
                        alt="my_intro_image"
                        width={500}
                        height={500}
                        loading="lazy"

                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
                </div>
            </div>

        </>
    )
}