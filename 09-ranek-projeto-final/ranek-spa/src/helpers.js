export function serialize(obj){
  return new URLSearchParams(obj).toString();
}