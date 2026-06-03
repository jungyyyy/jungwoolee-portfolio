export function getAtPath(obj: unknown, keyPath: string): unknown {
  const parts = keyPath.split(".");
  let current: unknown = obj;

  for (const part of parts) {
    if (current === null || current === undefined) return undefined;
    if (Array.isArray(current)) {
      current = current[Number(part)];
    } else if (typeof current === "object") {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }

  return current;
}

export function setAtPath(obj: unknown, keyPath: string, value: unknown): void {
  const parts = keyPath.split(".");
  let current: unknown = obj;

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (Array.isArray(current)) {
      current = current[Number(part)];
    } else if (typeof current === "object" && current !== null) {
      current = (current as Record<string, unknown>)[part];
    }
  }

  const last = parts[parts.length - 1];
  if (Array.isArray(current)) {
    current[Number(last)] = value;
  } else if (typeof current === "object" && current !== null) {
    (current as Record<string, unknown>)[last] = value;
  }
}
