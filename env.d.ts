declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: number

			DB_URL: string

			META_ID: string
			META_SECRET: string
			WHASTAPP_SECRET: string

			RESEND_API_KEY: string
			RESEND_EMAIL: string
		}
	}
}

export {}
