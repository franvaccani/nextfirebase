import Image from "next/image"

const ProductDetail = async ({ slug }) => {
    const response = await fetch("http://localhost:3000/api/producto/" + slug, { cache: "no-store" });
    const item = await response.json();

    return (
        <>
            <div href="#" className="flex items-center justify-center shadow-sm md:flex-row md:max-w-xl">
                <div className=" flex items-center justify-center object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg">
                    <Image className="max-w-xl pr-10 items-center justify-center w-96"src={"/images/" + item.imagen} width={280} height={480} alt={item.nombre} />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-black">{item.nombre}</h1>

                    <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-black">{item.descripcion}</p>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-black">${item.precio}</p>
            </div>
        </>

    )
}

export default ProductDetail