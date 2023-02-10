/* 課題に関するコードを以下に書く */

const instruction1 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="text-align: left">これから行う課題はスマートホンを横向きにして行います。</p>' + '<p style="text-align: left">イラストの様にスマートホンを横向きにしてください。</p>' + '<p> <img src="smartphon/stimuli/smartphone_yoko.png" width="20%"/></p>',
  choices: ['スマートホンを横向にしたので次へ進む'],
  prompt: ""
};

const instruction2 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="text-align: left"> 画面に２つのスロットマシーンが出てきますので，どちらかを選んでください。スロットマシーンを選択すると，賞金が得るか失います。スロットマシーンのどちらかの方が賞金が出やすいように設定されているので，より多くの賞金を得られる方を選択してください。</p>',
  choices: ['はじめる'],
  prompt: ""
};

const choice = {
  timeline:[{
    type: jsPsychHtmlButtonResponse,
    stimulus: "<p style='position: fixed; top: 0%;left: 30%'><img src='smartphon/stimuli/slot.png' width='60%'/></p>",
    choices: ['左','右']
  },{
    type: jsPsychHtmlButtonResponse,
    stimulus: '',
    choices: function(){
      var last_select = jsPsych.data.get().last(1).values()[0].response;
      var fb = jsPsych.timelineVariable('fb_slot1');
      if (last_select==0 && fb==1){
        return ["<p style='position: fixed; top: 30%;left: 15%'><img src='smartphon/stimuli/gain.gif' width='30%'/></p>"]
      } else if (last_select==0 && fb==0){
        return ["<p style='position: fixed; top: 30%;left: 15%'><img src='smartphon/stimuli/loss.gif' width='30%'/></p>"]
      } else if (last_select==1 && fb==0){
        return ["<p style='position: fixed; top: 30%;left: 15%'><img src='smartphon/stimuli/gain.gif' width='30%'/></p>"]
      } else if (last_select==1 && fb==1){
        return ["<p style='position: fixed; top: 30%;left: 15%'><img src='smartphon/stimuli/loss.gif' width='30%'/></p>"]
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
const timeline = [instruction1,instruction2,choice, instruction_end];
