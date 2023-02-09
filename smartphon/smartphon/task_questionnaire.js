var trial = {
  type: jsPsychSurvey,
  pages: [
    [
      {
        type: 'html',
        prompt: 'この質問紙はあなたの心理学に対する感情を測定するものです。<br> 以下の項目をよく読んで，あなた自身にどのくらい当てはまるか，当てはまるものを選んでください',
      },
      {
        type: 'multi-choice',
        prompt: "心理学のことが好きだ", 
        name: 'VegetablesLike', 
        options: ['全く違うと思う','おおよそ違うと思う','少し違うと思う','どちらでもない','少しそう思う','まあまあそう思う','強くそう思う'], 
        required: true
      }, 
      {
        type: 'multi-choice',
        prompt: "心理学のことを一日中考えている", 
        name: 'FruitLike', 
        options: ['全く違うと思う','おおよそ違うと思う','少し違うと思う','どちらでもない','少しそう思う','まあまあそう思う','強くそう思う'],  
        required: false,
      }, 
      {
        type: 'multi-choice',
        prompt: "私は心理学のために尽くすタイプだ", 
        name: 'FruitLike', 
        options: ['全く違うと思う','おおよそ違うと思う','少し違うと思う','どちらでもない','少しそう思う','まあまあそう思う','強くそう思う'],  
        required: false,
      }
    ]
  ],
};
/*タイムラインの設定*/
const timeline = [trial]