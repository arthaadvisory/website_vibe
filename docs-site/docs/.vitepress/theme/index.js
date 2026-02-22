import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

// Layouts & Components
import MyLayout from './MyLayout.vue'
import ProcessStepper from './components/ProcessStepper.vue'
import ServicesHub from './components/ServicesHub.vue'
import ServiceCard from './components/ServiceCard.vue'
import ResourceCard from './components/ResourceCard.vue'
import HomeLayout from './components/HomeLayout.vue'
import IndustryList from './components/IndustryList.vue'
import FAQ from './components/FAQ.vue'
import ServicesLayout from './components/ServicesLayout.vue'
import ResourcesLayout from './components/ResourcesLayout.vue'
import ContactForm from './components/ContactForm.vue'
import EntityFormationWizard from './components/EntityFormationWizard.vue'
import TeamHub from './components/TeamHub.vue'
import ArthaTaxCalculator from './components/ArthaTaxCalculator.vue'
import PageHeader from './components/PageHeader.vue'
import CallToAction from './components/CallToAction.vue'
import TestimonialCard from './components/TestimonialCard.vue'
import ResourceList from './components/ResourceList.vue'
import ServiceList from './components/ServiceList.vue'
import ReadTime from './components/ReadTime.vue'
import DownloadCard from './components/DownloadCard.vue'
import TaxCalculator from './components/TaxCalculator.vue'
import SsfCalculator from './components/SsfCalculator.vue'
import EmiCalculator from './components/EmiCalculator.vue'
import EthicsThreatAnalyzer from './components/EthicsThreatAnalyzer.vue'

import StatsCounter from './components/StatsCounter.vue'
import ContactLayout from './components/ContactLayout.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import ServiceLayout from './components/ServiceLayout.vue'
import IndustryLayout from './components/IndustryLayout.vue'
import BlogLayout from './components/BlogLayout.vue'

import './style.css'

export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app }) {
        // Register Global Components
        app.component('ProcessStepper', ProcessStepper)
        app.component('ServicesHub', ServicesHub)
        app.component('ServiceCard', ServiceCard)
        app.component('ResourceCard', ResourceCard)
        app.component('HomeLayout', HomeLayout)
        app.component('IndustryList', IndustryList)
        app.component('FAQ', FAQ)
        app.component('ServicesLayout', ServicesLayout)
        app.component('ResourcesLayout', ResourcesLayout)
        app.component('ContactForm', ContactForm)
        app.component('EntityFormationWizard', EntityFormationWizard)
        app.component('TeamHub', TeamHub)
        app.component('ArthaTaxCalculator', ArthaTaxCalculator)
        app.component('PageHeader', PageHeader)
        app.component('CallToAction', CallToAction)
        app.component('TestimonialCard', TestimonialCard)
        app.component('ResourceList', ResourceList)
        app.component('ServiceList', ServiceList)
        app.component('ReadTime', ReadTime)
        app.component('DownloadCard', DownloadCard)
        app.component('TaxCalculator', TaxCalculator)
        app.component('SsfCalculator', SsfCalculator)
        app.component('EmiCalculator', EmiCalculator)
        app.component('EthicsThreatAnalyzer', EthicsThreatAnalyzer)

        app.component('StatsCounter', StatsCounter)
        app.component('ContactLayout', ContactLayout)
        app.component('Breadcrumbs', Breadcrumbs)
        app.component('ServiceLayout', ServiceLayout)
        app.component('IndustryLayout', IndustryLayout)
        app.component('BlogLayout', BlogLayout)
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

        onMounted(() => {
            initZoom()
        })

        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        )
    }
}
