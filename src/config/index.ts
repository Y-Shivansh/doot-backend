// This file exists because every other part of the backend needs environment
// values (DB connection string, Clerk keys, etc.) but none of them should be
// the one deciding what happens if a required value is missing — that check
// belongs in exactly one place. This is that place.
//
// Anything reading process.env directly outside this file is a bug — add the
// value here instead, so a missing/misspelled env var fails loudly at boot
// instead of silently breaking something deep in the app later.

import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
})

// Throws immediately at startup if anything required is missing/invalid,
// instead of the app limping along and failing confusingly later.
export const config = envSchema.parse(process.env)
