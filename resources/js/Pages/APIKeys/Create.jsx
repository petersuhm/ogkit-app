import DashboardLayout from '../../Layouts/DashboardLayout'
import { Button } from '@/components/button'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Divider } from '@/components/divider'
import { Label } from '@/components/fieldset'
import { Heading, Subheading } from '@/components/heading'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Code, Text } from '@/components/text'
import { Textarea } from '@/components/textarea'

const Create = ({ indexUrl }) => {
  return (
    <DashboardLayout>
      <form method="post" className="mx-auto max-w-4xl">
        <Heading>Create a new API key</Heading>
        <Divider className="my-10 mt-6" />
  
        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <Subheading>Name</Subheading>
            <Text>Something to help you identify the API key.</Text>
          </div>
          <div>
            <Input aria-label="API key name" name="name" placeholder="Marketing site" />
          </div>
        </section>
  
        <Divider className="my-10" soft />
  
        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <Subheading>Domain allowlist</Subheading>
            <Text>Comma-separated list of domains to allow. Use <Code>*</Code> as a wildcard.</Text>
          </div>
          <div>
            <Textarea aria-label="Domain allowlist" name="domains" placeholder="example.com,*.example.com" />
          </div>
        </section>
  
        <Divider className="my-10" soft />
  
        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <Subheading>URL signing</Subheading>
            <Text>Signing your ogkit URLs prevents others from tampering with them, but isn't needed if you limit your keys to certain domains.</Text>
          </div>
          <div>
            <CheckboxField>
              <Checkbox name="signing_enabled" />
              <Label>Require URL signing</Label>
            </CheckboxField>
          </div>
        </section>
  
        <Divider className="my-10" soft />
  
        <div className="flex justify-end gap-4">
          <Button plain href={indexUrl}>
            Cancel
          </Button>
          <Button type="submit">Create key</Button>
        </div>
      </form>
    </DashboardLayout>
  )
}

export default Create
