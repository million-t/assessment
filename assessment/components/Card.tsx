import React from 'react'
import Image, { StaticImageData } from 'next/image';
import hi from '../images/hosp.png'
export interface HospitalType {
    _id: string;
  
  
    address: {
      region: string;
      woreda: string;
      zone: string;
      summary: string;
    };
  
  
    availability: {
      twentyFourHours: boolean;
      startDay: string;
      endDay: string;
      opening: string;
      closing: string;
    };
  
  
    photo: string;
  
  
    phoneNumbers: string[];
    emails: string[];
  }
  


const HospitalCard: React.FC<HospitalType> = ({ _id, address, availability, photo, phoneNumbers, emails }) => {
  return (
    <div className='flex  max-w-card space-x-11 bg-card-bg shadow-md rounded-3xl'>
        <div className='max-w-cardImage shadow-md'>
            <Image src={photo} alt={'hospital photo'} width={320} height={220}/>
        </div>
        <div className='flex flex-col mt-9 w-full pr-4 items-center space-y-4'>
            <div className='flex w-full  items-center'>
            <div className='flex flex-col grow'>
                <p className='text-primary text-sm font-light'>address</p>
                <p className='text-2xl font-bold'>{}</p>
                <p className='text-sm font-light'>distance</p>
            </div>
            <div className='rounded-full max-h-6 text-sm font-semibold px-3 py-0  text-emerald-500 bg-green-300'>Open now</div>
            </div>
            
            <div className='flex space-x-4'>
                <div className='flex flex-col'>
                    <p className="text-xs font-light">+2519000000</p>
                    <p className='text-xs font-light'>+2519000000</p>
                </div>
                <div className='flex flex-col'>
                    <p className="text-xs font-light">+info@stpaul.com</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default HospitalCard