"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

export default function Nosotros() {
    const ubicacion = usePathname();
    console.log(ubicacion);
    

    const router = useRouter();

    const reemplazar = (url) => {
        router.replace(url);
    }

    const refrescar = () => {
        router.refresh();
    }

    const irAtras = () => {
        router.back();
    }

    const irAdelante = () => {
        router.forward();
    }

    return (
        <>
        <NavBar />
        <Footer />
      </>
    )
}