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

  
  .catch(error => {
    console.error("データ読み込みエラー:", error);
  });
