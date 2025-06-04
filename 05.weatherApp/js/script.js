async function search() {
    const city = document.getElementById("cityName").value;
    const API_KEY = "bc1f47fffcd51c0067262eaa24077332";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);

    try {
        document.getElementById("demo1").innerHTML = "Loading...";

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found!");
        }

        const data = await response.json();
        const temp = Math.round(data.main.temp);
        const cityName = data.name;
        const country = data.sys.country;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const description = data.weather[0].description;

        document.getElementById("demo1").innerHTML = `
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-flex justify-content-between mb-4 pb-2">
                  <div>
                    <h2 class="display-2"><strong>${temp}°C</strong></h2>
                    <p class="text-muted mb-0">${cityName}, ${country}</p>
                    <p class="text-muted mb-0 text-capitalize">${description}</p>
                  </div>
                  <div>
                    <img src="${iconUrl}" width="150px" alt="${description}">
                  </div>
                </div>
              </div>
            </div>
        `;

    } catch (error) {
        document.getElementById("demo1").innerHTML = `<p class="text-danger">${error.message}</p>`;
    }
}
