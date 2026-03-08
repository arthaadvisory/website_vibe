import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import MyLayout from './MyLayout.vue'
import './style.css'

// Dynamically auto-import all custom components in the `.vitepress/theme/components` directory
const components = import.meta.glob('./components/*.vue', { eager: true })

export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app }) {
        // Register Global Components via Glob
        for (const path in components) {
            // Extract the filename without extension to use as component name
            const name = path.match(/\.\/components\/(.*)\.vue$/)[1]
            app.component(name, components[path].default)
        }
    },
    setup() {
        const route = useRoute()
        const initZoom = async () => {
            if (typeof window !== 'undefined') {
                const { default: mediumZoom } = await import('medium-zoom')
                mediumZoom('.vp-doc img', {
                    background: 'var(--vp-c-bg)',
                    margin: 24
                })
            }
        }

        const initScrollAnimations = () => {
            if (typeof window === 'undefined') return
            const elements = document.querySelectorAll('.animate-on-scroll')
            if (!elements.length) return

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                })
            }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

            elements.forEach(el => observer.observe(el))
        }

        onMounted(() => {
            initZoom()
            initScrollAnimations()
        })

        // Re-inject after page navigations
        watch(
            () => route.path,
            () => nextTick(() => {
                initZoom()
                initScrollAnimations()
            })
        )
    }
}
