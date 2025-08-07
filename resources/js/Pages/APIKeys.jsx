import { Heading } from '@/Components/heading'
import { Button } from '@/Components/button'
import DashboardLayout from '../Layouts/DashboardLayout'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid'
import { Code } from '@/components/text'
import { Badge } from '@/components/badge'

const keys = [
  {
    name: 'ogkit.dev',
    domains: 'ogkit.dev, *.ogkit.dev',
    signingEnabled: false,
  },
  {
    name: 'petersuhm.com',
    domains: 'petersuhm.com',
    signingEnabled: false,
  },
  {
    name: 'Reform form previews',
    domains: '*',
    signingEnabled: true,
  },
]

function KeyTable({ keys, className }) {
  return (
      <Table className={`[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)] ${className}`}>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Domains</TableHeader>
            <TableHeader>Signing</TableHeader>
            <TableHeader className="relative w-0">
              <span className="sr-only">Actions</span>
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {keys.map((key) => (
            <TableRow key={key.name}>
              <TableCell className="font-medium">{key.name}</TableCell>
              <TableCell><Code>{key.domains}</Code></TableCell>
              <TableCell><Badge color={key.signingEnabled ? 'green' : 'zinc'}>{key.signingEnabled ? 'Enabled' : 'Disabled'}</Badge></TableCell>
              <TableCell>
                <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                  <Dropdown>
                    <DropdownButton plain aria-label="More options">
                      <EllipsisHorizontalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom end">
                      <DropdownItem>Manage</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

const APIKeys = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full flex-wrap items-end justify-between gap-4 pb-6">
        <Heading>API keys</Heading>
        <Button>Create API Key</Button>
      </div>
      <KeyTable keys={keys} className="mt-10" />
    </DashboardLayout>
  )
}

export default APIKeys
