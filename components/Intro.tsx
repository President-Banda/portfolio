export default function Intro(){
    return(
        <div className="grid grid-cols-4 gap-2">
            <div className="container mx-auto items-center divide-y divide-black">
                <button className="transition text-xl bg-sakura-light h-10 shadow-inner-2xl shadow-black border-b-2 
                w-full rounded-r-xl m-1 font-semibold skew-y-6 scale-75 hover:skew-y-0
                ">
                    Design Me
                </button>
                <button className="bg-sakura-light h-10 w-full rounded-xl m-1 font-semibold skew-y-3">
                    Design Me
                </button>
                <button className="bg-sakura-light h-10 w-full rounded-xl m-1 font-semibold skew-y-3">
                    Design Me
                </button>

            </div>
            <div className="col-span-2 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia id ullamcorper 
            nulla sit laoreet euismod aenean neque. Ullamcorper ac est lectus nam sociis 
            consectetur senectus justo. Sociis natoque mollis ultricies massa integer molestie 
            habitant eget. Porta quis proin pulvinar felis rutrum faucibus sed eu. Aenean est 
            in viverra porttitor vehicula imperdiet volutpat sagittis. Placerat quisque elementum 
            etiam adipiscing sit tempus erat cum.
            </div>
        </div>
    )
}