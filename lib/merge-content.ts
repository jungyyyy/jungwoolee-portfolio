function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  return false;
}

export function mergeDeep<T>(defaults: T, overrides: unknown): T {
  if (overrides === undefined || overrides === null) {
    return defaults;
  }

  if (Array.isArray(defaults)) {
    if (!Array.isArray(overrides) || overrides.length === 0) {
      return defaults;
    }

    return defaults.map((defaultItem, index) => {
      const overrideItem = overrides[index];
      if (overrideItem === undefined || isEmpty(overrideItem)) {
        return defaultItem;
      }

      if (
        typeof defaultItem === "object" &&
        defaultItem !== null &&
        !Array.isArray(defaultItem) &&
        typeof overrideItem === "object" &&
        overrideItem !== null &&
        !Array.isArray(overrideItem)
      ) {
        return mergeDeep(defaultItem, overrideItem);
      }

      return overrideItem;
    }) as T;
  }

  if (typeof defaults === "object" && defaults !== null) {
    if (typeof overrides !== "object" || Array.isArray(overrides)) {
      return isEmpty(overrides) ? defaults : (overrides as T);
    }

    const result = { ...defaults } as Record<string, unknown>;
    const overrideRecord = overrides as Record<string, unknown>;

    for (const key of Object.keys(overrideRecord)) {
      const defaultValue = result[key];
      const overrideValue = overrideRecord[key];

      if (isEmpty(overrideValue)) {
        continue;
      }

      if (Array.isArray(defaultValue) && Array.isArray(overrideValue)) {
        result[key] = mergeDeep(defaultValue, overrideValue);
      } else if (
        typeof defaultValue === "object" &&
        defaultValue !== null &&
        !Array.isArray(defaultValue) &&
        typeof overrideValue === "object" &&
        overrideValue !== null &&
        !Array.isArray(overrideValue)
      ) {
        result[key] = mergeDeep(defaultValue, overrideValue);
      } else {
        result[key] = overrideValue;
      }
    }

    return result as T;
  }

  return isEmpty(overrides) ? defaults : (overrides as T);
}
