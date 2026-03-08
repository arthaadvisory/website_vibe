import { ref, readonly } from 'vue'

/**
 * Universal form state composable.
 * Tracks submitting, success, and error states across any form in the app.
 *
 * Usage:
 *   const { submitting, success, error, submit } = useForm()
 *   await submit(async () => { ... })
 */
export function useForm() {
    const submitting = ref(false)
    const success = ref(false)
    const error = ref('')

    const reset = () => {
        submitting.value = false
        success.value = false
        error.value = ''
    }

    const submit = async (fn: () => Promise<void>) => {
        submitting.value = true
        success.value = false
        error.value = ''

        try {
            await fn()
            success.value = true
        } catch (e: any) {
            error.value = e?.message || 'Something went wrong. Please try again.'
        } finally {
            submitting.value = false
        }
    }

    return {
        submitting: readonly(submitting),
        success: readonly(success),
        error: readonly(error),
        submit,
        reset
    }
}
