function solution(n) {
    let result = 0
  n = n.toString()
  for (let i = 0; i < n.length; i++){
      result += parseInt(n[i])
  }
  return result; 
}