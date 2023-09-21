//SDK利用準備
import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

//APIの呼び出し
export const getEventDate = async (queries: MicroCMSQueries) => {
  return await client.get({ endpoint: "event_date", queries });
};
