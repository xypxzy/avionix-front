'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/src/components/ui/badge'

import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import { labels, statuses, usersLabels, usersStatuses } from './data/data'
import { Account, Comment, Contact, Task } from './data/schema'

export const taskColumns: ColumnDef<Task>[] = [
	{
		accessorKey: 'id',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Task' />
		),
		cell: ({ row }) => <div className='w-[120px]'>{row.getValue('id')}</div>,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'title',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Title' />
		),
		cell: ({ row }) => {
			const label = labels.find(label => label.value === row.original.label)

			return (
				<div className='flex space-x-2'>
					{label && <Badge variant='outline'>{label.label}</Badge>}
					<span className='max-w-[600px] truncate font-medium'>
						{row.getValue('title')}
					</span>
				</div>
			)
		},
	},
	{
		accessorKey: 'status',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Status' />
		),
		cell: ({ row }) => {
			const status = statuses.find(
				status => status.value === row.getValue('status')
			)

			if (!status) {
				return null
			}

			return (
				<div className='flex w-[150px] items-center'>
					{status.icon && (
						<status.icon className='mr-2 size-4 text-muted-foreground' />
					)}
					<span>{status.label}</span>
				</div>
			)
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id))
		},
	},
	{
		id: 'actions',
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
]

export const accountColumns: ColumnDef<Account>[] = [
	{
		accessorKey: 'id',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='ID' />
		),
		cell: ({ row }) => <div className='w-[200px]'>{row.getValue('id')}</div>,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'author',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Users' />
		),
		cell: ({ row }) => {
			const label = usersLabels.find(
				label => label.value === row.original.roles[0].toLowerCase()
			)

			return (
				<div className='flex space-x-2'>
					{label && <Badge variant='outline'>{label.label}</Badge>}
					<span className='w-[350px] truncate font-medium'>
						{row.original.email}
					</span>
				</div>
			)
		},
	},
	{
		accessorKey: 'phone',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Phone number' />
		),
		cell: ({ row }) => {
			return (
				<div className='flex space-x-2'>
					<span className='w-[200px] truncate font-medium'>
						{row.original.phone}
					</span>
				</div>
			)
		},
	},
	{
		accessorKey: 'nonLocked',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Status' />
		),
		cell: ({ row }) => {
			const status = row.getValue('nonLocked')
				? usersStatuses[1]
				: usersStatuses[2]

			if (!status) {
				return null
			}

			return (
				<div className='flex w-[150px] items-center'>
					{status.icon && (
						<status.icon className='mr-2 size-4 text-muted-foreground' />
					)}
					<span>{status.label}</span>
				</div>
			)
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id))
		},
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			return (
				<DataTableRowActions
					row={row}
					id={row.original.id}
					isEnabled={row.original.nonLocked}
				/>
			)
		},
	},
]

export const commentColumns: ColumnDef<Comment>[] = [
	{
		accessorKey: 'id',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='ID' />
		),
		cell: ({ row }) => <div className='w-[200px]'>{row.getValue('id')}</div>,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'author',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Author' />
		),
		cell: ({ row }) => {
			return (
				<div className='flex space-x-2'>
					<span className='w-[100px] truncate font-medium'>
						{row.original.author}
					</span>
				</div>
			)
		},
	},
	{
		accessorKey: 'description',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Description' />
		),
		cell: ({ row }) => {
			return (
				<div className='flex space-x-2'>
					<span className='w-[500px] truncate font-medium'>
						{row.original.description}
					</span>
				</div>
			)
		},
	},
	{
		accessorKey: 'grade',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Grade' />
		),
		cell: ({ row }) => {
			return (
				<div className='flex w-[50px] items-center justify-center'>
					<span>{row.original.grade}</span>
				</div>
			)
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id))
		},
	},
	{
		accessorKey: 'createdAt',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Created at' />
		),
		cell: ({ row }) => {
			return (
				<div className='flex w-[150px] items-center'>
					<span>{row.original.createdAt}</span>
				</div>
			)
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id))
		},
	},
]

export const contactColumns: ColumnDef<Contact>[] = [
	{
		accessorKey: 'id',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='ID' />
		),
		cell: ({ row }) => <div className='w-[200px]'>{row.getValue('id')}</div>,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'email',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Email' />
		),
		cell: ({ row }) => {
			return (
				<div className='flex space-x-2'>
					<span className='w-[190px] truncate font-medium'>
						{row.original.email}
					</span>
				</div>
			)
		},
	},
	{
		accessorKey: 'name',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Name' />
		),
		cell: ({ row }) => {
			return (
				<div className='flex space-x-2'>
					<span className='w-[150px] truncate font-medium'>
						{row.original.name}
					</span>
				</div>
			)
		},
	},
	{
		accessorKey: 'message',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Message' />
		),
		cell: ({ row }) => {
			return (
				<div className='flex w-[350px] items-center'>
					<span>{row.original.message}</span>
				</div>
			)
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id))
		},
	},
	{
		accessorKey: 'createdAt',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Created at' />
		),
		cell: ({ row }) => {
			return (
				<div className='flex w-[150px] items-center'>
					<span>{row.original.createdAt}</span>
				</div>
			)
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id))
		},
	},
]
