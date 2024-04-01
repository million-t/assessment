'use client'

import HospitalCard, { HospitalType } from "@/components/Card";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { fetchHospitals, searchHospitals } from "@/lib/features/hospitals/hospitalsSlice";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { AppDispatch, RootState } from "@/lib/store";



export default function Home() {

  const inputRef = useRef<HTMLInputElement>(null);

  const { hospitals } = useSelector((state: RootState) => state.hospitals);
  const dispatch = useDispatch <AppDispatch>();
  
    
  useEffect(() => {
    dispatch(fetchHospitals());
  }, []);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current){
      dispatch(searchHospitals(inputRef.current?.value))

    }
    else{
      dispatch(fetchHospitals());

    }

  };



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <form className="  md:w-search mx-auto" >   
          <label  className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
          <div className="relative max-w-search ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" className="block w-full h-16 p-4 ps-10 text-sm text-gray-900 border shadow rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 " placeholder="" ref={inputRef as unknown as React.RefObject<HTMLInputElement>} onChange={handleOnChange} required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg md:font-medium md:text-2xl px-5 py-2 bg-primary ">Search</button>
          </div>
      </form>   



      <div className="flex flex-col py-10 space-y-11">
  
        {hospitals.map( (hospital: HospitalType)=> 
          <div>
            <Link href={'/'}>
              <HospitalCard 
                            _id={hospital._id} 
                            address={hospital.address}
                            photo={hospital.photo}
                            phoneNumbers={hospital.phoneNumbers}
                            emails={hospital.emails}
                            availability={hospital.availability}
                            institutionName={hospital.institutionName}
                            />

            </Link>
          </div>
        )}
        

      </div>



    </main>
  );
}
