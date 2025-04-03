import Link from "next/link"

const Logo = () => {
    return (
        <Link href={"/"}>
            <svg title="McDonalds Argentina" width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M25.8749 2.48878C28.9812 2.48878 31.4983 15.5745 31.4983 31.7156H36C36 14.3315 31.4663 0.240234 25.8749 0.240234C22.6935 0.240234 19.8555 4.47621 18 11.0982C16.1445 4.47621 13.3065 0.240234 10.1251 0.240234C4.53509 0.240234 0 14.3315 0 31.7156H4.50174C4.50174 15.5745 7.02015 2.48878 10.1251 2.48878C13.2314 2.48878 15.7498 14.5676 15.7498 29.4671H20.2502C20.2502 14.5676 22.7686 2.48878 25.8749 2.48878Z" fill="#FFBC0D"></path>
            </svg>
        </Link>
    )
}

export default Logo