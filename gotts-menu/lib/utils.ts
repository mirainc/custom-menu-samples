import * as T from "../types";

export const getRecords = <R extends T.Record>(data: R[], tag: string) => {
  const record = data.filter((x) => {
    return x.tags.includes(tag);
  });

  return record;
};
