export const fetchTrucks = () => (
  $.ajax({
    method: "GET",
    url: `api/trucks`
  })
);