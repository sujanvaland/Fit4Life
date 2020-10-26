/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToHome(params) {
    NavigationService.navigate('Home', params);
}

export function navigateToAboutus(params) {
    NavigationService.navigate('Aboutus', params);
}

export function navigateToServices(params) {
    NavigationService.navigate('Services', params);
}

export function navigateToInstruments(params) {
    NavigationService.navigate('Instruments', params);
}

export function navigateToClients(params) {
    NavigationService.navigate('Clients', params);
}

export function navigateToContact(params) {
    NavigationService.navigate('Contact', params);
}

export function navigateToAirVelocity(params) {
    NavigationService.navigate('AirVelocity', params);
}
