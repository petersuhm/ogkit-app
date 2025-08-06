import { AuthLayout } from '@/Components/auth-layout'
import { Button } from '@/Components/button'
import { Checkbox, CheckboxField } from '@/Components/checkbox'
import { ErrorMessage, Field, Label } from '@/Components/fieldset'
import { Heading } from '@/Components/heading'
import { Input } from '@/Components/input'
import { Strong, Text, TextLink } from '@/Components/text'
import { Logo } from '@/Components/logo'
import { Link, useForm } from '@inertiajs/react'

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/login')
  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="grid w-full max-w-sm grid-cols-1 gap-8">
        <Link href="/home">
          <Logo className="h-8 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]" />
        </Link>
        <Heading>Sign in to your account</Heading>
        <Field>
          <Label>Email</Label>
          <Input 
            type="email" 
            name="email" 
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            invalid={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </Field>
        <Field>
          <Label>Password</Label>
          <Input 
            type="password" 
            name="password" 
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            invalid={!!errors.password}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </Field>
        <div className="flex items-center justify-between">
          <CheckboxField>
            <Checkbox 
              name="remember" 
              checked={data.remember}
              onChange={(checked) => setData('remember', checked)}
            />
            <Label>Remember me</Label>
          </CheckboxField>
          <Text>
            <TextLink href="#">
              <Strong>Forgot password?</Strong>
            </TextLink>
          </Text>
        </div>
        <Button type="submit" className="w-full" disabled={processing}>
          {processing ? 'Signing in...' : 'Login'}
        </Button>
        <Text>
          Don’t have an account?{' '}
          <TextLink href="/register">
            <Strong>Sign up</Strong>
          </TextLink>
        </Text>
      </form>
    </AuthLayout>
  )
}

export default Login;
