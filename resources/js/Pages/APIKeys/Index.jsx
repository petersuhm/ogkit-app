import { Heading } from '@/Components/heading'
import { Button } from '@/Components/button'
import DashboardLayout from '../../Layouts/DashboardLayout'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid'
import { ClipboardIcon } from '@heroicons/react/24/outline'
import { Code, Text } from '@/components/text'
import { Badge } from '@/components/badge'

const keys = [
  {
    name: 'ogkit.dev',
    key: 'SzaLDWvs',
    domains: 'ogkit.dev, *.ogkit.dev',
    signingEnabled: false,
  },
  {
    name: 'petersuhm.com',
    key: 'PrykZSGX',
    domains: 'petersuhm.com',
    signingEnabled: false,
  },
  {
    name: 'Reform form previews',
    key: 'ApUIF7ps',
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
            <TableHeader>Key</TableHeader>
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
              <TableCell>
                <div className="flex items-center gap-2 pt-2">
                  <Text>
                    <Code className="text-red-500">{key.key}</Code>
                  </Text>
                  <button className="text-zinc-500 hover:text-zinc-950 dark:hover:text-white">
                    <ClipboardIcon className="h-4 w-4" />
                  </button>
                </div>
              </TableCell>
              <TableCell><Code>{key.domains}</Code></TableCell>
              <TableCell><Badge color={key.signingEnabled ? 'green' : 'zinc'}>{key.signingEnabled ? 'Enabled' : 'Disabled'}</Badge></TableCell>
              <TableCell>
                <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                  <Dropdown>
                    <DropdownButton plain aria-label="More options">
                      <EllipsisHorizontalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom end">
                      <DropdownItem>Copy key</DropdownItem>
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

const Index = ({ createUrl }) => {
  return (
    <DashboardLayout>
      <div className="flex w-full flex-wrap items-end justify-between gap-4 pb-6">
        <Heading>API keys</Heading>
        <Button href={createUrl}>New API key</Button>
      </div>
      <KeyTable keys={keys} className="mt-10" />
    </DashboardLayout>
  )
}

export default Index
