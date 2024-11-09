import { redirect } from "next/navigation";


export default function Account(){

    const userProfileInfo = null;
    if(userProfileInfo == null) {
        redirect('cart?search=product1&randomvalue=abcdef')
    }
    return <h1>Account</h1>
}