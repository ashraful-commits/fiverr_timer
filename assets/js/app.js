const date_time = document.getElementById("date_time");
const result = document.querySelector(".result");

date_time.addEventListener("submit", (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const { date, time } = Object.fromEntries(form_data.entries());
  let setInt = setInterval(() => {
    const current_time = Date.now();
    const setTime = new Date(date + " " + time);
    let orderTime = Math.floor(setTime.getTime() - current_time);

    let total_sec = Math.floor(orderTime / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hour = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hour / 24);

    let hour = total_hour - total_day * 24;
    let min = total_min - total_day * 24 * 60 - hour * 60;
    let second =
      total_sec - total_day * 24 * 60 * 60 - hour * 60 * 60 - min * 60;

    result.innerHTML = `
        <div class="d-flex justify-content-between px-2 py-3  text-white">
            <div style="width:100px; height:100px;" class="d-flex flex-column bg-primary px-2 py-3 text-white">
            <span class="d-inline-block h5">${total_day}</span>
            <span class="h5 px-2"> Day </span>
            </div>
           
            :
            <div style="width:100px; height:100px;" class="d-flex flex-column bg-primary px-2 py-3 text-white">
            <span class="d-inline-block h5">${hour}</span>
            <span class="h5"> Hour </span>
            </div>
            :
            <div style="width:100px; height:100px;" class="d-flex flex-column bg-primary px-2 py-3  text-white">
            <span class="d-inline-block h5">${min}</span>
            <span class="h5">Munites</span>
            </div>
            :
            <div style="width:100px; height:100px;" class="d-flex flex-column bg-primary px-2 py-3  text-white">
            <span class="d-inline-block h5">${second}</span>
            <span class="h5">Second</span>
            </div>
            </div>
            `;
    if (total_sec == 0) {
      clearInterval(setInt);
    }
  }, 1000);
});
