/* 課題に関するコードを以下に書く */
const instruction = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="text-align: left"> これから画面に２つのスロットマシーンが出てきますので，どちらかを選んでください。</p>' + '<p style="text-align: left">スロットマシーンを選択すると，賞金が得るか失います（なお賞金に羽が生えた絵は賞金を失ったことを意味します）。</p>' + '<p style="text-align: left"> スロットマシーンはどちらかが賞金が出やすいように設定されているので，より多くの賞金を得られる方を選択してください。</p>',
  choices: ['はじめる'],
  prompt: ""
};

const choice = {
  timeline:[{
    type: jsPsychHtmlButtonResponse,
    stimulus: '',
    choices: ['<div style="position: fixed; top: 50%; left: 0%"><img src="smartphon/stimuli/slot1.png" width="20%"/></div>',
    '<div style="position: fixed; top: 50%; right: 0%"><img src="smartphon/stimuli/slot2.png" width="20%"/></div>'],
    button_html: '%choice%'
  },{
    type: jsPsychHtmlButtonResponse,
    stimulus: '',
    choices: function(){
      var last_select = jsPsych.data.get().last(1).values()[0].response;
      var fb = jsPsych.timelineVariable('fb_slot1');
      if (last_select==0 && fb==1){
        return ["<p style='position: absolute; top: 40%;left: 20%'><img src='smartphon/stimuli/gain.gif' width='50%'/></p>"]
      } else if (last_select==0 && fb==0){
        return ["<p style='position: absolute; top: 40%;left: 20%'><img src='smartphon/stimuli/loss.gif' width='50%'/></p>"]
      } else if (last_select==1 && fb==0){
        return ["<p style='position: absolute; top: 40%;left: 20%'><img src='smartphon/stimuli/gain.gif' width='50%'/></p>"]
      } else if (last_select==1 && fb==1){
        return ["<p style='position: absolute; top: 40%;left: 20%'><img src='smartphon/stimuli/loss.gif' width='50%'/></p>"]
      }
    },
    button_html: '%choice%',
    trial_duration: 1500,
  }],
  timeline_variables: [
        { fb_slot1: 0 },
        { fb_slot1: 1 },
        { fb_slot1: 1 },
        { fb_slot1: 1 },
        { fb_slot1: 0 },
        { fb_slot1: 1 },
        { fb_slot1: 1 },
        { fb_slot1: 1 },
        { fb_slot1: 0 },
        { fb_slot1: 1 }
    ]
};

const fb_slot1 = [0,1,1,1,0,1,1,1,0,1]

const instruction_end = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="text-align: left">お疲れ様でした課題はこれで終了です。</p>',
  choices: "",
  prompt: "",
  trial_duration: 2000
};

/*タイムラインの設定*/
const timeline = [instruction,choice, instruction_end];
