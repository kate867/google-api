

function initMap() {
    map = new google.maps.Map(document.getElementById("carte"), {
      center: {lat: 43.63406754781381, lng: 3.872684662541301},
      zoom: 6,
      mapId: '2e26fd7d5ad2c279'
    });
    infoWindow = new google.maps.InfoWindow();

    const marker = new google.maps.Marker({
     position: {lat: 43.63406754781381, lng: 3.872684662541301},
     map,
     title: "My house",
     icon: {
       url: "images/mapicon-shroom.png",
       scaledSize: new google.maps.Size(30,30)
     },
     animation: google.maps.Animation.DROP
     });

     const infowindow = new google.maps.InfoWindow({
      content: "I live here!",
      });
            
    marker;addEventListener("click", () => {
    infowindow.open(map, marker);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
    });
  
    const locationButton = document.createElement("button");
  
    locationButton.textContent = "Localisez-moi";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
  
            infoWindow.setPosition(pos);
            infoWindow.setContent("Location found.");
            infoWindow.open(map);
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    });
  }
  
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }
  

