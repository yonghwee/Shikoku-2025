let map;

async function InitMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const geocoder = new google.maps.Geocoder();

  map = new Map(document.getElementById("map"), {
    center: { lat: MapMeta.lat, lng: MapMeta.lng },
    zoom: MapMeta.zoom,
    mapId: '9825eb8ec8253a31'
  });

  //const featureStyleColors = ['#5f88ef', '#ee6399', '#aaaa00', '#198e8e', '#dd0000', '#6e55bb', '#dd33dd']
  const featureStyleColors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#000000'];
  
  for (let i = 0; i < Trip.length; i++) {
    if (Trip[i].hide) { continue; }

    const TripMarker = document.createElement("div");
    TripMarker.className = ['trip', ['trip', Trip[i].day % featureStyleColors.length].join('')].join(' ');
    
    const TripDay = document.createElement("div");
    let dt = new Date(TripStartDate.toDateString());
    dt.setDate(dt.getDate() + Trip[i].day - 1);
    TripDay.textContent = ['Day', Trip[i].day, ['(', dt.toLocaleDateString(), ')'].join('')].join(' ');
    TripMarker.appendChild(TripDay);

    const TripDetails = document.createElement("div");
    TripDetails.textContent = DestinationName(Trip[i]);
    TripMarker.appendChild(TripDetails);

    const latlng = geocoder.geocode( { 'address': DestinationAddr(Trip[i]) }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        const marker = new AdvancedMarkerElement({
          map,
          position: { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() },
          content: TripMarker,
        });
      }
    });
  }

  function DisplayRoute(origin, destination, waypoints, service, display) {
    service
      .route({
        origin: origin,
        destination: destination,
        waypoints: waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((result) => {
        display.setDirections(result);
      })
      .catch((e) => {
        alert("Could not display directions due to: " + e);
      });
  }

  let RouteStart = 0, Route = [];
  const RouteLength = 14;
  const Waypoints = Trip.filter(trip => !trip.hasOwnProperty('waypoint'));
  do {
    Route = Waypoints.slice(RouteStart, RouteStart + RouteLength);
    if (Route.length) {
      DisplayRoute(
        DestinationAddr(Route[0]),
        DestinationAddr(Route[Route.length - 1]),
        Route.slice(1, -1).map(trip => {
          return { location: DestinationAddr(trip) };
        }),
        new google.maps.DirectionsService(),
        new google.maps.DirectionsRenderer({draggable: true, map, polylineOptions: {strokeColor: "Red", strokeWeight: 4 }, suppressMarkers: true }),
      );
      RouteStart = RouteStart + RouteLength - 1;
    }
  } while (Route.length);

  function DestinationName(dest) {
    if (dest.en) {
      return dest.en;
    } else if (dest.jp) {
      return dest.jp;
    } 
  };

  function DestinationAddr(dest) {
    if (dest.addr) {
      return dest.addr;
    } else if (dest.en && dest.jp) {
      return [dest.en, dest.jp].join(' ');
    } else if (dest.en) {
      return dest.en;
    } else if (dest.jp) {
      return dest.jp;
    }
  };
}


InitMap();
