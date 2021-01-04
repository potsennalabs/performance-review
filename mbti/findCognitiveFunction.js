/**
 * @param {string} mbti
 * @return {{
 *  dominant: string,
 *  auxiliary: string,
 *  tertiary: string,
 *  inferior: string,
 * }}
 */

export function findCognitiveFunction(mbti) {
  let func1 = mbti[1];
  let func2 = mbti[2];
  const attr = mbti[3];

  let extro = "";
  let intro = "";

  if (attr === "P") {
    extro = func1 + "e";
    intro = func2 + "i";
  }
}
