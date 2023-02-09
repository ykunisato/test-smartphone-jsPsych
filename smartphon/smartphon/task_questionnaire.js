/* 課題に関するコードを以下に書く */
const scale = {
    '全く違うと思う': 1,
    'おおよそ違うと思う': 2,
    '少し違うと思う': 3,
    'どちらでもない': 4,
    '少しそう思う': 5,
    'まあまあそう思う': 6,
    '強くそう思う': 7,
  };
/* 質問紙の設定 */
const likert_page = {
    type: jsPsychSurveyMatrixLikert,
    questions: [
      {prompt: '心理学のことが好きだ', required: true, name: '好き', reverse_item: false},
      {prompt: '心理学のことを一日中考えている', required: true, name: '考える', reverse_item: true},
      {prompt: '心理学のことを悪く言われると気分が悪い', required: true, name: '気分悪い'},
      {prompt: '私は心理学のために尽くすタイプだ', required: false, name: '尽くす'}
    ],
    randomize_question_order: false,
    scale: scale,
    column_header_alignment: 'bottom', // 'top': 上揃い, 'center': 中揃い, 'bottom': 下揃い
    preamble: 'この質問紙はあなたの心理学に対する感情を測定するものです。<br> 以下の項目をよく読んで，あなた自身にどのくらい当てはまるか，当てはまるものをクリックしてください。',
    cellpadding: 16,
    button_label: '次へ',
    autocomplete: true
  };
/*タイムラインの設定*/
const timeline = [likert_page];