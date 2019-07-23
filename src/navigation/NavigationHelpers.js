import NavigationService from './NavigationService';

export const goBack = () => NavigationService.goBack();

export const navigateToDetails = params => NavigationService.navigate('Details', params);
