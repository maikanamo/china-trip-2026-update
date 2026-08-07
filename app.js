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
})

  
  .catch(error => {
    console.error("データ読み込みエラー:", error);
  });
