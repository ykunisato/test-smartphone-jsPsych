/* 課題に関するコードを以下に書く */
const instruction = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="text-align: left"> これから画面に２つのスロットマシーンが出てきますので，どちらかを選んでください。</p>' + '<p style="text-align: left">スロットマシーンを選択すると，賞金が得るか失います（なお賞金に羽が生えた絵は賞金を失ったことを意味します）。</p>' + '<p style="text-align: left"> スロットマシーンはどちらかが賞金が出やすいように設定されているので，より多くの賞金を得られる方を選択してください。</p>',
  choices: ['はじめる'],
  prompt: ""
};

const fb_slot1 = [0,1,1,1,0,1,1,1,0,1]

const choice = {
  timeline:[{
    type: jsPsychHtmlButtonResponse,
    stimulus: '',
    choices: ['<div style="position: absolute; top: 50%; left: 20%"><img src="smartphon/stimuli/slot1.png" width="40%"/></div>',
    '<div style="position: absolute; top: 50%; right: 20%"><img src="smartphon/stimuli/slot2.png" width="40%"/></div>'],
    button_html: '%choice%'
  }],
  timeline_variables:  fb_slot1
};

const instruction_end = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="text-align: left">お疲れ様でした課題はこれで終了です。</p>',
  choices: "",
  prompt: "",
  trial_duration: 2000
};

/*タイムラインの設定*/
const timeline = [instruction,choice, instruction_end];
