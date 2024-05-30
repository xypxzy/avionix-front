import { ApexOptions } from 'apexcharts'
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const options: ApexOptions = {
	colors: ['#3C50E0', '#80CAEE'],
	chart: {
		fontFamily: 'Satoshi, sans-serif',
		type: 'bar',
		height: 335,
		stacked: true,
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
	},

	responsive: [
		{
			breakpoint: 1536,
			options: {
				plotOptions: {
					bar: {
						borderRadius: 0,
						columnWidth: '25%',
					},
				},
			},
		},
	],
	plotOptions: {
		bar: {
			horizontal: false,
			borderRadius: 0,
			columnWidth: '25%',
			borderRadiusApplication: 'end',
			borderRadiusWhenStacked: 'last',
		},
	},
	dataLabels: {
		enabled: false,
	},

	xaxis: {
		categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
	},
	legend: {
		position: 'top',
		horizontalAlign: 'left',
		fontFamily: 'Satoshi',
		fontWeight: 500,
		fontSize: '14px',

		markers: {
			radius: 99,
		},
	},
	fill: {
		opacity: 1,
	},
}

interface ChartTwoState {
	series: {
		name: string
		data: number[]
	}[]
}

const ChartTwo: React.FC<{ totalUser?: number }> = ({ totalUser = 0 }) => {
	const [state] = useState<ChartTwoState>({
		series: [
			{
				name: 'Sales',
				data: [44, 55, 41, 67, 22, 43, 65],
			},
			{
				name: 'Revenue',
				data: [13, 23, 20, 8, 13, 27, 15],
			},
		],
	})

	return (
		<div className='col-span-12 rounded-sm border border-stroke bg-white p-8 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4'>
			<div className='mb-4 justify-between gap-4 sm:flex'>
				<div className='flex w-full items-center justify-between'>
					<h4 className='text-lg font-semibold text-black dark:text-white'>
						Profit this week
					</h4>
					<div className='text-meta-3'>+ {totalUser} new user</div>
				</div>
			</div>

			<div>
				<div id='chartTwo' className='-ml-5 -mb-9'>
					<ReactApexChart
						options={options}
						series={state.series}
						type='bar'
						height={450}
					/>
				</div>
			</div>
		</div>
	)
}

export default ChartTwo
