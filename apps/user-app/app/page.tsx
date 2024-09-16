"use client"
import { DashboardAppbarClient } from '../components/DashboardAppbarClient';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { LandingFeatureOne } from '../components/FeatureSectionOne';
import CardCarousel from '../components/CardCarousel';
import { FeatureSectionThree } from '../components/FeatureSectionThree';
import { Footer } from '../components/Footer';

export default function Page() {
  const router = useRouter();

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
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
