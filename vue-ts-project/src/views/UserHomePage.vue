<template>
  <!-- Carolsel -->
  <section>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/carousel/caro5.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/carousel/caro1.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/carousel/caro2.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/carousel/caro3.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/carousel/caro4.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </section>
  <!-- Aside -->
  <section class="flex">
    <aside
      style="height: 1000px"
      id="default-sidebar"
      class="z-40 w-64 transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li v-for="cate in courseStore.categories" :key="cate.id">
            <a
              @click="courseStore.filterCate(cate.id)"
              style="cursor: pointer"
              class="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span class="ms-3">{{ cate.name }}</span>
            </a>
          </li>
        </ul>
        <hr />
        <div class="space-y-2 mt-3">
          <h6 class="ml-8 text-base font-medium text-black dark:text-white">Filter Prices</h6>
          <div class="">
            <div class="w-full my-3">
              <label
                for="min-experience-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                From
              </label>

              <input
                type="number"
                id="price-from"
                min="1"
                max="10000"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Exp: 3000"
                required
              />
            </div>

            <div class="w-full">
              <label
                for="price-to"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                To
              </label>

              <input
                type="number"
                id="max-experience-input"
                min="1"
                max="10000"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Exp: 4500"
                required
              />
            </div>
            <div class="my-3">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <div class="p-4">
      <div
        class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div
          v-for="c in courseStore.courses"
          :key="c.id"
          class="flex-courses max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img class="rounded-t-lg image-tital-course" :src="c.image" alt="" />
          </a>
          <div class="p-5 flex-grow">
            <!-- <a href="#"> -->
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ c.name }}
            </h5>
            <!-- </a> -->
            <div class="my-2">
              <span
                class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300"
                >{{ c.teacher.user.username }}</span
              >
            </div>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ toggleReadMore ? c.description : `${c.description.slice(0, maxLength)}...`
              }}<span class="text-blue-600"> Read more</span>
            </p>
            <div
              style="margin-left: 24%"
              class="bg-purple-100 text-purple-800 text-xs font-medium me-2 w-36 px-2 py-2 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400"
            >
              <p>LOGIN TO SEE DETAIL</p>
            </div>
            <div class="flex justify-between mt-3">
              <div
                style="text-decoration: line-through"
                class="p-4 text-sm mb-4 font-bold text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
                role="alert"
              >
                {{ formatCurrencyWithRounding(c.price) }} VNĐ
              </div>
              <div>
                <svg
                  class="mt-2"
                  width="40"
                  height="40"
                  viewBox="0 0 25 25"
                  fill="#343C54"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M6.4228 18.2197C6.1299 18.5126 6.1299 18.9874 6.4228 19.2803C6.71569 19.5732 7.19056 19.5732 7.48346 19.2803L13.7335 13.0303C14.0263 12.7374 14.0263 12.2626 13.7335 11.9697L7.48346 5.71967C7.19056 5.42678 6.71569 5.42678 6.42279 5.71967C6.1299 6.01256 6.1299 6.48744 6.42279 6.78033L12.1425 12.5L6.4228 18.2197Z"
                    fill="#343C54"
                  />
                  <path
                    d="M10.9228 18.2197C10.6299 18.5126 10.6299 18.9874 10.9228 19.2803C11.2157 19.5732 11.6906 19.5732 11.9835 19.2803L18.2335 13.0303C18.5263 12.7374 18.5263 12.2626 18.2335 11.9697L11.9835 5.71967C11.6906 5.42678 11.2157 5.42678 10.9228 5.71967C10.6299 6.01256 10.6299 6.48744 10.9228 6.78033L16.6425 12.5L10.9228 18.2197Z"
                    fill="#343C54"
                  />
                </svg>
              </div>
              <div
                class="text-red-600 font-bold p-4 mb-4 text-sm rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {{ formatCurrencyWithRounding(c.price * (1 - c.discount / 100)) }} VNĐ
              </div>
            </div>
          </div>
          <a
            href="#"
            class="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span class="ml-24">Add to cart</span>
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </section>
  <!-- Courses view -->
  <section></section>
</template>
<script setup lang="ts">
// import APIs, { endpoints } from '@/configs/APIs'
import { useCourseStore } from '@/stores/courseStore'
import { onMounted, ref } from 'vue'

const courseStore = useCourseStore()

// const courses = ref()
// const loadCourses = async (cateId: number) => {
//   try {
//     const res = await APIs.get(`${endpoints.courses}/filter-cate/?page=${page}&&limit=${limit}`, {
//       params: cateId,
//     })
//     courses.value = res.data.courses
//     totalItems.value = res.data.totalPages
//     console.log(courses.value)

//     // Dùng Promise.all để gửi yêu cầu song song
//     // const promises = courses.value.map((course) => APIs.get(`${endpoints.rating}/${course.id}`))

//     // const responses = await Promise.all(promises)
//     // responses.forEach((response, index) => {
//     //   console.log(`Course ID: ${courses.value[index].id}, Rating: ${response.data}`)
//     // })
//   } catch (err) {
//     console.error(err)
//   }
// }

// const averageCourseRating = ref()

const formatCurrencyWithRounding = (value: number) => {
  const roundedValue = Math.floor(value) + (value % 1 >= 0.5 ? 1 : 0)
  return roundedValue.toLocaleString().replace(/\B(?=(\d{3})+(?!))/g, ',')
}

// another functions
const maxLength = 100
const toggleReadMore = ref(false)

// run function
onMounted(async () => {
  await courseStore.loadCates()
  await courseStore.loadCourses()
})
</script>

<style scoped>
.image-tital-course {
  width: 100%; /* Chiều rộng full container */
  height: 300px; /* Chiều cao cố định (tuỳ chỉnh theo nhu cầu) */
  object-fit: cover; /* Ảnh được cắt để vừa thẻ, giữ tỷ lệ */
  object-position: center; /* Định vị trung tâm ảnh */
  border-top-left-radius: 0.5rem; /* Đảm bảo bo góc giống thẻ cha */
  border-top-right-radius: 0.5rem;
}

.flex-courses {
  display: flex; /* Sử dụng flexbox */
  flex-direction: column; /* Chia theo chiều dọc */
  height: 100%; /* Chiều cao full */
}

.flex-grow {
  flex-grow: 1; /* Đẩy nội dung bên trên chiếm khoảng trống */
}

.mt-auto {
  margin-top: auto; /* Đẩy button xuống cuối */
}
</style>
