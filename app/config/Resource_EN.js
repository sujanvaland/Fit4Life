/*
 * Provides universal titles and messages.
 */
import AsyncStorage from '@react-native-community/async-storage';


let AppResources = {
    English : {
        Home:'Home',
        Calendar:'Calendar',
        HealthParameters:'HealthParameters',
        Payments:'Payments',
        Contracts:'Contracts',
        MyProfile:'My Profile',
        Logout:'Log out',
        LogoutQus:'Do you want to logout?',
        Cancel:'Cancel',
        Confirm:'Confirm',
        LogoutTxt:'Logout',
        Ok:'Ok',
        Edit:'Edit',

        // Home Screen
        Coordinator:"Coordinator",
        Detail:"Detail",
        Arrivetime:"Arrive time",
        GetEvaluate:"Get Evaluate",
        UpcomingEvents:"Upcoming Events",
        Result:"Result",
        LastEvents:"Last Events",
        experiencewithus:"How was your experience with us?",
        RateUs:"Please Rate Us",
        Send:"Send",
        Reset:"Reset",

        //Add Health Profile Screen
        AddHealthProfile:"Add Health Profile",
        SelectHealthParameter:"Select Health Parameter",
        Value:"Value",
        SelectValue:"Select Value",
        Add:"Add",

        // Calendar Screen
        SubscribeNow:"Subscribe Now",
        Subscribeevent:"Are you sure you want to subscribe this event?",
        Subscribe:"Subscribe",
        ScheduleEvents:"Schedule Events",

        // Change Password Screen
        CurrentPassword:"Current Password",
        Password:"Password",
        ConfirmPassword:"Confirm Password",
        UpdatePassword:"Update Password",

        // Contracts Screen
        SignContract:"Sign Contract",

        // CordinatorDetail Screen
        NewRoutine:"New Routine",
        Link:"Link",
        Go:"Go",
        Assistants:"Assistants",
        CheckEmail:"Check Email",

        //Profile Image Screen
        TakePhoto:"Take Photo..",
        ChooseImage:"Choose Image from Library..",

        // Forgot Password Screen
        forgotyourpassword:"forgot your password?",
        EnterUsername:"Enter Username",
        forgotpasswordmessage:"We send you a email successfully, please confirm the link.",
        SendConfirmation:"Send Confirmation",

        // Health Profile Screen
        HealthProfile:"Health Profile",
        
        // Login Screen
        LoginUsername:'Email / Username',
        LoginPassword:"Password",
        NewRegistration:"New Registration?",
        ForgotPassword:"Forgot Password?",
        Login:"Login",
        Facebok:"Facebok",
        Instagram:"Instagram",
        Cilckhere:"Cilck here",

        // Personal Detail Screen
        Commnets:'Commnets',
        Coordinatorname:"Coordinator name",

        // Signup Screen
        CreateanAccount:"Create an Account",
        FirstName:"First Name",
        LastName:"Last Name",
        Email:"Email",
        Register:"Register",
        AlreadyhavingAccount:"Already having Account?",
        SignIn:"Sign In",

        // Update Profile Screen
        Address:"Address",
        PhoneNumber:"Phone Number",
        Update:"Update",
    },
    ////////////////////////////////////////////////////////////////////////
    Spanish : {
        Home:'Home_SP',
        Calendar:'Calendar_SP',
        HealthParameters:'HealthParameters_SP',
        Payments:'Payments_SP',
        Contracts:'Contracts_SP',
        MyProfile:'My Profile_SP',
        Logout:'Log out_SP',
        LogoutQus:'Do you want to logout_SP?',
        Cancel:'Cancel_SP',
        Confirm:'Confirm_SP',
        LogoutTxt:'Logout_SP',
        Ok:'Ok_SP',
        Edit:'Edit_SP',

        // Home Screen
        Coordinator:"Coordinator_SP",
        Detail:"Detail_SP",
        Arrivetime:"Arrive time_SP",
        GetEvaluate:"Get Evaluate_SP",
        UpcomingEvents:"Upcoming Events_SP",
        Result:"Result_SP",
        LastEvents:"Last Events_SP",
        experiencewithus:"How was your experience with us_SP?",
        RateUs:"Please Rate Us_SP",
        Send:"Send_SP",
        Reset:"Reset_SP",

        //Add Health Profile Screen
        AddHealthProfile:"Add Health Profile_SP",
        SelectHealthParameter:"Select Health Parameter_SP",
        Value:"Value_SP",
        SelectValue:"Select Value_SP",
        Add:"Add_SP",

        // Calendar Screen
        SubscribeNow:"Subscribe Now_SP",
        Subscribeevent:"Are you sure you want to subscribe this event_SP?",
        Subscribe:"Subscribe_SP",
        ScheduleEvents:"Schedule Events_SP",

        // Change Password Screen
        CurrentPassword:"Current Password_SP",
        Password:"Password_SP",
        ConfirmPassword:"Confirm Password_SP",
        UpdatePassword:"Update Password_SP",

        // Contracts Screen
        SignContract:"Sign Contract_SP",

        // Cordinator and Customer Detail Screen
        NewRoutine:"New Routine_SP",
        Link:"Link_SP",
        Go:"Go_SP",
        Assistants:"Assistants_SP",
        CheckEmail:"Check Email_SP",

        //Profile Image Screen
        TakePhoto:"Take Photo.._SP",
        ChooseImage:"Choose Image from Library.._SP",

        // Forgot Password Screen
        forgotyourpassword:"forgot your password_SP?",
        EnterUsername:"Enter Username_SP",
        forgotpasswordmessage:"We send you a email successfully, please confirm the link_SP.",
        SendConfirmation:"Send Confirmation_SP",

        // Health Profile Screen
        HealthProfile:"Health Profile_SP",

        // Login Screen
        LoginUsername:'Email / Username_SP',
        LoginPassword:"Password_SP",
        NewRegistration:"New Registration_SP?",
        ForgotPassword:"Forgot Password_SP?",
        Login:"Login_SP",
        Facebok:"Facebok_SP",
        Instagram:"Instagram_SP",
        Cilckhere:"Cilck here_SP",

        // Personal Detail Screen
        Commnets:'Commnets_SP',
        Coordinatorname:"Coordinator name_SP",
        
        // Signup Screen
        CreateanAccount:"Create an Account_SP",
        FirstName:"First Name_SP",
        LastName:"Last Name_SP",
        Email:"Email_SP",
        Register:"Register_SP",
        AlreadyhavingAccount:"Already having Account_SP?",
        SignIn:"Sign In_SP",

        // Update Profile Screen
        Address:"Address_SP",
        PhoneNumber:"Phone Number_SP",
        Update:"Update_SP",
    }
}

export default AppResources;