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

  })

  // 寝台列車カード表示

const trainCard = document.getElementById("train-card");

const train = data.days.find(day => day.train);

if (train && train.train) {

  trainCard.innerHTML = `

    <div class="day-card train-card">

      <h3>
        🚆 ${train.train.name}
      </h3>

      <p>
        ${train.train.departure}
        ${train.train.departureTime}
        <br>
        ↓
        <br>
        ${train.train.arrival}
        ${train.train.arrivalTime}
      </p>

      <hr>

      <p>
        🎫 発券番号<br>
        ${train.train.ticketNumber}
      </p>

      <p>
        🚪 检票口<br>
        ${train.train.gate}
      </p>

      <p>
        🛏 座席<br>
        ${train.train.seat.join("<br>")}
      </p>

    </div>

  `;

}
  
  .catch(error => {
    console.error("データ読み込みエラー:", error);
  });
