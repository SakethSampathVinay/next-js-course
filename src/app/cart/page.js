'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function Cart() {

    const pathName = usePathname(); // use in only client component
    console.log(pathName);
    
    const searchParams = useSearchParams()
    console.log(searchParams.get("search"), searchParams.get("randomvalue"));
    
    return (
        <div>
            <h1>This is Cart Component</h1>
        </div>
    )
}