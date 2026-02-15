import React from 'react';
import Badge from '../components/dynamic/Badge';
import ConatactForm from '../components/ui/ContactForm';
import SocialMediaCard from '../components/ui/SocialMediaCard';

const page = () => {
  return (
    <div className='bg-background py-10 md:py-20'>
      <div className='w-[95%] mx-auto'>
        <div>
          
          <div className='flex flex-col gap-10'>
            {/* heading */}
            <div className='flex flex-col gap-3'>
              {/* Badge */}
              <Badge title='Contact'></Badge>

              {/* Title */}
              <div className='flex flex-col justify-center text-center gap-2'>
                <h1 className='text-6xl md:text-7xl font-extrabold'>Reach Us At Anytime</h1>
                <p className='text-xl'>Have questions or need any help? We’re here to help you with that</p>
              </div>
              {/* end title */}

            </div>
            {/* BOdy */}
            <div className='flex flex-col md:flex-row justify-between  gap-5 md:gap-5 lg:gap-10'>

              <div className='w-full md:w-[70%]'>
                <SocialMediaCard></SocialMediaCard>
              </div>
              <div className='w-full'>
                <ConatactForm></ConatactForm>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default page;