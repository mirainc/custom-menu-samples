import * as T from "../types";

export const getRecords = (data: T.Record[], tag: string) => {
  const record = data.filter((x) => {
    return x.tags.includes(tag);
  });
  return record;
};
