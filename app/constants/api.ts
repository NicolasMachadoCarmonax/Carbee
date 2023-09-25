// api enviorment variables united in a single place
export const awsRegion: string = process.env.AWS_REGION || '';
export const awsPoolId: string = process.env.AWS_POOL_ID || '';
export const awsClientId: string = process.env.AWS_CLIENT_ID || '';
export const appURL: string = process.env.APP_URL || "http://localhost:3000";
export const authURL: string = `${appURL}/api/auth`;
export const logoutURL: string = `${appURL}/api/logout`;

