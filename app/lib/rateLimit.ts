import { sql } from './db';

const MAX_ATTEMPTS = 5;
const WINDOW_MINUTES = 15;

export async function isRateLimited(identifier: string): Promise<boolean> {
    const [{ count }] = await sql`
    SELECT COUNT(*):: int AS count FROM login_attempts WHERE identifier = ${identifier} AND attempted_at > now() - (${WINDOW_MINUTES} * interval '1 minute')`;
    return count >= MAX_ATTEMPTS;
}
export async function recordFailedAttempt(identifier: string) {
  await sql`INSERT INTO login_attempts (identifier) VALUES (${identifier})`;
  await sql`DELETE FROM login_attempts WHERE attempted_at < now() - interval '1 day'`;
}
//runs on successful login, legitimate user is not rate limited after a few mistypes of a passwordd
export async function clearAttempts(identifier: string) {
    await sql`DELETE FROM login_attempts WHERE identifier = ${identifier}`;
} 

