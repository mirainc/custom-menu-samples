const getRecord = (data, tag) => {
  const record = data.find((x) => {
    return x.tags.includes(tag);
  });

  return record;
};

const getTag = (tags, tagName) => {
  const record = tags.find((x) => {
    return x.includes(tagName);
  });

  if (!record) return "";

  const [_tagKey, tagValue] = record.split(":");
  return tagValue;
};

const getCalories = (data, tag) => {
  const record = data.find((x) => {
    return x.tags.includes(tag);
  });

  return record;
};
