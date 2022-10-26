function problem6(forms) {
  /**
   * 1. forms에 있는 닉네임 두 글자로 쪼개기 '제이슨' => ['제이', '이슨']
   * 2. spread 연산자로 펼친 후 자료구조 Set을 이용해 중복 제거
   * 3. 중복을 제거하기 전 배열에서 중복 제거한 배열을 하나씩 제거
   * 4. 남은 닉네임은 중복되는 것이므로 includes를 통해 중복되는 닉네임 찾기
   * 5. 닉네임으로 이메일을 찾아서 이메일 정렬
   */
  const twoLettersArray = forms
    .map((info) =>
      info[1]
        .split("")
        .map((string, i, array) => {
          return string + array[i + 1];
        })
        .filter((unit) => !unit.includes("undefined"))
    )
    .flat();

  const removeDuplication = [...new Set(twoLettersArray)];

  for (let i = 0; i < removeDuplication.length; i++) {
    const intersectionIndex = twoLettersArray.indexOf(removeDuplication[i]);
    if (intersectionIndex !== -1) {
      twoLettersArray.splice(intersectionIndex, 1);
    }
  }

  const duplication = [...new Set(twoLettersArray)];

  const answer = forms
    .filter((info) => duplication.some((v) => info[1].includes(v)))
    .map((info) => info[0])
    .sort();

  return answer;
}

module.exports = problem6;
