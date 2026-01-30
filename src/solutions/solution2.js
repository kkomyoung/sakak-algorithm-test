/**
 * 풀이 2
 * 반복문 활용
 *
 * 개선한 부분
 * - lookAndSay 배열에 모든 항을 누적하지 않도록 수정
 * - 문자열 변환하고 숫자로 다시 변환하는 부분을 배열 상태에서 찾도록 수정
 *
 * 문제점
 * - 여전히 입력값 69부터 메모리 초과 발생함
 * - lookAndSay 배열에 모든 항을 누적하지 않더라도 입력값이 커지만 전체 항이 길어짐
 */
function solution2(n) {
  let lookAndSay = [1]

  // 첫 항이 존재하므로 입력값 n-1번 반복
  for (let i = 1; i < n; i++) {
    const newItem = []

    let count = 1
    let targetNum = lookAndSay[0]

    // 인접한 숫자가 동일한지 판단하고 연속되는 횟수를 세어 새로운 항 생성
    for (let i = 1; i <= lookAndSay.length; i++) {
      if (lookAndSay[i-1] === lookAndSay[i]) {
        count += 1
      }
      else {
        newItem.push(count, targetNum)
        count = 1
        targetNum = lookAndSay[i]
      }
    }

    lookAndSay = newItem
  }

  // n번째 항의 중간지점 두자리 수 m 반환
  const middleIndex = Math.floor(lookAndSay.length / 2)
  return lookAndSay[middleIndex - 1] * 10 + lookAndSay[middleIndex];
}

module.exports = { solution2 };

// 직접 실행 시 테스트: node src/solutions/solution2.js
if (require.main === module) {
  console.log('=== solution2 테스트 ===');
  console.log('n=68 결과:', solution2(68));
}