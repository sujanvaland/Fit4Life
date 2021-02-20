/* App config for apis
 */
const ApiConstants = {
    BASE_URL: 'https://fit4life-299406.uc.r.appspot.com/api',
    LANGUAGE: 'language',
    SITEURL:'https://fit4life-299406.uc.r.appspot.com/',
    //API PATH
    LOGINPATH: 'authenticate',
    SIGNUPPATH:'register',
    ACCOUNTDETAIL:'account',
    PERSONALINFORMATION:'personal-informations',
    USERPLAN:'user-plans',
    UPDATEUSERPROFILE:'personal-information/',
    UPDATEPROFILEIMAGE:'personal-information',
    PAYMENTS:'payments',
    CONTRACTS:'user-contracts',
    SIGNCONTRACT:'user-contracts/sign',
    HEALTHPARAMETERS:'user-health-parameters',
    ALLHEALTHPARAMETER:'health-parameters',
    ADDTOHEALTHPARAMETER:'user-health-parameter/',
    UPCOMING_EVENTLIST: 'events/feed',
    EVENTLIST: 'event-attendances',
    CUSTOMEREVENTDETAIL: 'events',
    COORDINATOREVENTDETAIL: 'events',
    EVALUATEEVENT:'event-attendances/evaluate',
    EVENTATTENDANCES:'event-attendances',
    SUBSCRIBENOW:'event-attendances/suscribe',
    

    // Update before build
    BUILDNO: "b01",
    VERSION: "1.0.0"
};

export default ApiConstants;
