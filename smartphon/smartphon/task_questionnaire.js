var likert_scale = [
  "全く当てはまらない", 
  "当てはまらない", 
  "どちらでもない", 
  "当てはまる", 
  "とてもよく当てはまる"
];

var questionnaire = {
  type: jsPsychSurveyLikert,
  questions: [
    {prompt: "私は不安を感じている", name: 'anxiety', labels: likert_scale},
    {prompt: "私は憂うつに感じている", name: 'depression', labels: likert_scale},
    {prompt: "私はイライラしている", name: 'irritated', labels: likert_scale},
    {prompt: "私は楽しいと感じている", name: 'joy', labels: likert_scale},
    {prompt: "私はリラックスしている", name: 'relax', labels: likert_scale},
  ],
  randomize_question_order: true,
  button_label : "次へ"
};
/*タイムラインの設定*/
const timeline = [questionnaire]