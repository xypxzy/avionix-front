import {
	CheckCircledIcon,
	CircleIcon,
	CrossCircledIcon,
	QuestionMarkCircledIcon,
	StopwatchIcon,
} from '@radix-ui/react-icons'

export const labels = [
	{
		value: 'bug',
		label: 'Bug',
	},
	{
		value: 'feature',
		label: 'Feature',
	},
	{
		value: 'documentation',
		label: 'Documentation',
	},
]

export const statuses = [
	{
		value: 'backlog',
		label: 'Backlog',
		icon: QuestionMarkCircledIcon,
	},
	{
		value: 'todo',
		label: 'Todo',
		icon: CircleIcon,
	},
	{
		value: 'in progress',
		label: 'In Progress',
		icon: StopwatchIcon,
	},
	{
		value: 'done',
		label: 'Done',
		icon: CheckCircledIcon,
	},
	{
		value: 'canceled',
		label: 'Canceled',
		icon: CrossCircledIcon,
	},
]

export const usersLabels = [
	{
		value: 'owner',
		label: 'Owner',
	},
	{
		value: 'client',
		label: 'Client',
	},
	{
		value: 'admin',
		label: 'Admin',
	},
]

export const usersStatuses = [
	{
		value: 'pending',
		label: 'Pending',
		icon: QuestionMarkCircledIcon,
	},
	{
		value: 'approved',
		label: 'Approved',
		icon: CheckCircledIcon,
	},
	{
		value: 'canceled',
		label: 'Blocked',
		icon: CrossCircledIcon,
	},
]
