<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class RegisterControllerTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function user_can_register_with_valid_data(): void
    {
        $userData = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'terms' => true,
        ];

        $response = $this->post('/register', $userData);

        $response->assertRedirect('/dashboard');
        
        $this->assertDatabaseHas('users', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
        ]);

        $user = User::where('email', 'john@example.com')->first();
        $this->assertTrue(Hash::check('password123', $user->password));
        $this->assertAuthenticatedAs($user);
    }

    #[Test]
    public function user_cannot_register_with_invalid_email(): void
    {
        $userData = [
            'name' => 'John Doe',
            'email' => 'invalid-email',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ];

        $response = $this->post('/register', $userData);

        $response->assertSessionHasErrors(['email']);
        $this->assertDatabaseMissing('users', ['name' => 'John Doe']);
        $this->assertGuest();
    }

    #[Test]
    public function user_cannot_register_with_existing_email(): void
    {
        User::factory()->create(['email' => 'existing@example.com']);

        $userData = [
            'name' => 'John Doe',
            'email' => 'existing@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ];

        $response = $this->post('/register', $userData);

        $response->assertSessionHasErrors(['email']);
        $this->assertGuest();
    }

    #[Test]
    public function user_cannot_register_with_mismatched_passwords(): void
    {
        $userData = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'password_confirmation' => 'different_password',
        ];

        $response = $this->post('/register', $userData);

        $response->assertSessionHasErrors(['password']);
        $this->assertDatabaseMissing('users', ['email' => 'john@example.com']);
        $this->assertGuest();
    }

    #[Test]
    public function user_cannot_register_without_required_fields(): void
    {
        $response = $this->post('/register', []);

        $response->assertSessionHasErrors(['name', 'email', 'password', 'terms']);
        $this->assertGuest();
    }

    #[Test]
    public function user_cannot_register_without_accepting_terms(): void
    {
        $userData = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'terms' => false,
        ];

        $response = $this->post('/register', $userData);

        $response->assertSessionHasErrors(['terms']);
        $response->assertSessionHasErrorsIn('default', [
            'terms' => 'You must accept the terms of service and privacy policy to register.'
        ]);
        $this->assertDatabaseMissing('users', ['email' => 'john@example.com']);
        $this->assertGuest();
    }

    #[Test]
    public function user_cannot_register_without_terms_field(): void
    {
        $userData = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            // terms field missing entirely
        ];

        $response = $this->post('/register', $userData);

        $response->assertSessionHasErrors(['terms']);
        $response->assertSessionHasErrorsIn('default', [
            'terms' => 'You must accept the terms of service and privacy policy to register.'
        ]);
        $this->assertDatabaseMissing('users', ['email' => 'john@example.com']);
        $this->assertGuest();
    }

    #[Test]
    public function user_can_register_when_accepting_terms(): void
    {
        $userData = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'terms' => true,
        ];

        $response = $this->post('/register', $userData);

        $response->assertRedirect('/dashboard');
        
        $this->assertDatabaseHas('users', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
        ]);

        $user = User::where('email', 'john@example.com')->first();
        $this->assertTrue(Hash::check('password123', $user->password));
        $this->assertAuthenticatedAs($user);
    }
}
