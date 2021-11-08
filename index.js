let btn = document.getElementById("check-btn");
btn.addEventListener("click", function () {
  getWeather();
  show();
});

function getWeather() {
  const cityName = document.getElementById("cityname").value;

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=01c0bb6f2e51a78a5ff3988e06a1a051&units=metric`
    )

    .then(function (response) {
      console.log(response);
      console.log(response.data.main.temp);

      document.getElementById(
        "result0"
      ).innerText = `${response.data.main.temp.toFixed(0)} °C`;
      document.getElementById(
        "result1"
      ).innerText = `${response.data.main.feels_like.toFixed(0)} °C`;
      document.getElementById(
        "result2"
      ).innerText = `${response.data.main.humidity.toFixed(0)} %`;
      document.getElementById("result3").innerText =
        response.data.weather[0].main;
    });
}

function show() {
  let show = document.getElementById("show");
  const cityName = document.getElementById("cityname").value;
  if (cityName === "") {
    show.style.display = "none";
  } else {
    show.style.display = "block";
  }
}
