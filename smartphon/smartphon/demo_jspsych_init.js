var jsPsych = initJsPsych({
  on_finish: function() {
          jsPsych.data.get().localSave('csv', 'data.csv');
  }
});

/* 全画面化とスタート */
var fullscreen = {
    type: jsPsychFullscreen,
    message: "<p><span style='font-size:20pt;'>それでは課題をはじめます。</span></p>"+
             "<p><span style='font-size:20pt;'>以下の「開始」を押すと，全画面になって課題がはじまります。</span></p>",
    button_label: "<p style='font-size:20px'>開始</p>",
    fullscreen_mode: true,
  };