'use client'

import { useEffect } from 'react'
import { useIELTSStore } from '@/store/useIELTSStore'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const fetchData = useIELTSStore((state: { fetchData: any }) => state.fetchData)

  useEffect(() => {
    // Initialize data fetch when the app loads
    fetchData()
  }, [fetchData])

  return <>{children}</>
}