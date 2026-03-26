"use client"
import { db } from "@/config/firebase.config"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Apartment() {
    const{data:session} = useSession();
    const[houses,setHouses] = useState([]);

    useEffect(()=>{
        const fetchHouses =async ()=>{
            try{
            const houseRef = query(collection(db,"houses"),where("user","==",session?.user?.id));
            const snapShot = await getDocs(houseRef)
            const compiledHouse = []
            snapShot.docs.forEach((doc)=>{
                compiledHouse.push({
                    id: doc.id,
                    data: doc.data(),
                })
            })
            setHouses(compiledHouse)
            console.log(compiledHouse)
        }
        catch(error){
            console.error("Error fetching houses", error)
        }
        }
        if (session){
            fetchHouses()
        }
    },[session])

    return (
        <main className="min-h-screen my-5 p-4">
            <h1 className="text-4xl font-bold text-center text-blue-950">Our Apartment</h1>
            <div className="px-5 py-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
                {houses.map(houses =>
                <div key={houses.id} className="w-80 h-85 rounded shadow-md relative">
                    <Image
                        src="/money2.jpg"
                        alt="money"
                        width={200}
                        height={200}
                        className="h-45 w-80"
                    />
                    <div className="px-3 py-3">
                        <p className="text-xl text-gray-800 font-semibold">{houses.data.title}</p>
                        <p className="text-sm text-green-600">{houses.data.price}</p>
                        <p className=" mt-1 text-sm ">{houses.data.location}</p>
                        <p className="mt-2 text-sm">{houses.data.description}</p>
                        <div className="absolute top-2 right-2 w-25 h-8 flex justify-center item-center bg-red-300">
                            <p className="text-white">-10% off</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </main>
    )
}