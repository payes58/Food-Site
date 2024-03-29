
export const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl relative">
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
                <p className="px-2 ">Through 8/26</p>
                <button className="border-white bg-white font-semibold text-black mx-2 absolute bottom-4">Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="comida" />
        </div>
        <div className="rounded-xl relative">
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">New Restaurant</p>
                <p className="px-2 ">Added Daily</p>
                <button className="border-white bg-white font-semibold text-black mx-2 absolute bottom-4">Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="comida" />
        </div>
        <div className="rounded-xl relative">
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">We Deliver The Best</p>
                <p className="px-2 ">Tasty Food</p>
                <button className="border-white bg-white font-semibold text-black mx-2 absolute bottom-4">Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="comida" />
        </div>
    </div>
  )
}


