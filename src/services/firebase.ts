import * as admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();

// FIREBASE_SERVICE_ACCOUNT_JSON pode ser:
// - JSON bruto (começa com '{')
// - ou Base64 do JSON
const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
let serviceAccount: any | undefined;

if (raw) {
  try {
    const trimmed = raw.trim();
    if (trimmed.startsWith("{")) {
      serviceAccount = JSON.parse(trimmed);
    } else {
      // decodifica base64
      const decoded = Buffer.from(trimmed, "base64").toString("utf-8");
      serviceAccount = JSON.parse(decoded);
    }
  } catch (err) {
    console.error("Erro ao parsear FIREBASE_SERVICE_ACCOUNT_JSON:", err);
    serviceAccount = undefined;
  }
}

if (serviceAccount) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  // fallback: usa credenciais padrão do ambiente (GOOGLE_APPLICATION_CREDENTIALS)
  admin.initializeApp();
}

const db = admin.firestore();
export default db;
