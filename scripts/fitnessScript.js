const APPOINTMENTS_KEY="appointments";

getAppointmentsFromLocalStorage=()=>{
    let appointments=[];

    if(localStorage.getData(APPOINTMENTS_KEY)){
        appointments=JSON.parse(localStorage.getData(APPOINTMENTS_KEY));
    }
    return appointments;
}

addAppointmentFormsubmit=()=>{
    let appointments=getAppointmentsFromLocalStorage();

    let firstName=document.querySelector("#fnm");
    let lastName=document.querySelector("#lnm");
    let personAge=document.querySelector("#age");
    let personEmail=document.querySelector("#email");
    let personPhone=document.querySelector("#phone");
    let personAddress=document.querySelector("#street");
    let personCity=document.querySelector("#city");
    let personState=document.querySelector("#state");
    let personCountry=document.querySelector("#country");
    let pinCode=document.querySelector("#pin");
    let trainerPreference=document.querySelector("#tripref");
    let physictherapist=document.querySelector("#pt");
    let appointment=document.querySelector("#app");
    let package=document.querySelector("#pckg");
    let quoteInr=document.querySelector("#inr");
    let quotePaise=document.querySelector("#paise");

    let appointment={
        fName:firstNameTextBox.value,
        lName:lastNameTextBox.value,
        age:parseInt(personAge.value),
        email:personEmailTextBox.value,
        phone:personPhoneTextBox.value,
        streetAddress:personAddressTextBox.value,
        city:personCityTextBox.value,
        state:personStateTextBox.value,
        country:personCountryTextBox.value,
        pin:pinCodeTextBox.value,
        trainerPreference:trainerPreferenceRadioButton.value,
        therapist:physictherapistRadioButton.value,
        appointmentslot:appointmentTextBox.value,
        package:suitablePackagerRadioButton.value,
        inr:quoteInrTextBox.value,
        paise:quotePaise.value
    };

    appointments.push(appointment);
    localStorage.setData(APPOINTMENTS_KEY,JSON.stringify(appointments));
}

loadAppointments=()=>{
    let appointments=getAppointmentFromLocalStorage();

    let tableBody=document.querySelector("#appData");

    for(appointment of appointments){
        let appRow=createAppointmentRow(appointment);
        tableBody.append(appRow);
    }
}

createAppointmentRow=(appointment)=>{
    let nameCol=document.createElement("td");
    nameCol.textContent=appointment.fName;

    let addressCol=document.createElement("td");
    addressCol.textContent=appointment.streetAddress;

    let cityCol=document.createElement("td");
    cityCol.textContent=appointment.city;

    let packageCol=document.createEelement("td");
    packageCol.textContent=appointment.package;

    let trainerPreferenceCol=document.createElement("td");
    trainerPreferencefCol.textContent=appointment.trainerPreference;

    let phoneCol=document.createElement("td");
    phoneCol.textContent=appointment.phone;

    let appRow=document.createElement("tr");
    appRow.append(nameCol);
    appRow.append(addressCol);
    appRow.append(cityCol);
    appRow.append(packageCol);
    appRow.append(trainerPreferenceCol);
    appRow.append(phoneCol);

    return appRow;

}
function funct(reason){
    document.getElementById("result").value=reason;
document.getElementById("paise").value=00;
}