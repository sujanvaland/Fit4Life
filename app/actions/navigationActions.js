/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToHome(params) {
    NavigationService.navigate('Home', params);
}

export function navigateToLogin(params) {
    NavigationService.navigate('Login', params);
}

export function navigateToSignup(params) {
    NavigationService.navigate('Signup', params);
}

export function navigateToForgotPassword(params) {
    NavigationService.navigate('Forgotpassword', params);
}

export function navigateToChangePassword(params) {
    NavigationService.navigate('ChangePassword', params);
}

export function navigateToPersonalDetail(params) {
    NavigationService.navigate('MyProfile', params);
}

export function navigateToHealthParameterPage(params) {
    NavigationService.navigate('HealthProfile', params);
}

export function navigateToAddHealthProfile(params) {
    NavigationService.navigate('AddHealthProfile', params);
}

export function navigateToCordinatorFeed(params) {
    NavigationService.navigate('CordinatorFeed', params);
}


export function navigateToCustomerDetailEvent(params) {
    NavigationService.navigate('CustomerDetailEvent', params);
}

export function navigateToCordinatorDetailEvent(params) {
    NavigationService.navigate('CordinatorDetailEvent', params);
}

export function navigateToCalendar(params) {
    NavigationService.navigate('Calendar', params);
}

export function navigateToUpdateProfile(params) {
    NavigationService.navigate('UpdateProfile', params);
}

export function navigateToEditProfileImage(params) {
    NavigationService.navigate('EditProfileImage', params);
}

export function navigateToContracts(params) {
    NavigationService.navigate('Contracts', params);
}