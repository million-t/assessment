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
    institutionName: string;

  }
  


const HospitalCard: React.FC<HospitalType> = ({ _id, address, availability, photo, phoneNumbers, emails, institutionName }) => {
  return (
    <div className='flex  max-w-card space-x-11 bg-card-bg shadow-md rounded-3xl'>
        <div className='max-w-cardImage shadow-md'>
            <Image src={photo} alt={'hospital photo'} width={320} height={220}/>
        </div>
        <div className='flex flex-col mt-9 w-full pr-4 items-center space-y-4'>
            <div className='flex w-full  items-center'>
            <div className='flex flex-col grow'>
                <p className='text-primary text-sm font-light'>{Object.values(address).join(", ")}</p>
                <p className='text-2xl font-bold'>{institutionName}</p>
                <p className='text-sm font-light'>distance</p>
            </div>
            <div className='rounded-full max-h-6 text-sm font-semibold px-3 py-0  text-emerald-500 bg-green-300'>Open now</div>
            </div>
            
            <div className='flex space-x-4'>
                <div className='flex flex-col'>
                    {phoneNumbers.map( (phone: string)=>(
                        <p className="text-xs font-light">{phone}</p>

                    ))}
                </div>
                <div className='flex flex-col'>

                    {emails.map( (phone: string)=>(
                        <p className="text-xs font-light">{emails}</p>

                    ))}
                </div>
            </div>
        </div>


    </div>
  )
}

export default HospitalCard