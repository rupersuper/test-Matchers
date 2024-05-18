// TODO: write your code here
export default function HealtSort(arr) {
  return arr.sort((a, b) => (a.health < b.health ? 1 : -1));
}
