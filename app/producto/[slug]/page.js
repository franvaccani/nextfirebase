import ProductDetail from "@/app/components/ProductDetail";

export default async function Producto({params}) {
    const {slug} = await params;    

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <ProductDetail slug={slug} />
        </div>
    )
}