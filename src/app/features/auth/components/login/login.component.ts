import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { email, Field, form, required, submit } from '@angular/forms/signals';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [Field],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

    constructor(private router: Router) {}

    loginModel = signal<LoginData>({
        email: 'prabuk@example.com',
        password: 'test1234',
        rememberMe: false,
    });

    loginForm = form(this.loginModel, (fieldPath) => {
        required(fieldPath.email, { message: 'Email is required' });
        required(fieldPath.password, { message: 'Password is required' });
        email(fieldPath.email, { message: 'Invalid email format' });

    });

    onSubmit(event: Event) {
        event.preventDefault();
        submit(this.loginForm, async () => {
            const credentials = this.loginModel();
            console.log('Login submitted with credentials:', credentials);

            if(credentials.email !== '' && credentials.password !== '') {
                this.router.navigate(['/chat/box']);
            }

        })
    }

}

interface LoginData {
    email: string;
    password: string;
    rememberMe: boolean;
}
