import { Vmal0 as TVmal0 } from "../api/vmal0/Vmal0";

export const VMAL0_TITLE_FIELD = "id";

export const Vmal0Title = (record: TVmal0): string => {
  return record.id?.toString() || String(record.id);
};
