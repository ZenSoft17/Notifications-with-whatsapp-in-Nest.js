declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: number

			DB_URL: string

			META_ID: string
			META_SECRET: string
			WHASTAPP_SECRET: string
		}
	}
}

export {}
