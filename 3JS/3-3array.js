const arr = ["짱구", "철수"];
arr[2] = "훈이";
arr[1] = "유리";
arr.splice(0, 1);

console.log(arr)

// 1. 문자열 생성
const nameList = ["짱구", "철수"];

// 2. 훈이 추가
// ["짱구", "철수", "훈이"]
nameList.push("훈이");
console.log(nameList);
// 3. 철수 -> 유리
// ["짱구", "유리", "훈이"]
nameList[1] = "유리";
console.log(nameList);

// 4. 짱구 삭제
// ["철수", "훈이"]
nameList.splice(0, 1);
console.log(nameList);