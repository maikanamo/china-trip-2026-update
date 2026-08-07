fetch("data/trip.json")
  .then(response => response.json())
  .then(data => {

    // 旅行情報表示
    const tripInfo = document.getElementById("trip-info");

    tripInfo.innerHTML = `
      ${data.trip.title}<br>
      ${data.trip.startDate} 〜 ${data.trip.endDate}<br>
      ${data.trip.cities.join(" × ")}
    `;


    // 日程表示
    const schedule = document.getElementById("schedule");
    schedule.innerHTML = "";
    data.days.forEach(day => {

      const dayCard = document.createElement("div");
      dayCard.className = "day-card";


      let events = "";

      day.schedule.forEach(item => {

        events += `
          <div class="event">
            <div class="time">
              ${item.time}
            </div>

            <div class="place">
              📍${item.place}
            </div>

            <div>
              ${item.activity}
            </div>
          </div>
        `;

      });


      dayCard.innerHTML = `
        <h3>
          ${day.date} ${day.day}
        </h3>

        <p>
          ${day.city}<br>
          ${day.title}
        </p>

        <div class="timeline">
          ${events}
        </div>
      `;


      schedule.appendChild(dayCard);

    });

    // 🚆 寝台列車ボタン機能

const trainButton = document.getElementById("train-button");
const trainSection = document.getElementById("train-section");
const trainCard = document.getElementById("train-card");

if (trainButton) {

  trainButton.addEventListener("click", () => {
 
    if (!trainSection.classList.contains("hidden")) {

    trainSection.classList.add("hidden");

    return;

  }
    
    const trainDay = data.days.find(day => day.train);

    if (trainDay) {

      trainCard.innerHTML = `

        <div class="day-card train-card">

          <h3>
            🚆 ${trainDay.train.name}
          </h3>

          <p>
            ${trainDay.train.departure}
            ${trainDay.train.departureTime}
            <br>
            ↓
            <br>
            ${trainDay.train.arrival}
            ${trainDay.train.arrivalTime}
          </p>

          <p>
            🎫 発券番号<br>
            ${trainDay.train.ticketNumber}
          </p>

          <p>
            🚪 检票口<br>
            ${trainDay.train.gate}
          </p>

          <p>
            🛏 座席<br>
            ${trainDay.train.seat.join("<br>")}
          </p>

        </div>

      `;

      trainSection.classList.remove("hidden");

    }

  });

}

// 🏨 ホテルボタン機能

const hotelButton = document.getElementById("hotel-button");
const hotelSection = document.getElementById("hotel-section");
const hotelCard = document.getElementById("hotel-card");


if (hotelButton) {

  hotelButton.addEventListener("click", () => {


    if (!hotelSection.classList.contains("hidden")) {

      hotelSection.classList.add("hidden");

      return;

    }


    hotelCard.innerHTML = `

      <div class="day-card">

        <h3>🇨🇳 北京</h3>

        <p>
          🏨 ホテル ニューオータニ長富宮
        </p>

        <p>
          CHECK IN<br>
          8/11
          <br><br>
          CHECK OUT<br>
          8/14
        </p>


        <hr>


        <h3>🇨🇳 西安</h3>

        <p>
          🏨 西安印力诺富特酒店
        </p>

        <p>
          CHECK IN<br>
          8/15
          <br><br>
          CHECK OUT<br>
          8/17
        </p>

      </div>

    `;


    hotelSection.classList.remove("hidden");


  });

}

// 🎫 予約情報ボタン機能

const reservationButton = document.getElementById("reservation-button");
const reservationSection = document.getElementById("reservation-section");
const reservationCard = document.getElementById("reservation-card");


if (reservationButton) {

  reservationButton.addEventListener("click", () => {


    if (!reservationSection.classList.contains("hidden")) {

      reservationSection.classList.add("hidden");

      return;

    }


reservationCard.innerHTML = `

<div class="day-card reservation-card">


<details>
<summary>✈️ 航空券</summary>


<h3>
往路 東京 → 北京
</h3>

<p>
📅 2026年8月11日
</p>

<p>
09:20<br>
NRT 成田国際空港 T1
</p>

<p>
✈️ KE706<br>
大韓航空<br>
エコノミー<br>
Airbus A330-300<br>
軽食
</p>

<p>
11:45<br>
ICN 仁川国際空港 T2
</p>

<p>
🔄 乗継 2時間55分<br>
手荷物受け取り・再預け不要
</p>

<p>
14:40<br>
ICN 仁川国際空港 T2
</p>

<p>
✈️ OZ335<br>
アシアナ航空<br>
エコノミー<br>
Airbus A321neo<br>
機内食
</p>

<p>
15:50<br>
PEK 北京首都国際空港 T3
</p>


<hr>


<p>
🎫 航空会社予約番号<br>
7Q4TQJ
</p>

<p>
🎟 eチケット番号<br>
988-4844774184<br>
988-4844774185
</p>


<hr>


<h3>
復路 西安 → 東京
</h3>


<p>
📅 2026年8月17日
</p>

<p>
10:25<br>
XIY 西安咸陽国際空港 T5
</p>

<p>
✈️ MU203<br>
中国東方航空<br>
エコノミー<br>
Airbus A320-212<br>
機内食あり
</p>

<p>
13:35<br>
HKG 香港国際空港 T1
</p>

<p>
🔄 乗継 4時間<br>
⚠️ 手荷物受取・再預け必要
</p>

<p>
17:35<br>
HKG 香港国際空港 T2
</p>

<p>
✈️ UO622<br>
香港エクスプレス<br>
エコノミー<br>
Airbus A321neo<br>
機内食なし
</p>

<p>
22:55<br>
HND 羽田空港 T3
</p>


<p>
🎫 航空会社予約番号<br>
NH519D<br>
B8IIRJ
</p>

<p>
🎟 eチケット番号<br>
781-9447949264<br>
781-9447949265
</p>


</details>




<details>

<summary>
🚆 寝台列車
</summary>


<p>
D967
</p>

<p>
北京豊台 20:41<br>
↓<br>
西安北 05:14
</p>

<p>
🎫 発券番号<br>
E3W9973618
</p>

<p>
🚪 检票口<br>
28A
</p>

<p>
🛏 座席<br>
3车厢3号下铺<br>
4号上铺
</p>


</details>




<details>

<summary>
🏯 8/12 北京観光
</summary>


<p>
🏯 天安門広場<br>
WeChat予約済<br>
午前
</p>


<p>
🏯 故宮<br>
Trip.comツアー予約済<br>
10:00開始
</p>


</details>


<details>

<summary>
🏔 8/13 慕田峪長城
</summary>


<p>
🚌 慕田峪行きバス<br>
WeChat予約済<br>
東直門駅B1口<br>
8:00出発<br>
支払い：現地
</p>


<p>
🏔 慕田峪長城<br>
入場券＋場内シャトルバス<br>
Trip.com予約済<br>
QRコード：予約メール
</p>


<p>
🚡 登りリフト＋下スライダー<br>
Trip.com予約済
</p>


</details>




<details>

<summary>
👘 8/15 漢服体験
</summary>


<p>
超越汉服<br>
WeChat予約済<br>
午後
</p>


</details>




<details>

<summary>
🏺 8/16 兵馬俑
</summary>


<p>
🚌 行きシャトルバス<br>
Trip.com予約済
</p>


<p>
予約番号<br>
1385434884983009
</p>


<p>
確認キー<br>
8773
</p>


<hr>


<p>
🏺 兵馬俑入場チケット<br>
Trip.com予約済
</p>


<hr>


<p>
🚌 帰りシャトルバス<br>
Trip.com予約済
</p>


<p>
予約番号<br>
1385434884984816
</p>


<p>
確認キー<br>
9566
</p>


</details>


</div>

`;

    reservationSection.classList.remove("hidden");


  });

}

  })
  .catch(error => {
    console.error("データ読み込みエラー:", error);
  });
