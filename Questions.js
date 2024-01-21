// 解答の選択肢一覧を取得
const answersList = document.querySelectorAll('ol.answers li');
// クリックされたときの処理を仕込む
answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

// 正しい答え(固定値なのでconstで定義)
const correctAnswers = {
    question1: 'B',
    question2: 'A',
    question3: 'B',
    question4: 'C',
    question5: 'D',
    question6: 'B',
};

function checkClickedAnswer(event) {
    // addEventListenerによって反応した要素(この実装ではli要素)
    const clickedAnswerElement = event.currentTarget;
    // 選択した答え(A,B,C,D)
    const selectedAnswer = clickedAnswerElement.dataset.answer;

    // 親要素のolから、data-idの値を取得
    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
    // 正しい答え(A,B,C,D)
    const correctAnswer = correctAnswers[questionId];

    // メッセージを入れる変数を用意
    let message;
    // カラーコードを入れる変数を用意
    let answerColorCode;

    // 答えが正しいか判定
    if (selectedAnswer === correctAnswer) {
        // 正しい答えだったとき
        message = '正解です！おめでとう！';
        answerColorCode = '';
    } else {
        // 間違えた答えだったとき
        message = 'ざんねん！不正解です！';
        answerColorCode = '#f05959';
    }

    // アラートで正解・不正解を出力
    alert(message);

    // 色を変更(間違っていたときだけ色が変わる)
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    // 答え全体を表示
    document.querySelector('div#section-correct-answer').style.display = 'block';
}