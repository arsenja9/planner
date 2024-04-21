'use client';

import { useProfile } from '@/hooks/useProfile';
import Loader from '@/components/ui/Loader/Loader';

export function Statistics() {
  const { data, isLoading } = useProfile();

  return isLoading ? (
    <Loader />
  ) : (
    <div className='grid grid-cols-4 gap-12 mt-7'>
      {data?.statistics.length ? (
        data.statistics.map(statistics => (
          <div
            key={statistics.label}
            className='bg-border/5 rounded p-layout text-center hover:-translate-y-3 transition-transform duration-500'
          >
            <div className='text-xl'>{statistics.label}</div>
            <div className='text-3xl font-semibold'>{statistics.value}</div>
          </div>
        ))
      ) : (
        <div>Statistics no loaded!</div>
      )}
    </div>
  );
}
