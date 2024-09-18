import { DashboardAppbarClient } from '../components/DashboardAppbarClient';
import { redirect } from 'next/navigation';
import { LandingFeatureOne } from '../components/FeatureSectionOne';
import CardCarousel from '../components/CardCarousel';
import { FeatureSectionThree } from '../components/FeatureSectionThree';
import { Footer } from '../components/Footer';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './lib/auth';

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (session) {
    console.log("hi from getserversession")
    redirect("/dashboard")
    return null
  }
  return (
    <div>
      <div className="spotlight-bg h-max">
        <DashboardAppbarClient />
        <LandingFeatureOne />
        <div className='relative px-3 pt-28 sm:pt-40 flex justify-center text-center'>
          <div className=''>
            <div className='text-4xl sm:text-6xl text-white font-extrabold sm:font-bold'>
              CHECK OUT YOUR CARDS
            </div>

            <div className='pt-4 sm:pt-8 text-lg sm:text-2xl text-white  sm:pb-20 flex justify-center mb-10'>
              Get to know about your balance cards & track your balance
            </div>
          </div>
        </div>
        <CardCarousel />
        <FeatureSectionThree />
      </div>

      <div className='spotlight-bg'>
        <Footer />
      </div>
    </div>
  );
}
