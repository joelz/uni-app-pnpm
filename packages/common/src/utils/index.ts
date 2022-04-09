export function isObject(x: unknown) {
  return typeof x === 'object';
}

export function stringifyQuery(
  obj: Record<string, string | undefined>
): string {
  let str = '';
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      str = `${str}&${encodeURIComponent(key)}=${encodeURIComponent(
        obj[key]!
      )}`;
    }
  });
  if (str) {
    str = str.replace(/^&/, '?');
  }

  return str;
}

export function rpxToPx(rpx: number) {
  let ratio = 0.5;
  try {
    const systemInfo = uni.getSystemInfoSync();
    ratio = systemInfo.screenWidth / 750;
  } catch {}

  return Number((rpx * ratio).toFixed(5));
}

export function pxToRpx(px: number) {
  let ratio = 2;
  try {
    const systemInfo = uni.getSystemInfoSync();
    ratio = 750 / systemInfo.screenWidth;
  } catch {}

  return Number((px * ratio).toFixed(5));
}

// const getPositionPrefix = (format?: Format) =>
//   format ? t(`constants.index.format.${format}` as const) + ' ' : '';

// export const formatPosition = (
//   positionItem?: PositionItem,
//   format?: Format
// ) => {
//   if (!positionItem) {
//     return '';
//   }

//   const prefix = getPositionPrefix(format);
//   const position = [positionItem.buildingName, positionItem.floorName];
//   if (positionItem.area || positionItem.roomName) {
//     position.push((positionItem.area ?? positionItem.roomName)!);
//   }

//   return `${prefix}${position.join('-')}`;
// };

// export const formatPositions = (
//   positionItems?: PositionItem[],
//   format?: Format
// ) => {
//   if (!positionItems) return '';
//   return `${getPositionPrefix(format)}${positionItems
//     .map((pos) => formatPosition(pos))
//     .join(', ')}`;
// };

export function formatPhoneNumber2(phoneNumber: string) {
  if (!phoneNumber)
    return '';
  return phoneNumber.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1 $2 $3');
}

export function formatNumberPlate(numberPlate: string) {
  return numberPlate.replace(/^(..)(.+)$/, '$1·$2');
}

export function processString(str: string) {
  return str.trim().replace(/\s+/g, ' ');
}

export function formatMoney(money: number) {
  return '¥ ' + money.toFixed(2);
}

export function formatMoneyThousand(money: number | string, toFixed?: number) {
  if (!toFixed) {
    toFixed = 0;
  }
  return (Number(money) || 0).toFixed(toFixed).replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export function stripHtmlTags(originalString: string) {
  const escapers = [
    [/&nbsp;/gi, ' '],
    [/&lt;/gi, '<'],
    [/&gt;/gi, '>'],
    [/&quot;/gi, '"'],
    [/&apos;/gi, "'"],
    [/&amp;/gi, '&'],
  ];
  originalString = originalString.replace(/(<([^>]+)>)/gi, "");
  escapers.forEach(escaper => {
    originalString = originalString.replace(escaper[0], escaper[1] as string)
  })
  return originalString;
}
