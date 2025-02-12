// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
export function secondInterval(cb: () => void): number {
  return setInterval(cb, 1000);
}
