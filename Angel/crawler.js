const puppeteer = require("puppeteer");
const cheerio = require('cheerio');
const axios = require('axios')

async function main(){

	let browser = await puppeteer.launch({headless:false})
	let page = await browser.newPage();

  await page.goto(`https://www.sk7mobile.com/prod/data/callingPlanList.do?refCode=USIM`);
  const content = await page.content();
  const $ = cheerio.load(content);

  const list = $('#frm > div > div.acc-group.planList > ');
  list.each((idx, data)=>{
    const data_list = [];
    const item_list = $(`#frm > div > div.acc-group.planList > dl:nth-child(${idx+1}) > dd > div >`);
    item_list.each((item_idx, item_data)=>{
      var unlimit = $(`#frm > div > div.acc-group.planList > dl:nth-child(${idx+1}) > dd > div > a:nth-child(${item_idx+1}) > div > div > strong > span.badge-wp > span.badge5-bg`).text();
      const base = $(`#frm > div > div.acc-group.planList > dl:nth-child(${idx+1}) > dd > div > a:nth-child(${item_idx+1}) > div > div > div > ul > li:nth-child(1)`).text();
      const call  = $(`#frm > div > div.acc-group.planList > dl:nth-child(${idx+1}) > dd > div > a:nth-child(${item_idx+1}) > div > div > div > ul > li:nth-child(2)`).text();
      const message = $(`#frm > div > div.acc-group.planList > dl:nth-child(${idx+1}) > dd > div > a:nth-child(${item_idx+1}) > div > div > div > ul > li:nth-child(3)`).text();
      
      if(unlimit == '') unlimit = '0';
      data_list.push([unlimit, base, call, message]);
      console.log(data_list[item_idx]);
      // console.log(unlimit + " " + base + " " + call + " " + message);
    })
  });

	browser.close();
}
main();

let generation_tag_list = ["z_Generation", "m_Generation", "x_Generation", "b_Generation"];
let using_habit_tag_list = ["message_AND_call", "web_AND_sns", "video_content"];

let user_select, use_unlimit_plan, select_options;

if (generation_tag_list[user_select] === "z_Generation") {
    if (using_habit_tag_list[user_select] === "message_AND_call") {
        select_options = "message_AND_call_unlimit";
    } else if (using_habit_tag_list[user_select] === "web_AND_sns") {
        console.log("무제한 요금제 사용한다면 1, 사용하지 않는다면 0");
        use_unlimit_plan = prompt();
        if (use_unlimit_plan) {
            select_options = "1_to_3_Mbps";
        } else select_options = "under_5GB_one_month";
    }
}

