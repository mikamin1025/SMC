import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

//microCMSで投稿した全てのブログ記事を取得する関数
export const getEventDate = async () => {
  return await client.get({ endpoint: "event_date" });
};
