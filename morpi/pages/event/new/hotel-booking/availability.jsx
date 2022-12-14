import React from 'react'
import AppNavbar from '../../../../components/AppNavbar'
import Head from 'next/head'
import HotelScheduleAvailability from "../../../../components/availability/HotelScheduleAvailability";


const availability = () => {
    return (
        <div className='w-screen h-screen' >
            <Head>
                <title>Turpio | Creating Event</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <AppNavbar
                pageTitle="Set your availability"
                disableSecondControl={true}
                backBtn={true}
            />
            <HotelScheduleAvailability nextLink="hotel-booking/payment" />
        </div>
    )
}

export default availability

// export const getServerSideProps = async function ({req, res}) {
//   if (!req.user) {
//       return {
//           redirect: {
//               destination: '/',
//               permanent: true,
//           },
//       }
//   }

//   return {
//       props: req.user ,
//   }
// }