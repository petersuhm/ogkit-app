import { AuthLayout } from '@/Components/auth-layout'
import { Button } from '@/Components/button'
import { Checkbox, CheckboxField } from '@/Components/checkbox'
import { ErrorMessage, Field, Label } from '@/Components/fieldset'
import { Heading } from '@/Components/heading'
import { Input } from '@/Components/input'
import { Strong, Text, TextLink } from '@/Components/text'
import { Logo } from '@/Components/logo'
import { Link, useForm } from '@inertiajs/react'

const Register = () => {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
  })

  const submit = (e) => {
    e.preventDefault()
    post('/register')
  }

  return (
    <AuthLayout>
      <form onSubmit={submit} className="grid w-full max-w-sm grid-cols-1 gap-8">
        <Link href="/home">
          <Logo className="h-8 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]" />
        </Link>
        <Heading>Create your account</Heading>
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
          <Label>Full name</Label>
          <Input 
            name="name" 
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            invalid={!!errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </Field>
        <Field>
          <Label>Password</Label>
          <Input 
            type="password" 
            name="password" 
            autoComplete="new-password"
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            invalid={!!errors.password}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </Field>
        <Field>
          <Label>Confirm Password</Label>
          <Input 
            type="password" 
            name="password_confirmation" 
            autoComplete="new-password"
            value={data.password_confirmation}
            onChange={(e) => setData('password_confirmation', e.target.value)}
            invalid={!!errors.password_confirmation}
          />
          {errors.password_confirmation && <ErrorMessage>{errors.password_confirmation}</ErrorMessage>}
        </Field>
        <CheckboxField>
          <Checkbox 
            name="terms" 
            checked={data.terms}
            onChange={(e) => setData('terms', e.target.checked)}
          />
          <Label>I agree to the <TextLink href="/terms">terms of service</TextLink> and <TextLink href="/privacy">privacy policy</TextLink>.</Label>
          {errors.terms && <ErrorMessage className="col-start-2">{errors.terms}</ErrorMessage>}
        </CheckboxField>
        <Button type="submit" className="w-full" disabled={processing}>
          {processing ? 'Creating account...' : 'Create account'}
        </Button>
        <Text>
          Already have an account?{' '}
          <TextLink href="/login">
            <Strong>Sign in</Strong>
          </TextLink>
        </Text>
      </form>
    </AuthLayout>
  )
}

export default Register
