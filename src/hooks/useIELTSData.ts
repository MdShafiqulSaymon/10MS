import { useState, useEffect } from 'react';
import { IELTSCourseData } from '../types/types';

let cachedData: IELTSCourseData | null = null;

export const useIELTSData = () => {
  const [data, setData] = useState<IELTSCourseData | null>(cachedData);
  const [loading, setLoading] = useState<boolean>(!cachedData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cachedData) {
      setData(cachedData);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en',
          {
            headers: {
              'X-TENMS-SOURCE-PLATFORM': 'web',
              'accept': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: IELTSCourseData = await response.json();
        cachedData = result;
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};