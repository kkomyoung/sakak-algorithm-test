/**
 * 풀이 1
 * 반복문 활용
 */
function solution1(n) {
  const lookAndSay = [[1]]

  // 첫 항이 존재하므로 입력값 n-1번 반복
  for (let i = 1; i < n; i++) {
    const lastItem = lookAndSay[lookAndSay.length - 1]
    const newItem = []

    // 현재 숫자와 등장 횟수
    let targetNum = lastItem[0]
    let count = 1

    // 인접한 숫자가 동일한지 판단하고 연속되는 횟수를 세어 새로운 항 생성
    for (let i = 1; i <= lastItem.length; i++) {
      if (lastItem[i-1] === lastItem[i]) {
        count += 1
      }
      else {
        newItem.push(count, targetNum)
        count = 1
        targetNum = lastItem[i]
      }
    }

    lookAndSay.push(newItem)
  }

  // n번째 항의 중간지점 두자리 수 m 반환
  const target = lookAndSay[n-1].join('')
  const middleIndex = Math.floor(target.length / 2)

  return Number(target.slice(middleIndex - 1, middleIndex + 1));
}

module.exports = { solution1 };

// 직접 실행 시 테스트: node src/solutions/solution1.js
if (require.main === module) {
  console.log('=== solution1 테스트 ===');
  console.log('n=5 결과:', solution1(5));
}