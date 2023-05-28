import Image from "next/image";

export default function Intro(){
    return(
        <>
            <div className="col-span-2 text-justify m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed">
                 <span className="text-3xl flex-wrap">
                  Things I cannnot express on my CV...
                 </span>
                <p className="col-span-1 p-2 text-lg glassmorphic-container">
                    First and foremost, I am a tech enthusiast, I love technology, I love tweaking/customizing, creating, I love advancements 
                    in technology. I love when hardware makes small leaps and bounds, I love when software improves, from rugged, unusable
                    messes that were car infotainment systems to the smooth ones we have now. 
                    <br />
                    
                    I love technology across a large spectrum <span className="scale-125 text-black font-bold">
                    [linux, gaming, hardware, web applications, programming [ PHP, Laravel, Javascript, HTML, CSS, React, Next.js, Tailwind, MySQL ], 
                    android, ios, cloud, database, containerization, orchestration, automation, scripting, version control, A.I, Robotics, IoT]
                    </span>
                     so I am still learning and finding my footing, but I also mention technologies I frequently play around with!
                </p>
                <br />

                <p className="col-span-1 p-2 text-lg glassmorphic-container">
                    I am a Linux System Administrator by heart, managing complex hosting infrastructure; I love and enjoy learning about Linux, the 
                    stress of system administration is much more bearable. I am growing, even as you read this. <br />
                    I am a web developer by need, I need money, mostly self taught but I have built some interesting projects over the years like this one,
                    some big, some small... But I am a pretty competent developer.
                </p>
				<br />
                <p className="col-span-1 p-2 text-lg glassmorphic-container">
                    I am an AWS Cloud specialist by passion, we all need something to impress two out of five people in the room and my chosen
                    passion is Cloud technology, AWS cloud to be specific, a never ending learning journey I have come to love and specialize in.
                    <br />
                    I am a teacher by blood, both parents are teachers, my mother teaches nursery school kids, my father teaches primary school kids, 
                    not that they wanted me to be one but I do love what they do so much i just started teaching about... drum roll ... technology!
                </p>
            </div>

            <div className="col-start-4">
            <div className="bg-sakura rounded-xl scale-90 bg-opacity-50">
                <div className="bg-sakura-light rounded-xl -rotate-6 bg-opacity-50">
                    <Image className="transition duration-100 rounded-xl shadow-inner scale-90 origin-center -rotate-12 hover:rotate-45 hover:origin-top "
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
            </div>
            

        </>
    )
}