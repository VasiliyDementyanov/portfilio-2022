export const KEY = `3c3fc500-9484-4900-86ba-807c9a07192e`;
export const NAMESPACE = 'dementyanov.ru';
export const COUNT_URL = `https://api.countapi.xyz`;

export const incVisitorCounter = async () => {
  try {
    if (localStorage.getItem('hasVisited') == null) {
      const res = await fetch(`${COUNT_URL}/hit/${NAMESPACE}/${KEY}`);
      if (!res.ok) throw new Error(res.statusText);
      localStorage.setItem('hasVisited', 'true');
    }
  } catch (e) {
    console.log(e);
  }
};
