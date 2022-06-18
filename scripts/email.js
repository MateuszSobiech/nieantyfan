const serviceId = 'service_8xy79ak';
const templateId = 'template_ong9mvx';

const template = {
    user_email: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
};

const sendEmail = () => {
    const submitBtn = document.querySelector('#contect-form-btn');

    submitBtn.disabled = true;

    emailjs.send(serviceId, templateId, template).then(
        function (response) {
            console.log('SUCCESS!', response.status, response.text);

            if (response.status === 200) {
                submitBtn.disabled = false;

                const toastEl = document.querySelector('.toast');
                const toast = new bootstrap.Toast(toastEl, { delay: 2500 });
                toast.show();
            }
        },
        function (error) {
            submitBtn.disabled = false;

            console.log('FAILED...', error);
            alert('Wystąpił błąd prosimy o ręczne przesłanie maila na adres: xxx@gmail.com');
        }
    );
};

export const setFormSubmitEvent = () => {
    document.querySelector('#contect-form').onsubmit = () => {
        sendEmail();
        return false;
    };
};
