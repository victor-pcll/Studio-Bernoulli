<template>
  <div
    ref="element"
    :class="[
      'transition-all duration-700 ease-out',
      isVisible ? 'opacity-100 translate-x-0 translate-y-0' : hiddenClass,
    ]"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
  from: {
    type: String,
    default: 'bottom', // 'left', 'right', 'bottom'
  },
})

const isVisible = ref(false)
const element = ref(null)

const hiddenClass = computed(() => {
  switch (props.from) {
    case 'left':
      return 'opacity-0 -translate-x-10'
    case 'right':
      return 'opacity-0 translate-x-10'
    case 'bottom':
    default:
      return 'opacity-0 translate-y-10'
  }
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  if (element.value) {
    observer.observe(element.value)
  }
})
</script>