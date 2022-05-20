export const goToHomePage = (navigate) => {
    navigate("/");
  };
  
  export const goToAdminHome = (navigate) => {
    navigate("/admin/trips/list");
  };
  
  export const goToApplicationForm = (navigate) => {
    navigate("/trips/application");
  };
  
  export const goToCreateTrip = (navigate) => {
    navigate("/admin/trips/create");
  };
  
  export const goToListTrips = (navigate) => {
    navigate("/trips/list");
    console.log(navigate);
  };
  
  export const goToLogin = (navigate) => {
    navigate("/login");
  };
  
  export const goToTripDetails = (navigate) => {
    navigate("/admin/trips/:id");
  };
  
  export const goBack = (navigate) => {
    navigate(-1);
  };