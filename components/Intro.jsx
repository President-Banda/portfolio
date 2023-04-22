import Image from "next/image";

export default function Intro(){
    return(
        <>
            <div className="col-span-2 text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed">
                <p className="p-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan lorem placerat vulputate 
                lorem aliquet magna cubilia auctor non. Nisl etiam blandit euismod curabitur praesent lacus 
                eu iaculis purus. Eros volutpat molestie orci conubia pretium convallis nisl blandit sapien. 
                Amet metus risus vivamus varius euismod feugiat eu penatibus semper. Iaculis sem litora 
                condimentum amet per vehicula hendrerit massa platea. Nam et himenaeos varius nisi interdum 
                parturient mattis cum a. Cubilia eros vulputate luctus tellus condimentum aliquam ridiculus 
                penatibus sollicitudin. Magnis lectus interdum faucibus tempor facilisi mollis mauris velit 
                vestibulum. Leo turpis dui proin dui leo potenti consequat lorem tempor. Phasellus tincidunt 
                turpis dapibus sapien netus sit dapibus porttitor sagittis.
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