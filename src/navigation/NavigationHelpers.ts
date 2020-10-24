import NavigationService from "./NavigationService";

export const goBack = () => NavigationService.goBack();

export const navigateToDetails = (params?: object) =>
  NavigationService.navigate("Details", params);
