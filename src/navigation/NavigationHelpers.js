import NavigationService from './NavigationService';

export const goBack = () => NavigationService.goBack();

export const navigateToHome = params => NavigationService.navigate('Home', params);
