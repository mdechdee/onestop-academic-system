import Head from 'next/head'
import Layout from '../components/Layout'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

export default function SignIn() {

    const { register, handleSubmit } = useForm();
    const [ id, setId ] = useState("");
    const [ pw, setPw ] = useState("");

    const handleLogin = (data) => {
        console.log("done");
    }

    return (
        <div className='absolute w-full h-full'>
            <Head>
                <title>SignIn page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-1/4 h-1/2 mx-auto border rounded-sm mt-20">
                <div className="h-10 w-full bg-kaist text-white content-center inline-flex justify-center items-center">
                    <span className="">Sign in to OSAS</span>
                </div>
                <div className="bg-gray-100 w-full h-full flex flex-col justify-center items-center space-y-10 text-sm">
                    <Image src="/logo.png" alt="logo" width={100} height={100}/>
                    {/* Required Info: ID, Pass */}
                    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col font-sans font-l inline-flex items-center space-y-3">
                        <div className="flex flex-col space-y-1">
                            <span>Username</span>
                            <input className='rounded' name='username' type='text' {...register('username' , {required : true})}/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span>Password</span>
                            <input className='rounded' name='password' type='text' {...register('password' , {required : true})}/>
                        </div>
                        <input value='Sign in' type='submit' className="bg-kaist text-white rounded w-2/3"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
