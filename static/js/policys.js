document.addEventListener("DOMContentLoaded", function() {

    const privacyPolicyButton = document.querySelector('#privacy-policy');
    const termsConditionsButton = document.querySelector('#terms-conditions');
    const dataTreatmentButton = document.querySelector('#data-treatment');

    const contentPrivacyPolicy = document.querySelector('#popupPrivacyPolicy');
    const contentTermsConditions = document.querySelector('#popupTermsConditions');
    const contentDataTreatment = document.querySelector('#popupDataTreatment');

    const closeButtons = document.querySelectorAll('.close');

    privacyPolicyButton.addEventListener('click',()=> {
        contentPrivacyPolicy.showModal();
    });

    termsConditionsButton.addEventListener('click',()=> {
        contentTermsConditions.showModal();
    });

    dataTreatmentButton.addEventListener('click',()=> {
        contentDataTreatment.showModal();
    });

    // Cerrar desde la X
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const popup = event.target.closest('dialog');
            popup.close();
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === contentPrivacyPolicy) {
            contentPrivacyPolicy.close();
        }
        if (event.target === contentTermsConditions) {
            contentTermsConditions.close();
        }
        if (event.target === contentDataTreatment) {
            contentDataTreatment.close();
        }
    });

});
