

import { signIn } from "@/app/auth"

export const authenticate = async (formData) => {
    const {username, password} = Object.fromEntries(formData)

    try {
        await signIn('credentials', { redirect: false,
          username, password})
    } catch (error) {
        console.log(error)
        // throw error
        return {error:'wrong credentials'}
    }
}


