import { create } from 'zustand'
import { IELTSCourseData, CourseData } from '@/types/types'

interface IELTSState {
  data: IELTSCourseData | null
  loading: boolean
  error: string | null
  language: 'en' | 'bn'
  fetchData: (lang?: 'en' | 'bn') => Promise<void>
  setLanguage: (lang: 'en' | 'bn') => void
}

let cachedData: { [key: string]: IELTSCourseData } = {}

export const useIELTSStore = create<IELTSState>((set, get) => ({
  data: null,
  loading: true,
  error: null,
  language: 'en',

  setLanguage: (lang: 'en' | 'bn') => {
    set({ language: lang })
    get().fetchData(lang)
  },

  fetchData: async (lang?: 'en' | 'bn') => {
    const currentLang = lang || get().language
    
    if (cachedData[currentLang]) {
      set({ data: cachedData[currentLang], loading: false, language: currentLang })
      return
    }

    try {
      set({ loading: true })
      const response = await fetch(
        `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${currentLang}`,
        {
          headers: {
            'X-TENMS-SOURCE-PLATFORM': 'web',
            'accept': 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: IELTSCourseData = await response.json()
      cachedData[currentLang] = result
      set({ data: result, loading: false, error: null, language: currentLang })
    } catch (err) {
      set({ error: err instanceof Error ? err.message : 'An error occurred', loading: false })
    }
  }
}))