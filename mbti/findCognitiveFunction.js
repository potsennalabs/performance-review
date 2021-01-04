/**
 * @param {string} mbti
 * @return {{
 *  dominant: string,
 *  auxiliary: string,
 *  tertiary: string,
 *  inferior: string,
 * }}
 */

function categories(type) {
  switch (type) {
    case "I":
      return "E";
    case "E":
      return "I";
    case "S":
      return "N";
    case "N":
      return "S";
    case "T":
      return "F";
    case "F":
      return "T";
    case "J":
      return "P";
    case "P":
      return "J";
  }
}

export function findCognitiveFunction(mbti) {
  let func1 = mbti[1];
  let func2 = mbti[2];
  const attr = mbti[3];

  let extro = "";
  let intro = "";

  if (attr === "P") {
    extro = func1 + "e";
    intro = func2 + "i";
  } else {
    extro = func2 + "e";
    intro = func1 + "i";
  }

  const isExtro = mbti[0] === "E";
  const dominant = isExtro ? extro : intro;
  const auxiliary = isExtro ? intro : extro;

  return {
    dominant,
    auxiliary,
    tertiary: categories(auxiliary[0]) + (isExtro ? "e" : "i"),
    inferior: categories(dominant[0]) + (isExtro ? "i" : "e"),
  };
}
