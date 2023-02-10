/* 課題に関するコードを以下に書く */
const instruction = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="text-align: left"> これから画面に２つのスロットマシーンが出てきますので，どちらかを選んでください。</p>' + '<p style="text-align: left">スロットマシーンを選択すると，賞金が得るか失います（なお賞金に羽が生えた絵は賞金を失ったことを意味します）。</p>' + '<p style="text-align: left"> スロットマシーンはどちらかが賞金が出やすいように設定されているので，より多くの賞金を得られる方を選択してください。</p>',
  choices: ['はじめる'],
  prompt: ""
};

const trial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '',
  choices: ['<div style="position: absolute; top: 50%; left: 20%"><img src="smartphon/stimuli/slot1.png" width="200px"/></div>',
    '<div style="position: absolute; top: 50%; right: 20%"><img src="smartphon/stimuli/slot2.png" width="200px"/></div>'],
    button_html: '%choice%'
};

/*タイムラインの設定*/
const timeline = [instruction,trial];
