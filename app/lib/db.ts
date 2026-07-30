import { neon } from '@neondatabase/serverless';
//tagged template function sql
export const sql = neon(process.env.DATABASE_URL!);

//! non-null assertion to tell typescript this won't be undefined