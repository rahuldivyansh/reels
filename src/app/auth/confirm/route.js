import { EmailOtpType } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
// The client we created from Server-Side Auth instructions
import { createClient } from '@/utils/supabase/server'

export async function GET( request ){
    const {searchParams} = new URL(request.nextUrl)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type')
    const next = searchParams.get('next') ?? '/'
    const redirectTo = request.nextUrl.clone()
    redirectTo.pathname = next

    if (token_hash && type ){
        const supabase = createClient()

        const { error } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        })
        if ( !error ){
            return NextResponse.redirect(redirectTo)
        }
    }

    redirectTo.pathname = '/auth/auth-code-error'
    return NextResponse.redirect(redirectTo)
}