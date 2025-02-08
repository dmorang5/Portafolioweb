class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitButton = this.form.querySelector('button[type="submit"]');
        this.confirmationMessage = document.getElementById('confirmationMessage');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) return;
        
        this.setLoading(true);
        
        // Simular envío
        setTimeout(() => {
            this.showConfirmation();
            this.form.reset();
            this.setLoading(false);
        }, 1000);
    }

    validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.length < 2) {
            alert('El nombre debe tener al menos 2 caracteres');
            return false;
        }

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert('Por favor, introduce un email válido');
            return false;
        }

        if (message.length < 10) {
            alert('El mensaje debe tener al menos 10 caracteres');
            return false;
        }

        return true;
    }

    setLoading(isLoading) {
        this.submitButton.disabled = isLoading;
        this.submitButton.textContent = isLoading ? 'Enviando...' : 'Enviar Mensaje';
    }

    showConfirmation() {
        this.confirmationMessage.classList.remove('hidden');
        setTimeout(() => {
            this.confirmationMessage.classList.add('hidden');
        }, 3000);
    }
}