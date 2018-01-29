export function checkData(id, arr) {
  const result = arr.filter((item)=>{
    return item.id === id;
  });
  if (result.length) {
    return true
  } else {
    return false
  }
}