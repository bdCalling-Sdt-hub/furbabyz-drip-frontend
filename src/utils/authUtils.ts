'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const setAccessToken = (token: string) => {
        cookies().set('nextAccessToken', token);
};

export const removeAccessToken = () => {
        cookies().set('nextAccessToken', '', { maxAge: 0 });
        redirect('/');
};

export const getAccessToken = () => {
        const token = cookies().get('nextAccessToken')?.value;
        return token || null;
};
