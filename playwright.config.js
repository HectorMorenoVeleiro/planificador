export default defineConfig({
    reporter: 'hmtl',

    use: {
        baseURL: 'https://localhost:5173',
        trace: 'on-first-retry',
    },

    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:5173',
        reuseExistingServer: true,
    },
})