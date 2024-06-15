'use client';

import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const AuthToggleButton = () => {

    const router = useRouter();
    const currentPath = usePathname();
    const [url, setUrl] = useState('');

    const checkPathAndUpdateButton = useCallback(() => {
        if (currentPath.includes('/login')) {
            setUrl('/signup');
        } else {
            setUrl('/login');
        }
    }, [currentPath]);

    useEffect(() => {
        checkPathAndUpdateButton();
    }, [checkPathAndUpdateButton])


    return (
        <div>
            {url && url.includes('/signup') && (<Button onClick={() => { router.push(url) }} >Create A New Account?</Button>)}
            {url && url.includes('/login') && (<Button onClick={() => { router.push(url) }}>Login to your Account?</Button>)}
        </div>
    )
}

export default AuthToggleButton