import APIs, { endpoints } from '@/configs/APIs'
import { defineStore } from 'pinia'

export const useCourseStore = defineStore('courseStore', {
  state: () => ({
    categories: [] as Array<{ id: number; name: string }>,
    courses: [] as Array<{
      id: number
      name: string
      image: string
      description: string
      price: number
      discount: number
      teacher: {
        user: {
          username: string
        }
      }
    }>,
    totalItems: 0,
    page: 0,
    limit: 12,
    cateFilter: null as number | null,
  }),

  actions: {
    async loadCates() {
      try {
        const res = await APIs.get(endpoints.categories)
        this.categories = res.data
      } catch (error) {
        console.error(error)
      }
    },

    async loadCourses() {
      try {
        const res = await APIs.get(`${endpoints.courses}/filter-cate`, {
          params: {
            categoryId: this.cateFilter,
            page: this.page,
            limit: this.limit,
          },
        })
        this.courses = res.data.courses
        this.totalItems = res.data.totalPages
      } catch (err) {
        console.error(err)
      }
    },

    filterCate(cateId: number | null) {
      this.cateFilter = cateId
      this.page = 0
      this.loadCourses()
    },
  },
})
